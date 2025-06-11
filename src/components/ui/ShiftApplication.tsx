import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import Button from './Button';

interface ShiftApplicationProps {
  shiftId: string;
  shiftTitle: string;
  facilityName: string;
  hourlyRate: number;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  availability: string;
  experience: string;
  qualifications: string;
  message: string;
}

const ShiftApplication: React.FC<ShiftApplicationProps> = ({ 
  shiftId, 
  shiftTitle, 
  facilityName, 
  hourlyRate 
}) => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    availability: '',
    experience: '',
    qualifications: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

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
        .from('shift_applications')
        .insert([
          {
            shift_id: shiftId,
            name: formValues.name,
            email: formValues.email,
            phone: formValues.phone || null,
            availability: formValues.availability,
            experience: formValues.experience,
            qualifications: formValues.qualifications,
            message: formValues.message || null
          }
        ]);
      
      if (error) throw error;
      
      setSubmitMessage({
        type: 'success',
        text: 'Your shift application has been submitted successfully! We will review it and contact you soon.'
      });
      
      // Reset form
      setFormValues({
        name: '',
        email: '',
        phone: '',
        availability: '',
        experience: '',
        qualifications: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitMessage({
        type: 'error',
        text: 'There was an error submitting your application. Please try again later.'
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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-primary-900 mb-4">
        Apply for Shift: {shiftTitle}
      </h2>
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-700">Facility:</span>
            <p className="text-gray-600">{facilityName}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Rate:</span>
            <p className="text-gray-600">£{hourlyRate}/hour</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Shift ID:</span>
            <p className="text-gray-600">{shiftId.slice(0, 8)}</p>
          </div>
        </div>
      </div>
      
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formValues.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        
        <div>
          <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
            Availability *
          </label>
          <select
            id="availability"
            name="availability"
            required
            value={formValues.availability}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select your availability</option>
            <option value="immediate">Available immediately</option>
            <option value="1-week">Available within 1 week</option>
            <option value="2-weeks">Available within 2 weeks</option>
            <option value="flexible">Flexible start date</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
            Relevant Experience *
          </label>
          <textarea
            id="experience"
            name="experience"
            rows={3}
            required
            value={formValues.experience}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            placeholder="Describe your relevant experience for this type of shift..."
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700 mb-1">
            Qualifications & Certifications *
          </label>
          <textarea
            id="qualifications"
            name="qualifications"
            rows={3}
            required
            value={formValues.qualifications}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            placeholder="List your relevant qualifications, certifications, and training..."
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formValues.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            placeholder="Any additional information you'd like to share..."
          ></textarea>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isSubmitting}
          fullWidth
        >
          {isSubmitting ? 'Submitting Application...' : 'Apply for This Shift'}
        </Button>
      </form>
    </div>
  );
};

export default ShiftApplication;