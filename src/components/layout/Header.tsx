import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/Redfluer Logo.png" 
              alt="RedFluer Recruitment Logo" 
              className="h-8 w-auto mr-2"
              onError={(e) => {
                // Fallback to a heart icon if logo fails to load
                e.currentTarget.style.display = 'none';
                const heartIcon = document.createElement('div');
                heartIcon.innerHTML = '❤️';
                heartIcon.className = 'w-8 h-8 text-primary-500 mr-2 flex items-center justify-center text-xl';
                e.currentTarget.parentNode?.insertBefore(heartIcon, e.currentTarget);
              }}
            />
            <span className="font-bold text-xl text-primary-900">RedFluer Recruitment</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-primary-900 hover:text-primary-500 font-medium">
              Home
            </Link>
            <Link to="/candidates" className="text-primary-900 hover:text-primary-500 font-medium">
              Candidates
            </Link>
            <Link to="/shifts" className="text-primary-900 hover:text-primary-500 font-medium">
              Find Shifts
            </Link>
            <Link to="/skills" className="text-primary-900 hover:text-primary-500 font-medium">
              Skills & Career
            </Link>
            <Link to="/employers" className="text-primary-900 hover:text-primary-500 font-medium">
              Employers
            </Link>
            <Link to="/about" className="text-primary-900 hover:text-primary-500 font-medium">
              About Us
            </Link>
            <Button to="/contact" variant="primary" size="sm">
              Contact Our Team
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-primary-900 hover:text-primary-500 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/candidates" 
                className="text-primary-900 hover:text-primary-500 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Candidates
              </Link>
              <Link 
                to="/shifts" 
                className="text-primary-900 hover:text-primary-500 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Shifts
              </Link>
              <Link 
                to="/skills" 
                className="text-primary-900 hover:text-primary-500 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills & Career
              </Link>
              <Link 
                to="/employers" 
                className="text-primary-900 hover:text-primary-500 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Employers
              </Link>
              <Link 
                to="/about" 
                className="text-primary-900 hover:text-primary-500 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="px-4">
                <Button 
                  to="/contact" 
                  variant="primary" 
                  size="sm" 
                  fullWidth
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Our Team
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;