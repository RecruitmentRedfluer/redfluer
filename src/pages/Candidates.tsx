import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HowToApply from '../components/sections/candidates/HowToApply';
import ThreeStepProcess from '../components/sections/candidates/ThreeStepProcess';
import JobCard from '../components/ui/JobCard';
import SearchFilters from '../components/ui/SearchFilters';
import { getJobs } from '../lib/jobs';
import type { JobPosting } from '../types';
import { MapPin, Clock, Award, Users, Shield, Briefcase } from 'lucide-react';

const Candidates: React.FC = () => {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async (filters?: any) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getJobs(filters);
      setJobs(data);
    } catch (err) {
      setError('Failed to load jobs. Please try again later.');
      console.error('Error loading jobs:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (filters: any) => {
    loadJobs(filters);
  };

  return (
    <Layout pageTitle="Care & Medical Career Specialists">
      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 text-center">
              We offer opportunities across the NHS, private sector, nursing homes, mental health units, and more, with roles tailored to your skills and preferences. 
              From registration to placement, our dedicated team of consultants provides unwavering support every step of the way, ensuring you're matched with the right opportunities to thrive in your career.
            </p>

            {/* Platform Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                <MapPin className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Nearby Shifts</h3>
                <p className="text-sm text-gray-600">Find available shifts in your local area that match your qualifications</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                <Award className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Upskilling Pathways</h3>
                <p className="text-sm text-gray-600">Clear guidance on certifications needed to access higher-paying shifts</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                <Clock className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">Round-the-clock support whenever you need assistance</p>
              </div>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Why Join RedFluer?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>Excellent rates of pay</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>Regular weekly payment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>Flexible working hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>Wide variety of temporary nursing positions</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>Permanent jobs in mental health</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>Register once and work anywhere in the UK</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>Dedicated professional support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>Registration with our link agencies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speciality Areas */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 text-center">
              Our Specialist Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Users className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Learning Disabilities</h3>
                <p className="text-sm text-gray-600">Specialized care for individuals with learning disabilities</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Shield className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Mental Health</h3>
                <p className="text-sm text-gray-600">Mental health nursing and support roles</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Award className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Specialist Dementia</h3>
                <p className="text-sm text-gray-600">Expert dementia care environments</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Briefcase className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Other Sectors</h3>
                <p className="text-sm text-gray-600">Security, cleaning, and administrative roles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowToApply />
      <ThreeStepProcess />

      {/* Job Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 text-center">
              Search Available Shifts & Opportunities
            </h2>
            <SearchFilters onSearch={handleSearch} />
            
            {error && (
              <div className="mt-6 p-4 bg-error-100 text-error-800 rounded-md">
                {error}
              </div>
            )}
            
            {isLoading ? (
              <div className="mt-12 text-center text-gray-600">Loading opportunities...</div>
            ) : jobs.length === 0 ? (
              <div className="mt-12 text-center text-gray-600">
                No opportunities found matching your criteria.
              </div>
            ) : (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 text-center">
              Success Stories
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <img 
                  src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Nurse testimonial"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-700 italic mb-4">
                    "RedFluer's platform made it so easy to find shifts near my home that matched my mental health nursing qualifications. The upskilling guidance helped me understand exactly what I needed to access higher-paying specialist dementia roles."
                  </p>
                  <p className="font-semibold text-primary-900">Emma Williams, Mental Health Nurse</p>
                  <p className="text-gray-600 text-sm">Now working specialist dementia shifts in London</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <img 
                  src="https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Healthcare assistant testimonial"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-700 italic mb-4">
                    "The geographic matching feature is brilliant - I can see all available shifts within 10 miles of my location. The 24/7 support means I can pick up shifts even at short notice, and the weekly payments are always on time."
                  </p>
                  <p className="font-semibold text-primary-900">James Taylor, Healthcare Assistant</p>
                  <p className="text-gray-600 text-sm">Working flexible shifts across Manchester learning disability services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Candidates;