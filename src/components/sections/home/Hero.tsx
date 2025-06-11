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
          poster="https://images.pexels.com/photos/7723389/pexels-photo-7723389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Welcome to RedFluer Recruitment
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/90">
            Specialists in Health Care & Care Services Recruitment and other related sectors
          </p>
          <p className="text-base md:text-lg mb-8 text-white/80">
            Our platform gives candidates the opportunity to see available shifts nearby, which match their qualifications, 
            and if there are opportunities to upskill to open new shifts, it offers candidates clear guidance on what certification is required to earn more per shift. 
            Placing true value and usability in the palm of our Staff's hands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/candidates" variant="primary" size="lg">
              Find Shifts Near You
            </Button>
            <Button to="/employers" variant="white" size="lg">
              Hire Quality Staff
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;