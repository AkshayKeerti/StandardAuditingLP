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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-dark mb-6 sm:mb-8 leading-tight">
              The Tax Landscape Has Changed, Is Your Business Ready?
            </h2>
          </div>

          {/* Main Content */}
          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            {/* First Paragraph */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 sm:p-8 rounded-2xl border-l-4 border-primary">
              <p className="text-lg sm:text-xl text-gray-dark leading-relaxed text-left">
                With the UAE introducing a dynamic corporate tax framework, your business faces more than financial reporting, you face regulatory complexity, compliance risk, & operational disruption.
              </p>
            </div>

            {/* Second Paragraph */}
            <div className="bg-gradient-to-r from-secondary/5 to-accent/5 p-6 sm:p-8 rounded-2xl border-l-4 border-secondary">
              <p className="text-lg sm:text-xl text-gray-dark leading-relaxed text-left">
                From interpreting fast-changing tax laws to avoiding costly penalties, staying compliant requires more than just filing returns. It requires a tax strategy that protects your business.
              </p>
            </div>

            {/* Third Paragraph */}
            <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-6 sm:p-8 rounded-2xl border-l-4 border-accent">
              <p className="text-lg sm:text-xl text-gray-dark leading-relaxed text-left">
                At Standard Auditing, we specialize in guiding UAE-based businesses through the maze of tax regulations, with a proactive, penalty-proof approach.
              </p>
            </div>
          </div>

          {/* Core Services Section */}
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-dark">
                Our Core Corporate Tax Services
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {coreServices.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 sm:p-6 bg-gray-light rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-custom transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary-dark transition-colors duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg text-gray-dark font-medium leading-relaxed text-left">
                      {service}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 sm:p-10 text-white text-center">
            <div className="max-w-2xl mx-auto">
              <h4 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Ready to Secure Your Business?
              </h4>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                Don't let tax complexity put your business at risk. Get expert guidance that keeps you compliant and protected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-custom flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>Get Free Consultation</span>
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Call Now</span>
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