import React from 'react';
import Layout from '../components/layout/Layout';
import ServicesGrid from '../components/sections/employers/ServicesGrid';
import TestimonialCarousel from '../components/sections/employers/TestimonialCarousel';
import CTABanner from '../components/sections/employers/CTABanner';

const Employers: React.FC = () => {
  return (
    <Layout pageTitle="For Employers" showCTA={false}>
      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 text-center">
              RedFluer Recruitment partners with healthcare organizations across the UK to provide tailored staffing solutions that address the unique challenges of the sector. Our deep industry expertise allows us to match you with qualified professionals who will enhance your team and uphold your standards of care.
            </p>
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Our Employer Commitment</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Rigorous candidate screening and compliance checks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Fast response times for urgent staffing needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Dedicated account management for ongoing support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Flexible staffing solutions to suit your requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">✓</span>
                  <span>Regular quality assurance and feedback processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <TestimonialCarousel />
      
      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 text-center">
              Why Healthcare Providers Choose Us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-700 mb-4">
                  All our candidates undergo a rigorous vetting process that includes:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">•</span>
                    <span>Verification of qualifications and registrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">•</span>
                    <span>Enhanced DBS checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">•</span>
                    <span>Right to work verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">•</span>
                    <span>Comprehensive reference checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">•</span>
                    <span>Face-to-face interviews</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Our Results</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-primary-900 font-bold text-2xl">95%</p>
                    <p className="text-gray-600">Client retention rate</p>
                  </div>
                  <div>
                    <p className="text-primary-900 font-bold text-2xl">98%</p>
                    <p className="text-gray-600">Shift fulfillment rate</p>
                  </div>
                  <div>
                    <p className="text-primary-900 font-bold text-2xl">4.8/5</p>
                    <p className="text-gray-600">Average client satisfaction rating</p>
                  </div>
                  <div>
                    <p className="text-primary-900 font-bold text-2xl">&lt;4 hours</p>
                    <p className="text-gray-600">Average response time for urgent requests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Employers;