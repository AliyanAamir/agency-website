import type { Metadata } from "next";
import HeroSection from "@/components/sections/landing/HeroSection";
import ServicesTeaserSection from "@/components/sections/landing/ServicesTeaserSection";
import StatsSection from "@/components/sections/landing/StatsSection";
import AboutTeaserSection from "@/components/sections/landing/AboutTeaserSection";
import PortfolioPreviewSection from "@/components/sections/landing/PortfolioPreviewSection";
import TestimonialsSection from "@/components/sections/landing/TestimonialsSection";
import CTABannerSection from "@/components/sections/landing/CTABannerSection";

export const metadata: Metadata = {
  title: "Nexus Studio — Premium Digital Agency",
  description:
    "Strategy-first design agency crafting websites, brands, and marketing systems for companies that want to lead.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesTeaserSection />
      <StatsSection />
      <AboutTeaserSection />
      <PortfolioPreviewSection />
      <TestimonialsSection />
      <CTABannerSection />
    </>
  );
}
