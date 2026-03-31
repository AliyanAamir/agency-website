import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServiceDetail from "@/components/sections/services/ServiceDetail";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "SEO & Content",
  description: "Technical SEO and content strategy that drives compounding organic growth.",
};

export default function SEOPage() {
  const service = getServiceBySlug("seo");
  if (!service) notFound();
  return (
    <>
      <ServicesHero eyebrow={service.title} title={service.title} description={service.description} />
      <ServiceDetail service={service} />
    </>
  );
}
