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
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-vigor-blue mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common concerns about UAE corporate tax compliance answered by our experts.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-vigor-blue pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-vigor-blue transform transition-transform ${
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
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Support */}
          <div className="mt-12 text-center">
            <div className="bg-vigor-light-green rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-vigor-blue mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-700 mb-6">
                Our UAE tax specialists are here to help. Get personalized answers to your specific corporate tax concerns.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary text-lg px-6 py-3 bg-vigor-green text-white hover:bg-green-600 flex items-center space-x-2">
                  <span>💬</span>
                  <span>Chat with Expert</span>
                </button>
                <button className="btn-primary text-lg px-6 py-3 bg-vigor-blue text-white hover:bg-blue-600 flex items-center space-x-2">
                  <span>📞</span>
                  <span>Call Now</span>
                </button>
                <button className="btn-primary text-lg px-6 py-3 bg-transparent text-vigor-blue border-2 border-vigor-blue hover:bg-vigor-blue hover:text-white flex items-center space-x-2">
                  <span>📧</span>
                  <span>Email Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 