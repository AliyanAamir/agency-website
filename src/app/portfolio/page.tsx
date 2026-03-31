import type { Metadata } from "next";
import PortfolioPageClient from "@/components/sections/portfolio/PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Our selected work — websites, brands, and campaigns built for ambitious companies.",
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
