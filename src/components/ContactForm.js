import React from 'react';

const ContactForm = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-vigor-light-purple-bg to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-vigor-blue leading-tight">
              Get in touch to know more about Our Accounting Packages
            </h2>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-purple focus:border-transparent"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-purple focus:border-transparent"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-purple focus:border-transparent"
                />
              </div>
              
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigor-purple focus:border-transparent">
                  <option value="">- Select Package -</option>
                  <option value="startup">Start Up Package</option>
                  <option value="silver">Silver Package</option>
                  <option value="gold">Gold Package</option>
                  <option value="platinum">Platinum Package</option>
                  <option value="elite">Elite Package</option>
                  <option value="ultimate">Ultimate Package</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Request a Quote
              </button>
            </form>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Plant Image */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full opacity-50"></div>
            
            {/* Woman Image */}
            <div className="relative z-10 mt-8">
              <div className="w-80 h-96 mx-auto bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-lg">Professional Woman Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 