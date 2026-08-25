import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSlider from './components/HeroSlider';
import WhoWeSupport from './components/WhoWeSupport';
import AboutSection from './components/AboutSection';
import OurCauses from './components/OurCauses';
import StoriesSection from './components/StoriesSection';
import JoinSection from './components/JoinSection';


export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <WhoWeSupport />
      <AboutSection />
      <OurCauses />
      <StoriesSection />
      <JoinSection />
      <Footer />
    </main>
  );
}