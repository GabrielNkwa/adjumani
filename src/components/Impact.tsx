import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

const Impact = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Our Impact in Numbers
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl leading-relaxed">
            Together, we're making a real difference in our community. Here's
            what we've achieved so far.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mx-auto mb-12">
          <Card>
            <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
              <span className="text-4xl font-bold text-primary">12K+</span>
              <span className="text-sm text-muted-foreground text-center">
                People Impacted
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
              <span className="text-4xl font-bold text-primary">250+</span>
              <span className="text-sm text-muted-foreground text-center">
                Active Volunteers
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
              <span className="text-4xl font-bold text-primary">45</span>
              <span className="text-sm text-muted-foreground text-center">
                Community Projects
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
              <span className="text-4xl font-bold text-primary">98%</span>
              <span className="text-sm text-muted-foreground text-center">
                Satisfaction Rate
              </span>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial and Video Section */}
        <div className="grid gap-6 lg:grid-cols-2 mx-auto mb-12">
          {/* Testimonial */}
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <blockquote className="space-y-6">
                <p className="text-xl italic">
                  "This project has transformed our community. The impact we've
                  seen on local families is incredible, and it's all thanks to
                  the dedication of our volunteers and supporters."
                </p>
                <footer className="text-sm">
                  <cite className="font-semibold">Sarah Johnson</cite>
                  <p className="text-muted-foreground">Community Leader</p>
                </footer>
              </blockquote>
            </CardContent>
          </Card>

          {/* Video Section */}
          <Card className="overflow-hidden">
            <CardContent className="p-0 aspect-video relative bg-slate-100 dark:bg-slate-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-16 h-16 rounded-full bg-white/90 hover:bg-white/95 backdrop-blur-sm"
                >
                  <Play className="h-8 w-8" />
                  <span className="sr-only">Play video</span>
                </Button>
              </div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Video thumbnail showing community project"
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h3 className="text-2xl font-bold tracking-tighter md:text-3xl">
            Ready to Make a Difference?
          </h3>
          <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
            Join our community of changemakers and help us create lasting
            impact.
          </p>
          <Button size="lg" className="mt-4">
            Get Involved Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Impact;
