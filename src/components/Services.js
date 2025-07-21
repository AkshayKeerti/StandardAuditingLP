import React from 'react';

const Services = () => {
  const serviceTags = [
    "Corporate Tax Services",
    "Compliance & Risk Advisory",
    "Accounting",
    "Auditing",
    "Bookkeeping",
    "Corporate Tax Services",
    "Compliance & Risk Advisory",
    "Accounting",
    "Auditing",
    "Bookkeeping"
  ];

  const getTagColor = (tag) => {
    switch (tag) {
      case "Corporate Tax Services":
        return "text-vigor-purple";
      case "Compliance & Risk Advisory":
        return "text-vigor-yellow";
      case "Accounting":
        return "text-vigor-blue";
      case "Auditing":
        return "text-vigor-orange";
      case "Bookkeeping":
        return "text-vigor-green";
      default:
        return "text-vigor-blue";
    }
  };

  return (
    <section className="section-padding bg-vigor-light-green">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              An efficient accounting and bookkeeping service are the backbone of any business. 
              Standard Auditing provides seamless bookkeeping services that allow 
              you to focus on what you do best - growing your business. For businesses aiming to 
              reduce costs, increase productivity, gain access to specialized information, improve 
              performance, and focus on core competencies, outsourcing accounting & VAT-TAX filing 
              services is an excellent approach.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mb-12">
            <a 
              href="#contact" 
              className="inline-flex items-center text-vigor-green hover:text-vigor-blue font-semibold text-lg transition-colors"
            >
              Connect With Our Experts Now! 
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Service Tags Carousel - Full Width */}
      <div className="w-full overflow-hidden bg-vigor-light-green py-8">
        <div className="flex animate-scroll whitespace-nowrap">
          {serviceTags.map((tag, index) => (
            <span
              key={index}
              className={`inline-block mx-8 text-2xl font-bold ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 