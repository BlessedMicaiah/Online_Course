import React from 'react';
import { motion } from 'framer-motion';
import { MainChallengeCard, PastChallengeCard } from './ui/ChallengeCard';
import { useQuery } from '@tanstack/react-query';
import { Challenge } from '@shared/schema';

export function ChallengesSection() {
  const { data: challenges, isLoading } = useQuery<Challenge[]>({
    queryKey: ['/api/challenges'],
  });
  
  const { data: activeChallenge, isLoading: isLoadingActive } = useQuery<Challenge>({
    queryKey: ['/api/challenges/active'],
  });
  
  const pastChallenges = challenges?.filter(c => !c.isActive).slice(0, 4);
  
  // Convert server challenge to frontend MainChallenge
  const mainChallenge = activeChallenge ? {
    ...activeChallenge,
    daysRemaining: activeChallenge.endDate 
      ? Math.ceil((new Date(activeChallenge.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
      : 0
  } : null;
  
  return (
    <section id="challenges" className="py-16 bg-[hsl(var(--dark-surface))]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Weekly Challenges</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Put your skills to the test with our weekly challenges and see your work featured in our showcase.
          </p>
        </motion.div>
        
        {isLoading || isLoadingActive ? (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl overflow-hidden border border-[hsl(var(--dark-light))] h-[400px] animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-background rounded-xl overflow-hidden border border-[hsl(var(--dark-light))] h-[200px] animate-pulse" />
              ))}
            </div>
          </div>
        ) : (
          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {mainChallenge && (
              <MainChallengeCard challenge={mainChallenge} />
            )}
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {pastChallenges?.map((challenge) => (
                <motion.div
                  key={challenge.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <PastChallengeCard challenge={challenge} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ChallengesSection;
