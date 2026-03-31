import type { Metadata } from "next";
import { services } from "@/data/services";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesGridClient from "@/components/sections/services/ServicesGrid";
import CTABannerSection from "@/components/sections/landing/CTABannerSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service digital agency offering web design, brand identity, digital marketing, and SEO for ambitious brands.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero
        eyebrow="Services"
        title="Everything Your Brand Needs to Win Online"
        description="From a stunning website to a full-funnel growth engine — we're the only digital partner you'll ever need."
      />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <ServicesGridClient services={services} />
        </div>
      </section>
      <CTABannerSection />
    </>
  );
}
