import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServiceDetail from "@/components/sections/services/ServiceDetail";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Brand Identity",
  description: "Cohesive brand identities that communicate your values and leave a lasting impression.",
};

export default function BrandingPage() {
  const service = getServiceBySlug("branding");
  if (!service) notFound();
  return (
    <>
      <ServicesHero eyebrow={service.title} title={service.title} description={service.description} />
      <ServiceDetail service={service} />
    </>
  );
}
