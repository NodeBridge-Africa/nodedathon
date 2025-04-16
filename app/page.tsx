'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { CompetitionSection } from '@/components/sections/competition-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { FacilitatorsSection } from '@/components/sections/facilitators-section';
import { CommunitySection } from '@/components/sections/community-section';
import { ImpactSection } from '@/components/sections/impact-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { RegistrationDialog } from '@/components/registration-dialog';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <HeroSection onRegisterClick={() => setIsOpen(true)} />
      <AboutSection />
      <SkillsSection />
      <CompetitionSection onRegisterClick={() => setIsOpen(true)} />
      <GallerySection />
      <FacilitatorsSection />
      <CommunitySection />
      <ImpactSection />
      <TestimonialsSection />
      <RegistrationDialog isOpen={isOpen} onOpenChange={setIsOpen} />
    </main>
  );
}