import Link from "next/link";
import { siteConfig } from "@/config/site";
import LogoMark from "@/components/shared/LogoMark";

const footerLinks = {
  Services: [
    { label: "Web Design", href: "/services/web-design" },
    { label: "Brand Identity", href: "/services/branding" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "SEO & Content", href: "/services/seo" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-bg-surface)]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <LogoMark className="mb-4" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {siteConfig.tagline}. We build digital experiences that drive real results for
              ambitious brands worldwide.
            </p>
            <div className="mt-6 flex gap-4">
              {Object.entries(siteConfig.social).map(([platform, href]) => (
                <Link
                  key={platform}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-xs font-medium uppercase text-[var(--color-text-secondary)] transition-all hover:border-violet-500/50 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                >
                  {platform.slice(0, 2)}
                </Link>
              ))}
            </div>
          </div>

          {/* Links cols */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest gradient-text">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">{siteConfig.email}</p>
        </div>
      </div>
    </footer>
  );
}
