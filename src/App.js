import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PricingPackages />
      <ListedAuditors />
      <GovernmentAgencies />
      <ClientLogos />
      <CertificationsTrust />
      <RealBusinessImpact />
      <Testimonials />
      <FAQ />
      <LeadFormSection />
      <Footer />
    </div>
  );
}

export default App; 