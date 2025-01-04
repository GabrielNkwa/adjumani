import { Hospital, Baby, Stethoscope, Heart, Users, School, GraduationCap, BookOpen, Building2, Microscope, CheckCircle2, Pill } from 'lucide-react'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'

const AdjumaniCenter = () => {
  return (
    <div className="container mx-auto px-4 py-12">
    {/* Header Section */}
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold tracking-tight mb-4">
        The Adjumani Soul Center: A Beacon of Hope
      </h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        A comprehensive facility designed to address the urgent needs of the
        region, combining medical care, spiritual training, and public health
        resources to create a sustainable solution for the challenges faced by
        the people of Adjumani.
      </p>
    </div>

    {/* Facilities Grid */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Maternity Center Card */}
      <Card className="flex flex-col">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Hospital className="h-6 w-6 text-primary" />
            <CardTitle>Maternity and Child Delivery Medical Center</CardTitle>
          </div>
          <CardDescription>
            Providing accessible and life-saving maternal and child healthcare
            services
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="space-y-4">
            <h3 className="font-semibold">Services:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Baby className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Capacity to Care for 50-100 Maternity Patients</span>
              </li>
              <li className="flex items-start gap-2">
                <Stethoscope className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>C-Section and Emergency Surgery Capabilities</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Postnatal and Prenatal Care</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Educational and Family Planning Programs</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Bible College Card */}
      <Card className="flex flex-col">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <School className="h-6 w-6 text-primary" />
            <CardTitle>Soul Winners Bible College</CardTitle>
          </div>
          <CardDescription>
            Training and equipping individuals to become evangelists and
            ministers
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="space-y-4">
            <h3 className="font-semibold">Programs and Services:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <GraduationCap className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Certificate and Diploma Programs</span>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Short Courses in evangelism and leadership</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>
                  Affiliations with American-based online university
                </span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Treatment Center Card */}
      <Card className="flex flex-col">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Microscope className="h-6 w-6 text-primary" />
            <CardTitle>Malaria and Diabetes Resource Center</CardTitle>
          </div>
          <CardDescription>
            Combating the region's overwhelming burden of malaria and diabetes
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="space-y-4">
            <h3 className="font-semibold">Services:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Diagnosis and Treatment facilities</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Prevention Programs and Community Education</span>
              </li>
              <li className="flex items-start gap-2">
                <Hospital className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Emergency Response Unit</span>
              </li>
              <li className="flex items-start gap-2">
                <Pill className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Medication Distribution</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
  )
}

export default AdjumaniCenter