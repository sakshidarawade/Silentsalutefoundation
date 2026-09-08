import React from 'react';
import Footer from '@/components/Footer';
import AboutHero from './components/AboutHero';
import WhoWeAre from './components/WhoWeAre';
import HowWeWork from './components/HowWeWork';
import PartnersSection from './components/PartnersSection';
import TeamSection from './components/TeamSection';
import TransparencySection from './components/TransparencySection';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <HowWeWork />
      <PartnersSection />
      <TeamSection />
      <TransparencySection />
      <Footer />
    </main>
  );
}