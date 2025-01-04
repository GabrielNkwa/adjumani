import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom'; // Use react-router for navigation
import HeroSection from '@/components/HeroSection';
import AboutHero from '@/components/About/AboutHero';
import Story from '@/components/About/Story';
import Vision from '@/components/About/Vision';
import VideoGrid from '@/components/VideoGrid';
import Gallery from '@/components/About/Gallery';
import Scripture from '@/components/About/Scripture';
import Call from '@/components/About/Call';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <AboutHero />

      {/* Our Story Section */}
      <Story />

      {/* Vision and Values Section */}
      <Vision />

      {/* Gallery */}
      <Gallery />

      {/* Scripture Section */}
      <Scripture />

      {/* Call to Action */}
      <Call />
    </div>
  );
}
