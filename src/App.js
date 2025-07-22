import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PricingPackages from './components/PricingPackages';
import Services from './components/Services';
import CertificationsTrust from './components/CertificationsTrust';
import RealBusinessImpact from './components/RealBusinessImpact';
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
      <PricingPackages />
      <Services />
      <CertificationsTrust />
      <RealBusinessImpact />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App; 