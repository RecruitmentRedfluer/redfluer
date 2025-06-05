import React from 'react';
import VideoEmbed from '../../ui/VideoEmbed';

const FounderMessage: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                A Message from Our Founder
              </h2>
              <p className="text-gray-600 mb-4">
                "Having worked in healthcare for over 15 years, I witnessed firsthand the challenges of staffing in the sector. I founded RedFluer Recruitment with a vision to transform how healthcare professionals find meaningful work and how providers access qualified talent."
              </p>
              <p className="text-gray-600 mb-4">
                "Our approach combines deep industry knowledge with a genuine understanding of the human element of care work. We're not just filling vacancies – we're supporting careers and improving care standards across the UK."
              </p>
              <p className="font-semibold text-primary-900">
                - Sarah Johnson, Founder & CEO
              </p>
            </div>
            <div>
              <VideoEmbed 
                url="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Founder Message - RedFluer Recruitment" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;