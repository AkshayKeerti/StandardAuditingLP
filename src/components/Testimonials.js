import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Senthil Kumar",
      position: "Managing Director",
      company: "Triway Technologies LLC",
      quote: "We have maintained a longstanding partnership with the esteemed team at Standard Auditing, which has greatly contributed to our successful journey. It gives us great pleasure to provide this reference, attesting to the exceptional quality of their services and the value they have brought to our business",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Mohammed A Omar",
      position: "CEO",
      company: "Fortune Consulting FZE",
      quote: "We have received an exemplary level of diligent and professional service from the team at Standard Auditing. Their proactive approach has been instrumental in our satisfaction. We are delighted to extend our referral of their services to our extensive personal and professional network.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Alex Smith",
      position: "CEO",
      company: "Financial Report Limited",
      quote: "Standard Auditing played a crucial role in guiding us through the internal preparation, registration, and compliance process of VAT. Their invaluable advice and assistance have been instrumental in our successful journey. We extend our sincere gratitude for their support and expertise.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Ravichandran",
      position: "Financial Manager",
      company: "Silver Bright",
      quote: "We have been working with Standard Auditing since 2016 for our auditing, accounts, and taxation needs. They have streamlined our financial processes and proven to be both proficient and trustworthy. They are key allies to our success, and I wholeheartedly recommend them to anyone looking for dependable financial experts.",
      rating: 5,
      image: "👨‍💼"
    }
  ];

  const clientLogos = [
    { name: "Carl Stahl", logo: "/Carl Stahl.png" },
    { name: "Malwan Star", logo: "/Malwan star.png" },
    { name: "TD Williamson", logo: "/TDWilliamson-1.png" },
    { name: "Yield4Finance", logo: "/Yield4Finance.png" },
    { name: "Multiproducts", logo: "/Multiproducts.webp" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-vigor-green/5 to-vigor-blue/5"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-vigor-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-vigor-blue/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Real testimonials from UAE businesses that trust Standard Auditing for their tax and accounting needs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-custom">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-dark leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-4xl">{testimonials[currentIndex].image}</div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-dark text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-custom">{testimonials[currentIndex].position}</p>
                    <p className="text-sm text-gray-custom">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-custom hover:shadow-custom-lg transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-custom hover:shadow-custom-lg transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Client Logos Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-dark mb-4">
                Trusted by Leading Companies
              </h3>
              <p className="text-gray-custom text-lg">
                We're proud to serve businesses across various industries in the UAE
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-custom">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                {clientLogos.map((client, index) => (
                  <div key={index} className="flex justify-center items-center group">
                    <div className="relative p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-md">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="h-12 lg:h-16 w-auto object-contain transition-all duration-300 opacity-70 hover:opacity-100"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-dark mb-2">4.9 Star Rating</h4>
                <p className="text-gray-custom text-sm">Google Reviews</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-dark mb-2">500+ Clients</h4>
                <p className="text-gray-custom text-sm">UAE Businesses</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-dark mb-2">25+ Years</h4>
                <p className="text-gray-custom text-sm">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 