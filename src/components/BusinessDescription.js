import React from 'react';

const BusinessDescription = () => {
  const coreServices = [
    "Corporate Tax Registration & Return Filing",
    "Tax Health Checks & Advisory",
    "Transfer Pricing Documentation",
    "Cross-Border Tax Structuring",
    "Allowable Expense Planning",
    "Accounting System Integration (Zoho, QuickBooks)"
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              The Tax Landscape Has Changed, Is Your Business Ready?
            </h2>
            <div className="w-24 h-1 bg-vigor-green mx-auto rounded-full"></div>
          </div>

          {/* Problem Statement */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-8 rounded-r-lg mb-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                The Challenge
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                With the UAE introducing a dynamic corporate tax framework, your business faces more than financial reporting, you face regulatory complexity, compliance risk, & operational disruption.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From interpreting fast-changing tax laws to avoiding costly penalties, staying compliant requires more than just filing returns.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-vigor-blue/10 border-l-4 border-vigor-blue p-8 rounded-r-lg">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                The Solution
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                It requires a tax strategy that protects your business.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                At Standard Auditing, we specialize in guiding UAE-based businesses through the maze of tax regulations, with a proactive, penalty-proof approach.
              </p>
            </div>
          </div>

          {/* Core Services */}
          <div className="mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
              Our Core Corporate Tax Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-vigor-green rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {service}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-vigor-blue to-blue-900 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Protect Your Business?
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Don't wait until it's too late. Get expert guidance to navigate the new tax landscape and ensure your business stays compliant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/971503821750" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
                <button 
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-vigor-blue px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>Get Free Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDescription; 