import React from 'react';

const LeadFormSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-violet-100/30 to-fuchsia-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-violet-100/20"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-vigor-green/10 backdrop-blur-sm border border-vigor-green/20 text-vigor-green rounded-full text-sm font-semibold mb-6">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Expert Consultation Available
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get Your <span className="text-gradient">Free Consultation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with our certified UAE tax experts for personalized guidance on your business tax strategy. 
              No obligation, completely confidential.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content - Enhanced Form */}
            <div className="order-1 lg:order-1">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-12 relative overflow-hidden">
                {/* Form Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-vigor-green/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-vigor-blue/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center px-4 py-2 bg-vigor-green/10 text-vigor-green rounded-full text-sm font-semibold mb-4">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Free Consultation
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      Start Your Tax Strategy
                    </h3>
                    <p className="text-gray-600">
                      Get personalized guidance from our UAE tax experts
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vigor-green focus:border-vigor-green transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vigor-green focus:border-vigor-green transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vigor-green focus:border-vigor-green transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                            <div className="w-6 h-4 bg-gradient-to-r from-red-500 via-green-500 to-black rounded-sm"></div>
                            <span className="text-gray-500 text-sm font-medium">+971</span>
                          </div>
                          <input
                            type="tel"
                            required
                            className="w-full px-4 py-4 pl-20 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vigor-green focus:border-vigor-green transition-all duration-300 bg-gray-50 focus:bg-white"
                            placeholder="50 123 4567"
                          />
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vigor-green focus:border-vigor-green transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Business Type
                        </label>
                        <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vigor-green focus:border-vigor-green transition-all duration-300 bg-gray-50 focus:bg-white appearance-none">
                          <option value="">Select business type</option>
                          <option value="startup">Startup</option>
                          <option value="sme">SME</option>
                          <option value="corporate">Corporate</option>
                          <option value="multinational">Multinational</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Services Needed
                        </label>
                        <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vigor-green focus:border-vigor-green transition-all duration-300 bg-gray-50 focus:bg-white appearance-none">
                          <option value="">Select services</option>
                          <option value="vat">VAT Registration & Filing</option>
                          <option value="corporate">Corporate Tax Planning</option>
                          <option value="compliance">Tax Compliance</option>
                          <option value="audit">Tax Audit Support</option>
                          <option value="advisory">Tax Advisory</option>
                          <option value="multiple">Multiple Services</option>
                        </select>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Additional Information
                      </label>
                      <textarea
                        rows="4"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vigor-green focus:border-vigor-green transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                        placeholder="Tell us about your specific tax needs or questions..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-vigor-green to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                      <div className="flex items-center justify-center space-x-3">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Get Free Consultation</span>
                      </div>
                    </button>

                    <div className="text-center pt-6">
                      <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-vigor-green" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Free consultation</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-vigor-green" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>UAE tax experts</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-vigor-green" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>No obligation</span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Elements */}
            <div className="order-2 lg:order-2">
              <div className="relative">
                {/* Main Image Card */}
                <div className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
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
                
                {/* Floating Stats Cards - 25+ Years Experience and 1000+ Happy Clients in Front */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transform -rotate-3 z-20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">25+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                    <div className="w-8 h-1 bg-purple-600 rounded-full mx-auto mt-2"></div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-vigor-green text-white rounded-2xl shadow-xl p-6 transform rotate-3 z-20">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">1000+</div>
                    <div className="text-sm font-medium">Happy Clients</div>
                    <div className="w-8 h-1 bg-white/30 rounded-full mx-auto mt-2"></div>
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