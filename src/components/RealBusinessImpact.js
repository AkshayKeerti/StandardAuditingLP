import React from 'react';

const RealBusinessImpact = () => {
  const businessCases = [
    {
      company: "Retail Group",
      impact: "Avoided AED 150K in penalties",
      description: "through audit-ready documentation",
      icon: "🛍️",
      category: "Penalty Prevention"
    },
    {
      company: "Tech Startup",
      impact: "Improved cash flow by 12%",
      description: "by claiming overlooked deductions",
      icon: "🚀",
      category: "Cash Flow Optimization"
    },
    {
      company: "Multinational Firm",
      impact: "Reduced audit exposure",
      description: "by aligning transfer pricing strategy",
      icon: "🌍",
      category: "Risk Mitigation"
    }
  ];

  const processSteps = [
    {
      step: "Consultation",
      description: "Initial assessment of your tax position and compliance needs",
      icon: "💬",
      duration: "1-2 Days"
    },
    {
      step: "Assessment",
      description: "Comprehensive review of your current tax structure and risks",
      icon: "🔍",
      duration: "3-5 Days"
    },
    {
      step: "Setup",
      description: "Implementation of compliant systems and documentation",
      icon: "⚙️",
      duration: "1-2 Weeks"
    },
    {
      step: "Filing",
      description: "Accurate and timely submission of all required returns",
      icon: "📋",
      duration: "Ongoing"
    },
    {
      step: "Ongoing Advisory",
      description: "Continuous support and proactive compliance monitoring",
      icon: "🔄",
      duration: "24/7"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent opacity-30"></div>
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-vigor-green/20 backdrop-blur-sm border border-vigor-green/30 text-vigor-green rounded-full text-sm font-medium mb-8">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Proven Results
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Real Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              See how we've helped businesses across the UAE achieve compliance, 
              optimize their tax position, and avoid costly penalties.
            </p>
          </div>

          {/* Business Impact Cases */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessCases.map((case_, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-4xl">{case_.icon}</div>
                      <span className="px-3 py-1 bg-vigor-green/20 text-vigor-green text-xs font-semibold rounded-full">
                        {case_.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {case_.company}
                    </h3>
                    <div className="mb-4">
                      <div className="text-xl font-bold text-vigor-green mb-2">
                        {case_.impact}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {case_.description}
                      </p>
                    </div>
                    <div className="flex items-center text-vigor-green">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Verified Result</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Process: Built to Keep You Compliant
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every step is handled by certified tax professionals who keep your business ahead of deadlines, 
                errors, and regulatory curveballs.
              </p>
            </div>

            {/* Process Flow */}
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-vigor-green via-vigor-blue to-vigor-green transform -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                {processSteps.map((step, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-br from-vigor-blue/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 text-center">
                      {/* Step Number */}
                      <div className="w-12 h-12 bg-vigor-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className="text-3xl mb-4">{step.icon}</div>
                      
                      {/* Step Title */}
                      <h4 className="text-xl font-bold text-white mb-3">
                        {step.step}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      {/* Duration */}
                      <div className="inline-flex items-center px-3 py-1 bg-vigor-green/20 text-vigor-green text-xs font-semibold rounded-full">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-vigor-green/10 to-vigor-blue/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-vigor-green mb-2">500+</div>
                  <div className="text-gray-300 font-medium">Businesses Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-vigor-green mb-2">AED 2M+</div>
                  <div className="text-gray-300 font-medium">Penalties Avoided</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-vigor-green mb-2">100%</div>
                  <div className="text-gray-300 font-medium">Compliance Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-vigor-blue to-blue-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to See Similar Results?
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  Join hundreds of businesses that trust Standard Auditing to keep them compliant 
                  and optimize their tax position.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/971503821750" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 bg-white hover:bg-gray-100 text-vigor-blue px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Start Your Success Story</span>
                  </a>
                  <a 
                    href="tel:+971503821750"
                    className="flex items-center justify-center space-x-3 bg-vigor-green hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>Call for Consultation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealBusinessImpact; 