import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, GraduationCap, Cross, ArrowRight } from 'lucide-react';
import Action from '@/components/Action';
import Testimonials from '@/components/Testimonials';
import Impact from '@/components/Impact';
import Introduction from '@/components/Introduction';
import HomeHero from '@/components/HomeHero';
import AdjumaniCenter from '@/components/AdjumaniCenter';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HomeHero/>

      {/* Introduction Section */}
      <Introduction />

      {/* Adjumani Center */}
      <AdjumaniCenter/>

      {/* Impact Statistics */}
      <Impact />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <Action />
    </div>
  );
}
