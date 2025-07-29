import React, { useState, useEffect } from 'react';
import ContactPopup from './ContactPopup';

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto-show popup after 3 seconds of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowPopup(true);
      }
    }, 3000);

    const handleUserInteraction = () => {
      setHasInteracted(true);
    };

    // Listen for user interactions
    document.addEventListener('mousemove', handleUserInteraction);
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    document.addEventListener('scroll', handleUserInteraction);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
  }, [hasInteracted]);

  const handleSubmit = (phoneNumber) => {
    // Handle the phone number submission here
    console.log('Phone number submitted:', phoneNumber);
    // You can add your logic here to send the phone number to your backend
  };
  const expertiseAreas = [
    "Auditing",
    "Tax Advisory",
    "Accounting & Bookkeeping",
    "VAT Registration & Filing",
    "Company Formation"
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-12">
            {/* 1. Headline + Price as One Visual Unit */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Corporate TAX/VAT Services
              </h1>
              
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-xl sm:text-2xl font-bold shadow-lg border border-white/30">
                <span className="mr-2">Starting at</span>
                <span className="text-yellow-300">AED 700</span>
              </div>
            </div>

            {/* 2. Experience + Services as a Cluster */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-6">
                25+ years of expertise in:
              </h2>
              <div className="space-y-3">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white text-lg sm:text-xl">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Highlighted CTA Section */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                👉 Speak to a Tax Specialist
              </h3>
              <button 
                onClick={() => setShowPopup(true)}
                className="flex items-center justify-center space-x-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-yellow-300 hover:border-yellow-400"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Speak to a Tax Specialist</span>
              </button>
            </div>
          </div>

          {/* Right Column - Enhanced Contact Form */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 translate-y-12"></div>
            </div>
            
            {/* Main Contact Form Card */}
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
              {/* Header with icon */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-3">
                  Free Consultation
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-2">
                  Get Expert Advice
                </h3>
                <p className="text-gray-custom text-sm">
                  Speak to our tax specialists today
                </p>
              </div>
              
              {/* Contact Form */}
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-dark mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 text-gray-dark transition-all duration-300 text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-dark mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                      <div className="w-6 h-4 bg-gradient-to-r from-red-500 via-green-500 to-black rounded-sm"></div>
                      <svg className="w-4 h-4 text-gray-custom" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 pl-16 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 text-gray-dark transition-all duration-300 text-base"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-dark mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 text-gray-dark transition-all duration-300 text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-dark mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 text-gray-dark appearance-none transition-all duration-300 text-base">
                    <option value="">Select a service</option>
                    <option value="corporate-tax">Corporate Tax Setup</option>
                    <option value="vat">VAT Registration & Filing</option>
                    <option value="accounting">Accounting & Bookkeeping</option>
                    <option value="audit">Audit Services</option>
                    <option value="business-setup">Company Formation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-dark mb-2">Additional Information</label>
                  <textarea
                    placeholder="Tell us about your requirements..."
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 text-gray-dark transition-all duration-300 resize-none text-base"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-custom flex items-center justify-center space-x-3 text-base"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Request Free Consultation</span>
                </button>
              </form>
              
              {/* Trust indicators */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-custom">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>100% Free</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Expert Advice</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Quick Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Popup */}
      <ContactPopup 
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default Hero; 