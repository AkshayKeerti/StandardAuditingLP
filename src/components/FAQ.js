import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What are the penalties for late corporate tax filing in UAE?",
      answer: "Late filing penalties in UAE can range from AED 1,000 to AED 50,000 depending on the delay period and business size. Additionally, there may be interest charges on unpaid tax amounts. Our proactive approach helps you avoid these costly penalties by ensuring timely compliance."
    },
    {
      question: "How does Standard Auditing help with transfer pricing documentation?",
      answer: "We provide comprehensive transfer pricing documentation that aligns with OECD guidelines and UAE requirements. This includes preparing master files, local files, and country-by-country reports to minimize audit risks and ensure compliance with international tax standards."
    },
    {
      question: "What's included in your corporate tax health check service?",
      answer: "Our tax health check includes a comprehensive review of your current tax position, identification of compliance gaps, optimization opportunities, risk assessment, and actionable recommendations. We also provide a detailed report with implementation roadmap to improve your tax efficiency."
    },
    {
      question: "Do you provide ongoing support after initial tax setup?",
      answer: "Yes, we provide continuous support including quarterly compliance updates, monthly advisory calls (depending on your plan), proactive deadline reminders, regulatory change notifications, and ongoing tax optimization strategies to keep your business compliant and tax-efficient."
    },
    {
      question: "How quickly can you help with urgent tax compliance issues?",
      answer: "We offer 24-hour response times for urgent matters. Our team of certified UAE tax agents can quickly assess your situation and provide immediate guidance. For critical compliance issues, we can expedite services to meet tight deadlines and prevent penalties."
    },
    {
      question: "What makes Standard Auditing different from other tax firms?",
      answer: "With 25+ years of experience in the UAE market, certified tax professionals, 100% compliance guarantee, competitive pricing starting from AED 700, and 24/7 support, we provide comprehensive tax solutions tailored to your business needs with a focus on long-term success."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gray-light">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="section-subtitle">
            Common concerns about UAE tax and accounting services answered by our experts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-custom">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-dark pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-primary transform transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-custom leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-bg rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our UAE tax specialists are here to help. Get personalized answers to your specific tax and accounting concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/971503821750" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-custom"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Chat with Expert</span>
              </a>
              <a 
                href="tel:+971503821750" 
                className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-custom"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call Now</span>
              </a>
              <button 
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Email Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 