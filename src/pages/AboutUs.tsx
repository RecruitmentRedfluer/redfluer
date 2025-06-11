import React from 'react';
import Layout from '../components/layout/Layout';
import MissionValues from '../components/sections/about/MissionValues';
import FounderMessage from '../components/sections/about/FounderMessage';
import Timeline from '../components/sections/about/Timeline';
import { Clock, MapPin, Users, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <Layout pageTitle="About RedFluer Recruitment">
      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 text-center">
              At RedFluer Recruitment, we pride ourselves in connecting skilled staff to all our mandated assignments, especially to our medical and healthcare services nationwide. 
              With an unwavering commitment to excellence, we understand the unique challenges faced by the healthcare and care sectors and are committed to delivering a standout recruitment solution that truly makes a difference.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                <Clock className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">24/7 Operations</h3>
                <p className="text-sm text-gray-600">365 days service ensuring support whenever needed</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                <MapPin className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">England & Wales</h3>
                <p className="text-sm text-gray-600">Comprehensive coverage across contracted partners</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                <Users className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Specialist Care</h3>
                <p className="text-sm text-gray-600">Learning disabilities, mental health, and dementia</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                <Award className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Quality Focus</h3>
                <p className="text-sm text-gray-600">Prioritising quality, efficiency, dedication and flexibility</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img 
                src="https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Healthcare professionals in a meeting"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Who We Are</h3>
                <p className="text-gray-600 mb-4">
                  RedFluer Recruitment primes itself as one of the best upcoming recruitment agencies, providing tailored staffing solutions to contracted partners across England and Wales. 
                  We understand the critical role healthcare professionals play in delivering life-changing care, which is why we prioritise quality, efficiency, dedication and flexibility in every placement we provide.
                </p>
                <p className="text-gray-600">
                  From NHS hospitals, private clinics to nursing homes, mental health units, and others, our professional and dedicated team works tirelessly to match skilled professionals with roles that suit their expertise and availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Speciality */}
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
                  src="https://images.pexels.com/photos/1579631/pexels-photo-1579631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="William Turner"
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
                  src="https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
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
                  src="https://images.pexels.com/photos/5668870/pexels-photo-5668870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Charlie Davidson"
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

      {/* Multi-Sector Services */}
      <section className="py-12 bg-white">
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
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Security</h3>
                <p className="text-gray-600">Professional security personnel for various environments</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Cleaners</h3>
                <p className="text-gray-600">Reliable cleaning staff for commercial and healthcare facilities</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
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

export default AboutUs;