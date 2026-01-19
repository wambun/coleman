import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesGrid } from '@/components/landing/ServicesGrid';
import { ValueProposition } from '@/components/landing/ValueProposition';
import { StatsSection } from '@/components/landing/StatsSection';
import { TestimonialCarousel } from '@/components/landing/TestimonialCarousel';
import { CTABanner } from '@/components/landing/CTABanner';
import { PartnerLogos } from '@/components/landing/PartnerLogos';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <PartnerLogos />
      <ServicesGrid />
      <StatsSection />
      <ValueProposition />
      <TestimonialCarousel />
      <CTABanner />
    </div>
  );
}
