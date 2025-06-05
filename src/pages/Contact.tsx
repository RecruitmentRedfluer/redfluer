import React from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/ui/ContactForm';
import GoogleMap from '../components/ui/GoogleMap';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Layout pageTitle="Contact Us" showCTA={false}>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Whether you're looking for staff, searching for a new role, or have questions about our services, our team is ready to help. Reach out using any of the contact methods below.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">Phone</h3>
                      <p className="text-gray-600">0800 123 4567</p>
                      <p className="text-gray-500 text-sm">Monday to Friday, 8am - 6pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">Email</h3>
                      <p className="text-gray-600">info@redfluerrecruitment.co.uk</p>
                      <p className="text-gray-500 text-sm">We aim to respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">Office Address</h3>
                      <p className="text-gray-600">
                        123 Healthcare Avenue<br />
                        London, EC1 2NP<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">Office Hours</h3>
                      <p className="text-gray-600">Monday to Friday: 8am - 6pm</p>
                      <p className="text-gray-600">Saturday: 9am - 1pm (by appointment)</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <GoogleMap 
                  address="123 Healthcare Avenue, London, EC1 2NP, UK"
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
                  For urgent requirements, we can often provide temporary staff within hours. For permanent positions, our standard timeframe is 2-3 weeks, though this can vary based on the role's specificity and location.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  What areas of the UK do you cover?
                </h3>
                <p className="text-gray-600">
                  We provide nationwide coverage across England, Scotland, Wales, and Northern Ireland, with particularly strong networks in London, Manchester, Birmingham, Edinburgh, and Glasgow.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  How do you verify candidate qualifications?
                </h3>
                <p className="text-gray-600">
                  We conduct thorough verification processes including checking professional registrations (e.g., NMC, GMC), qualification certificates, enhanced DBS checks, and detailed reference checks from previous employers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  What happens after I submit my CV?
                </h3>
                <p className="text-gray-600">
                  After receiving your CV, a consultant will review your experience and qualifications. If suitable opportunities are available, they'll contact you within 2 business days to discuss next steps, which typically include an initial screening call.
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