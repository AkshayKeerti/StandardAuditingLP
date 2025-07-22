import React from 'react';

const ContactForm = () => {
  const businessSizes = [
    "Startup (1-10 employees)",
    "Small Business (11-50 employees)",
    "Medium Business (51-200 employees)",
    "Large Business (200+ employees)",
    "Multinational Corporation"
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-vigor-light-purple-bg to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237c3aed' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content - Contact Form */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Get in touch to know more about<br />
              <span className="text-vigor-blue">Our Corporate Tax Services</span>
            </h2>

            {/* Form Container with Translucent Background */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20">
              <form className="space-y-4 sm:space-y-6">
                {/* First Row - Name and Mobile Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-purple focus:border-transparent bg-white/90 text-sm sm:text-base"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                      {/* UAE Flag Icon */}
                      <div className="w-6 h-4 bg-gradient-to-r from-red-500 via-green-500 to-black rounded-sm"></div>
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      className="w-full px-4 py-3 pl-16 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-purple focus:border-transparent bg-white/90 text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                {/* Second Row - Email and Business Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-purple focus:border-transparent bg-white/90 text-sm sm:text-base"
                    />
                  </div>
                  
                  <div className="relative">
                    <select className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-purple focus:border-transparent bg-white/90 appearance-none text-sm sm:text-base">
                      <option value="">Select Business Size *</option>
                      {businessSizes.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <textarea
                    placeholder="Tell us about your tax compliance needs..."
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-purple focus:border-transparent bg-white/90 text-sm sm:text-base"
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    className="w-full bg-vigor-purple hover:bg-vigor-dark-blue text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    Get Free Tax Consultation
                  </button>
                </div>
              </form>

              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-xs sm:text-sm text-gray-500">
                  ✓ Free consultation ✓ UAE tax experts ✓ No obligation ✓ 24-hour response
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Woman */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-green-200 rounded-full opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-16 sm:w-32 h-16 sm:h-32 bg-vigor-purple rounded-full opacity-20"></div>
            
            {/* Woman Image */}
            <div className="relative z-10 mt-4 sm:mt-8">
              <div className="w-64 sm:w-80 h-80 sm:h-96 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                <div className="text-center p-6 sm:p-8">
                  <div className="w-16 sm:w-24 h-16 sm:h-24 bg-gray-400 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <svg className="w-8 sm:w-12 h-8 sm:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg font-medium">Professional Woman</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Smiling and confident</p>
                </div>
              </div>
            </div>

            {/* Chat Bubbles */}
            <div className="absolute top-4 sm:top-8 -left-2 sm:-left-4 z-20">
              {/* First Chat Bubble */}
              <div className="bg-vigor-yellow text-gray-800 p-2 sm:p-3 rounded-lg shadow-lg mb-2 max-w-xs">
                <p className="text-xs sm:text-sm">Hi there! my name is Eman</p>
              </div>
              
              {/* Second Chat Bubble */}
              <div className="bg-white text-gray-800 p-2 sm:p-3 rounded-lg shadow-lg max-w-xs">
                <p className="text-xs sm:text-sm">How can I help you today?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 