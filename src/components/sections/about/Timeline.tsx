import React from 'react';
import { timelineItems } from '../../../data/timeline';

const Timeline: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-12 text-center">
            Our Journey
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
            
            {/* Timeline items */}
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative mb-8 flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                </div>
                
                <div className={`md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                }`}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;