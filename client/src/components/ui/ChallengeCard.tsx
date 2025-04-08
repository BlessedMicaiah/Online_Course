import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { MainChallenge, PastChallenge } from '@/data/challenges';

interface MainChallengeCardProps {
  challenge: MainChallenge;
}

export function MainChallengeCard({ challenge }: MainChallengeCardProps) {
  return (
    <Card className="bg-[hsl(var(--card))] rounded-xl overflow-hidden border border-[hsl(var(--dark-light))] hover:border-secondary/50 transition-all group relative">
      <div className="absolute top-3 right-3 z-10 bg-secondary/90 text-white text-xs px-2 py-1 rounded-full">
        Current Challenge
      </div>
      <div className="relative h-64 md:h-80">
        <img 
          src={challenge.imageUrl}
          alt={challenge.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] to-transparent opacity-70" />
        <div className="absolute bottom-0 w-full p-6">
          <h3 className="text-2xl font-bold mb-2">{challenge.title}</h3>
          <p className="text-gray-300 mb-4">{challenge.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-secondary" />
              <span className="ml-2 text-sm text-gray-300">Ends in {challenge.daysRemaining} days</span>
            </div>
            <Link href={`/challenges/${challenge.id}`}>
              <a className="px-4 py-2 bg-secondary hover:bg-secondary/90 text-white rounded-lg text-sm font-medium transition-colors">
                View Challenge
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

interface PastChallengeCardProps {
  challenge: PastChallenge;
}

export function PastChallengeCard({ challenge }: PastChallengeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="bg-[hsl(var(--card))] rounded-xl overflow-hidden border border-[hsl(var(--dark-light))] hover:border-accent/50 transition-all group h-full">
        <div className="relative h-40">
          <img 
            src={challenge.imageUrl}
            alt={challenge.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] to-transparent opacity-60" />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">{challenge.title}</h3>
          <p className="text-gray-400 text-sm mb-2">{challenge.description}</p>
          <Link href={`/challenges/${challenge.id}`}>
            <a className="text-accent hover:text-accent/90 text-sm font-medium flex items-center">
              <span>View Submissions</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
