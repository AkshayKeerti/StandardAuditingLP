import React from 'react';

const Services = () => {
  const coreServices = [
    {
      icon: "📋",
      title: "Corporate Tax Registration & Return Filing",
      description: "Ensure your business is registered, compliant, and on time, every time.",
      color: "bg-vigor-blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: "🔍",
      title: "Tax Health Checks & Advisory",
      description: "Uncover gaps, fix inefficiencies, and optimize your tax position with expert-led reviews.",
      color: "bg-vigor-green",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: "📊",
      title: "Transfer Pricing Documentation",
      description: "Avoid audit triggers with OECD-aligned reports for intercompany transactions.",
      color: "bg-vigor-purple",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: "🌍",
      title: "Cross-Border Tax Structuring",
      description: "Minimize double taxation risks and align international operations with UAE tax law.",
      color: "bg-vigor-orange",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: "💰",
      title: "Allowable Expense Planning",
      description: "Maximize tax savings by claiming what you're entitled to, no more guesswork.",
      color: "bg-vigor-yellow",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: "🔗",
      title: "Accounting System Integration",
      description: "Seamless syncing of your finance systems with corporate tax requirements.",
      color: "bg-vigor-red",
      gradient: "from-red-500 to-red-600"
    }
  ];

  const whoWeHelp = [
    "Corporates managing high transaction volumes",
    "SMEs without in-house tax expertise",
    "Startups preparing for funding or audit-readiness",
    "Holding companies with international entities",
    "E-commerce & digital businesses needing tax clarity",
    "Businesses with permanent establishments across borders"
  ];

  const businessImpact = [
    {
      client: "Retail Group",
      impact: "Avoided AED 150K in penalties through audit-ready documentation",
      icon: "🏪",
      metric: "AED 150K",
      metricLabel: "Penalties Avoided"
    },
    {
      client: "Tech Startup",
      impact: "Claimed overlooked deductions, improving cash flow by 12%",
      icon: "🚀",
      metric: "12%",
      metricLabel: "Cash Flow Improvement"
    },
    {
      client: "Multinational Firm",
      impact: "Aligned transfer pricing strategy, reducing audit exposure",
      icon: "🌐",
      metric: "100%",
      metricLabel: "Compliance Rate"
    }
  ];

  const certifications = [
    "Certified UAE Tax Agents",
    "10+ Years Serving UAE Businesses",
    "Recognized by Major Industry Associations",
    "4.9 Star Google Rating",
    "Proactive Updates on FTA Changes"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Consultation",
      description: "Free initial assessment of your tax needs",
      icon: "💬"
    },
    {
      step: "2",
      title: "Assessment",
      description: "Comprehensive review of your current position",
      icon: "📊"
    },
    {
      step: "3",
      title: "Setup",
      description: "Implementation of tax compliance systems",
      icon: "⚙️"
    },
    {
      step: "4",
      title: "Filing",
      description: "Timely submission of all required returns",
      icon: "📝"
    },
    {
      step: "5",
      title: "Ongoing Advisory",
      description: "Continuous support and strategic guidance",
      icon: "🔄"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-vigor-light-green">
      {/* Tax Landscape Section - Full Width with Background Image */}
      <div className="relative w-full mb-32">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: 'url(/medium-shaot-woman-standing-office-with-her-hands-folded.png)'
        }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                The Tax Landscape Has Changed,<br />
                <span className="text-vigor-green">Is Your Business Ready?</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-200 leading-relaxed max-w-5xl mx-auto">
                <p>
                  With the UAE introducing a dynamic corporate tax framework, your business
                  faces more than financial reporting, you face regulatory complexity, compliance
                  risk, & operational disruption.
                </p>
                <p>
                  From interpreting fast-changing tax laws to avoiding costly penalties, staying
                  compliant requires more than just filing returns.
                </p>
                <p className="font-semibold text-vigor-green text-2xl">
                  It requires a tax strategy that protects your business.
                </p>
                <p>
                  At Standard Auditing, we specialize in guiding UAE-based businesses through
                  the maze of tax regulations, with a proactive, penalty-proof approach.
                </p>
              </div>
              
              {/* Call to Action Button */}
              <div className="mt-12">
                <button className="bg-vigor-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Expert Tax Consultation →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Services - Full Width Design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-vigor-blue mb-6">
            Our Core Corporate Tax Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tax solutions designed to keep your business compliant and tax-efficient
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className={`${service.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-vigor-blue mb-4 leading-tight">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                
                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-vigor-green to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Who We Help - Full Width with Visual Elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-gradient-to-r from-vigor-blue to-vigor-purple rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Who We Help
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                We work with UAE-based and cross-border businesses that require strategic
                corporate tax support
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whoWeHelp.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="bg-vigor-green text-white p-2 rounded-lg flex-shrink-0 shadow-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Real Business Impact - Full Width with Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-vigor-blue mb-6">
            Real Business Impact
          </h2>
          <p className="text-xl text-gray-600">
            Proven results from businesses like yours
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {businessImpact.map((impact, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-vigor-green hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-vigor-green/5 rounded-full -translate-y-10 translate-x-10"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{impact.icon}</div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl">✅</span>
                  <h3 className="text-xl font-bold text-vigor-blue">{impact.client}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{impact.impact}</p>
                
                {/* Metric Display */}
                <div className="bg-gradient-to-r from-vigor-green to-green-500 text-white p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold">{impact.metric}</div>
                  <div className="text-sm opacity-90">{impact.metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Process - Full Width Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-gradient-to-r from-vigor-blue to-vigor-purple rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Our Process: Built to Keep You Compliant
              </h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto">
                Every step is handled by certified tax professionals who keep your business ahead
                of deadlines, errors, and regulatory curveballs.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-white/20 transform -translate-y-1/2"></div>
              
              <div className="grid lg:grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative text-center group">
                    {/* Step Circle */}
                    <div className="bg-white text-vigor-blue w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {step.step}
                    </div>
                    
                    {/* Step Content */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="text-3xl mb-3">{step.icon}</div>
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-white/80">{step.description}</p>
                    </div>
                    
                    {/* Arrow for mobile */}
                    {index < processSteps.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-4">
                        <svg className="w-6 h-6 text-white/50" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Trust - Full Width Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-vigor-blue mb-6">
            Certifications & Trust
          </h2>
          <p className="text-xl text-gray-600">
            You're in expert hands with Standard Auditing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="bg-gradient-to-r from-vigor-green to-green-500 text-white p-3 rounded-lg shadow-lg">
                <span className="text-2xl">✅</span>
              </div>
              <span className="text-gray-700 font-semibold text-lg">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-vigor-blue mb-6">
              Get Corporate Tax Peace of Mind, Today
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Avoid costly mistakes, stay ahead of compliance updates, and focus on growth.
              Let Standard Auditing handle the complexities of UAE corporate tax while you
              lead your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary text-lg px-8 py-4 bg-green-600 text-white hover:bg-green-700 flex items-center space-x-2 shadow-lg transform hover:scale-105 transition-all duration-300">
                <span>📱</span>
                <span>WhatsApp Now</span>
              </button>
              <button className="btn-primary text-lg px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 flex items-center space-x-2 shadow-lg transform hover:scale-105 transition-all duration-300">
                <span>📞</span>
                <span>Call Us</span>
              </button>
              <button className="btn-primary text-lg px-8 py-4 bg-vigor-green text-white hover:bg-green-600 flex items-center space-x-2 shadow-lg transform hover:scale-105 transition-all duration-300">
                <span>💰</span>
                <span>Request a Custom Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 