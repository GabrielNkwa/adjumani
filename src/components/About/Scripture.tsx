import { Quote } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from '../ui/card';

const Scripture = () => {
  return (
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
                "The Spirit of the Lord is on me, because he has anointed me to
                proclaim good news to the poor. He has sent me to proclaim
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
                thirsty and you gave me something to drink, I was a stranger and
                you invited me in..."
              </p>
              <p className="text-slate-400 font-semibold">Matthew 25:35-40</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Scripture;
