import React from 'react';
import Button from '../../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          <source
            src="https://player.vimeo.com/external/440137446.sd.mp4?s=e59b4270a6fe06f2598c5e5ffd9cad92bcbb2fa6&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-primary-900/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Connecting Care Professionals with Life-Changing Opportunities
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Specialized healthcare recruitment services across the UK, matching talented professionals with the right opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/candidates" variant="primary" size="lg">
              Search Vacancies
            </Button>
            <Button to="/employers" variant="white" size="lg">
              Hire Staff
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;