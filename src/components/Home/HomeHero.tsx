import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';

const HomeHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#home-hero');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home-hero" className="relative h-[80vh] min-h-[600px] w-full">
      <img
        src="/images/image2.jpg"
        alt="Adjumani Community"
        className="object-cover brightness-50 w-full h-full"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
              isVisible ? 'zoom-in' : ''
            }`}
          >
            Restoring Hope to Adjumani: Transforming Lives Through Faith,
            Healthcare, and Education
          </h1>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              isVisible ? 'zoom-in' : ''
            }`}
          >
            Join us in making a lasting impact in the Adjumani community through
            holistic development and spiritual growth.
          </p>
          <a href="https://www.zeffy.com/donation-form/donate-to-make-a-difference-8715" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Donate Now
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
