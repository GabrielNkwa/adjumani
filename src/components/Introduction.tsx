import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, GraduationCap } from 'lucide-react';

const Introduction = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 h-screen items-center align-center">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-20">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Transforming Lives Through Faith & Service
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Our mission is to create lasting positive change through three
            fundamental pillars: Healthcare, Education, and Soul-Winning.
            Together, we're building a stronger, healthier, and more spiritually
            enriched community.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          {/* Healthcare Pillar */}
          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-3 rounded-full bg-red-100">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold">Healthcare</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Providing accessible, quality healthcare services to
                  underserved communities, ensuring physical well-being for all.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education Pillar */}
          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Empowering individuals through knowledge and skills
                  development, creating pathways to better opportunities.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Soul-Winning Pillar */}
          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-3 rounded-full bg-purple-100">
                  <Heart className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold">Soul-Winning</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Spreading hope and spiritual guidance through faith-based
                  initiatives, nurturing the spiritual well-being of our
                  community.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Join Our Mission
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
