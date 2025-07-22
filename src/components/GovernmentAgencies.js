import React from 'react';

const GovernmentAgencies = () => {
  const agencies = [
    {
      name: "Federal Tax Authority",
      arabicName: "الهيئة الاتحادية للضرائب",
      placeholder: "FTA Logo"
    },
    {
      name: "Dubai Economy and Tourism",
      arabicName: "DUBAI للاقتصاد والسياحة Economy and Tourism",
      placeholder: "DET Logo"
    },
    {
      name: "Dubai Customs",
      arabicName: "جمارك DUBAI CUSTOMS",
      placeholder: "Customs Logo"
    },
    {
      name: "Dubai Department of Economic Development",
      arabicName: "SDA",
      placeholder: "SDA Logo"
    },
    {
      name: "Roads and Transport Authority",
      arabicName: "RTA",
      placeholder: "RTA Logo"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left text-vigor-blue mb-8 sm:mb-12 lg:mb-16">
          We work closely with all Government Agencies
        </h2>

        <div className="flex flex-wrap justify-start items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {agencies.map((agency, index) => (
            <div key={index} className="text-left">
              <div className="w-24 h-16 sm:w-32 sm:h-20 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                <span className="text-gray-600 text-xs text-center px-2">
                  {agency.placeholder}
                </span>
              </div>
              <div className="text-xs text-gray-600 text-left">
                {agency.arabicName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernmentAgencies; 