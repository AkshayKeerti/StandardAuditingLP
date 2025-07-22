import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Main Header */}
      <div className="container-custom py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
          {/* Logo and Mobile Contact Info */}
          <div className="flex flex-col space-y-3">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/standard-auditing-logo.png" alt="Standard Auditing" className="h-10 lg:h-12 w-auto" />
            </div>

            {/* Mobile Contact Info */}
            <div className="lg:hidden space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-vigor-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm text-vigor-blue">+971 50 382 1750</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-vigor-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm text-vigor-blue">info@standardauditing.ae</span>
              </div>
            </div>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-vigor-green" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-sm text-vigor-blue">+971 50 382 1750</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-vigor-green" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm text-vigor-blue">info@standardauditing.ae</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-vigor-green" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-sm text-vigor-blue">04 379 5200</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-vigor-blue self-end">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 