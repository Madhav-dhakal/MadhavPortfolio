
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;
