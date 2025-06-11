import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import Button from './Button';
import FileUpload from './FileUpload';

interface CareerPathApplicationProps {
  pathId: string;
  pathTitle: string;
  currentRole: string;
  targetRole: string;
  salaryIncrease: string;
  timeToComplete: string;
  requiredSkills: string[];
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  currentPosition: string;
  experience: string;
  currentSkills: string;
  careerGoals: string;
  timeCommitment: string;
  preferredStartDate: string;
  message: string;
  documentsFile: File | null;
}

const CareerPathApplication: React.FC<CareerPathApplicationProps> = ({ 
  pathId, 
  pathTitle, 
  currentRole, 
  targetRole, 
  salaryIncrease, 
  timeToComplete, 
  requiredSkills 
}) => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    currentPosition: '',
    experience: '',
    currentSkills: '',
    careerGoals: '',
    timeCommitment: '',
    preferredStartDate: '',
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
      const filePath = `career-path-applications/${fileName}`;

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
        .from('career_path_applications')
        .insert([
          {
            career_path_id: pathId,
            name: formValues.name,
            email: formValues.email,
            phone: formValues.phone || null,
            current_position: formValues.currentPosition,
            experience: formValues.experience,
            current_skills: formValues.currentSkills,
            career_goals: formValues.careerGoals,
            time_commitment: formValues.timeCommitment,
            preferred_start_date: formValues.preferredStartDate,
            message: formValues.message || null,
            documents_url: documentsUrl
          }
        ]);
      
      if (error) throw error;
      
      setSubmitMessage({
        type: 'success',
        text: 'Your career path application has been submitted successfully! Our career advisors will review it and contact you to discuss your personalised development plan.'
      });
      
      // Reset form
      setFormValues({
        name: '',
        email: '',
        phone: '',
        currentPosition: '',
        experience: '',
        currentSkills: '',
        careerGoals: '',
        timeCommitment: '',
        preferredStartDate: '',
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
        Apply for Career Path: {pathTitle}
      </h2>
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-700">From:</span>
            <p className="text-gray-600">{currentRole}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">To:</span>
            <p className="text-gray-600">{targetRole}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Salary Increase:</span>
            <p className="text-success-600 font-medium">{salaryIncrease}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Duration:</span>
            <p className="text-gray-600">{timeToComplete}</p>
          </div>
        </div>
        <div className="mt-4">
          <span className="font-medium text-gray-700">Required Skills:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {requiredSkills.map((skill, index) => (
              <span key={index} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
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
          <label htmlFor="currentPosition" className="block text-sm font-medium text-gray-700 mb-1">
            Current Position *
          </label>
          <input
            type="text"
            id="currentPosition"
            name="currentPosition"
            required
            value={formValues.currentPosition}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            placeholder="Your current job title and employer"
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
            placeholder="Describe your relevant work experience, including years in healthcare and specific roles..."
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="currentSkills" className="block text-sm font-medium text-gray-700 mb-1">
            Current Skills & Qualifications *
          </label>
          <textarea
            id="currentSkills"
            name="currentSkills"
            rows={3}
            required
            value={formValues.currentSkills}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            placeholder="List your current qualifications, certifications, and key skills..."
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="careerGoals" className="block text-sm font-medium text-gray-700 mb-1">
            Career Goals & Motivation *
          </label>
          <textarea
            id="careerGoals"
            name="careerGoals"
            rows={3}
            required
            value={formValues.careerGoals}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            placeholder="Explain your career goals and why you want to pursue this advancement path..."
          ></textarea>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="timeCommitment" className="block text-sm font-medium text-gray-700 mb-1">
              Time Commitment *
            </label>
            <select
              id="timeCommitment"
              name="timeCommitment"
              required
              value={formValues.timeCommitment}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select time commitment</option>
              <option value="part-time">Part-time (evenings/weekends)</option>
              <option value="full-time">Full-time commitment</option>
              <option value="flexible">Flexible schedule</option>
              <option value="intensive">Intensive blocks</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="preferredStartDate" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Start Date *
            </label>
            <select
              id="preferredStartDate"
              name="preferredStartDate"
              required
              value={formValues.preferredStartDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select start date</option>
              <option value="immediate">Immediately</option>
              <option value="1-month">Within 1 month</option>
              <option value="3-months">Within 3 months</option>
              <option value="6-months">Within 6 months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>
        
        <div>
          <FileUpload
            onFileSelect={handleFileSelect}
            currentFile={formValues.documentsFile}
            label="Supporting Documents (CV, Certificates, Portfolio, etc.)"
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
            placeholder="Any additional information, questions, or specific requirements..."
          ></textarea>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isSubmitting}
          fullWidth
        >
          {isSubmitting ? 'Submitting Application...' : 'Apply for Career Path'}
        </Button>
      </form>
    </div>
  );
};

export default CareerPathApplication;