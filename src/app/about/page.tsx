import type { Metadata } from "next";
import AboutPageClient from "@/components/sections/about/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team of obsessive creators, strategists, and builders behind Nexus Studio.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
