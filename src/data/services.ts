import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    slug: "web-design",
    title: "Web Design & Development",
    shortDescription: "Pixel-perfect websites built for performance and conversion.",
    description:
      "We craft immersive web experiences that blend stunning aesthetics with razor-sharp performance. From landing pages to complex web applications, every pixel serves a purpose.",
    icon: "🖥️",
    features: [
      "Custom UI/UX Design",
      "Responsive Development",
      "Performance Optimization",
      "CMS Integration",
      "E-Commerce Solutions",
      "Web Accessibility (WCAG)",
    ],
    deliverables: [
      "Brand-aligned design mockups",
      "Fully responsive website",
      "Core Web Vitals optimized codebase",
      "CMS setup & documentation",
      "30-day post-launch support",
    ],
    process: [
      { number: "01", title: "Discovery", description: "We deep-dive into your brand, goals, and audience to map out the perfect digital strategy." },
      { number: "02", title: "Design", description: "High-fidelity prototypes crafted in Figma — every interaction, every screen, perfected." },
      { number: "03", title: "Develop", description: "Clean, modern code built on Next.js, optimized from day one for speed and SEO." },
      { number: "04", title: "Launch", description: "Thorough QA, performance audits, and a smooth handoff so you own your digital presence." },
    ],
    relatedSlugs: ["branding", "seo"],
  },
  {
    slug: "branding",
    title: "Brand Identity",
    shortDescription: "Identities that resonate, differentiate, and endure.",
    description:
      "Your brand is more than a logo — it's a feeling. We build cohesive visual identities that communicate your values instantly and leave a lasting impression.",
    icon: "✦",
    features: [
      "Logo & Mark Design",
      "Brand Guidelines",
      "Color & Typography System",
      "Iconography & Illustration",
      "Brand Voice & Messaging",
      "Packaging Design",
    ],
    deliverables: [
      "Primary & secondary logo suite",
      "Complete brand style guide",
      "Color palette & typography specs",
      "Asset library (SVG, PNG, PDF)",
      "Brand application mockups",
    ],
    process: [
      { number: "01", title: "Research", description: "Competitor analysis, audience profiling, and industry positioning to find your unique space." },
      { number: "02", title: "Concept", description: "Multiple creative directions explored — from moodboards to rough identity concepts." },
      { number: "03", title: "Refine", description: "Iterative design rounds until every element of your identity feels just right." },
      { number: "04", title: "Deliver", description: "Production-ready files, guidelines, and everything you need to roll out your new brand." },
    ],
    relatedSlugs: ["web-design", "digital-marketing"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription: "Data-driven campaigns that convert browsers to buyers.",
    description:
      "Strategy-first digital marketing that connects your brand with the right people at the right moment. We blend creativity with analytics to grow your pipeline.",
    icon: "📈",
    features: [
      "Paid Social (Meta, LinkedIn)",
      "Google Ads Management",
      "Content Strategy",
      "Email Marketing",
      "Conversion Rate Optimization",
      "Marketing Analytics",
    ],
    deliverables: [
      "Full-funnel marketing strategy",
      "Monthly campaign reports",
      "Ad creative assets",
      "Landing page designs",
      "Weekly performance reviews",
    ],
    process: [
      { number: "01", title: "Audit", description: "We analyze your current marketing stack, funnels, and competitive landscape for quick wins." },
      { number: "02", title: "Strategy", description: "A channel-specific growth plan with KPIs, budgets, and content calendars." },
      { number: "03", title: "Execute", description: "Launch, test, and iterate — always optimizing toward your north-star metric." },
      { number: "04", title: "Report", description: "Clear, jargon-free dashboards showing exactly what's working and what's next." },
    ],
    relatedSlugs: ["seo", "branding"],
  },
  {
    slug: "seo",
    title: "SEO & Content",
    shortDescription: "Organic growth that compounds over time.",
    description:
      "Technical SEO, strategic content, and link building that move the needle on rankings and drive qualified organic traffic to your site month over month.",
    icon: "🔍",
    features: [
      "Technical SEO Audit",
      "Keyword Research",
      "On-Page Optimization",
      "Content Strategy & Writing",
      "Link Building",
      "Local SEO",
    ],
    deliverables: [
      "Comprehensive SEO audit report",
      "Keyword opportunity map",
      "Optimized content calendar",
      "Monthly ranking reports",
      "Backlink acquisition plan",
    ],
    process: [
      { number: "01", title: "Audit", description: "Technical crawl, backlink analysis, and keyword gap assessment to find growth opportunities." },
      { number: "02", title: "Optimize", description: "On-page fixes, site structure improvements, and Core Web Vitals enhancements." },
      { number: "03", title: "Create", description: "SEO-driven content that answers real questions and earns natural backlinks." },
      { number: "04", title: "Scale", description: "Link outreach, content compounding, and authority-building for long-term dominance." },
    ],
    relatedSlugs: ["web-design", "digital-marketing"],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
