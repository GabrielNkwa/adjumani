import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Baby,
  GraduationCap,
  Heart,
  Users,
  Activity,
  Calendar,
  School,
} from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src="/images/image9.jpg"
          alt="Adjumani Project Hero"
          width={1920}
          height={400}
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Adjumani Project Services
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Transforming lives through healthcare, education, and community
            development in Uganda
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Services Tabs */}
        <Tabs defaultValue="maternity" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
            <TabsTrigger
              value="maternity"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4"
            >
              Maternity & Child Delivery
            </TabsTrigger>
            <TabsTrigger
              value="bible-college"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4"
            >
              Soul Winners Bible College
            </TabsTrigger>
            <TabsTrigger
              value="healthcare"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4"
            >
              Malaria & Diabetes Center
            </TabsTrigger>
          </TabsList>

          {/* Maternity Center Content */}
          <TabsContent value="maternity" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Maternity and Child Delivery Center
                </h2>
                <p className="text-muted-foreground mb-6">
                  Providing comprehensive maternal care services to ensure safe
                  deliveries and healthy mothers and babies in the Adjumani
                  region.
                </p>
                <div className="grid gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Baby className="h-5 w-5" />
                        Emergency Services
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      24/7 emergency C-section capabilities and critical care
                      for high-risk pregnancies
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Prenatal & Postnatal Care
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Regular check-ups, ultrasound services, and comprehensive
                      postnatal support
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="h-5 w-5" />
                        Family Planning
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Counseling and access to various family planning methods
                      and reproductive health services
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="space-y-6">
                <img
                  src="/images/image10.jpg"
                  alt="Maternity Center"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
                <div className="grid grid-cols-2 gap-4 text-center">
                  <Card>
                    <CardHeader>
                      <CardTitle>1,200+</CardTitle>
                      <CardDescription>Safe Deliveries</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>98%</CardTitle>
                      <CardDescription>Survival Rate</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Bible College Content */}
          <TabsContent value="bible-college" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Soul Winners Bible College
                </h2>
                <p className="text-muted-foreground mb-6">
                  Training the next generation of spiritual leaders and
                  community developers through comprehensive biblical education
                  and practical ministry experience.
                </p>
                <div className="grid gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5" />
                        Degree Programs
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Bachelor's and Master's programs in Theology, Ministry,
                      and Community Development
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <School className="h-5 w-5" />
                        International Partnerships
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Collaborations with accredited universities worldwide for
                      enhanced learning opportunities
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Community Impact
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Practical ministry experience through community outreach
                      and evangelism programs
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="space-y-6">
                <img
                  src="/images/image1.jpg"
                  alt="Bible College"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
                <div className="grid grid-cols-2 gap-4 text-center">
                  <Card>
                    <CardHeader>
                      <CardTitle>500+</CardTitle>
                      <CardDescription>Graduates</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>15</CardTitle>
                      <CardDescription>Partner Universities</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Healthcare Center Content */}
          <TabsContent value="healthcare" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Malaria & Diabetes Resource Center
                </h2>
                <p className="text-muted-foreground mb-6">
                  Comprehensive care and prevention programs for malaria and
                  diabetes, serving the Adjumani community through treatment and
                  education.
                </p>
                <div className="grid gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5" />
                        Treatment Services
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      State-of-the-art diagnosis and treatment facilities for
                      malaria and diabetes
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Prevention Programs
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Community education and prevention campaigns, including
                      mosquito net distribution
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="h-5 w-5" />
                        Ongoing Care
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Regular check-ups and medication management for diabetes
                      patients
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="space-y-6">
                <img
                  src="/images/image13.jpg"
                  alt="Healthcare Center"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
                <div className="grid grid-cols-2 gap-4 text-center">
                  <Card>
                    <CardHeader>
                      <CardTitle>5,000+</CardTitle>
                      <CardDescription>Patients Treated</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>40%</CardTitle>
                      <CardDescription>
                        Reduction in Malaria Cases
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <section className="mt-16 text-center ">
          <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your support helps us continue providing essential services to the
            Adjumani community. Join us in making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.zeffy.com/donation-form/donate-to-make-a-difference-8715" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="min-w-[200px]">
              Donate Now
            </Button>
            </a>
            {/* <Button size="lg" variant="outline" className="min-w-[200px]">
              Volunteer
            </Button> */}
          </div>
        </section>
      </main>
    </div>
  );
}
