import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-black text-white font-sans">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Services />
        <WhyUs />
        <Gallery />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
