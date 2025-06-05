import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface CTABarProps {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
  background?: 'primary' | 'secondary';
}

const CTABar: React.FC<CTABarProps> = ({ 
  title = "Looking for staff?", 
  buttonText = "Request Staff Today", 
  buttonLink = "/contact", 
  background = "primary" 
}) => {
  const bgClasses = {
    primary: "bg-primary-500",
    secondary: "bg-primary-900",
  };

  return (
    <section className={`${bgClasses[background]} py-8 px-4`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-0">
          {title}
        </h2>
        <Button 
          to={buttonLink}
          variant={background === 'primary' ? 'white' : 'primary'}
          size="md"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default CTABar;