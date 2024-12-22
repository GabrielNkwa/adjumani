import React from 'react';
import { Button } from './ui/button';

const Action = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <h3 className="text-2xl font-bold tracking-tighter md:text-3xl">
        Ready to Make a Difference?
      </h3>
      <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
        Join our community of changemakers and help us create lasting impact.
      </p>
      <Button size="lg" className="mt-4">
        Get Involved Today
      </Button>
    </div>
  );
};

export default Action;
