import React, { useState } from 'react';
import { submitToGoogleForm, validateFormData } from '../utils/googleFormSubmit';

const GoogleFormHandler = ({ 
  children, 
  formData, 
  onSuccess, 
  onError, 
  showSuccessMessage = true,
  showErrorMessage = true 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      setMessage(validation.errors.join(', '));
      setMessageType('error');
      if (onError) onError(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setMessage('');
    setMessageType('');

    try {
      const result = await submitToGoogleForm(formData);
      
      if (result.success) {
        setMessage(result.message);
        setMessageType('success');
        if (onSuccess) onSuccess(formData);
      } else {
        setMessage(result.message);
        setMessageType('error');
        if (onError) onError([result.message]);
      }
    } catch (error) {
      const errorMessage = 'An unexpected error occurred. Please try again.';
      setMessage(errorMessage);
      setMessageType('error');
      if (onError) onError([errorMessage]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
      
      {/* Success Message */}
      {showSuccessMessage && messageType === 'success' && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-green-800 font-medium">{message}</span>
          </div>
        </div>
      )}
      
      {/* Error Message */}
      {showErrorMessage && messageType === 'error' && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span className="text-red-800 font-medium">{message}</span>
          </div>
        </div>
      )}
      
      {/* Loading State */}
      {isSubmitting && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-blue-800 font-medium">Submitting your information...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleFormHandler; 