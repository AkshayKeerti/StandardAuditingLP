import React, { useState } from 'react';
import GoogleFormHandler from './GoogleFormHandler';

const LeadFormSection = ({ selectedPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedPackage || ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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
    <section id="lead-form-section" className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 pt-40 sm:pt-8 pb-28 sm:pb-8 flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column - Heading and Form */}
          <div className="text-white space-y-8">
            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-[32px] font-bold leading-tight">
                Get Your Free Consultation
              </h1>
              
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-base sm:text-lg font-bold shadow-lg border border-white/30">
                <span className="mr-2">Expert Guidance</span>
                <span className="text-yellow-300">100% Free</span>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 space-y-6">
              <div className="text-center space-y-3">
                <div className="inline-block bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                  Free Consultation
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-white">
                  Request a Call Back
                </h2>
              </div>

              <GoogleFormHandler 
                formData={formData}
                onSuccess={handleSuccess}
                onError={handleError}
                showSuccessMessage={true}
                showErrorMessage={true}
              >
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-0 rounded-lg h-12 px-4"
                    required
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-0 rounded-lg h-12 px-4"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-0 rounded-lg h-12 px-4"
                    required
                  />

                  <select 
                    className="w-full bg-white text-gray-500 border-0 rounded-lg h-12 px-4 appearance-none"
                    value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
                    required
                  >
                    <option value="">- Select Services -</option>
                    <option value="corporate-tax-filing">Corporate Tax (Filing only)</option>
                    <option value="corporate-tax-filing-payable">Corporate Tax (Filing + Tax Payable)</option>
                  </select>

                  <button 
                    type="submit"
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-lg h-12 text-lg font-medium transition-colors"
                  >
                    Request a Call Back
                  </button>
                </div>
              </GoogleFormHandler>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6">
              <img
                src="/woman-2.png"
                alt="Professional tax consultation session"
                className="w-full h-auto object-cover max-w-xs lg:max-w-sm"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-3 -left-3 bg-white rounded-lg shadow-lg p-3 border border-gray-100 transform -rotate-3 z-20">
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-600 mb-0.5">25+</div>
                  <div className="text-xs text-gray-600 font-medium">Years Experience</div>
                  <div className="w-5 h-0.5 bg-purple-600 rounded-full mx-auto mt-1"></div>
                </div>
              </div>
              
              <div className="absolute -top-3 -right-3 bg-green-600 text-white rounded-lg shadow-lg p-3 transform rotate-3 z-20">
                <div className="text-center">
                  <div className="text-xl font-bold mb-0.5">1000+</div>
                  <div className="text-xs font-medium">Happy Clients</div>
                  <div className="w-5 h-0.5 bg-white/30 rounded-full mx-auto mt-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection; 