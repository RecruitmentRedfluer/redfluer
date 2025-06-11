import React from 'react';
import { Clock, Briefcase, ShieldCheck, Stethoscope, GraduationCap, Users } from 'lucide-react';
import { services } from '../../../data/services';

const ServicesGrid: React.FC = () => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'clock': <Clock className="w-10 h-10 text-primary-500" />,
    'briefcase': <Briefcase className="w-10 h-10 text-primary-500" />,
    'shield-check': <ShieldCheck className="w-10 h-10 text-primary-500" />,
    'stethoscope': <Stethoscope className="w-10 h-10 text-primary-500" />,
    'graduation-cap': <GraduationCap className="w-10 h-10 text-primary-500" />,
    'users': <Users className="w-10 h-10 text-primary-500" />,
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
            Our Healthcare Recruitment Services
          </h2>
          <p className="text-gray-600">
            We offer a comprehensive range of specialised recruitment solutions designed to meet the unique needs of healthcare providers across the UK.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;