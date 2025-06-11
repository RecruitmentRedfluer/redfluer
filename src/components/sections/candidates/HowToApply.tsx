import React from 'react';
import { ClipboardCheck, FileCheck, Briefcase } from 'lucide-react';
import Button from '../../ui/Button';

const HowToApply: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4 text-center">
            How to Apply
          </h2>
          <p className="text-gray-700 mb-8 text-center">
            Our simple application process makes it easy to find your next healthcare role. Follow these steps to get started.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-primary-50 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <ClipboardCheck className="w-10 h-10 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">1. Register</h3>
              <p className="text-gray-600 text-sm">Complete our registration form with your details and qualifications</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-50 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <FileCheck className="w-10 h-10 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">2. Verification</h3>
              <p className="text-gray-600 text-sm">Our team verifies your credentials and conducts compliance checks</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-50 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">3. Get Matched</h3>
              <p className="text-gray-600 text-sm">Start receiving suitable job opportunities and shift notifications</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button to="/register" variant="primary" size="lg">
              Start Your Application
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;