import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { jobListings } from '../data/jobListings';
import JobApplication from '../components/ui/JobApplication';

const ApplyJob: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const job = jobListings.find(job => job.id === id);
  
  // If job not found, redirect to jobs page
  React.useEffect(() => {
    if (!job) {
      navigate('/candidates');
    }
  }, [job, navigate]);
  
  if (!job) {
    return null; // Will redirect due to the useEffect above
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
              
              <p className="text-gray-700">{job.description}</p>
            </div>
            
            <JobApplication jobId={job.id} jobTitle={job.title} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplyJob;