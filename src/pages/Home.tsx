import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/home/Hero';
import StatsStrip from '../components/sections/home/StatsStrip';
import JobCard from '../components/ui/JobCard';
import SearchFilters from '../components/ui/SearchFilters';
import Button from '../components/ui/Button';
import { supabase } from '../lib/supabase';
import { transformKeys } from '../lib/jobs';
import { JobPosting } from '../types';
import { MapPin, Clock, Award, Users } from 'lucide-react';

const Home: React.FC = () => {
  const [featuredJobs, setFeaturedJobs] = useState<JobPosting[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      try {
        const { data, error } = await supabase
          .from('job_postings')
          .select('*')
          .eq('is_active', true)
          .gt('expires_at', new Date().toISOString())
          .order('posted_date', { ascending: false })
          .limit(3);

        if (error) throw error;
        
        // Transform snake_case keys to camelCase to match JobPosting interface
        const transformedJobs = (data || []).map(job => transformKeys(job));
        setFeaturedJobs(transformedJobs);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load jobs');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedJobs();
  }, []);

  const handleSearch = (filters: any) => {
    console.log('Search filters:', filters);
    // In a real app, this would filter jobs or redirect to search results
  };

  return (
    <Layout>
      <Hero />
      <StatsStrip />
      
      {/* Platform Overview Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
              Our Platform
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We use our platform to streamline bookings with our clients, and the staff we place with them. 
              The system simplifies placements by syncing geographic locations of skilled Nurses, Social workers and the requirements of available jobs with the respective Staff Skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                <MapPin className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Geographic Matching</h3>
                <p className="text-sm text-gray-600">Find shifts nearby that match your location and qualifications</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                <Clock className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">24/7 Platform</h3>
                <p className="text-sm text-gray-600">Access opportunities and support around the clock, 365 days a year</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                <Award className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Upskilling Guidance</h3>
                <p className="text-sm text-gray-600">Clear pathways to earn more per shift through additional certifications</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                <Users className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Skills Matching</h3>
                <p className="text-sm text-gray-600">Intelligent matching of your skills to the right opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 text-center">
              The Benefits of Becoming a Member of RedFluer Recruitment Agency
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">For Healthcare Professionals</h3>
                <ul className="space-y-3 text-gray-600">
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
                    <span>A wide variety of temporary Nursing Positions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>Permanent jobs in mental health and mental health assistant jobs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>Register once and work anywhere in the UK</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>Dedicated professional support when and where you need it</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>Registration with our link agencies</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Our Quality Standards</h3>
                <p className="text-gray-600 mb-4">
                  To enjoy these benefits, candidates must meet the statutory requirements and industry standards to be qualified for the position. We carry out:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">•</span>
                    <span>Face-to-face interviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">•</span>
                    <span>Credential checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">•</span>
                    <span>Qualification confirmation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">•</span>
                    <span>Staff upgrading and development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Job Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 text-center">
              Find Your Next Role
            </h2>
            <SearchFilters onSearch={handleSearch} />
            
            <div className="mt-12">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-primary-900">Featured Opportunities</h3>
                <Button to="/candidates" variant="outline" size="sm">
                  View All Jobs
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {isLoading ? (
                  <div className="col-span-3 text-center py-8">Loading featured jobs...</div>
                ) : error ? (
                  <div className="col-span-3 text-center text-red-600 py-8">{error}</div>
                ) : featuredJobs.length === 0 ? (
                  <div className="col-span-3 text-center py-8">No featured jobs available at the moment.</div>
                ) : (
                  featuredJobs.map(job => (
                    <JobCard key={job.id} job={job} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Speciality Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 text-center">
              Our Speciality
            </h2>
            <p className="text-gray-600 mb-8 text-center text-lg">
              At RedFluer Recruitment we meet a wide range of permanent, temporary or contract staffing needs within learning disabilities, mental health and specialist dementia environments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-primary-900 mb-2">Registered General Nurse</h3>
                <p className="text-sm text-gray-600">(RGN, RN)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-primary-900 mb-2">Health Care Assistants</h3>
                <p className="text-sm text-gray-600">(HCAs)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-primary-900 mb-2">Senior Care Support Workers</h3>
                <p className="text-sm text-gray-600">Team Leaders</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-primary-900 mb-2">Support Workers</h3>
                <p className="text-sm text-gray-600">All levels</p>
              </div>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
              <p className="text-gray-700 text-lg font-medium">
                We also understand that quality care staff are worth more than money can buy – 
                That is why we identify the very best candidates for the right jobs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 text-center">
              Here are some of the reasons why we're a leading healthcare recruitment agency
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Specialist healthcare recruitment agency</h3>
                <p className="text-gray-600 text-sm">Focused expertise in healthcare and care services</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Experienced healthcare recruiters</h3>
                <p className="text-gray-600 text-sm">Deep understanding of the healthcare sector</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Excellent candidate tracking awareness</h3>
                <p className="text-gray-600 text-sm">Advanced systems to monitor candidate progress</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Unique care worker placing process</h3>
                <p className="text-gray-600 text-sm">Tailored approach to each placement</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">24/7 support</h3>
                <p className="text-gray-600 text-sm">Round-the-clock assistance when you need it</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Unparalleled access to healthcare professionals</h3>
                <p className="text-gray-600 text-sm">Extensive network of qualified candidates</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Responsive to your needs</h3>
                <p className="text-gray-600 text-sm">Quick turnaround for urgent requirements</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Thorough candidate vetting process</h3>
                <p className="text-gray-600 text-sm">Comprehensive checks and verification</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Signpost candidate for training and CPD</h3>
                <p className="text-gray-600 text-sm">Career development and continuous learning support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Sector Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
              Recruitment for Other Sectors
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              At RedFluer Recruitment, we are aware of the challenges of running a successful business while managing fluctuating staffing needs. 
              That's why RedFluer positions itself in providing all your staffing concerns.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Security</h3>
                <p className="text-gray-600">Professional security personnel for various environments</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Cleaners</h3>
                <p className="text-gray-600">Reliable cleaning staff for commercial and healthcare facilities</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Administrative</h3>
                <p className="text-gray-600">Skilled administrative professionals for various roles</p>
              </div>
            </div>
            <p className="text-gray-600">
              We pride ourselves in recruiting the best in the market and managing disappointment from your end with a timely and efficient manner.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;