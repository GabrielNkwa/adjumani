import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Action = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [animationKey, setAnimationKey] = useState(0); // Key to trigger animation

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimationKey((prev) => prev + 1); // Increment key to trigger animation
          setTimeout(() => {
            setIsVisible(false); // Reset visibility after animation
          }, 1000); // Match duration of animation
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 bg-primary text-primary-foreground flex flex-col items-center ${
        isVisible ? 'fade-in' : ''
      }`}
    >
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Your support can help us continue our mission of transforming lives in
          Adjumani. Every contribution makes a difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button> */}
           <a href="https://forms.zohopublic.com/mikenwanjugm1/form/VolunteerForm/formperma/aJwupQ9fZr1Zq-ZQ9vBrJiJdEV9QazEta5Cr-eem7AU" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
          >
            Volunteer
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </a>
          <a href="https://www.zeffy.com/donation-form/donate-to-make-a-difference-8715" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
          >
            Donate Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Action;
