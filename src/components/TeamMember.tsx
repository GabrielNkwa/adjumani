import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LinkedinIcon, TwitterIcon } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

const team: TeamMember[] = [
  {
    name: 'Pastor Chibuzo Nwanju',
    role: 'Founder',
    bio: 'Pastor Chibuzo brings over 15 years of experience in .',
    image: '/placeholder.svg?height=400&width=400',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: 'With a Ph.D. in Computer Science and extensive experience in AI, Michael leads our technical strategy and innovation initiatives.',
    image: '/placeholder.svg?height=400&width=400',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    bio: 'Award-winning designer with a passion for creating intuitive and beautiful user experiences. Previously at top tech companies.',
    image: '/placeholder.svg?height=400&width=400',
    social: {
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'David Kim',
    role: 'Strategic Partner',
    bio: 'Founder of Kim Ventures, David brings strategic insight and vast network in the industry. Board member of multiple tech companies.',
    image: '/placeholder.svg?height=400&width=400',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Leadership Team
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Meet the innovators and strategic partners driving our vision
              forward
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden w-80">
              <CardHeader className="p-0">
                <div className="aspect-square relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                <CardDescription className="text-sm font-medium text-primary mb-4">
                  {member.role}
                </CardDescription>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>
                <div className="flex space-x-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <TwitterIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
