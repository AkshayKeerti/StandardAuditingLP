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

  const benefits = [
    "Auditing",
    "Tax Advisory",
    "Accounting & Bookkeeping",
    "VAT Registration & Filing",
    "Company Formation"
  ];

  const Check = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  const ArrowRight = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 pt-32 sm:pt-4 pb-20 sm:pb-4 flex items-center">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column - Content & Benefits */}
          <div className="lg:col-span-1 text-white space-y-6">
            <div className="space-y-4">
              <h1 className="text-[32px] font-bold leading-tight">
                Corporate TAX/VAT Services
              </h1>
              
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-base sm:text-lg font-bold shadow-lg border border-white/30">
                <span className="mr-2">Starting at</span>
                <span className="text-yellow-300">AED 700</span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4">
                25+ years of expertise in:
              </h2>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-4 h-4 bg-gray-800 rounded-full flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => setShowPopup(true)}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg text-base font-medium transition-colors flex items-center"
            >
              Contact us
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          
          {/* Right Form with Integrated Image */}
          <div className="lg:col-span-2">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img
                    src="/medium-shaot-woman-standing-office-with-her-hands-folded.png"
                    alt="Professional woman in business attire"
                    className="w-full h-auto object-cover max-w-xs lg:max-w-sm"
                  />
                </div>
              </div>

              {/* Form */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 space-y-6">
              <div className="text-center space-y-3">
                <div className="inline-block bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                  Free Consultation
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-white">
                  Request a Call Back
                </h2>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-0 rounded-lg h-12 px-4"
                />
                
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                    <div className="w-6 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                      <div className="w-4 h-3 bg-yellow-400 rounded-sm flex items-center justify-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-0 rounded-lg h-12 pl-12 pr-4"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-0 rounded-lg h-12 px-4"
                />

                <select className="w-full bg-white text-gray-500 border-0 rounded-lg h-12 px-4 appearance-none">
                  <option value="">- Select Services -</option>
                  <option value="bookkeeping">Bookkeeping</option>
                  <option value="tax-preparation">Tax Preparation</option>
                  <option value="financial-consulting">Financial Consulting</option>
                  <option value="audit-services">Audit Services</option>
                  <option value="payroll-services">Payroll Services</option>
                </select>

                <button 
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-lg h-12 text-lg font-medium transition-colors"
                >
                  Request a Call Back
                </button>
              </form>
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