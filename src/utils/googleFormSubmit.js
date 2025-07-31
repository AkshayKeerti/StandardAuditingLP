// Google Form submission utility
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScJUXGHYrWoF4btmwf-uJ6KtRzZM2SgZwj2fqsTf_KXW_duMA/formResponse';

// Entry IDs for the Google Form fields
const FORM_ENTRIES = {
  name: 'entry.462428206',
  phone: 'entry.293777269',
  email: 'entry.1852414386',
  service: 'entry.1950100993'
};

// Service mapping for the dropdown
const SERVICE_MAPPING = {
  'corporate-tax-filing': 'Corporate Tax (Filing only)',
  'corporate-tax-filing-payable': 'Corporate Tax (Filing + Tax Payable)',
  'Corporate Tax (Filing only)': 'Corporate Tax (Filing only)',
  'Corporate Tax (Filing + Tax Payable)': 'Corporate Tax (Filing + Tax Payable)'
};

/**
 * Submit form data to Google Form
 * @param {Object} formData - Object containing form data
 * @param {string} formData.name - User's name
 * @param {string} formData.phone - User's phone number
 * @param {string} formData.email - User's email
 * @param {string} formData.service - Selected service
 * @returns {Promise<Object>} - Result object with success status and message
 */
export const submitToGoogleForm = async (formData) => {
  try {
    // Prepare form data for Google Forms
    const googleFormData = new FormData();
    
    // Add name if provided
    if (formData.name) {
      googleFormData.append(FORM_ENTRIES.name, formData.name);
    }
    
    // Add phone if provided
    if (formData.phone) {
      googleFormData.append(FORM_ENTRIES.phone, formData.phone);
    }
    
    // Add email if provided
    if (formData.email) {
      googleFormData.append(FORM_ENTRIES.email, formData.email);
    }
    
    // Add service if provided
    if (formData.service) {
      const mappedService = SERVICE_MAPPING[formData.service] || formData.service;
      googleFormData.append(FORM_ENTRIES.service, mappedService);
    }

    // Submit to Google Form using fetch with no-cors mode
    // Note: Google Forms doesn't return CORS headers, so we use no-cors
    await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      mode: 'no-cors', // This is required for Google Forms
      body: googleFormData
    });

    // Since we're using no-cors, we can't read the response
    // But if we reach here, the request was likely successful
    return {
      success: true,
      message: 'Thank you! Your information has been submitted successfully. We will contact you soon.'
    };

  } catch (error) {
    console.error('Error submitting to Google Form:', error);
    return {
      success: false,
      message: 'There was an error submitting your information. Please try again or contact us directly.'
    };
  }
};

/**
 * Validate form data before submission
 * @param {Object} formData - Form data to validate
 * @returns {Object} - Validation result with isValid boolean and errors array
 */
export const validateFormData = (formData) => {
  const errors = [];

  // Validate name (required for most forms)
  if (formData.name !== undefined && (!formData.name || formData.name.trim().length < 2)) {
    errors.push('Name must be at least 2 characters long');
  }

  // Validate phone (required for most forms)
  if (formData.phone !== undefined && (!formData.phone || formData.phone.trim().length < 8)) {
    errors.push('Please enter a valid phone number');
  }

  // Validate email (if provided)
  if (formData.email !== undefined && formData.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}; 