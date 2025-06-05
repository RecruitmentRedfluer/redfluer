import React from 'react';
import { Heart, Shield, Clock } from 'lucide-react';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MissionValues: React.FC = () => {
  const values: Value[] = [
    {
      icon: <Heart className="w-12 h-12 text-primary-500" />,
      title: "Compassion",
      description: "We approach every interaction with empathy and understanding, recognizing the vital importance of care work and the challenges faced by healthcare professionals."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary-500" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our operations, ensuring transparency, honesty, and fairness in every placement we make."
    },
    {
      icon: <Clock className="w-12 h-12 text-primary-500" />,
      title: "Reliability",
      description: "We deliver on our promises, providing dependable service to both candidates and employers to ensure continuity of care for patients and service users."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
            Our Mission & Values
          </h2>
          <p className="text-gray-600">
            At RedFluer Recruitment, we're committed to connecting compassionate healthcare professionals with organizations where they can make a meaningful difference in people's lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValues;