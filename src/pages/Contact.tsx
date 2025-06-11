import React from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/ui/ContactForm';
import GoogleMap from '../components/ui/GoogleMap';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Layout pageTitle="Contact Our Specialist Team" showCTA={false}>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600">
                We're here to help with all your healthcare recruitment needs. Whether you're a healthcare professional looking for your next opportunity or an employer seeking skilled staff, our dedicated team is ready to assist you. 
                Contact us today to discuss your requirements, ask questions, or learn more about how we can support you. With 24/7 availability and a commitment to excellence, RedFluer Recruitment is always on hand to provide the guidance and solutions you need.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  We would be happy to discuss your needs in person. Our team operates 24/7, 365 days a year to ensure you receive support whenever you need it.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+44 7999 423861</p>
                      <p className="text-gray-500 text-sm">24/7 Support Available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">Email</h3>
                      <p className="text-gray-600">info@redfluer.com</p>
                      <p className="text-gray-500 text-sm">We aim to respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">Office Address</h3>
                      <p className="text-gray-600">
                        RedFluer Recruitment<br />
                        45 Broad Lane<br />
                        London<br />
                        N15 4DJ<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">Service Hours</h3>
                      <p className="text-gray-600">24/7 Support - 365 Days a Year</p>
                      <p className="text-gray-600">Office Hours: Monday to Friday: 8am - 6pm</p>
                      <p className="text-gray-600">Saturday: 9am - 1pm (by appointment)</p>
                      <p className="text-gray-600">Sunday: Emergency support available</p>
                    </div>
                  </div>
                </div>
                
                <GoogleMap 
                  address="45 Broad Lane, London, N15 4DJ, UK"
                  className="mt-8"
                />
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-6">
                  Send Us a Message
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  How quickly can you provide staff?
                </h3>
                <p className="text-gray-600">
                  For urgent requirements, we can often provide temporary staff within hours thanks to our 24/7 operations. For permanent positions, our standard timeframe is 2-3 weeks, though this can vary based on the role's specificity and location.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  What areas do you cover?
                </h3>
                <p className="text-gray-600">
                  We provide comprehensive coverage across England and Wales, with particularly strong networks in learning disabilities, mental health, and specialist dementia care environments.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  How do you verify candidate qualifications?
                </h3>
                <p className="text-gray-600">
                  We conduct thorough verification processes including face-to-face interviews, credential checks, qualification confirmation, enhanced DBS checks, and detailed reference checks from previous employers. We also provide staff upgrading and development programs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Do you operate outside of healthcare?
                </h3>
                <p className="text-gray-600">
                  Yes, while healthcare is our specialty, we also recruit for security, cleaning, and administrative roles. We understand the challenges of running a successful business while managing fluctuating staffing needs across all sectors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  How does your platform help candidates find nearby shifts?
                </h3>
                <p className="text-gray-600">
                  Our platform uses geographic matching to sync the locations of skilled professionals with available jobs. Candidates can see shifts nearby that match their qualifications, and we provide clear guidance on what certifications are needed to access higher-paying opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;