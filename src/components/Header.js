import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      {/* Main Header */}
      <div className="container-custom py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
          {/* Logo - Left side on desktop */}
          <div className="flex items-center">
            <img src="/standard-auditing-logo.png" alt="Standard Auditing" className="h-16 lg:h-18 w-auto" />
          </div>

          {/* Contact Info - Right side on desktop */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-3 lg:space-y-0">
            {/* Desktop Contact Info */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full">
                  <img src="/whatsapp-1.png" alt="WhatsApp" className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">+971 54 211 9784</span>
                  <span className="text-xs text-gray-500">WhatsApp</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">Sales@standardauditors.com</span>
                  <span className="text-xs text-gray-500">Email</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full">
                  <img src="/Phone.webp" alt="Phone" className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">+971 54 211 9784</span>
                  <span className="text-xs text-gray-500">Phone</span>
                </div>
              </div>
            </div>

            {/* Mobile Contact Info */}
            <div className="lg:hidden space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-full">
                  <img src="/whatsapp-1.png" alt="WhatsApp" className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-gray-900">+971 54 211 9784</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-full">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-900">Sales@standardauditors.com</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-gray-700 self-end p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 