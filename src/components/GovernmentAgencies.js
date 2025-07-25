import React from 'react';

const GovernmentAgencies = () => {
  const agencies = [
    {
      name: "Federal Tax Authority",
      arabicName: "الهيئة الاتحادية للضرائب",
      logo: "/federa;_tax_authority.png"
    },
    {
      name: "Dubai Economy and Tourism",
      arabicName: "DUBAI للاقتصاد والسياحة Economy and Tourism",
      logo: "/dubai_economy_and_tourism.png"
    },
    {
      name: "Dubai Customs",
      arabicName: "جمارك DUBAI CUSTOMS",
      logo: "/dubaicustoms-logo.png"
    },
    {
      name: "Dubai Department of Economic Development",
      arabicName: "SDA",
      logo: "/the-department-of-economic-development-dubai-logo.png"
    },
    {
      name: "Roads and Transport Authority",
      arabicName: "RTA",
      logo: "/RTA_Dubai_logo.png"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100/20 to-blue-100/20"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-700 rounded-full text-sm font-medium mb-8">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
              </svg>
              Government Partnerships
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We Work Closely with <span className="text-blue-600">All Government Agencies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our established relationships with key UAE government entities ensure seamless compliance 
              and efficient processing of all your business requirements.
            </p>
          </div>

          {/* Agencies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {agencies.map((agency, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 h-full">
                  <div className="flex flex-col items-center text-center">
                    {/* Logo Container */}
                    <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center p-3 mb-4 border border-gray-100 group-hover:border-blue-200 transition-colors duration-300">
                      <img 
                        src={agency.logo} 
                        alt={`${agency.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-blue-100 rounded-lg flex items-center justify-center hidden">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Agency Name */}
                    <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {agency.name}
                    </h4>
                    
                    {/* Arabic Name */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {agency.arabicName}
                    </p>
                  </div>
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
                Streamlined Government Processes
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our direct connections with government agencies mean faster processing times, 
                reduced paperwork, and expert guidance through all regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentAgencies; 