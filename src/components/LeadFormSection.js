import React from 'react';

const LeadFormSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Expert Consultation Available
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              Get Your <span className="text-yellow-300">Free Consultation</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Connect with our certified UAE tax experts for personalized guidance on your business tax strategy. 
              No obligation, completely confidential.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            {/* Left Content - Form matching Hero style */}
            <div className="order-1 lg:order-1">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 space-y-6">
                <div className="text-center space-y-3">
                  <div className="inline-block bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Free Consultation
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white">
                    Request a Call Back
                  </h3>
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
                    <option value="corporate-tax-filing">Corporate Tax (Filing only)</option>
                    <option value="corporate-tax-filing-payable">Corporate Tax (Filing + Tax Payable)</option>
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

            {/* Right Content - Visual Elements */}
            <div className="order-2 lg:order-2">
              <div className="relative">
                {/* Main Image Card */}
                <div className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm mb-6">
                      <img 
                        src="/medium-shaot-woman-standing-office-with-her-hands-folded.png" 
                        alt="Professional tax consultation session" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats Cards - Responsive positioning */}
                <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100 transform -rotate-3 z-20">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">25+</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">Years Experience</div>
                    <div className="w-6 h-1 sm:w-8 sm:h-1 bg-purple-600 rounded-full mx-auto mt-2"></div>
                  </div>
                </div>
                
                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-green-600 text-white rounded-2xl shadow-xl p-4 sm:p-6 transform rotate-3 z-20">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-1">1000+</div>
                    <div className="text-xs sm:text-sm font-medium">Happy Clients</div>
                    <div className="w-6 h-1 sm:w-8 sm:h-1 bg-white/30 rounded-full mx-auto mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection; 