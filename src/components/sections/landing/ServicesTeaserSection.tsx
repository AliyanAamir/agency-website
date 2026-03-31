"use client";
import { services } from "@/data/services";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/shared/ServiceCard";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

export default function ServicesTeaserSection() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What We Do"
          title="Full-Service Digital Excellence"
          description="From pixels to pipelines, we handle every dimension of your digital presence with obsessive attention to craft."
          className="mb-16"
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <motion.div key={service.slug} variants={staggerItem}>
              <ServiceCard service={service} className="h-full" />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
