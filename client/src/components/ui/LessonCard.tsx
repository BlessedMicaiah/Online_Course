import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface LessonCardProps {
  id: number;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  imageUrl: string;
}

const difficultyColors = {
  'Beginner': 'bg-primary/90',
  'Intermediate': 'bg-accent/90',
  'Advanced': 'bg-secondary/90'
};

export function LessonCard({ id, title, description, difficulty, duration, imageUrl }: LessonCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="bg-[hsl(var(--dark-surface))] rounded-xl overflow-hidden border border-[hsl(var(--dark-light))] hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/10 h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] to-transparent opacity-60" />
          <div className={`absolute top-3 right-3 ${difficultyColors[difficulty]} text-white text-xs px-2 py-1 rounded-full`}>
            {difficulty}
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-400" />
              <span className="ml-2 text-sm text-gray-400">{duration}</span>
            </div>
            <Link href={`/lessons/${id}`}>
              <a className="text-primary hover:text-primary/90 text-sm font-medium flex items-center">
                <span>Start Lesson</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default LessonCard;
