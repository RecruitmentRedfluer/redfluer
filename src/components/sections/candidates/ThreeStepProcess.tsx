import React from 'react';
import { ClipboardCheck, FileCheck, Briefcase } from 'lucide-react';
import Button from '../../ui/Button';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ThreeStepProcess: React.FC = () => {
  const steps: Step[] = [
    {
      icon: <ClipboardCheck className="w-12 h-12 text-primary-500" />,
      title: "Register",
      description: "Complete our simple registration form and upload your CV to create your candidate profile."
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary-500" />,
      title: "Compliance Check",
      description: "Our team will verify your qualifications, experience, and conduct necessary background checks."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-primary-500" />,
      title: "Find Your Role",
      description: "Get matched with suitable opportunities and receive support throughout the application process."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 text-center">
            Our Simple Three-Step Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <div className="relative mb-6">
                  <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/register" variant="primary" size="lg">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;