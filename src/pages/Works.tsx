import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import { Heart, GraduationCap, Stethoscope } from 'lucide-react';

export default function Works() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services & Programs</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The Adjumani Project provides essential healthcare, education, and community support services
          to empower and transform lives in Uganda.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {/* Maternity Center Card */}
        <Card className="relative overflow-hidden">
          <CardHeader>
            <div className="mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Maternity & Child Delivery Center</CardTitle>
            <CardDescription>Comprehensive maternal healthcare services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <img
                src="/placeholder.svg?height=200&width=400"
                width={400}
                height={200}
                alt="Maternity center facilities"
                className="rounded-lg object-cover w-full mb-4"
              />
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">Deliveries per year</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency care</div>
                </div>
              </div>
              <ul className="space-y-2">
                <li>• Emergency C-section capabilities</li>
                <li>• Prenatal & postnatal care</li>
                <li>• Family planning services</li>
                <li>• Maternal health education</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Bible College Card */}
        <Card>
          <CardHeader>
            <div className="mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Soul Winners Bible College</CardTitle>
            <CardDescription>Training tomorrow's spiritual leaders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <img
                src="/placeholder.svg?height=200&width=400"
                width={400}
                height={200}
                alt="Bible college campus"
                className="rounded-lg object-cover w-full mb-4"
              />
              <Tabs defaultValue="programs" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="programs">Programs</TabsTrigger>
                  <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
                </TabsList>
                <TabsContent value="programs" className="space-y-2">
                  <ul className="space-y-2">
                    <li>• Certificate in Biblical Studies</li>
                    <li>• Diploma in Theology</li>
                    <li>• Bachelor of Divinity</li>
                    <li>• Community Leadership Training</li>
                  </ul>
                </TabsContent>
                <TabsContent value="partnerships" className="space-y-2">
                  <ul className="space-y-2">
                    <li>• International Bible Universities</li>
                    <li>• Local Church Networks</li>
                    <li>• Ministry Training Centers</li>
                    <li>• Global Mission Organizations</li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>

        {/* Medical Center Card */}
        <Card>
          <CardHeader>
            <div className="mb-4">
              <Stethoscope className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Malaria & Diabetes Resource Center</CardTitle>
            <CardDescription>Comprehensive treatment and prevention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <img
                src="/placeholder.svg?height=200&width=400"
                width={400}
                height={200}
                alt="Medical center facilities"
                className="rounded-lg object-cover w-full mb-4"
              />
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold">5,000+</div>
                  <div className="text-sm text-muted-foreground">Patients treated</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold">80%</div>
                  <div className="text-sm text-muted-foreground">Prevention rate</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Our Services:</h4>
                <ul className="space-y-2">
                  <li>• Malaria testing and treatment</li>
                  <li>• Diabetes management</li>
                  <li>• Prevention education</li>
                  <li>• Community health worker training</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Impact Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center p-6 bg-muted rounded-lg">
            <div className="text-4xl font-bold mb-2">15,000+</div>
            <div className="text-muted-foreground">Lives impacted annually</div>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <div className="text-4xl font-bold mb-2">200+</div>
            <div className="text-muted-foreground">Trained community leaders</div>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-muted-foreground">Community satisfaction rate</div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Our Facilities</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <img
            src="/placeholder.svg?height=300&width=400"
            width={400}
            height={300}
            alt="Facility image 1"
            className="rounded-lg object-cover w-full"
          />
          <img
            src="/placeholder.svg?height=300&width=400"
            width={400}
            height={300}
            alt="Facility image 2"
            className="rounded-lg object-cover w-full"
          />
          <img
            src="/placeholder.svg?height=300&width=400"
            width={400}
            height={300}
            alt="Facility image 3"
            className="rounded-lg object-cover w-full"
          />
        </div>
      </section>
    </main>
  );
}