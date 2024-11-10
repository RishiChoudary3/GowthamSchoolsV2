import React from 'react';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Admissions from './components/Admissions';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Admissions />
      <Footer />
    </div>
  );
}

export default App;