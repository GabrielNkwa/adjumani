import { Heart, GraduationCap, Cross } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.querySelector('#introduction');
      if (introSection) {
        const rect = introSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="introduction"
      className="py-16 md:py-24 bg-gray-200 flex flex-col items-center"
    >
      <div className="container px-4 md:px-6 text-center flex flex-col items-center">
        <div className="max-w-3xl mb-12">
          <h2
            className={`text-3xl md:text-6xl font-bold mb-4 ${
              isVisible ? 'slide-in' : ''
            }`}
          >
            Mission Statement
          </h2>
          <p
            className={`text-lg text-muted-foreground ${
              isVisible ? 'slide-in' : ''
            }`}
          >
            To transform Adjumani into a haven of hope by providing holistic
            care through healthcare, education, and spiritual empowerment,
            bringing healing to physical, emotional, and spiritual wounds while
            winning souls for Jesus Christ.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-center">
          <Card className="relative group hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Heart className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-xl font-bold">Healthcare</h3>
              <p className="text-muted-foreground">
                Providing essential medical services and promoting community
                health through preventive care and education.
              </p>
            </CardContent>
          </Card>

          <Card className="relative group hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <GraduationCap className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-xl font-bold">Education</h3>
              <p className="text-muted-foreground">
                Empowering the next generation through quality education and
                skills development programs.
              </p>
            </CardContent>
          </Card>

          <Card className="relative group hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Cross className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-xl font-bold">Soul-Winning</h3>
              <p className="text-muted-foreground">
                Sharing hope and faith while nurturing spiritual growth within
                the community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
