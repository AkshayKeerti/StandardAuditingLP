import React from 'react';

const Hero = () => {
  const benefits = [
    "Expert UAE Tax Compliance",
    "Strategic Tax Planning",
    "VAT Registration & Filing",
    "Corporate Tax Advisory",
    "Tax Audit Support",
    "Cost-Effective Solutions"
  ];

  return (
    <section className="relative bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(/dubai.png)'
    }}>
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container-custom relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Corporate Tax Services for UAE Businesses
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed">
              Expert corporate tax solutions tailored for UAE businesses. From VAT compliance to corporate tax planning, we ensure your business stays compliant while optimizing tax efficiency.
            </p>
            
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-vigor-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary text-lg px-8 py-4 bg-vigor-green text-white hover:bg-green-600">
              Get Tax Consultation →
            </button>
          </div>

          {/* Right Content - Contact Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 max-w-md w-full">
              <div className="text-center mb-6">
                <div className="inline-block bg-vigor-green text-white px-4 py-1 rounded-full text-sm font-medium mb-3">
                  Free Tax Consultation
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Expert Tax Advice</h3>
                <p className="text-gray-600">Speak with our UAE tax specialists today</p>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-green focus:border-transparent bg-white/80"
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
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 pl-16 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-green focus:border-transparent bg-white/80"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-green focus:border-transparent bg-white/80"
                  />
                </div>
                
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-green focus:border-transparent bg-white/80 appearance-none">
                    <option value="">Select Tax Services</option>
                    <option value="vat">VAT Registration & Filing</option>
                    <option value="corporate">Corporate Tax Planning</option>
                    <option value="compliance">Tax Compliance</option>
                    <option value="audit">Tax Audit Support</option>
                    <option value="consulting">Tax Advisory</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-vigor-green hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Tax Consultation
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  ✓ Free consultation ✓ UAE tax experts ✓ No obligation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 