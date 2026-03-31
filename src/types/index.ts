export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  deliverables: string[];
  process: ProcessStep[];
  relatedSlugs: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  year: string;
  client: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  featured: boolean;
  badge?: string;
  features: PricingFeature[];
  cta: string;
}

export interface PricingFeature {
  name: string;
  included: boolean;
  highlight?: boolean;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}
