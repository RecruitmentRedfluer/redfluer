import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import Button from './Button';

interface JobApplicationProps {
  jobId: string;
  jobTitle: string;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
}

const JobApplication: React.FC<JobApplicationProps> = ({ jobId, jobTitle }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        .from('job_applications')
        .insert([
          {
            job_id: jobId,
            name: formValues.name,
            email: formValues.email,
            phone: formValues.phone || null,
            cover_letter: formValues.coverLetter
          }
        ]);
      
      if (error) throw error;
      
      setSubmitMessage({
        type: 'success',
        text: 'Your application has been submitted successfully! We will review it and get back to you soon.'
      });
      
      // Reset form
      setFormValues({
        name: '',
        email: '',
        phone: '',
        coverLetter: ''
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
      <h2 className="text-xl font-semibold text-primary-900 mb-4">Apply for: {jobTitle}</h2>
      
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
          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
            Cover Letter *
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows={5}
            required
            value={formValues.coverLetter}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            placeholder="Tell us why you're interested in this position and what makes you a great fit..."
          ></textarea>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CV/Resume (Coming soon)
          </label>
          <p className="text-sm text-gray-500 mb-2">
            File upload functionality will be available soon. For now, please mention your experience in the cover letter.
          </p>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isSubmitting}
          fullWidth
        >
          {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
        </Button>
      </form>
    </div>
  );
};

export default JobApplication;