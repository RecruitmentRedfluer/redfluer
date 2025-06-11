import React from 'react';
import Layout from '../components/layout/Layout';
import ServicesGrid from '../components/sections/employers/ServicesGrid';
import TestimonialCarousel from '../components/sections/employers/TestimonialCarousel';
import CTABanner from '../components/sections/employers/CTABanner';
import { Clock, Shield, Users, Award } from 'lucide-react';

const Employers: React.FC = () => {
  return (
    <Layout pageTitle="Recruiting Specialists for Healthcare & Care Services" showCTA={false}>
      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 text-center">
              At RedFluer Recruitment, we are aware of the challenges of maintaining quality care while managing fluctuating staffing needs. 
              That's why RedFluer positions itself in providing healthcare employers with a seamless, reliable staffing solution tailored to their requirements. 
              Whether you need last-minute cover or long-term support, our pool of carefully selected and rigorously vetted, highly skilled professionals are ready to step in and make an impact.
            </p>

            {/* 24/7 Operations Highlight */}
            <div className="bg-primary-900 text-white p-8 rounded-lg mb-8 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">24/7, 365 Days Service</h3>
              <p className="text-lg">
                We operate around the clock to ensure that both our clients and candidates receive the support they need, whenever they need it.
              </p>
            </div>

            {/* Specialist Areas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                <Users className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Learning Disabilities</h3>
                <p className="text-sm text-gray-600">Specialised staff for learning disability services</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                <Shield className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Mental Health</h3>
                <p className="text-sm text-gray-600">Mental health professionals and support staff</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                <Award className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Specialist Dementia</h3>
                <p className="text-sm text-gray-600">Expert dementia care professionals</p>
              </div>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Our Employer Commitment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <span>Geographic matching for local staff placement</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>Flexible staffing solutions to suit your requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>Regular quality assurance and feedback processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>24/7 support for emergency cover</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    <span>Coverage across England and Wales</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
              Nationwide Coverage
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              RedFluer Recruitment provides tailored staffing solutions to contracted partners across England and Wales. 
              We understand the critical role healthcare professionals play in delivering life-changing care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-primary-900 mb-2">NHS Hospitals</h3>
                <p className="text-sm text-gray-600">Trusted partner for NHS trusts</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-primary-900 mb-2">Private Clinics</h3>
                <p className="text-sm text-gray-600">Supporting private healthcare providers</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-primary-900 mb-2">Nursing Homes</h3>
                <p className="text-sm text-gray-600">Specialised care home staffing</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-primary-900 mb-2">Mental Health Units</h3>
                <p className="text-sm text-gray-600">Expert mental health staffing</p>
              </div>
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
                    <span>Face-to-face interviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">•</span>
                    <span>Credential checks and qualification confirmation</span>
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
                    <span>Staff upgrading and development programs</span>
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
                  <div>
                    <p className="text-primary-900 font-bold text-2xl">24/7</p>
                    <p className="text-gray-600">Support availability</p>
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