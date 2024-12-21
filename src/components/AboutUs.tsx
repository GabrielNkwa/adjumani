import React from 'react';
import { Button } from '@/components/ui/button'; // Ensure this is compatible with React
import { Card } from '@/components/ui/card'; // Ensure this is compatible with React
import { Badge } from '@/components/ui/badge'; // Ensure this is compatible with React
import { Heart, Users, Target, Clock4 } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted flex flex-col items-center">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Our Story
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                From a simple idea to a thriving platform. Discover how we're
                changing the way people work and create.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Our Mission
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Empowering creators to build the future
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We believe in a world where anyone can turn their ideas into
                    reality. Our platform provides the tools and community to
                    make that possible.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="/get-started">
                    <Button>Get Started</Button>
                  </a>
                  <a href="/contact">
                    <Button variant="outline">Contact Us</Button>
                  </a>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover">
                <img
                  alt="Team collaboration"
                  className="object-cover w-full h-full"
                  height="550"
                  src="/placeholder.svg?height=550&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex flex-col items-center">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Our Journey
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Every great story has a beginning. Here's how we got to where we
                are today.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center space-y-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Clock4 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">2020</h3>
                <p className="text-muted-foreground">
                  Founded with a vision to democratize creation. Started as a
                  small team of passionate developers.
                </p>
              </Card>
              <Card className="flex flex-col items-center space-y-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">2022</h3>
                <p className="text-muted-foreground">
                  Grew to serve over 100,000 creators. Launched our flagship
                  product and expanded the team.
                </p>
              </Card>
              <Card className="flex flex-col items-center space-y-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Today</h3>
                <p className="text-muted-foreground">
                  Leading the industry with innovative solutions. Helping
                  millions bring their ideas to life.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Our Values
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                The principles that guide everything we do
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    Innovation
                  </Badge>
                  <h3 className="text-2xl font-bold">Always Moving Forward</h3>
                  <p className="text-muted-foreground">
                    We're constantly pushing the boundaries of what's possible,
                    embracing new technologies and ideas.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    Community
                  </Badge>
                  <h3 className="text-2xl font-bold">Stronger Together</h3>
                  <p className="text-muted-foreground">
                    We believe in the power of community and collaboration to
                    solve complex problems.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    Quality
                  </Badge>
                  <h3 className="text-2xl font-bold">
                    Excellence in Everything
                  </h3>
                  <p className="text-muted-foreground">
                    We're committed to delivering the highest quality solutions
                    and experiences to our users.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    Impact
                  </Badge>
                  <h3 className="text-2xl font-bold">Making a Difference</h3>
                  <p className="text-muted-foreground">
                    Every decision we make is guided by our commitment to
                    creating positive change in the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
      </main>
    </div>
  );
}
