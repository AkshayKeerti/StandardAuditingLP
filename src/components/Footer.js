import React from 'react';

const Footer = () => {
  const quickLinks = ["Home", "About us", "Services", "Contact us"];
  const socialIcons = ["Facebook", "Twitter", "LinkedIn", "Instagram"];

  return (
    <footer className="bg-vigor-blue text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Socials */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/standard-auditing-logo.png" alt="Standard Auditing" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">STANDARD</span>
                <span className="text-xs text-gray-300 font-medium">AUDITING</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <div key={index} className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all">
                  <span className="text-xs">{social.charAt(0)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Head Office */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Head Office</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-vigor-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-gray-300">
                  25th Floor-Iris Bay Tower, Al Abraj Street, Business Bay, Dubai - UAE
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-vigor-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm text-gray-300">+971 52 269 7195</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-vigor-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm text-gray-300">info@vigoraccounts.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Location</h3>
            <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-sm text-center px-4">
                Google Maps - VIGOR ACCOUNTING & CONSULTANCY<br/>
                Iris Bay Tower, Dubai
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 py-4">
        <div className="container-custom text-center">
          <p className="text-sm text-gray-300">
            Copyright: © 2025 Standard Auditing. Developed by Cloud Figma. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 