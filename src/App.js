import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PricingPackages from './components/PricingPackages';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import GovernmentAgencies from './components/GovernmentAgencies';
import ContactForm from './components/ContactForm';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PricingPackages />
      <AboutUs />
      <Services />
      <GovernmentAgencies />
      <ContactForm />
      <CallToAction />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App; 