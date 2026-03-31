import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServiceDetail from "@/components/sections/services/ServiceDetail";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Web Design & Development",
  description:
    "Pixel-perfect, performance-first websites and web applications built with modern technologies.",
};

export default function WebDesignPage() {
  const service = getServiceBySlug("web-design");
  if (!service) notFound();
  return (
    <>
      <ServicesHero
        eyebrow={service.title}
        title={service.title}
        description={service.description}
      />
      <ServiceDetail service={service} />
    </>
  );
}
