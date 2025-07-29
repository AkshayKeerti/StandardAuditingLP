import React from 'react';

const ListedAuditors = () => {
  const authorities = [
    {
      name: "DMCC",
      fullName: "Dubai Multi Commodities Centre",
      type: "Free Zone Authority",
      logo: "/dmcc.png"
    },
    {
      name: "DAFZA",
      fullName: "Dubai Airport Free Zone Authority",
      type: "Free Zone Authority",
      logo: "/dafza.png"
    },
    {
      name: "DIFC",
      fullName: "Dubai International Financial Centre",
      type: "Financial Free Zone",
      logo: "/difc.png"
    },
    {
      name: "Meydan",
      fullName: "Meydan Free Zone",
      type: "Free Zone Authority",
      logo: "/Meydan_Free_Zone_Logo.png"
    },
    {
      name: "SHAMS",
      fullName: "Sharjah Media City",
      type: "Free Zone Authority",
      logo: "/Shams_Logo.png"
    },
    {
      name: "JAFZA",
      fullName: "Jebel Ali Free Zone Authority",
      type: "Free Zone Authority",
      logo: "/jafza-log.png"
    },
    {
      name: "Chamber of Commerce",
      fullName: "Dubai Chamber of Commerce",
      type: "Business Association",
      logo: "/dubai_chamber.png"
    },
    {
      name: "Ministry of Economy",
      fullName: "UAE Ministry of Economy",
      type: "Federal Authority",
      logo: "/ministry_of_economy.png"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-blue-100/30 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-indigo-100/20"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-700 rounded-full text-sm font-medium mb-8">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Official Recognition
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Listed Auditors with <span className="text-blue-600">Major UAE Authorities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Standard Auditing is officially recognized and listed as approved auditors with all major UAE free zones, 
              and federal authorities, ensuring your business receives compliant and recognized services.
            </p>
          </div>

          {/* Authorities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {authorities.map((authority, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center p-2 border border-gray-100">
                      <img 
                        src={authority.logo} 
                        alt={`${authority.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-blue-100 rounded-lg flex items-center justify-center hidden">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {authority.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {authority.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {authority.fullName}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Statement */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-custom max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Trusted by UAE Authorities
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our official recognition with these authorities means your business receives services that are 
                fully compliant with UAE regulations and recognized by all major business entities in the country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListedAuditors; 