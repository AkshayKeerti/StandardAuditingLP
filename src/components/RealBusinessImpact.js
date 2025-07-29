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
    <section className="pt-6 lg:pt-8 pb-20 lg:pb-32 px-6 sm:px-6 lg:px-8 bg-white">
      
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-vigor-green/20 backdrop-blur-sm border border-vigor-green/30 text-vigor-green rounded-full text-sm font-medium mb-8">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Proven Results
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Real Business Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              See how we've helped businesses across the UAE achieve compliance, 
              optimize their tax position, and avoid costly penalties.
            </p>
          </div>

          {/* Business Impact Cases */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessCases.map((case_, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:bg-gray-50 transition-all duration-500 transform hover:-translate-y-2 h-full shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-4xl">{case_.icon}</div>
                      <span className="px-3 py-1 bg-vigor-green/20 text-vigor-green text-xs font-semibold rounded-full">
                        {case_.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {case_.company}
                    </h3>
                    <div className="mb-4">
                      <div className="text-xl font-bold text-vigor-green mb-2">
                        {case_.impact}
                      </div>
                      <p className="text-gray-600 leading-relaxed">
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
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Process: Built to Keep You Compliant
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-500 transform hover:-translate-y-2 text-center">
                      {/* Step Number */}
                      <div className="w-12 h-12 bg-vigor-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className="text-3xl mb-4">{step.icon}</div>
                      
                      {/* Step Title */}
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {step.step}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
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

          {/* Certifications & Trust Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Certifications & Trust
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You're in expert hands with Standard Auditing.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-vigor-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Certified UAE Tax Agents</h4>
                  <p className="text-gray-600 text-sm">Officially recognized by the Federal Tax Authority</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-vigor-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">25+ Years Serving UAE Businesses</h4>
                  <p className="text-gray-600 text-sm">Decades of experience in UAE tax landscape</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-vigor-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Recognized by Major Industry Associations</h4>
                  <p className="text-gray-600 text-sm">Member of leading professional bodies</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-vigor-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">4.9 Star Google Rating</h4>
                  <p className="text-gray-600 text-sm">Consistently high client satisfaction</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-vigor-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Proactive Updates on FTA Changes</h4>
                  <p className="text-gray-600 text-sm">Stay ahead of regulatory developments</p>
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