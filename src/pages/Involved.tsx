import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Heart,
  Users,
  Handshake,
  GraduationCap,
  Stethoscope,
  Church,
} from 'lucide-react';

export default function Involved() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex items-center justify-center w-full h-screen py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Make a Difference Today
          </h1>
          <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl">
            Join us in our mission to create positive change. Your support can
            transform lives and communities.
          </p>
          <div className="space-x-4">
            <Button variant="secondary" size="lg" asChild>
              <Link to="#donate">Donate Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="#volunteer">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section
        id="donate"
        className="flex items-center justify-center w-full h-screen py-12 md:py-24 lg:py-32"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ways to Give
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Choose how you'd like to support our mission
          </p>
          <Tabs defaultValue="one-time" className="w-full max-w-2xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="one-time">One-time Donation</TabsTrigger>
              <TabsTrigger value="recurring">Monthly Giving</TabsTrigger>
            </TabsList>
            <TabsContent value="one-time" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Make a One-time Gift</CardTitle>
                  <CardDescription>
                    Your donation will help us continue our important work
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Select Amount</Label>
                      <RadioGroup
                        defaultValue="50"
                        className="grid grid-cols-3 gap-4"
                      >
                        <div>
                          <RadioGroupItem
                            value="25"
                            id="25"
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="25"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            $25
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem
                            value="50"
                            id="50"
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="50"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            $50
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem
                            value="100"
                            id="100"
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="100"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            $100
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <Button className="w-full">Donate Now</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="recurring" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Become a Monthly Supporter</CardTitle>
                  <CardDescription>
                    Join our community of regular givers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="monthly-amount">Monthly Amount</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select amount" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">$10/month</SelectItem>
                          <SelectItem value="25">$25/month</SelectItem>
                          <SelectItem value="50">$50/month</SelectItem>
                          <SelectItem value="100">$100/month</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">Start Monthly Giving</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section
        id="volunteer"
        className="flex items-center justify-center w-full h-screen py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Volunteer Opportunities
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Share your skills and time to make a real difference in people's
            lives.
          </p>
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2 mx-auto">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Stethoscope className="h-8 w-8" />
                <div className="grid gap-1">
                  <CardTitle>Medical Professionals</CardTitle>
                  <CardDescription>
                    Provide healthcare services and medical support
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <GraduationCap className="h-8 w-8" />
                <div className="grid gap-1">
                  <CardTitle>Educators</CardTitle>
                  <CardDescription>
                    Share knowledge and teach valuable skills
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Church className="h-8 w-8" />
                <div className="grid gap-1">
                  <CardTitle>Evangelists</CardTitle>
                  <CardDescription>
                    Spread hope and faith in communities
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="flex items-center justify-center w-full h-screen py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Partnership Opportunities
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Join forces with us to create lasting impact
          </p>
          <div className="grid gap-6 mt-8 md:grid-cols-3 mx-auto">
            <Card>
              <CardHeader>
                <Heart className="w-8 h-8 mb-2" />
                <CardTitle>Faith-based Organizations</CardTitle>
                <CardDescription>
                  Partner with us in ministry and outreach programs
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 mb-2" />
                <CardTitle>NGOs</CardTitle>
                <CardDescription>
                  Collaborate on community development projects
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Handshake className="w-8 h-8 mb-2" />
                <CardTitle>Corporate Investors</CardTitle>
                <CardDescription>
                  Support sustainable community initiatives
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="flex items-center justify-center w-full h-screen py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Impact Stories
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            See how our supporters are making a difference
          </p>
          <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {[1, 2, 3].map((story) => (
              <Card key={story}>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <img
                      alt={`Impact story ${story}`}
                      className="aspect-video overflow-hidden rounded-lg object-cover"
                      height="225"
                      src={`/placeholder.svg?height=225&width=400`}
                      width="400"
                    />
                    <h3 className="text-xl font-bold">Making a Difference</h3>
                    <p className="text-muted-foreground">
                      "Through our partnership, we've been able to reach more
                      people and create lasting change in our community."
                    </p>
                    <p className="font-medium">- Community Partner</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="flex items-center justify-center w-full h-screen py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Become a Partner Today!
          </h2>
          <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl">
            Your support can help us reach more communities and transform more
            lives.
          </p>
          <div className="space-x-4">
            <Button variant="secondary" size="lg">
              Make a Donation
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
