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
    <section className="relative min-h-screen bg-gradient-to-r from-vigor-purple to-vigor-light-purple">
      <div className="container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Best Accounting Services in Dubai, UAE
            </h1>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-vigor-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary text-lg px-8 py-4">
              Contact us →
            </button>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Woman Image */}
            <div className="relative z-10">
              <div className="w-80 h-96 mx-auto bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-lg">Professional Woman Image</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="absolute top-8 -left-4 z-20 bg-white rounded-lg shadow-xl p-6 w-80">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-vigor-blue">Free Consultation</h3>
                <p className="text-gray-600">Request a Call Back</p>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-purple focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-purple focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-purple focus:border-transparent"
                  />
                </div>
                
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-purple focus:border-transparent">
                    <option value="">Select Services</option>
                    <option value="accounting">Accounting</option>
                    <option value="taxation">Taxation</option>
                    <option value="auditing">Auditing</option>
                    <option value="bookkeeping">Bookkeeping</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-vigor-purple hover:bg-vigor-dark-blue text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Request a Call Back
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 