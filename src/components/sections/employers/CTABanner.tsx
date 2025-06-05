import React from 'react';
import Button from '../../ui/Button';

const CTABanner: React.FC = () => {
  return (
    <section className="py-16 bg-primary-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Need Staff for Your Healthcare Facility?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          We can provide qualified and vetted healthcare professionals to match your specific requirements, whether you need temporary cover or permanent staff.
        </p>
        <Button to="/contact" variant="primary" size="lg">
          Request Staff Today
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;