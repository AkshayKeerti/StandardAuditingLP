import React from 'react';

const AboutSection = () => {
  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "1000+", label: "Happy Clients" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  const features = [
    "Expert UAE Tax Compliance",
    "Strategic Tax Planning",
    "VAT Registration & Filing",
    "Corporate Tax Advisory",
    "Tax Audit Support",
    "Cost-Effective Solutions"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-vigor-blue">Standard Auditing</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Standard Auditing is a leading corporate tax and business services provider in the UAE, 
                specializing in helping businesses navigate the complex tax landscape with confidence and ease.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-vigor-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-vigor-blue hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Learn More
                </button>
                <button className="border border-vigor-blue text-vigor-blue hover:bg-vigor-blue hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
                Why Choose Us?
              </h3>
              
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-vigor-blue mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-vigor-blue/10 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Our Commitment
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to providing exceptional service, ensuring compliance, 
                  and helping your business grow with confidence in the UAE market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 