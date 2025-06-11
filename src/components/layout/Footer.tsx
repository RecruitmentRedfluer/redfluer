import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Linkedin, Facebook, Twitter, Mail, Phone, MapPin, Clock, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const acceptCookies = () => {
    setCookiesAccepted(true);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-white mr-2" fill="white" strokeWidth={1.5} />
              <span className="font-bold text-lg">RedFluer Recruitment</span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Specialists in Health Care & Care Services Recruitment. Operating 24/7, 365 days across England and Wales.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/redfluer-recruitment" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="https://instagram.com/redfluerr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="https://facebook.com/redfluerr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="https://tiktok.com/@redfluer_recruitment" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm">Home</Link>
              </li>
              <li>
                <Link to="/candidates" className="text-gray-300 hover:text-white text-sm">For Candidates</Link>
              </li>
              <li>
                <Link to="/employers" className="text-gray-300 hover:text-white text-sm">For Employers</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white text-sm">News & Insights</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm">Contact Us</Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-300 hover:text-white text-sm">Legal & Terms</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                <div>
                  <span className="text-sm text-gray-300">+44 7999 423861</span>
                  <p className="text-xs text-gray-400">24/7 Support</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                <span className="text-sm text-gray-300">info@redfluer.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                <span className="text-sm text-gray-300">
                  RedFluer Recruitment<br />
                  45 Broad Lane<br />
                  London, N15 4DJ<br />
                  United Kingdom
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                <span className="text-sm text-gray-300">
                  24/7 Service - 365 Days
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300 text-sm">Learning Disabilities Care</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Mental Health Services</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Specialist Dementia Care</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">NHS & Private Healthcare</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Security Services</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Cleaning Services</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Administrative Roles</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} RedFluer Recruitment Ltd. All rights reserved.</p>
          <p className="mt-1">
            Registered in England and Wales | Company No: 16448519 | 
            <Link to="/legal" className="text-gray-300 hover:text-white ml-1">Terms & Conditions</Link>
          </p>
        </div>
      </div>

      {/* GDPR Cookie Notice */}
      {!cookiesAccepted && (
        <div className="fixed bottom-0 left-0 right-0 bg-primary-800 p-4 shadow-lg z-50">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
              <Link to="/legal" className="underline ml-1">Learn more</Link>
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={acceptCookies}
                className="bg-white text-primary-900 px-4 py-2 text-sm font-medium rounded hover:bg-gray-100"
              >
                Accept
              </button>
              <button 
                onClick={acceptCookies}
                className="bg-transparent border border-white text-white px-4 py-2 text-sm font-medium rounded hover:bg-primary-700"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;