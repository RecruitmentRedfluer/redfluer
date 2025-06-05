import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { supabase } from '../lib/supabase';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  message: string;
}

const Register: React.FC = () => {
  const [formValues, setFormValues] = React.useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formValues.name,
            email: formValues.email,
            phone: formValues.phone || null,
            message: `Registration for ${formValues.role} role with ${formValues.experience} experience. Additional message: ${formValues.message}`
          }
        ]);
      
      if (error) throw error;
      
      setSubmitMessage({
        type: 'success',
        text: 'Your registration has been submitted successfully! Our team will review your details and contact you soon.'
      });
      
      // Reset form
      setFormValues({
        name: '',
        email: '',
        phone: '',
        role: '',
        experience: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting registration:', error);
      setSubmitMessage({
        type: 'error',
        text: 'There was an error processing your registration. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        if (submitMessage?.type === 'success') {
          setSubmitMessage(null);
        }
      }, 5000);
    }
  };

  return (
    <Layout pageTitle="Register with RedFluer Recruitment">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                Join Our Healthcare Professional Network
              </h2>
              <p className="text-gray-600">
                Complete the form below to register with RedFluer Recruitment. Once registered, our team will review your information and contact you to discuss suitable opportunities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              {submitMessage && (
                <div 
                  className={`p-4 rounded-md mb-6 ${
                    submitMessage.type === 'success' ? 'bg-success-100 text-success-800' : 'bg-error-100 text-error-800'
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formValues.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formValues.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formValues.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select a role</option>
                    <option value="nurse">Nurse</option>
                    <option value="carer">Carer</option>
                    <option value="healthcare-assistant">Healthcare Assistant</option>
                    <option value="doctor">Doctor</option>
                    <option value="admin">Administrative</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formValues.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select experience</option>
                    <option value="less-than-1">Less than 1 year</option>
                    <option value="1-2">1-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="more-than-10">More than 10 years</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formValues.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Tell us about your qualifications, availability, preferred locations, etc."
                  ></textarea>
                </div>
                
                <div className="mt-2">
                  <p className="text-sm text-gray-500 mb-4">
                    Note: CV upload functionality will be coming soon. For now, please include your key qualifications and experience in the additional information field.
                  </p>
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  fullWidth
                >
                  {isSubmitting ? 'Submitting...' : 'Complete Registration'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;