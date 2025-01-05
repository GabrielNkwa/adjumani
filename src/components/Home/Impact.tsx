import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

const Impact = () => {
  const [livesImpacted, setLivesImpacted] = useState(0);
  const [communityPillars] = useState(3); // Static value
  const [studentsEducated, setStudentsEducated] = useState(0);
  const [volunteers, setVolunteers] = useState(0);

  // Animation function
  const animateValue = (start, end, duration, setter) => {
    const totalFrames = 100; // Total frames for a smoother animation
    const increment = (end - start) / totalFrames; // Smooth increment
    let frame = 0;

    const step = () => {
      frame++;
      setter(Math.floor(start + increment * frame));

      if (frame < totalFrames) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    // Start animations for the values
    animateValue(0, 50000, 9000, setLivesImpacted); // Animate lives impacted
    animateValue(0, 1000, 9000, setStudentsEducated); // Animate students educated
    setVolunteers(100); // Set volunteers directly
  }, []);

  return (
    <section className="py-16 md:py-24 bg-muted flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {livesImpacted}+
            </div>
            <div className="text-sm text-muted-foreground">Lives Impacted</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {communityPillars}
            </div>
            <div className="text-sm text-muted-foreground">
              Community Pillars
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {studentsEducated}+
            </div>
            <div className="text-sm text-muted-foreground">
              Students Educated
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {volunteers}+
            </div>
            <div className="text-sm text-muted-foreground">Volunteers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;