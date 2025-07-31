import React from 'react';

const Header = () => {
  const phoneNumber = '+971542119784';
  const whatsappMessage = 'Hi! I would like to know more about your tax services.';
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:Sales@standardauditors.com', '_self');
  };

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
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-3 hover:bg-green-50 rounded-lg p-2 transition-colors duration-200 cursor-pointer group"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-green-50 group-hover:bg-green-100 rounded-full transition-colors duration-200">
                  <img src="/whatsapp-1.png" alt="WhatsApp" className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-200">+971 54 211 9784</span>
                  <span className="text-xs text-gray-500 group-hover:text-green-600 transition-colors duration-200">WhatsApp</span>
                </div>
              </button>
              
              <button 
                onClick={handleEmailClick}
                className="flex items-center space-x-3 hover:bg-blue-50 rounded-lg p-2 transition-colors duration-200 cursor-pointer group"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-blue-50 group-hover:bg-blue-100 rounded-full transition-colors duration-200">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">Sales@standardauditors.com</span>
                  <span className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors duration-200">Email</span>
                </div>
              </button>
              
              <button 
                onClick={handlePhoneClick}
                className="flex items-center space-x-3 hover:bg-blue-50 rounded-lg p-2 transition-colors duration-200 cursor-pointer group"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-blue-50 group-hover:bg-blue-100 rounded-full transition-colors duration-200">
                  <img src="/Phone.webp" alt="Phone" className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">+971 54 211 9784</span>
                  <span className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors duration-200">Phone</span>
                </div>
              </button>
            </div>

            {/* Mobile Contact Info */}
            <div className="lg:hidden space-y-4">
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-4 hover:bg-green-50 rounded-lg p-3 transition-colors duration-200 cursor-pointer group w-full"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-green-50 group-hover:bg-green-100 rounded-full transition-colors duration-200">
                  <img src="/whatsapp-1.png" alt="WhatsApp" className="w-6 h-6" />
                </div>
                <span className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-200">+971 54 211 9784</span>
              </button>
              <button 
                onClick={handleEmailClick}
                className="flex items-center space-x-4 hover:bg-blue-50 rounded-lg p-3 transition-colors duration-200 cursor-pointer group w-full"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-full transition-colors duration-200">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">Sales@standardauditors.com</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 