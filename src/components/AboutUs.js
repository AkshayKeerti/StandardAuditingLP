import React from 'react';

const AboutUs = () => {
  const stats = [
    {
      number: "75",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-vigor-blue" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      label: "Dedicated Team"
    },
    {
      number: "5000",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-vigor-green" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      label: "Happy Customers"
    },
    {
      number: "5000",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-vigor-purple" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      label: "Audit Completed"
    },
    {
      number: "10+",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-vigor-orange" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
      label: "Years of Experience"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* About Us Title */}
        <div className="text-left mb-12 sm:mb-16">
          <div className="inline-block bg-gray-100 text-vigor-blue px-4 py-2 rounded-full text-sm font-medium">
            ABOUT US
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <div className="flex justify-start mb-3 sm:mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-vigor-blue mb-2 text-left">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium text-left">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 