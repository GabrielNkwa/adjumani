import React from 'react';
import HeroSection from '../HeroSection';

const AboutHero = () => {
  return (
    <section className="relative py-24 px-6 bg-slate-900 text-white overflow-hidden h-screen">
      <HeroSection />
      <div className="container relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-40">
          Mission Statement
        </h1>
        <p className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto">
          To transform Adjumani into a haven of hope by providing holistic care
          through healthcare, education, and spiritual empowerment, bringing
          healing to physical, emotional, and spiritual wounds while winning
          souls for Jesus Christ.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
