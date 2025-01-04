import React from 'react';
import { Card, CardContent } from './ui/card';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Voices from Adjumani
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <blockquote className="space-y-4">
                <p className="text-muted-foreground">
                  "The healthcare services provided by the Adjumani Project have
                  transformed our community. We now have access to essential
                  medical care that was once out of reach."
                </p>
                <footer className="text-sm">
                  <cite className="font-medium">Sarah N.</cite>
                  <div className="text-muted-foreground">Community Member</div>
                </footer>
              </blockquote>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <blockquote className="space-y-4">
                <p className="text-muted-foreground">
                  "Thanks to the education programs, my children now have hope
                  for a better future. The project has opened doors we never
                  thought possible."
                </p>
                <footer className="text-sm">
                  <cite className="font-medium">James O.</cite>
                  <div className="text-muted-foreground">Parent</div>
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
