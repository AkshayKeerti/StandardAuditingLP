import React, { useState } from 'react';
import GoogleFormHandler from './GoogleFormHandler';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: ''
  });

  const businessSizes = [
    "Startup (1-10 employees)",
    "Small Business (11-50 employees)",
    "Medium Business (51-200 employees)",
    "Large Business (200+ employees)",
    "Multinational Corporation"
  ];

  const services = [
    "Corporate Tax (Filing only)",
    "Corporate Tax (Filing + Tax Payable)"
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceChange = (service, checked) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        service: service
      }));
    }
  };

  const handleSuccess = (data) => {
    // Reset form on success
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: ''
    });
  };

  const handleError = (errors) => {
    console.log('Form submission errors:', errors);
  };

  return (
    <section id="contact-form" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Get Your <span className="text-gradient">Free Consultation</span>
          </h2>
          <p className="section-subtitle">
            Speak with our tax experts and get personalized advice for your business needs.
          </p>
      </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <div className="bg-gray-light rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-dark mb-6">Contact Information</h3>
            
            <GoogleFormHandler 
              formData={formData}
              onSuccess={handleSuccess}
              onError={handleError}
              showSuccessMessage={true}
              showErrorMessage={true}
            >
              <div className="space-y-6">
                {/* Name and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                    <label className="block text-sm font-medium text-gray-dark mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white transition-all duration-300"
                      placeholder="Enter your full name"
                      />
                    </div>
                    
                  <div>
                    <label className="block text-sm font-medium text-gray-dark mb-2">Phone Number *</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                        <div className="w-6 h-4 bg-gradient-to-r from-red-500 via-green-500 to-black rounded-sm"></div>
                        <span className="text-sm text-gray-custom">+971</span>
                      </div>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 pl-20 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white transition-all duration-300"
                        placeholder="50 123 4567"
                      />
                    </div>
                    </div>
                  </div>
                  
                {/* Email and Business Size */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                    <label className="block text-sm font-medium text-gray-dark mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white transition-all duration-300"
                      placeholder="your@email.com"
                      />
                    </div>
                    
                  <div>
                    <label className="block text-sm font-medium text-gray-dark mb-2">Business Size *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white appearance-none transition-all duration-300">
                      <option value="">Select business size</option>
                        {businessSizes.map((size, index) => (
                          <option key={index} value={size}>{size}</option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-custom" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                {/* Services Needed */}
                <div>
                  <label className="block text-sm font-medium text-gray-dark mb-2">Services Needed *</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <label key={index} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="service"
                          value={service}
                          checked={formData.service === service}
                          onChange={(e) => handleServiceChange(service, e.target.checked)}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                          required
                        />
                        <span className="text-sm text-gray-custom">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                  <div>
                  <label className="block text-sm font-medium text-gray-dark mb-2">Additional Information</label>
                    <textarea
                      rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white transition-all duration-300"
                    placeholder="Tell us about your specific needs or questions..."
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                    <button
                      type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-custom"
                    >
                  Get Free Consultation
                    </button>

                <p className="text-xs text-gray-custom text-center">
                  ✓ Free consultation ✓ UAE tax experts ✓ No obligation ✓ 24-hour response
                </p>
              </div>
            </GoogleFormHandler>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-gradient-bg rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-white/90">+971 54 211 9784</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
              </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-white/90">Sales@standardauditors.com</p>
            </div>
          </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Visit Us</h4>
                    <p className="text-white/90">Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-light rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-dark mb-6">Why Choose Us?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-dark">25+ Years Experience</h4>
                    <p className="text-gray-custom text-sm">Certified professionals with extensive UAE market knowledge</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-dark">100% Compliance</h4>
                    <p className="text-gray-custom text-sm">Guaranteed compliance with UAE tax regulations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-dark">24/7 Support</h4>
                    <p className="text-gray-custom text-sm">Round-the-clock support for all your needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 