import type { NavLink } from "@/types";

export const siteConfig = {
  name: "Nexus Studio",
  tagline: "We craft digital experiences that matter",
  description:
    "Nexus Studio is a premium digital agency specializing in web design, branding, digital marketing, and SEO. We help businesses grow online.",
  url: "https://nexusstudio.co",
  ogImage: "/images/og-image.jpg",
  email: "hello@nexusstudio.co",
  phone: "+1 (555) 000-0000",
  address: "123 Design Street, San Francisco, CA 94102",
  social: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
  },
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];
