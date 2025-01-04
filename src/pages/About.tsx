import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom'; // Use react-router for navigation
import HeroSection from '@/components/HeroSection';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-slate-900 text-white overflow-hidden h-screen">
        <HeroSection />
        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-40">
            Mission Statement
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto">
            To transform Adjumani into a haven of hope by providing holistic
            care through healthcare, education, and spiritual empowerment,
            bringing healing to physical, emotional, and spiritual wounds while
            winning souls for Jesus Christ.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/pastor.png"
                width={400}
                height={400}
                alt="Pastor Chibuzo Nwanju"
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">
                The Vision of Pastor Chibuzo Nwanju
              </h3>
              <p className="text-slate-600">
                The Adjumani Project was birthed out of a deep concern for the
                health and spiritual well-being of the people in Adjumani,
                Uganda, a region overwhelmed by hardship. In 2022, during a
                crusade supported by God’s Family Global Network, Pastor Chibuzo
                Nwanju witnessed the cries of a people in desperate need. The
                region’s health facilities were overrun, leaving families dying
                from preventable diseases such as malaria and diabetes due to a
                lack of medical supplies and resources. Additionally, the influx
                of South Sudanese refugees fleeing civil war had created an
                unsustainable strain on the local infrastructure, plunging the
                community into extreme poverty and despair.
              </p>
              <p className="text-slate-600">
                Adjumani has become a refuge for war-torn families, yet it
                remains a region burdened by physical, emotional, and spiritual
                wounds. Many live without access to basic medical care, and
                countless souls remain unreached with the Gospel of Jesus
                Christ. The Bridge Kingdom Access Network has embraced this
                challenge by launching the Adjumani Project. Its goal is to
                bring light to this dark region through the construction of a
                Soul Center, which will provide healthcare, education, and
                spiritual empowerment to restore the faith of this bleeding
                region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Values Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Vision & Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Faith',
                description:
                  "Grounded in Christian principles and trust in God's guidance",
              },
              {
                title: 'Compassion',
                description:
                  "Showing Christ's love through action and care for others",
              },
              {
                title: 'Empowerment',
                description:
                  'Equipping individuals with skills and knowledge for sustainable change',
              },
              {
                title: 'Community',
                description:
                  'Building strong relationships and fostering unity',
              },
              {
                title: 'Sustainability',
                description:
                  'Creating lasting impact through self-sustaining initiatives',
              },
              {
                title: 'Excellence',
                description: 'Striving for the highest standards in all we do',
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 pt-30">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <Card key={member} className="overflow-hidden">
                <img
                  src={`/placeholder.svg?height=300&width=300`}
                  width={300}
                  height={300}
                  alt="Team member"
                  className="w-full object-cover h-48"
                />
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-1">
                    Team Member Name
                  </h3>
                  <p className="text-slate-600 mb-3">Position / Role</p>
                  <p className="text-sm text-slate-500">
                    Brief bio describing their role and contribution to the
                    Adjumani Project.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Scriptural Foundation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 mb-4 text-slate-400" />
                <p className="text-lg mb-4 text-slate-200">
                  "The Spirit of the Lord is on me, because he has anointed me
                  to proclaim good news to the poor. He has sent me to proclaim
                  freedom for the prisoners and recovery of sight for the blind,
                  to set the oppressed free."
                </p>
                <p className="text-slate-400 font-semibold">Luke 4:18</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 mb-4 text-slate-400" />
                <p className="text-lg mb-4 text-slate-200">
                  "For I was hungry and you gave me something to eat, I was
                  thirsty and you gave me something to drink, I was a stranger
                  and you invited me in..."
                </p>
                <p className="text-slate-400 font-semibold">Matthew 25:35-40</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Together, we can continue to transform lives and build a brighter
            future for the people of Adjumani. Your support makes our mission
            possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/donate">Support Our Mission</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
