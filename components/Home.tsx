import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Process from './Process';
import Sustainability from './Sustainability';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import HomeContact from './HomeContact';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero />
      <About onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} />
      <Process />
      <Sustainability />
      <Testimonials />
      <FAQ onNavigate={onNavigate} />
      <HomeContact />
    </>
  );
};

export default Home;