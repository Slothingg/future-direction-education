import Link from "next/link";
import { HudCorners, TechField } from "@/components/TechField";

export function PageBanner({
  title,
  crumbs,
}: {
  title: string;
  crumbs: { href: string; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-center text-white md:py-20">
      <TechField />
      <HudCorners className="opacity-70" />
      <div className="relative z-10 px-4">
        <p className="section-kicker mb-4 justify-center text-mint">Future Direction</p>
        <h1 className="font-display text-4xl font-semibold md:text-5xl">{title}</h1>
        <nav className="mt-4 text-sm text-white/70">
          {crumbs.map((c, i) => (
            <span key={c.href}>
              {i > 0 ? <span className="mx-2">›</span> : null}
              <Link href={c.href} className="hover:text-white">
                {c.label}
              </Link>
            </span>
          ))}
          <span className="mx-2">›</span>
          <span className="text-white">{title}</span>
        </nav>
      </div>
    </section>
  );
}
