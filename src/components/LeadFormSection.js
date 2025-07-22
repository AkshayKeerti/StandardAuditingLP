import React from 'react';

const LeadFormSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-gradient-to-br from-vigor-blue to-blue-900 rounded-2xl p-8 lg:p-12 shadow-2xl">
                <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm">
                  <img 
                    src="/medium-shaot-woman-standing-office-with-her-hands-folded.png" 
                    alt="Business leader consulting with finance expert" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    Expert Tax Consultation
                  </h3>
                  <p className="text-gray-200 text-sm lg:text-base">
                    Get personalized advice from our certified tax specialists
                  </p>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-vigor-blue">25+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-vigor-green text-white rounded-lg shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-xs">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Lead Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-10">
              <div className="text-center mb-8">
                <div className="inline-block bg-vigor-green text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Free Consultation
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Get Your Tax Strategy Consultation
                </h2>
                <p className="text-gray-600 text-sm lg:text-base">
                  Speak with our UAE tax experts and get a personalized strategy for your business
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-green focus:border-transparent transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-green focus:border-transparent transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-green focus:border-transparent transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                        <div className="w-6 h-4 bg-gradient-to-r from-red-500 via-green-500 to-black rounded-sm"></div>
                        <span className="text-gray-400 text-sm">+971</span>
                      </div>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 pl-20 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-green focus:border-transparent transition-all duration-300"
                        placeholder="50 123 4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-green focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-green focus:border-transparent transition-all duration-300 appearance-none">
                    <option value="">Select your business type</option>
                    <option value="startup">Startup</option>
                    <option value="sme">SME</option>
                    <option value="corporate">Corporate</option>
                    <option value="multinational">Multinational</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tax Services Needed
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-green focus:border-transparent transition-all duration-300 appearance-none">
                    <option value="">Select services you need</option>
                    <option value="vat">VAT Registration & Filing</option>
                    <option value="corporate">Corporate Tax Planning</option>
                    <option value="compliance">Tax Compliance</option>
                    <option value="audit">Tax Audit Support</option>
                    <option value="advisory">Tax Advisory</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-green focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your specific tax needs or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-vigor-green hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Free Consultation
                </button>

                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    ✓ Free consultation ✓ UAE tax experts ✓ No obligation ✓ Confidential
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection; 