'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const slides = [
    {
      title: 'Restoring the Faith of a Bleeding Region',
      description: '',

      secondaryCta: 'Learn More',
      secondaryCtaLink: '/about',
      image: '/images/image18.jpg',
    },
    {
      title: '',
      description: '',

      secondaryCta: 'View Projects',
      secondaryCtaLink: '/projects',
      image: '/images/image6.jpg',
    },
    {
      title: '',
      description: '',

      secondaryCta: 'Watch Demo',
      secondaryCtaLink: '/demo',
      image: '/images/image12.jpg',
    },
    {
      title: '',
      description: '',

      secondaryCta: 'Watch Demo',
      secondaryCtaLink: '/demo',
      image: '/images/image17.jpg',
    },
    {
      title: '',
      description: '',

      secondaryCta: 'Watch Demo',
      secondaryCtaLink: '/demo',
      image: '/images/image14.jpg',
    },
    {
      title: '',
      description: '',

      secondaryCta: 'Watch Demo',
      secondaryCtaLink: '/demo',
      image: '/images/image16.jpg',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-background">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transform transition-all duration-1000 ${
            index === currentSlide
              ? 'opacity-100'
              : 'pointer-events-none opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-8">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {slide.title}
              </h1>
              <p className="mx-auto max-w-[600px] text-lg text-gray-200 md:text-xl">
                {slide.description}
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="h-10 w-10 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-6 bg-primary'
                  : 'bg-primary/50 hover:bg-primary/75'
              }`}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="h-10 w-10 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </section>
  );
}
