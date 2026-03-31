import type { Metadata } from "next";
import PricingPageClient from "@/components/sections/pricing/PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent, flexible pricing for every stage of business growth.",
};

export default function PricingPage() {
  return <PricingPageClient />;
}
