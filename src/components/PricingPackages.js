import React from 'react';

const PricingPackages = () => {
  const features = [
    "No. of Transactions",
    "Payment Options",
    "Monthly Site Visit",
    "Accounting & Bookkeeping +",
    "Qtly Reporting +",
    "Vat Consultation",
    "VAT Returns Filing (Qtly)",
    "Corp Tax Advisory",
    "Corp Tax Filing (Yearly)",
    "Dedicated Account Executive",
    "Online Support"
  ];

  const packages = [
    {
      name: "START UP PACKAGE",
      price: "249 AED per month",
      color: "bg-vigor-red",
      features: {
        transactions: "up to 10",
        payment: "1-2 Payments",
        siteVisit: "To be Discussed",
        allIncluded: true
      }
    },
    {
      name: "SILVER PACKAGE",
      price: "599 AED per month",
      color: "bg-vigor-blue",
      features: {
        transactions: "up to 50",
        payment: "1-3 Payments",
        siteVisit: "To be Discussed",
        allIncluded: true
      }
    },
    {
      name: "GOLD PACKAGE",
      price: "699 AED per month",
      color: "bg-vigor-orange",
      features: {
        transactions: "up to 150",
        payment: "1-4 Payments",
        siteVisit: "Quarterly",
        allIncluded: true
      }
    },
    {
      name: "PLATINUM PACKAGE",
      price: "899 AED per month",
      color: "bg-vigor-green",
      features: {
        transactions: "up to 300",
        payment: "Flexible Payment",
        siteVisit: "Monthly",
        allIncluded: true
      }
    },
    {
      name: "ELITE PACKAGE",
      price: "1200 AED per month",
      color: "bg-vigor-purple",
      features: {
        transactions: "up to 500",
        payment: "Flexible Payment",
        siteVisit: "Monthly",
        allIncluded: true
      }
    },
    {
      name: "ULTIMATE PACKAGE",
      price: "2500+ AED per month",
      color: "bg-vigor-yellow",
      features: {
        transactions: "up to 1300",
        payment: "Flexible Payment",
        siteVisit: "Monthly",
        allIncluded: true
      }
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-vigor-blue mb-16">
          Our Accounting, Reporting & Taxation Packages
        </h2>

        <div className="overflow-x-auto">
          <div className="min-w-[1200px]">
            <div className="grid grid-cols-7 gap-4">
              {/* Feature List */}
              <div className="space-y-4">
                <div className="h-20"></div> {/* Header spacer */}
                {features.map((feature, index) => (
                  <div key={index} className="h-12 flex items-center text-sm font-medium text-gray-700">
                    {feature}
                  </div>
                ))}
                <div className="h-16"></div> {/* Button spacer */}
              </div>

              {/* Package Cards */}
              {packages.map((pkg, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                  {/* Package Header */}
                  <div className={`${pkg.color} text-white p-4 text-center relative flex-shrink-0 h-20 flex flex-col justify-center`}>
                    <svg className="w-6 h-6 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <h3 className="font-bold text-sm leading-tight">{pkg.name}</h3>
                  </div>

                  {/* Package Price */}
                  <div className="p-4 text-center flex-shrink-0">
                    <div className="text-2xl font-bold text-vigor-blue">{pkg.price}</div>
                  </div>

                  {/* Package Features */}
                  <div className="px-4 pb-4 space-y-3 flex-grow">
                    <div className="h-12 flex items-center justify-center text-sm text-gray-600">
                      {pkg.features.transactions}
                    </div>
                    <div className="h-12 flex items-center justify-center text-sm text-gray-600">
                      {pkg.features.payment}
                    </div>
                    <div className="h-12 flex items-center justify-center text-sm text-gray-600">
                      {pkg.features.siteVisit}
                    </div>
                    
                    {/* Checkmarks for included features */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="h-12 flex items-center justify-center">
                        <svg className="w-6 h-6 text-vigor-green" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ))}
                  </div>

                  {/* Choose Plan Button */}
                  <div className="p-4 flex-shrink-0">
                    <button className="w-full btn-secondary">
                      Choose Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages; 