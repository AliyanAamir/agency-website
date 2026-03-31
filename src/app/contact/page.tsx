import type { Metadata } from "next";
import ContactPageClient from "@/components/sections/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's talk about your project. We respond within 24 hours.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
