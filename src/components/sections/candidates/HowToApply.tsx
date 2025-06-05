import React from 'react';
import VideoEmbed from '../../ui/VideoEmbed';

const HowToApply: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4 text-center">
            How to Apply
          </h2>
          <p className="text-gray-700 mb-8 text-center">
            Our simple application process makes it easy to find your next healthcare role. Watch our short guide to learn more.
          </p>
          <VideoEmbed 
            url="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="How to Apply - RedFluer Recruitment" 
            className="mb-8" 
          />
        </div>
      </div>
    </section>
  );
};

export default HowToApply;