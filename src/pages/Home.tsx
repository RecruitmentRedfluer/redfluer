import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/home/Hero';
import StatsStrip from '../components/sections/home/StatsStrip';
import { jobListings } from '../data/jobListings';
import JobCard from '../components/ui/JobCard';
import SearchFilters from '../components/ui/SearchFilters';
import Button from '../components/ui/Button';

const Home: React.FC = () => {
  const featuredJobs = jobListings.slice(0, 3);
  
  const handleSearch = (filters: any) => {
    console.log('Search filters:', filters);
    // In a real app, this would filter jobs or redirect to search results
  };

  return (
    <Layout>
      <Hero />
      <StatsStrip />
      
      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
              UK's Trusted Healthcare Recruitment Specialists
            </h2>
            <p className="text-gray-600 mb-8">
              RedFluer Recruitment specializes in connecting healthcare professionals with rewarding opportunities across the UK. Whether you're an experienced nurse, a dedicated carer, or a healthcare organization looking for qualified staff, we have the expertise and network to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/candidates" variant="outline" size="md">
                Find Jobs
              </Button>
              <Button to="/employers" variant="primary" size="md">
                Hire Talent
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Job Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 text-center">
              Find Your Next Healthcare Role
            </h2>
            <SearchFilters onSearch={handleSearch} />
            
            <div className="mt-12">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-primary-900">Featured Opportunities</h3>
                <Button to="/jobs" variant="outline" size="sm">
                  View All Jobs
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
              Why Choose RedFluer Recruitment?
            </h2>
            <p className="text-gray-600">
              We understand the unique challenges of healthcare staffing and are committed to providing exceptional service to both candidates and employers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">For Candidates</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Access to exclusive healthcare opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Personalized career guidance and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Competitive rates and excellent benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Flexible working options to suit your lifestyle</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button to="/candidates" variant="primary" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">For Employers</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Access to pre-vetted, qualified healthcare professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Rapid response to urgent staffing needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Comprehensive compliance and background checks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Dedicated account management and ongoing support</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button to="/employers" variant="primary" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;