import React from 'react';

const CertificationsTrust = () => {
  const corporateTaxServices = [
    {
      title: "Corporate Tax Registration & Return Filing",
      description: "Complete registration and accurate filing to ensure compliance with UAE's new corporate tax framework",
      icon: "📋",
      category: "Core Service"
    },
    {
      title: "Tax Health Checks & Advisory",
      description: "Comprehensive assessment of your tax position and strategic advisory to optimize compliance",
      icon: "🔍",
      category: "Advisory"
    },
    {
      title: "Transfer Pricing Documentation",
      description: "Expert documentation and compliance for related-party transactions and pricing strategies",
      icon: "⚖️",
      category: "Specialized"
    },
    {
      title: "Cross-Border Tax Structuring",
      description: "Strategic planning for international operations and cross-border tax optimization",
      icon: "🌍",
      category: "Strategic"
    },
    {
      title: "Allowable Expense Planning",
      description: "Maximize tax efficiency through strategic expense categorization and deduction optimization",
      icon: "💰",
      category: "Optimization"
    },
    {
      title: "Accounting System Integration",
      description: "Seamless integration with Zoho, QuickBooks and other systems for automated compliance",
      icon: "🔗",
      category: "Technology"
    }
  ];

  const keyBenefits = [
    {
      benefit: "Penalty-Proof Approach",
      description: "Zero penalties guaranteed with our proactive compliance strategy"
    },
    {
      benefit: "Expert Guidance",
      description: "Certified tax professionals with deep UAE tax law expertise"
    },
    {
      benefit: "Proactive Updates",
      description: "Stay ahead of regulatory changes with real-time updates"
    },
    {
      benefit: "24/7 Support",
      description: "Round-the-clock assistance for urgent tax matters"
    }
  ];

  const urgencyStats = [
    { stat: "9%", label: "Corporate Tax Rate" },
    { stat: "2024", label: "Implementation Year" },
    { stat: "100%", label: "Compliance Required" },
    { stat: "0", label: "Penalties with Us" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30"></div>
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-red-500/20 backdrop-blur-sm border border-red-400/30 text-red-300 rounded-full text-sm font-medium mb-8">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              UAE Corporate Tax Alert
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The Tax Landscape Has Changed
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-vigor-green mb-8">
              Is Your Business Ready?
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                With the UAE introducing a dynamic corporate tax framework, your business faces more than financial reporting, 
                you face <span className="text-red-400 font-semibold">regulatory complexity</span>, <span className="text-red-400 font-semibold">compliance risk</span>, & <span className="text-red-400 font-semibold">operational disruption</span>.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
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
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl lg:text-4xl font-bold text-vigor-green mb-2">{item.stat}</div>
                    <div className="text-sm text-gray-300 font-medium">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Core Corporate Tax Services
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                At Standard Auditing, we specialize in guiding UAE-based businesses through the maze of tax regulations, 
                with a proactive, penalty-proof approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {corporateTaxServices.map((service, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-4xl">{service.icon}</div>
                      <span className="px-3 py-1 bg-vigor-green/20 text-vigor-green text-xs font-semibold rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">
                      {service.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-24">
            <div className="bg-gradient-to-r from-vigor-blue/20 to-blue-900/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    Why Choose Standard Auditing?
                  </h3>
                  <div className="space-y-6">
                    {keyBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-vigor-green rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-white mb-1">{benefit.benefit}</h4>
                          <p className="text-gray-300">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h4 className="text-2xl font-bold text-white mb-6 text-center">Our Promise</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <span className="text-gray-300">Zero Penalties</span>
                        <span className="text-vigor-green font-bold">Guaranteed</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <span className="text-gray-300">Response Time</span>
                        <span className="text-vigor-green font-bold">&lt; 2 Hours</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <span className="text-gray-300">Success Rate</span>
                        <span className="text-vigor-green font-bold">98%</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <span className="text-gray-300">FTA Certified</span>
                        <span className="text-vigor-green font-bold">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-vigor-green to-green-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to Secure Your Business?
                </h3>
                <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                  Don't let tax complexity put your business at risk. Get expert guidance that keeps you compliant and protected.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/971503821750" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 bg-white hover:bg-gray-100 text-vigor-green px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Get Free Consultation</span>
                  </a>
                  <a 
                    href="tel:+971503821750"
                    className="flex items-center justify-center space-x-3 bg-vigor-blue hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>Call Now</span>
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

export default CertificationsTrust; 