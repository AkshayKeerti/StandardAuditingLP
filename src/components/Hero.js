import React from 'react';

const Hero = () => {
  const benefits = [
    "Unmatched Accuracy",
    "Cost-Effective Solutions", 
    "Time-Saving Expertise",
    "Proactive Fraud Detection",
    "Enhanced Productivity",
    "Compliance and no penalties"
  ];

  return (
    <section className="relative bg-gradient-to-br from-vigor-blue to-blue-900 py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8">
              Best Corporate Tax Services in Dubai, <span className="text-vigor-green">UAE</span>
            </h1>
            <div className="w-24 h-1 bg-vigor-green mx-auto rounded-full mb-8"></div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-12 lg:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <svg className="w-6 h-6 text-vigor-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-vigor-green hover:bg-green-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact us
            </button>
            <button className="bg-white hover:bg-gray-100 text-vigor-blue font-bold text-xl px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 