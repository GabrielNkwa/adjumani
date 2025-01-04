import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Action = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground flex flex-col items-center">
    <div className="container px-4 md:px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Join Us in Making a Difference
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
        Your support can help us continue our mission of transforming lives
        in Adjumani. Every contribution makes a difference.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          variant="secondary"
          className="bg-background text-foreground hover:bg-background/90"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="bg-background text-foreground hover:bg-background/90"
        >
          Volunteer
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="bg-background text-foreground hover:bg-background/90"
        >
          Donate Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </section>
  );
};

export default Action;
