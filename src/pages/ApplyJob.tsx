import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { supabase } from '../lib/supabase';
import { transformKeys } from '../lib/jobs';
import JobApplication from '../components/ui/JobApplication';
import type { JobPosting } from '../types';

const ApplyJob: React.FC = () => {
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
      
      const { data, error: fetchError } = await supabase
        .from('job_postings')
        .select('*')
        .eq('id', jobId)
        .eq('is_active', true)
        .single();

      if (fetchError) {
        if (fetchError.code === 'PGRST116') {
          // No rows returned
          setError('Job not found or no longer available.');
        } else {
          throw fetchError;
        }
        return;
      }

      // Transform snake_case keys to camelCase to match JobPosting interface
      const transformedJob = transformKeys(data);
      setJob(transformedJob);
    } catch (err) {
      console.error('Error loading job:', err);
      setError('Failed to load job details. Please try again later.');
    } finally {
      setIsLoading(false);
    }
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
              <button
                onClick={() => navigate('/candidates')}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md"
              >
                Back to Jobs
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout pageTitle={`Apply for ${job.title}`}>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-2">Job Details</h2>
              <h3 className="text-lg font-medium text-primary-700 mb-4">{job.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-700">{job.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Salary</p>
                  <p className="text-gray-700">{job.salary}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contract Type</p>
                  <p className="text-gray-700">{job.contractType.charAt(0).toUpperCase() + job.contractType.slice(1)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="text-gray-700">{job.role.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Description</p>
                <div className="text-gray-700 space-y-2">
                  {job.description.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
            
            <JobApplication jobId={job.id} jobTitle={job.title} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplyJob;