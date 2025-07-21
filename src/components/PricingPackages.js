import React from 'react';

const PricingPackages = () => {
  const packages = [
    {
      name: "STARTER",
      price: "AED 249",
      period: "per month",
      color: "bg-vigor-red",
      description: "Perfect for small businesses getting started with corporate tax compliance",
      features: [
        "Corporate Tax Registration",
        "Basic Tax Return Filing",
        "Quarterly Compliance Updates",
        "Email Support",
        "Basic Tax Advisory"
      ],
      cta: "Get Started"
    },
    {
      name: "GROWTH",
      price: "AED 599",
      period: "per month",
      color: "bg-vigor-blue",
      description: "Ideal for growing businesses with moderate transaction volumes",
      features: [
        "Everything in Starter",
        "Tax Health Checks",
        "Transfer Pricing Documentation",
        "Monthly Compliance Reviews",
        "Priority Support",
        "Dedicated Tax Advisor"
      ],
      cta: "Choose Growth",
      popular: true
    },
    {
      name: "SCALE",
      price: "AED 1,200",
      period: "per month",
      color: "bg-vigor-green",
      description: "Comprehensive solution for established businesses with complex needs",
      features: [
        "Everything in Growth",
        "Cross-Border Tax Structuring",
        "Advanced Expense Planning",
        "Accounting System Integration",
        "Weekly Support Calls",
        "Custom Tax Strategy",
        "Audit Support"
      ],
      cta: "Scale Up"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vigor-blue mb-6">
            Simple Monthly Plan Tiers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect corporate tax solution for your business. All plans include expert UAE tax compliance and ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${pkg.popular ? 'ring-4 ring-vigor-green transform scale-105' : ''}`}>
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-vigor-green text-white px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              {/* Package Header */}
              <div className={`${pkg.color} text-white p-8 text-center`}>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-white/80 text-sm">{pkg.description}</p>
              </div>

              {/* Package Price */}
              <div className="p-8 text-center border-b border-gray-100">
                <div className="text-4xl font-bold text-vigor-blue mb-1">{pkg.price}</div>
                <div className="text-gray-500">{pkg.period}</div>
              </div>

              {/* Package Features */}
              <div className="p-8">
                <ul className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-vigor-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="p-8 pt-0">
                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular 
                    ? 'bg-vigor-green text-white hover:bg-green-600 shadow-lg' 
                    : 'bg-gray-100 text-vigor-blue hover:bg-gray-200'
                }`}>
                  {pkg.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? Contact us for a personalized quote.
          </p>
          <button className="btn-primary text-lg px-8 py-4 bg-vigor-green text-white hover:bg-green-600">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages; 