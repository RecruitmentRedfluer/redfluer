import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import Button from './Button';
import FileUpload from './FileUpload';

interface SkillApplicationProps {
  skillId: string;
  skillName: string;
  category: string;
  duration?: string;
  provider?: string;
  earnsPremium: boolean;
  premiumRate?: string;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  currentRole: string;
  experience: string;
  motivation: string;
  preferredSchedule: string;
  message: string;
  documentsFile: File | null;
}

const SkillApplication: React.FC<SkillApplicationProps> = ({ 
  skillId, 
  skillName, 
  category, 
  duration, 
  provider, 
  earnsPremium, 
  premiumRate 
}) => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    currentRole: '',
    experience: '',
    motivation: '',
    preferredSchedule: '',
    message: '',
    documentsFile: null,
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

  const handleFileSelect = (file: File | null) => {
    setFormValues(prev => ({
      ...prev,
      documentsFile: file
    }));
  };

  const uploadFile = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `skill-applications/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(filePath, file);

      if (uploadError) {
        console.error('File upload error:', uploadError);
        return null;
      }

      return filePath;
    } catch (error) {
      console.error('Error uploading file:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      let documentsUrl = null;
      
      // Upload documents file if provided
      if (formValues.documentsFile) {
        documentsUrl = await uploadFile(formValues.documentsFile);
        if (!documentsUrl) {
          throw new Error('Failed to upload documents. Please try again.');
        }
      }

      const { error } = await supabase
        .from('skill_applications')
        .insert([
          {
            skill_id: skillId,
            name: formValues.name,
            email: formValues.email,
            phone: formValues.phone || null,
            current_role: formValues.currentRole,
            experience: formValues.experience,
            motivation: formValues.motivation,
            preferred_schedule: formValues.preferredSchedule,
            message: formValues.message || null,
            documents_url: documentsUrl
          }
        ]);
      
      if (error) throw error;
      
      setSubmitMessage({
        type: 'success',
        text: 'Your skill training application has been submitted successfully! We will review it and contact you with next steps.'
      });
      
      // Reset form
      setFormValues({
        name: '',
        email: '',
        phone: '',
        currentRole: '',
        experience: '',
        motivation: '',
        preferredSchedule: '',
        message: '',
        documentsFile: null
      });
    } catch (error: any) {
      console.error('Error submitting application:', error);
      setSubmitMessage({
        type: 'error',
        text: error.message || 'There was an error submitting your application. Please try again later.'
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
        Apply for Training: {skillName}
      </h2>
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-700">Category:</span>
            <p className="text-gray-600">{category}</p>
          </div>
          {duration && (
            <div>
              <span className="font-medium text-gray-700">Duration:</span>
              <p className="text-gray-600">{duration}</p>
            </div>
          )}
          {provider && (
            <div>
              <span className="font-medium text-gray-700">Provider:</span>
              <p className="text-gray-600">{provider}</p>
            </div>
          )}
          {earnsPremium && (
            <div>
              <span className="font-medium text-gray-700">Premium Earning:</span>
              <p className="text-success-600 font-medium">{premiumRate || 'Yes'}</p>
            </div>
          )}
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
      
      <form onSubmit={handleSubmit} className="space-y-6">
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
          <label htmlFor="currentRole" className="block text-sm font-medium text-gray-700 mb-1">
            Current Role *
          </label>
          <input
            type="text"
            id="currentRole"
            name="currentRole"
            required
            value={formValues.currentRole}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            placeholder="e.g., Healthcare Assistant, Support Worker, etc."
          />
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
            placeholder="Describe your relevant experience in healthcare or related fields..."
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
            Why do you want this training? *
          </label>
          <textarea
            id="motivation"
            name="motivation"
            rows={3}
            required
            value={formValues.motivation}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            placeholder="Explain your motivation for pursuing this skill and how it fits your career goals..."
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="preferredSchedule" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Training Schedule *
          </label>
          <select
            id="preferredSchedule"
            name="preferredSchedule"
            required
            value={formValues.preferredSchedule}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select preferred schedule</option>
            <option value="weekdays">Weekdays</option>
            <option value="weekends">Weekends</option>
            <option value="evenings">Evenings</option>
            <option value="flexible">Flexible</option>
            <option value="intensive">Intensive (consecutive days)</option>
          </select>
        </div>
        
        <div>
          <FileUpload
            onFileSelect={handleFileSelect}
            currentFile={formValues.documentsFile}
            label="Supporting Documents (CV, Certificates, etc.)"
            acceptedTypes=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt,.rtf"
            maxSizeMB={10}
            required={false}
          />
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
            placeholder="Any additional information, questions, or special requirements..."
          ></textarea>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isSubmitting}
          fullWidth
        >
          {isSubmitting ? 'Submitting Application...' : 'Apply for Training'}
        </Button>
      </form>
    </div>
  );
};

export default SkillApplication;