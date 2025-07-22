import React from 'react';

const WhoWeHelp = () => {
  const businessTypes = [
    {
      title: "Corporates managing high transaction volumes",
      description: "Large-scale businesses requiring sophisticated tax strategies and compliance management",
      icon: "🏢"
    },
    {
      title: "SMEs without in-house tax expertise",
      description: "Small and medium enterprises needing professional tax guidance and support",
      icon: "📊"
    },
    {
      title: "Startups preparing for funding or audit-readiness",
      description: "Emerging businesses requiring tax compliance for investment and growth",
      icon: "🚀"
    },
    {
      title: "Holding companies with international entities",
      description: "Multi-entity structures requiring cross-border tax optimization",
      icon: "🌍"
    },
    {
      title: "E-commerce & digital businesses needing tax clarity",
      description: "Online businesses requiring specialized digital tax compliance",
      icon: "💻"
    },
    {
      title: "Businesses with permanent establishments across borders",
      description: "International operations requiring complex tax structuring",
      icon: "🏛️"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with UAE-based and cross-border businesses that require strategic corporate tax support:
            </p>
          </div>

          {/* Business Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessTypes.map((business, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{business.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {business.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-center leading-relaxed">
                  {business.description}
                </p>
                
                {/* Hover Effect Indicator */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 text-vigor-green font-medium">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-vigor-blue to-blue-900 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Not Sure Which Category You Fit?
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Every business is unique. Let us assess your specific needs and provide a tailored tax strategy that works for your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+971503821750" 
                  className="flex items-center justify-center space-x-2 bg-vigor-green hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Call for Assessment</span>
                </a>
                <button 
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-vigor-blue px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp; 