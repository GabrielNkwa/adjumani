import React from 'react';
import { Button } from '../ui/button';

const HomeHero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full">
      <img
        src="/images/image2.jpg"
        alt="Adjumani Community"
        className="object-cover brightness-50 w-full h-full"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Restoring Hope to Adjumani: Transforming Lives Through Faith,
            Healthcare, and Education
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Join us in making a lasting impact in the Adjumani community through
            holistic development and spiritual growth.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
