import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TabsContent, TabsList, TabsTrigger, Tabs } from '@/components/ui/tabs';
import { Heart, GraduationCap, Stethoscope } from 'lucide-react';

export default function Works() {
  return (
    <main className="container mx-auto px-4 py-12 h-screen pt-40">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          The Adjumani Soul Center: A Beacon of Hope
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The Adjumani Soul Center is a comprehensive facility designed to
          address the urgent needs of the region. It combines medical care,
          spiritual training, and public health resources to create a
          sustainable solution for the challenges faced by the people of
          Adjumani. The center will include:
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
            <CardDescription>
              To provide accessible and life-saving maternal and child
              healthcare services, addressing the region’s high maternal and
              infant mortality rates.
            </CardDescription>
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
              <ul className="space-y-2">
                <li>• Capacity to Care for 50-100 Maternity Patients</li>
                <li>• C-Section and Emergency Surgery Capabilities</li>
                <li>• Postnatal and Prenatal Care</li>
                <li>• Educational and Family Planning Programs</li>
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
            <CardDescription>
              To train and equip individuals to become evangelists and
              ministers, spreading the Gospel and empowering communities through
              biblical knowledge and spiritual leadership.
            </CardDescription>
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
                    <li>• Certificate and Diploma Programs</li>
                    <li>• Short Courses</li>
                    <li>• Affiliations with Online Universities</li>
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
            <CardDescription>
              To combat the region’s overwhelming burden of malaria and diabetes
              through education, prevention, and treatment.
            </CardDescription>
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
                  <div className="text-sm text-muted-foreground">
                    Patients treated
                  </div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold">80%</div>
                  <div className="text-sm text-muted-foreground">
                    Prevention rate
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Our Services:</h4>
                <ul className="space-y-2">
                  <li>• Diagnosis and Treatment</li>
                  <li>• Prevention Programs</li>
                  <li>• Emergency Response Unit</li>
                  <li>• Health Education Campaigns</li>
                  <li>• Medication Distribution</li>
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
            <div className="text-muted-foreground">
              Trained community leaders
            </div>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-muted-foreground">
              Community satisfaction rate
            </div>
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
