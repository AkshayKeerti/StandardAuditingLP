import React from 'react';

const Services = () => {
  const coreServices = [
    {
      icon: "📋",
      title: "Corporate Tax Registration & Return Filing",
      description: "Ensure your business is registered, compliant, and on time, every time.",
      color: "bg-vigor-blue"
    },
    {
      icon: "🔍",
      title: "Tax Health Checks & Advisory",
      description: "Uncover gaps, fix inefficiencies, and optimize your tax position with expert-led reviews.",
      color: "bg-vigor-green"
    },
    {
      icon: "📊",
      title: "Transfer Pricing Documentation",
      description: "Avoid audit triggers with OECD-aligned reports for intercompany transactions.",
      color: "bg-vigor-purple"
    },
    {
      icon: "🌍",
      title: "Cross-Border Tax Structuring",
      description: "Minimize double taxation risks and align international operations with UAE tax law.",
      color: "bg-vigor-orange"
    },
    {
      icon: "💰",
      title: "Allowable Expense Planning",
      description: "Maximize tax savings by claiming what you're entitled to, no more guesswork.",
      color: "bg-vigor-yellow"
    },
    {
      icon: "🔗",
      title: "Accounting System Integration",
      description: "Seamless syncing of your finance systems with corporate tax requirements.",
      color: "bg-vigor-red"
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
      icon: "🏪"
    },
    {
      client: "Tech Startup",
      impact: "Claimed overlooked deductions, improving cash flow by 12%",
      icon: "🚀"
    },
    {
      client: "Multinational Firm",
      impact: "Aligned transfer pricing strategy, reducing audit exposure",
      icon: "🌐"
    }
  ];

  const certifications = [
    "Certified UAE Tax Agents",
    "10+ Years Serving UAE Businesses",
    "Recognized by Major Industry Associations",
    "4.9 Star Google Rating",
    "Proactive Updates on FTA Changes"
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-vigor-light-green">
      <div className="container-custom">
        {/* Tax Landscape Section */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-vigor-blue mb-8 leading-tight">
              The Tax Landscape Has Changed,<br />
              <span className="text-vigor-green">Is Your Business Ready?</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              <p>
                With the UAE introducing a dynamic corporate tax framework, your business
                faces more than financial reporting, you face regulatory complexity, compliance
                risk, & operational disruption.
              </p>
              <p>
                From interpreting fast-changing tax laws to avoiding costly penalties, staying
                compliant requires more than just filing returns.
              </p>
              <p className="font-semibold text-vigor-blue text-xl">
                It requires a tax strategy that protects your business.
              </p>
              <p>
                At Standard Auditing, we specialize in guiding UAE-based businesses through
                the maze of tax regulations, with a proactive, penalty-proof approach.
              </p>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-20">
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
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className={`${service.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-vigor-blue mb-4 leading-tight">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Help */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-vigor-blue mb-6">
                Who We Help
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with UAE-based and cross-border businesses that require strategic
                corporate tax support
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whoWeHelp.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-vigor-light-green transition-colors">
                  <div className="bg-vigor-green text-white p-2 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real Business Impact */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-vigor-blue mb-6">
              Real Business Impact
            </h2>
            <p className="text-xl text-gray-600">
              Proven results from businesses like yours
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {businessImpact.map((impact, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-vigor-green hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{impact.icon}</div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl">✅</span>
                  <h3 className="text-xl font-bold text-vigor-blue">{impact.client}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{impact.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-vigor-blue to-vigor-purple rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Our Process: Built to Keep You Compliant
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8 text-lg md:text-xl font-semibold mb-8">
              <div className="flex items-center space-x-2">
                <span className="bg-white text-vigor-blue w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <span>Consultation</span>
              </div>
              <span className="text-vigor-green text-2xl">→</span>
              <div className="flex items-center space-x-2">
                <span className="bg-white text-vigor-blue w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <span>Assessment</span>
              </div>
              <span className="text-vigor-green text-2xl">→</span>
              <div className="flex items-center space-x-2">
                <span className="bg-white text-vigor-blue w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <span>Setup</span>
              </div>
              <span className="text-vigor-green text-2xl">→</span>
              <div className="flex items-center space-x-2">
                <span className="bg-white text-vigor-blue w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <span>Filing</span>
              </div>
              <span className="text-vigor-green text-2xl">→</span>
              <div className="flex items-center space-x-2">
                <span className="bg-white text-vigor-blue w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                <span>Ongoing Advisory</span>
              </div>
            </div>
            
            <p className="text-center text-white/90 text-lg max-w-4xl mx-auto">
              Every step is handled by certified tax professionals who keep your business ahead
              of deadlines, errors, and regulatory curveballs.
            </p>
          </div>
        </div>

        {/* Certifications & Trust */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-vigor-blue mb-6">
              Certifications & Trust
            </h2>
            <p className="text-xl text-gray-600">
              You're in expert hands with Standard Auditing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-vigor-green text-white p-3 rounded-lg">
                  <span className="text-2xl">✅</span>
                </div>
                <span className="text-gray-700 font-semibold text-lg">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-vigor-blue mb-6">
              Get Corporate Tax Peace of Mind, Today
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Avoid costly mistakes, stay ahead of compliance updates, and focus on growth.
              Let Standard Auditing handle the complexities of UAE corporate tax while you
              lead your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary text-lg px-8 py-4 bg-green-600 text-white hover:bg-green-700 flex items-center space-x-2 shadow-lg transform hover:scale-105">
                <span>📱</span>
                <span>WhatsApp Now</span>
              </button>
              <button className="btn-primary text-lg px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 flex items-center space-x-2 shadow-lg transform hover:scale-105">
                <span>📞</span>
                <span>Call Us</span>
              </button>
              <button className="btn-primary text-lg px-8 py-4 bg-vigor-green text-white hover:bg-green-600 flex items-center space-x-2 shadow-lg transform hover:scale-105">
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