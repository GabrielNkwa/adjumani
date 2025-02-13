import { ArrowRight, Link } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';


const Call = () => {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-6">
          Join Us in Making a Difference
        </h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Together, we can continue to transform lives and build a brighter
          future for the people of Adjumani. Your support makes our mission
          possible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

export default Call;
