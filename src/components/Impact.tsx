import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

const Impact = () => {
  return (
    <section className="py-16 md:py-24 bg-muted flex flex-col items-center">
    <div className="container px-4 md:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl font-bold text-primary mb-2">50K+</div>
          <div className="text-sm text-muted-foreground">
            Lives Impacted
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl font-bold text-primary mb-2">3</div>
          <div className="text-sm text-muted-foreground">
            Community Pillars
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl font-bold text-primary mb-2">1000+</div>
          <div className="text-sm text-muted-foreground">
            Students Educated
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl font-bold text-primary mb-2">100+</div>
          <div className="text-sm text-muted-foreground">Volunteers</div>
        </div>
      </div>
    </div>
  </section>

  );
};

export default Impact;
