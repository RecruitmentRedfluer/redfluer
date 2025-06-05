import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { MapPin, Clock, Briefcase, Calendar } from 'lucide-react';
import JobApplication from '../components/ui/JobApplication';
import { getJobById } from '../lib/jobs';
import type { JobPosting } from '../types';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<JobPosting | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      navigate('/candidates');
      return;
    }

    loadJob(id);
  }, [id, navigate]);

  const loadJob = async (jobId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getJobById(jobId);
      setJob(data);
    } catch (err) {
      setError('Failed to load job details. Please try again later.');
      console.error('Error loading job:', err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600">Loading job details...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !job) {
    return (
      <Layout pageTitle="Job Not Found">
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                {error || 'Job Not Found'}
              </h2>
              <p className="text-gray-600 mb-6">
                Sorry, the job you're looking for doesn't exist or has been removed.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout pageTitle={job.title}>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-primary-900">
                  {job.title}
                </h1>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {job.contract_type.charAt(0).toUpperCase() + job.contract_type.slice(1)}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-primary-500" />
                  <span>{job.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-5 w-5 mr-2 text-primary-500" />
                  <span>{job.salary}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-primary-500" />
                  <span>Posted {formatDate(job.posted_date)}</span>
                </div>
                
                {job.expires_at && (
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-primary-500" />
                    <span>Apply by {formatDate(job.expires_at)}</span>
                  </div>
                )}
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-primary-900 mb-3">Job Description</h2>
                <div className="text-gray-700 space-y-4">
                  {job.description.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-primary-900 mb-3">Requirements</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Relevant qualification in healthcare (specific to role)</li>
                  <li>Prior experience in a similar role</li>
                  <li>Excellent communication and interpersonal skills</li>
                  <li>Ability to work as part of a team</li>
                  <li>Flexibility with working hours including possible weekend shifts</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-primary-900 mb-3">Benefits</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Competitive salary</li>
                  <li>Generous annual leave entitlement</li>
                  <li>Ongoing professional development opportunities</li>
                  <li>Pension scheme</li>
                  <li>Referral bonuses</li>
                </ul>
              </div>
            </div>
            
            <JobApplication jobId={job.id} jobTitle={job.title} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JobDetail;