import React from 'react';
import Layout from '../components/layout/Layout';
import HowToApply from '../components/sections/candidates/HowToApply';
import ThreeStepProcess from '../components/sections/candidates/ThreeStepProcess';
import { jobListings } from '../data/jobListings';
import JobCard from '../components/ui/JobCard';
import SearchFilters from '../components/ui/SearchFilters';

const Candidates: React.FC = () => {
  const handleSearch = (filters: any) => {
    console.log('Search filters:', filters);
    // In a real app, this would filter jobs or redirect to search results
  };

  return (
    <Layout pageTitle="For Candidates">
      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 text-center">
              RedFluer Recruitment is committed to helping healthcare professionals find rewarding roles that match their skills, experience, and career aspirations. Whether you're looking for permanent positions or flexible temporary work, we have opportunities across the UK.
            </p>
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Why Join RedFluer?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Access to exclusive opportunities with leading healthcare providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Competitive pay rates and benefits packages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Dedicated consultant support throughout your job search</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Flexible working options to suit your lifestyle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Career development and training opportunities</span>
                </li>
              </ul>
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
              Search Current Vacancies
            </h2>
            <SearchFilters onSearch={handleSearch} />
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobListings.slice(0, 4).map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                    "RedFluer helped me find a permanent position at a leading care home that perfectly matches my skills and values. Their consultant took the time to understand my career goals and supported me through every step of the interview process."
                  </p>
                  <p className="font-semibold text-primary-900">Emma Williams, Registered Nurse</p>
                  <p className="text-gray-600 text-sm">Placed at Oakwood Care Home, London</p>
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
                    "As a healthcare assistant looking for flexible shifts, RedFluer has been fantastic. Their temporary staffing team always finds me work when I need it, and the registration process was quick and straightforward."
                  </p>
                  <p className="font-semibold text-primary-900">James Taylor, Healthcare Assistant</p>
                  <p className="text-gray-600 text-sm">Working flexible shifts across Manchester</p>
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