import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Corporate Tax Registration",
      description: "Expert assistance with corporate tax registration and compliance for UAE businesses.",
      icon: "🏢",
      features: ["FTA Registration", "Tax Group Formation", "Compliance Setup"]
    },
    {
      title: "VAT Services",
      description: "Comprehensive VAT registration, filing, and advisory services for businesses.",
      icon: "📊",
      features: ["VAT Registration", "Return Filing", "VAT Advisory"]
    },
    {
      title: "Tax Advisory",
      description: "Strategic tax planning and advisory to optimize your business tax position.",
      icon: "💼",
      features: ["Tax Planning", "Risk Assessment", "Optimization"]
    },
    {
      title: "Audit Support",
      description: "Professional audit support and documentation preparation services.",
      icon: "🔍",
      features: ["Audit Preparation", "Documentation", "Compliance Review"]
    },
    {
      title: "Bookkeeping",
      description: "Accurate and timely bookkeeping services to maintain your financial records.",
      icon: "📚",
      features: ["Financial Records", "Monthly Reports", "Reconciliation"]
    },
    {
      title: "Company Formation",
      description: "Complete company formation and business setup services in the UAE.",
      icon: "🚀",
      features: ["Business Setup", "Licensing", "Corporate Services"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-vigor-blue">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive corporate tax and business services tailored for UAE businesses
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-vigor-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button className="text-vigor-blue hover:text-vigor-green font-semibold transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-vigor-blue to-blue-900 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and discover how we can help your business thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-vigor-green hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Free Consultation
                </button>
                <button className="bg-white hover:bg-gray-100 text-vigor-blue font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View All Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 