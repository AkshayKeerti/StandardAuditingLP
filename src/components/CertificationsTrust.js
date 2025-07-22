import React from 'react';

const CertificationsTrust = () => {
  const trustIndicators = [
    {
      title: "Certified UAE Tax Agents",
      description: "Officially recognized by the Federal Tax Authority",
      icon: "🏛️"
    },
    {
      title: "10+ Years Serving UAE Businesses",
      description: "Decade of experience in UAE tax landscape",
      icon: "📅"
    },
    {
      title: "Recognized by Major Industry Associations",
      description: "Member of leading professional bodies",
      icon: "🏆"
    },
    {
      title: "4.9 Star Google Rating",
      description: "Consistently high client satisfaction",
      icon: "⭐"
    },
    {
      title: "Proactive Updates on FTA Changes",
      description: "Stay ahead of regulatory developments",
      icon: "📢"
    }
  ];

  const clientLogos = [
    { name: "Tech Startup", logo: "🚀" },
    { name: "Retail Chain", logo: "🛍️" },
    { name: "Manufacturing", logo: "🏭" },
    { name: "E-commerce", logo: "💻" },
    { name: "Consulting", logo: "💼" },
    { name: "Real Estate", logo: "🏢" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Certifications & Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You're in expert hands with Standard Auditing.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{indicator.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {indicator.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {indicator.description}
                  </p>
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center space-x-2 text-vigor-green font-medium">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Logos Section */}
          <div className="mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
              Trusted by Businesses Across Industries
            </h3>
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                {clientLogos.map((client, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gray-100 rounded-xl p-6 mb-4 group-hover:bg-vigor-green/10 transition-all duration-300">
                      <div className="text-3xl mb-2">{client.logo}</div>
                    </div>
                    <p className="text-sm font-medium text-gray-700">{client.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Trust Elements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Awards & Recognition */}
            <div className="bg-gradient-to-br from-vigor-blue to-blue-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Awards & Recognition</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-vigor-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Best Tax Advisory Firm 2023</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-vigor-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>FTA Excellence Award</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-vigor-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>ISO 9001:2015 Certified</span>
                </div>
              </div>
            </div>

            {/* Client Satisfaction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Satisfaction</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Overall Rating</span>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-bold text-gray-900">4.9/5</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Response Time</span>
                  <span className="font-bold text-vigor-green">Under 2 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Client Retention</span>
                  <span className="font-bold text-vigor-green">98%</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-vigor-green to-green-600 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Work with Certified Experts?
              </h3>
              <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who trust Standard Auditing with their tax compliance needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/971503821750" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-vigor-green px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Start Chat</span>
                </a>
                <button 
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-center space-x-2 bg-vigor-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>Get Started Today</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsTrust; 