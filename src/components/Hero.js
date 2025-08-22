import React, { useState, useEffect } from 'react';
import ContactPopup from './ContactPopup';
import GoogleFormHandler from './GoogleFormHandler';

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: ''
  });

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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (phoneNumber) => {
    // Handle the phone number submission here
    console.log('Phone number submitted:', phoneNumber);
    // You can add your logic here to send the phone number to your backend
  };

  const handleFormSuccess = (data) => {
    // Reset form on success
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: ''
    });
  };

  const handleFormError = (errors) => {
    console.log('Form submission errors:', errors);
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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-4 pb-20 sm:pb-4 flex items-center">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column - Content & Benefits with Image on small screens */}
          <div className="lg:col-span-1 text-white space-y-3 xs:space-y-4 sm:space-y-6">
            <div className="space-y-2.5 xs:space-y-3 sm:space-y-4">
              <h1 className="text-[22px] xs:text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-tight">
                Corporate TAX/VAT Services
              </h1>
              
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-2 xs:px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs xs:text-sm sm:text-base font-bold shadow-lg border border-white/30">
                <span className="mr-1.5 sm:mr-2">Starting at</span>
                <span className="text-yellow-300">AED 700</span>
              </div>
            </div>

            <div className="space-y-2 xs:space-y-2.5 sm:space-y-3">
              <h2 className="text-sm xs:text-base sm:text-lg lg:text-2xl font-semibold text-white mb-2.5 xs:mb-3 sm:mb-4">
                25+ years of expertise in:
              </h2>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-1.5 xs:gap-2 sm:gap-3">
                  <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 flex-shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm z-10 relative">
                    <Check className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  <span className="text-xs xs:text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => setShowPopup(true)}
              className="px-2.5 xs:px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-lg text-xs xs:text-sm sm:text-base font-medium transition-colors flex items-center"
              style={{ backgroundColor: '#f8e164', color: '#1e3a8a' }}
            >
              Contact us
              <ArrowRight className="ml-1.5 sm:ml-2 w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4" style={{ color: '#1e3a8a' }} />
            </button>

            {/* Image - Only visible on small screens, next to bullet points */}
            <div className="lg:hidden flex justify-center">
              <div className="relative">
                <img
                  src="/medium-shaot-woman-standing-office-with-her-hands-folded.png"
                  alt="Professional woman in business attire"
                  className="w-full h-auto object-cover max-w-[80px] xs:max-w-[100px] sm:max-w-[120px]"
                />
              </div>
            </div>
          </div>
          
          {/* Right Form - Full width on small screens, with image on larger screens */}
          <div className="lg:col-span-2">
            <div className="grid lg:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 lg:gap-6 items-center">
              {/* Image - Only visible on larger screens (lg and up) */}
              <div className="hidden lg:flex justify-center lg:justify-end order-2 lg:order-1">
                <div className="relative">
                  <img
                    src="/medium-shaot-woman-standing-office-with-her-hands-folded.png"
                    alt="Professional woman in business attire"
                    className="w-full h-auto object-cover max-w-sm"
                  />
                </div>
              </div>

              {/* Form - Full width on small screens */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2.5 xs:p-3 sm:p-4 lg:p-8 space-y-2.5 xs:space-y-3 sm:space-y-6 order-1 lg:order-2 lg:col-span-1">
                <div className="text-center space-y-2 sm:space-y-3">
                  <div className="inline-block bg-white text-blue-600 px-1.5 xs:px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                    Free Consultation
                  </div>
                  <h2 className="text-sm xs:text-base sm:text-lg lg:text-2xl font-bold text-white">
                    Request a Call Back
                  </h2>
                </div>

                <GoogleFormHandler 
                  formData={formData}
                  onSuccess={handleFormSuccess}
                  onError={handleFormError}
                  showSuccessMessage={true}
                  showErrorMessage={true}
                >
                  <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 lg:space-y-4">
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-0 rounded-lg h-7 xs:h-8 sm:h-10 lg:h-12 px-1.5 xs:px-2 sm:px-3 lg:px-4 text-xs xs:text-sm sm:text-base"
                      required
                    />
                    
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-0 rounded-lg h-7 xs:h-8 sm:h-10 lg:h-12 px-1.5 xs:px-2 sm:px-3 lg:px-4 text-xs xs:text-sm sm:text-base"
                      required
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-0 rounded-lg h-7 xs:h-8 sm:h-10 lg:h-12 px-1.5 xs:px-2 sm:px-3 lg:px-4 text-xs xs:text-sm sm:text-base"
                      required
                    />

                    <select 
                      className="w-full bg-white text-gray-500 border-0 rounded-lg h-7 xs:h-8 sm:h-10 lg:h-12 px-1.5 xs:px-2 sm:px-3 lg:px-4 appearance-none text-xs xs:text-sm sm:text-base"
                      value={formData.service}
                      onChange={(e) => handleInputChange('service', e.target.value)}
                      required
                    >
                      <option value="">- Select Services -</option>
                      <option value="corporate-tax-filing">Corporate Tax (Filing only)</option>
                      <option value="corporate-tax-filing-payable">Corporate Tax (Filing + Tax Payable)</option>
                    </select>

                    <button 
                      type="submit"
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-lg h-7 xs:h-8 sm:h-10 lg:h-12 text-xs xs:text-sm sm:text-base lg:text-lg font-medium transition-colors"
                    >
                      Request a Call Back
                    </button>
                  </div>
                </GoogleFormHandler>
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