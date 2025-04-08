import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'wouter';
import { Challenge } from '@shared/schema';
import { ArrowLeft, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function ChallengePage() {
  const { id } = useParams();
  const challengeId = parseInt(id || '0');
  
  const { data: challenge, isLoading, error } = useQuery<Challenge>({
    queryKey: [`/api/challenges/${challengeId}`],
  });
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="h-8 bg-gray-800 w-1/4 rounded mb-4 animate-pulse" />
          <div className="h-12 bg-gray-800 w-3/4 rounded mb-8 animate-pulse" />
          <div className="aspect-video bg-gray-800 rounded-lg mb-8 animate-pulse" />
          <div className="h-6 bg-gray-800 w-full rounded mb-4 animate-pulse" />
          <div className="h-6 bg-gray-800 w-full rounded mb-4 animate-pulse" />
          <div className="h-6 bg-gray-800 w-3/4 rounded animate-pulse" />
        </div>
      </div>
    );
  }
  
  if (error || !challenge) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Error Loading Challenge</h2>
            <p className="text-gray-400 mb-6">Unable to load the challenge. Please try again later.</p>
            <Button asChild>
              <Link href="/challenges">Back to Challenges</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  // Calculate days remaining if the challenge is active and has an end date
  const daysRemaining = challenge.endDate && challenge.isActive
    ? Math.ceil((new Date(challenge.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    : 0;
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/challenges">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Challenges
            </Link>
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <h1 className="text-3xl md:text-4xl font-bold">{challenge.title}</h1>
              {challenge.isActive && (
                <span className="ml-4 px-3 py-1 bg-secondary/20 text-secondary text-sm font-medium rounded-full">
                  Active Challenge
                </span>
              )}
            </div>
            
            {challenge.isActive && challenge.endDate && (
              <div className="flex items-center text-gray-400 mb-6">
                <Clock className="h-5 w-5 mr-2" />
                <span>
                  {daysRemaining > 0 
                    ? `Ends in ${daysRemaining} days` 
                    : 'Ending today'}
                </span>
              </div>
            )}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="aspect-video rounded-lg overflow-hidden">
            <img 
              src={challenge.imageUrl || ''} 
              alt={challenge.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-[hsl(var(--dark-surface))] rounded-lg p-6 border border-[hsl(var(--dark-light))] mb-8">
            <h2 className="text-xl font-semibold mb-4">Challenge Description</h2>
            <p className="text-gray-300 leading-relaxed">{challenge.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Requirements</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Use techniques learned in the courses</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Submit your work before the deadline</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Include source files and a preview image</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Judging Criteria</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Overall design and aesthetics (30%)</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Technical implementation (40%)</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Creativity and originality (30%)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-[hsl(var(--dark-surface))] rounded-lg p-6 border border-[hsl(var(--dark-light))] mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                <Users className="h-5 w-5 mr-2 text-accent" />
                Community Submissions
              </h2>
              <span className="text-sm text-gray-400">
                {challenge.isActive ? 'Submissions will be shown after the challenge ends' : '24 submissions'}
              </span>
            </div>
            
            {challenge.isActive ? (
              <div className="text-center py-8">
                <p className="text-gray-400 mb-4">This challenge is currently active. Submissions will be visible once the challenge has ended.</p>
                {challenge.endDate && (
                  <p className="text-sm text-gray-500">
                    Challenge ends on {new Date(challenge.endDate).toLocaleDateString()}
                  </p>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="aspect-square bg-background rounded-lg border border-[hsl(var(--dark-light))] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <span className="text-gray-500">Submission {item}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex justify-center">
            {challenge.isActive ? (
              <Button size="lg" className="px-8 bg-secondary hover:bg-secondary/90">
                Submit Your Entry
              </Button>
            ) : (
              <Button size="lg" className="px-8" variant="outline">
                View All Submissions
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ChallengePage;
