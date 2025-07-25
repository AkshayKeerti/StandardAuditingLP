import React from 'react';

const PricingPackages = () => {
  const packages = [
    {
      name: "Corporate Tax – Filing Only",
      price: "AED 750",
      period: "+ VAT",
      color: "bg-red-500",
      description: "Ideal for businesses under AED 3 million annual revenue, qualifying for Small Business Relief",
      features: [
        "Corporate Tax Return Filing",
        "Eligibility Assessment for Small Business Relief",
        "Basic Compliance Check",
        "FTA Portal Review & Submission"
      ],
      cta: "Get Started"
    },
    {
      name: "Corporate Tax – Filing + Tax Payable",
      price: "AED 1,500",
      period: "+ VAT",
      color: "bg-blue-500",
      description: "Suitable for companies obligated to compute and pay Corporate Tax under current FTA rules, typically those with revenues above AED 3 million.",
      features: [
        "Full Corporate Tax Return Filing",
        "Tax Computation & Payment Summary",
        "Review of Financials & Adjustments",
        "Compliance Review & Documentation",
        "FTA Portal Submission & Confirmation",
        "Basic Advisory on Deductions & Adjustments",
        "WhatsApp/Email Support"
      ],
      cta: "Choose Growth",
      popular: true
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-left mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-4 sm:mb-6 text-left">
            Simple Monthly Plan Tiers
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl text-left">
            Choose the perfect corporate tax solution for your business. All plans include expert UAE tax compliance and ongoing support.
          </p>
        </div>

        <div className="flex flex-row gap-6 sm:gap-8 max-w-4xl mx-auto items-stretch">
          {packages.map((pkg, index) => (
            <div key={index} className="relative w-full flex-1 flex flex-col">
              {/* Popular banner positioned to not affect card alignment */}
              <div className="h-12 flex justify-center items-end mb-4">
                {pkg.popular && (
                  <span className="bg-green-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </span>
                )}
              </div>
              
              <div className={`bg-white rounded-[20px] shadow-xl flex flex-col flex-1 ${pkg.popular ? 'ring-4 ring-green-500' : ''}`}>
                {/* Package Header */}
                <div className={`${pkg.color} text-white p-6 sm:p-8 text-center rounded-t-[20px]`}>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-white/80 text-xs sm:text-sm">{pkg.description}</p>
                </div>

                {/* Package Price */}
                <div className="p-6 sm:p-8 text-center border-b border-gray-100">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">{pkg.price}</div>
                  <div className="text-sm sm:text-base text-gray-500">{pkg.period}</div>
                </div>

                {/* Package Features */}
                <div className="p-6 sm:p-8 flex-grow">
                  <ul className="space-y-3 sm:space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 text-left">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700 text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="p-6 sm:p-8 pt-0 mt-auto">
                  <button className={`w-full py-3 sm:py-4 px-6 sm:px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base h-12 sm:h-14 flex items-center justify-center ${
                    pkg.popular 
                      ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg' 
                      : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                  }`}>
                    {pkg.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-left mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-gray-600 mb-4 text-left">
            Need a custom solution? Contact us for a personalized quote.
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white hover:bg-green-600 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-colors">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;