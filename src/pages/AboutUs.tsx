import React from 'react';
import Layout from '../components/layout/Layout';
import MissionValues from '../components/sections/about/MissionValues';
import FounderMessage from '../components/sections/about/FounderMessage';
import Timeline from '../components/sections/about/Timeline';

const AboutUs: React.FC = () => {
  return (
    <Layout pageTitle="About Us">
      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 text-center">
              Founded in 2024, RedFluer Recruitment is a specialist healthcare recruitment agency dedicated to connecting compassionate professionals with rewarding opportunities across the UK healthcare sector.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img 
                src="https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Healthcare professionals in a meeting"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Who We Are</h3>
                <p className="text-gray-600 mb-4">
                  We are a team of experienced recruitment professionals with backgrounds in healthcare, staffing, and human resources. Our combined expertise gives us a unique understanding of the challenges and opportunities in healthcare recruitment.
                </p>
                <p className="text-gray-600">
                  Based in London with a network spanning the UK, we work with NHS trusts, private hospitals, care homes, and community healthcare providers to deliver staffing solutions that prioritize quality care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MissionValues />
      <FounderMessage />
      <Timeline />
      
      {/* Team Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 text-center">
              Meet Our Leadership Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Sarah Johnson"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-primary-900">Sarah Johnson</h3>
                <p className="text-primary-500 mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Former NHS nurse with 15+ years of healthcare management experience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.pexels.com/photos/5673500/pexels-photo-5673500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="David Thompson"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-primary-900">David Thompson</h3>
                <p className="text-primary-500 mb-3">Operations Director</p>
                <p className="text-gray-600 text-sm">
                  Brings 10+ years of experience in healthcare staffing operations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.pexels.com/photos/6551094/pexels-photo-6551094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Jennifer Williams"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-primary-900">Jennifer Williams</h3>
                <p className="text-primary-500 mb-3">Compliance Manager</p>
                <p className="text-gray-600 text-sm">
                  Specialist in healthcare compliance and regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;