import Action from '@/components/Action';
import HeroSection from '@/components/HeroSection';
import Impact from '@/components/Impact';
import Introduction from '@/components/Introduction';
import React from 'react';

function Home() {
  return (
    <>
      <HeroSection />
      <Introduction />
      <Impact/>
      <Action/>
    </>
  );
}

export default Home;
