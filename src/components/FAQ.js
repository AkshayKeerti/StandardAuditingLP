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
    <section className="section-padding bg-white">
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


        </div>
      </div>
    </section>
  );
};

export default FAQ; 