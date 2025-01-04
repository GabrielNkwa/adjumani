import React from 'react';
import { Card, CardContent } from '../ui/card';

const Vision = () => {
  return (
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
              description: 'Building strong relationships and fostering unity',
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
  );
};

export default Vision;
