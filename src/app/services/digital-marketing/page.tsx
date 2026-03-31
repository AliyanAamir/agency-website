import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServiceDetail from "@/components/sections/services/ServiceDetail";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description: "Data-driven digital marketing campaigns that connect your brand with the right audience.",
};

export default function DigitalMarketingPage() {
  const service = getServiceBySlug("digital-marketing");
  if (!service) notFound();
  return (
    <>
      <ServicesHero eyebrow={service.title} title={service.title} description={service.description} />
      <ServiceDetail service={service} />
    </>
  );
}
