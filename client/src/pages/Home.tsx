import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import LessonsSection from '@/components/LessonsSection';
import ChallengesSection from '@/components/ChallengesSection';
import CommunitySection from '@/components/CommunitySection';
import CallToAction from '@/components/CallToAction';

export function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <LessonsSection />
      <ChallengesSection />
      <CommunitySection />
      <CallToAction />
    </>
  );
}

export default Home;
