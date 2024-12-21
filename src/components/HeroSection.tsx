import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tighter">
          Restoring Hope to Adjumani:
          <span className="block mt-2 sm:mt-4">
            Transforming Lives Through Faith, Healthcare, and Education
          </span>
        </h1>
        <div className="mt-8 flex justify-center gap-4">
          <button className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300">
            Learn More
          </button>
          <button className="inline-flex h-11 items-center justify-center rounded-md border border-white px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300">
            Support Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
