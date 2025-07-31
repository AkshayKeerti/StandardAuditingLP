import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PricingPackages from './components/PricingPackages';
import ListedAuditors from './components/ListedAuditors';
import GovernmentAgencies from './components/GovernmentAgencies';
import ClientLogos from './components/ClientLogos';
import CertificationsTrust from './components/CertificationsTrust';
import RealBusinessImpact from './components/RealBusinessImpact';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import LeadFormSection from './components/LeadFormSection';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  useEffect(() => {
    // Check if popup has been shown before (using localStorage)
    const popupShown = localStorage.getItem('contactPopupShown');
    
    if (!popupShown) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setShowPopup(true);
        setHasShownPopup(true);
        // Mark as shown in localStorage so it doesn't show again
        localStorage.setItem('contactPopupShown', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSubmitPopup = (phoneNumber) => {
    // Handle the form submission here
    console.log('Phone number submitted:', phoneNumber);
    // You can add your API call or form submission logic here
  };

  const handlePackageSelect = (packageValue) => {
    setSelectedPackage(packageValue);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <PricingPackages onPackageSelect={handlePackageSelect} />
      <ListedAuditors />
      <GovernmentAgencies />
      <RealBusinessImpact />
      <Testimonials />
      <FAQ />
      <LeadFormSection selectedPackage={selectedPackage} />
      <Footer />
      
      <ContactPopup 
        isOpen={showPopup}
        onClose={handleClosePopup}
        onSubmit={handleSubmitPopup}
      />
    </div>
  );
}

export default App; 