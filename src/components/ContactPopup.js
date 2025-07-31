import React, { useState } from 'react';
import GoogleFormHandler from './GoogleFormHandler';

const ContactPopup = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    phone: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSuccess = (data) => {
    // Reset form on success
    setFormData({
      phone: ''
    });
    
    // Call the original onSubmit callback if provided
    if (onSubmit) {
      onSubmit(data.phone);
    }
    
    // Close the popup
    onClose();
  };

  const handleError = (errors) => {
    console.log('Form submission errors:', errors);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md transform transition-all duration-300 scale-100 mx-2">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl sm:rounded-t-3xl p-4 sm:p-8 text-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-white rounded-full transform translate-x-8 -translate-y-8 sm:translate-x-16 sm:-translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-white rounded-full transform -translate-x-6 translate-y-6 sm:-translate-x-12 sm:translate-y-12"></div>
          </div>
          
          {/* Icon */}
          <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full mb-3 sm:mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          
          {/* Title */}
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2 relative z-10">
            Get Expert Tax Advice
          </h3>
          <p className="text-blue-100 text-xs sm:text-sm relative z-10">
            Speak to our UAE tax specialists today
          </p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8">
          <div className="text-center mb-4 sm:mb-6">
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Free Consultation Call
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Enter your phone number below and we'll call you within 30 minutes to discuss your tax requirements.
            </p>
          </div>
          
          <GoogleFormHandler 
            formData={formData}
            onSuccess={handleSuccess}
            onError={handleError}
            showSuccessMessage={false}
            showErrorMessage={true}
          >
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg transition-all duration-300 bg-gray-50 hover:bg-white"
                    required
                    autoFocus
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  We'll never share your number with third parties
                </p>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call Me Now - It's Free!</span>
              </button>
            </div>
          </GoogleFormHandler>
          
          {/* Trust indicators */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>100% Free</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Expert Advice</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Quick Response</span>
              </div>
            </div>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-200 transition-colors duration-200 p-1 sm:p-2"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ContactPopup; 