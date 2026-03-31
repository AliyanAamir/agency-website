"use client";

import { motion } from "framer-motion";
import type { ServiceItem } from "@/types";
import ServiceCard from "@/components/shared/ServiceCard";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";

export default function ServicesGrid({ services }: { services: ServiceItem[] }) {
  return (
    <StaggerContainer className="grid gap-6 sm:grid-cols-2">
      {services.map((service) => (
        <motion.div key={service.slug} variants={staggerItem}>
          <ServiceCard service={service} variant="full" className="h-full" />
        </motion.div>
      ))}
    </StaggerContainer>
  );
}
