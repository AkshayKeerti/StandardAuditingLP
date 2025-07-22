import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LeadFormSection from './components/LeadFormSection';
import PricingPackages from './components/PricingPackages';
import BusinessDescription from './components/BusinessDescription';
import WhoWeHelp from './components/WhoWeHelp';
import RealBusinessImpact from './components/RealBusinessImpact';
import CertificationsTrust from './components/CertificationsTrust';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <LeadFormSection />
      <PricingPackages />
      <BusinessDescription />
      <WhoWeHelp />
      <RealBusinessImpact />
      <CertificationsTrust />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App; 