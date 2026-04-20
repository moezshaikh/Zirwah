import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/problem';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <Problem/>
      <FeaturedWork />
      <Process/>
      <Services />
      <About />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
