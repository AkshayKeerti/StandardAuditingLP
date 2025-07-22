import React from 'react';

const RealBusinessImpact = () => {
  const successStories = [
    {
      business: "Retail Group",
      impact: "Avoided AED 150K in penalties through audit-ready documentation",
      type: "Penalty Prevention"
    },
    {
      business: "Tech Startup",
      impact: "Claimed overlooked deductions, improving cash flow by 12%",
      type: "Cash Flow Optimization"
    },
    {
      business: "Multinational Firm",
      impact: "Aligned transfer pricing strategy, reducing audit exposure",
      type: "Risk Mitigation"
    }
  ];

  const processSteps = [
    {
      step: "Consultation",
      description: "Initial assessment of your tax needs and business structure",
      icon: "💬"
    },
    {
      step: "Assessment",
      description: "Comprehensive review of your current tax position",
      icon: "📋"
    },
    {
      step: "Setup",
      description: "Implementation of tax strategies and compliance systems",
      icon: "⚙️"
    },
    {
      step: "Filing",
      description: "Timely and accurate tax return preparation and submission",
      icon: "📄"
    },
    {
      step: "Ongoing Advisory",
      description: "Continuous support and updates on regulatory changes",
      icon: "🔄"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Real Business Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our proactive approach has delivered measurable results for businesses like yours
            </p>
          </div>

          {/* Success Stories */}
          <div className="mb-20">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
              Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-gradient-to-br from-vigor-blue to-blue-900 rounded-2xl p-8 text-white shadow-xl">
                  <div className="mb-4">
                    <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {story.type}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4">{story.business}</h4>
                  <p className="text-gray-200 leading-relaxed mb-6">
                    {story.impact}
                  </p>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-vigor-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Verified Result</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
              Our Process: Built to Keep You Compliant
            </h3>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Every step is handled by certified tax professionals who keep your business ahead of deadlines, errors, and regulatory curveballs.
            </p>
            
            {/* Process Steps */}
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white border-2 border-vigor-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {step.step}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Why Choose Standard Auditing?
              </h3>
              <p className="text-lg text-gray-600">
                Our proven process and expertise ensure your business stays compliant and optimized
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-vigor-green rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Certified Experts</h4>
                <p className="text-sm text-gray-600">UAE Tax Agent certified professionals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-vigor-green rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Timely Filing</h4>
                <p className="text-sm text-gray-600">Never miss a deadline again</p>
              </div>
              
              <div className="text-center">
                <div className="bg-vigor-green rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Error-Free</h4>
                <p className="text-sm text-gray-600">Zero penalty guarantee</p>
              </div>
              
              <div className="text-center">
                <div className="bg-vigor-green rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Proactive Updates</h4>
                <p className="text-sm text-gray-600">Stay ahead of regulatory changes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealBusinessImpact; 