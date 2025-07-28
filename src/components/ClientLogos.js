import React from 'react';

const ClientLogos = () => {
  const clients = [
    {
      name: "Carl Stahl",
      logo: "/Carl Stahl.png",
      category: "Manufacturing"
    },
    {
      name: "TD Williamson",
      logo: "/TDWilliamson-1.png",
      category: "Oil & Gas"
    },
    {
      name: "Yield4Finance",
      logo: "/Yield4Finance.png",
      category: "Financial Services"
    },
    {
      name: "Multiproducts",
      logo: "/Multiproducts.webp",
      category: "Trading"
    },
    {
      name: "Malwan Star",
      logo: "/Malwan star.png",
      category: "Real Estate"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100/10 to-blue-100/10"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-200/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-700 rounded-full text-sm font-medium mb-8">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
              </svg>
              Trusted Partners
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted by <span className="text-green-600">Leading Businesses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We partner with businesses across diverse industries, providing expert tax solutions 
              that drive growth and ensure compliance in the UAE market.
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 mb-16">
            {clients.map((client, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 h-full">
                  <div className="flex flex-col items-center text-center">
                    {/* Logo Container */}
                    <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center p-4 mb-4 border border-gray-100 group-hover:border-green-200 transition-colors duration-300">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-green-100 rounded-lg flex items-center justify-center hidden">
                        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Client Name */}
                    <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {client.name}
                    </h4>
                    
                    {/* Category */}
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      {client.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Processing</h3>
              <p className="text-gray-600">Streamlined tax processes that save time and reduce administrative burden.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Specialized knowledge in UAE tax regulations and compliance requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Support</h3>
              <p className="text-gray-600">End-to-end tax services from registration to ongoing compliance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos; 