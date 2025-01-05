import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface Testimonial {
  id: number;
  author: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: 'Sarah Johnson',
    role: '',
    content:
      'The healthcare services provided by the Adjumani Project have transformed our community. We now have access to essential medical care that was once out of reach',
    image: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 2,
    author: 'Michael Chen',
    role: '',
    content:
      "Thanks to the education programs, my children now have hope for a better future. The project has opened doors we never thought possible",
    image: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 3,
    author: 'Emma Davis',
    role: '',
    content:
      "The healthcare services provided by the Adjumani Project have transformed our community. We now have access to essential medical care that was once out of reach",
    image: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 4,
    author: 'James Wilson',
    role: '',
    content:
      'Thanks to the education programs, my children now have hope for a better future. The project has opened doors we never thought possible',
    image: '/placeholder.svg?height=80&width=80',
  },
];

const TestimonialCarousel: React.FC = () => {
  const [position, setPosition] = useState(0);
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const next = prev - 1;
        // Reset position when we've scrolled through all original items
        if (Math.abs(next) >= testimonials.length) {
          return 0;
        }
        return next;
      });
    }, 5000); // Increase time between slides to 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-muted/50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight mb-12">
          Voices of Adjumani
        </h2>
        <div className="relative">
          <div
            className="flex transition-transform duration-1000 ease-linear" // Increase duration to 1500ms
            style={{
              transform: `translateX(${position * 100}%)`,
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-full flex-shrink-0 px-4 md:w-1/2 lg:w-1/3"
              >
                <Card className="h-full p-6">
                  <figure className="space-y-4">
                    <blockquote className="text-lg">
                      "{testimonial.content}"
                    </blockquote>
                    <figcaption className="flex items-center gap-4">
                      <div>
                        <div className="font-medium">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
