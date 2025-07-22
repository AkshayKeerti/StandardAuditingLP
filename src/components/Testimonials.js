import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Al Mansouri",
      position: "CEO, TechStart Solutions",
      company: "Technology Startup",
      quote: "Standard Auditing helped us navigate the complex UAE corporate tax landscape. Their expertise saved us from costly penalties and improved our cash flow by 12% through overlooked deductions.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Sarah Johnson",
      position: "Finance Director",
      company: "Retail Group UAE",
      quote: "The team at Standard Auditing is exceptional. They avoided AED 150K in penalties through their audit-ready documentation. Their proactive approach gives us peace of mind.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Mohammed Hassan",
      position: "Managing Director",
      company: "Global Trading Co.",
      quote: "As a multinational firm, we needed expert transfer pricing documentation. Standard Auditing aligned our strategy perfectly, significantly reducing our audit exposure.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Fatima Al Zahra",
      position: "Founder",
      company: "E-commerce Platform",
      quote: "Starting a digital business in UAE was overwhelming until we found Standard Auditing. Their tax clarity and guidance have been invaluable for our growth.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "David Chen",
      position: "CFO",
      company: "Manufacturing SME",
      quote: "Standard Auditing's corporate tax services are world-class. Their 10+ years of UAE experience and certified expertise make them our trusted tax partner.",
      rating: 5,
      image: "👨‍💼"
    }
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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-left mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-vigor-blue mb-4 sm:mb-6 text-left">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl text-left">
            Real testimonials from UAE businesses that trust Standard Auditing for their corporate tax compliance needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="text-left">
                {/* Rating Stars */}
                <div className="flex justify-start mb-4 sm:mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 italic text-left">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="text-3xl sm:text-4xl">{testimonials[currentIndex].image}</div>
                  <div className="text-left">
                    <h4 className="font-bold text-vigor-blue text-base sm:text-lg text-left">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm sm:text-base text-gray-600 text-left">{testimonials[currentIndex].position}</p>
                    <p className="text-xs sm:text-sm text-gray-500 text-left">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow z-10"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-vigor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow z-10"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-vigor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-start mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-vigor-green' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-12 text-left">
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl">✅</span>
                <span className="text-sm sm:text-base font-medium">4.9 Star Google Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl">✅</span>
                <span className="text-sm sm:text-base font-medium">500+ UAE Businesses</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl">✅</span>
                <span className="text-sm sm:text-base font-medium">10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 