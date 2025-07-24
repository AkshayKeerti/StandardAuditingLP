import React from 'react';

const CertificationsTrust = () => {
  const corporateTaxServices = [
    {
      title: "Corporate Tax Registration & Return Filing",
      icon: "📋",
      category: "Core Service"
    },
    {
      title: "Tax Health Checks & Advisory",
      icon: "🔍",
      category: "Advisory"
    },
    {
      title: "Transfer Pricing Documentation",
      icon: "⚖️",
      category: "Specialized"
    },
    {
      title: "Cross-Border Tax Structuring",
      icon: "🌍",
      category: "Strategic"
    },
    {
      title: "Allowable Expense Planning",
      icon: "💰",
      category: "Optimization"
    },
    {
      title: "Accounting System Integration",
      icon: "🔗",
      category: "Technology"
    }
  ];

  const whoWeHelp = [
    {
      category: "Corporates managing high transaction volumes",
      description: "Large enterprises with complex tax requirements and high-volume transactions"
    },
    {
      category: "SMEs without in-house tax expertise",
      description: "Small and medium enterprises needing external tax support"
    },
    {
      category: "Startups preparing for funding or audit-readiness",
      description: "Growing companies preparing for investment or compliance audits"
    },
    {
      category: "Holding companies with international entities",
      description: "Companies with cross-border operations and multiple entities"
    },
    {
      category: "E-commerce & digital businesses needing tax clarity",
      description: "Online businesses requiring clear tax guidance for digital operations"
    },
    {
      category: "Businesses with permanent establishments across borders",
      description: "Companies with operations in multiple jurisdictions"
    }
  ];

  const urgencyStats = [
    { stat: "9%", label: "Corporate Tax Rate" },
    { stat: "2024", label: "Implementation Year" },
    { stat: "100%", label: "Compliance Required" },
    { stat: "0", label: "Penalties with Us" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-vigor-green/5 to-vigor-blue/5"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-vigor-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-vigor-blue/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-red-500/20 backdrop-blur-sm border border-red-400/30 text-red-300 rounded-full text-sm font-medium mb-8">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              UAE Corporate Tax Alert
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Tax Landscape Has Changed
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-vigor-green mb-8">
              Is Your Business Ready?
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                With the UAE introducing a dynamic corporate tax framework, your business faces more than financial reporting, 
                you face <span className="text-red-600 font-semibold">regulatory complexity</span>, <span className="text-red-600 font-semibold">compliance risk</span>, & <span className="text-red-600 font-semibold">operational disruption</span>.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                From interpreting fast-changing tax laws to avoiding costly penalties, staying compliant requires more than just filing returns. 
                It requires a tax strategy that protects your business.
              </p>
            </div>
          </div>

          {/* Urgency Statistics */}
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {urgencyStats.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <div className="text-3xl lg:text-4xl font-bold text-vigor-green mb-2">{item.stat}</div>
                    <div className="text-sm text-gray-600 font-medium">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Core Corporate Tax Services
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Standard Auditing, we specialize in guiding UAE-based businesses through the maze of tax regulations, 
                with a proactive, penalty-proof approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {corporateTaxServices.map((service, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:bg-gray-100 transition-all duration-500 transform hover:-translate-y-2 h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-4xl">{service.icon}</div>
                      <span className="px-3 py-1 bg-vigor-green/20 text-vigor-green text-xs font-semibold rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-24">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Who We Help
                  </h3>
                  <p className="text-xl text-gray-600 mb-8">
                    We work with UAE-based and cross-border businesses that require strategic corporate tax support:
                  </p>
                  <div className="space-y-4">
                    {whoWeHelp.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-6 h-6 bg-vigor-green rounded-full flex items-center justify-center mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.category}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Promise</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Zero Penalties</span>
                        <span className="text-vigor-green font-bold">Guaranteed</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Response Time</span>
                        <span className="text-vigor-green font-bold">&lt; 2 Hours</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Success Rate</span>
                        <span className="text-vigor-green font-bold">98%</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">FTA Certified</span>
                        <span className="text-vigor-green font-bold">✓</span>
                      </div>
                    </div>
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

export default CertificationsTrust; 