import React from 'react';
import Modal from 'react-modal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, GraduationCap, Cross, ArrowRight } from 'lucide-react';
import Action from '@/components/Action';
import Testimonials from '@/components/Home/Testimonials';
import Impact from '@/components/Home/Impact';
import Introduction from '@/components/Home/Introduction';
import HomeHero from '@/components/Home/HomeHero';
import AdjumaniCenter from '@/components/Home/AdjumaniCenter';
import VideoGrid from '@/components/VideoGrid';




export default function Page() {
  const videos = [
    { src: '/videos/vid1.mp4', title: 'Video' },
    { src: '/videos/vid2.mp4', title: 'Video' },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
   <HomeHero/>

      {/* Introduction Section */}
      <Introduction />

      {/* Adjumani Center */}
      <AdjumaniCenter />

      {/* Impact Statistics */}
      <Impact />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Video Grid*/}
      <VideoGrid videos={videos} />

      {/* Call to Action Section */}
      <Action />
    </div>
  );
}
