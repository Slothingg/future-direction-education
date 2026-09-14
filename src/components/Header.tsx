"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import { Logo } from "@/components/Logo";

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  const path = href.split("#")[0];
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-mint/15 bg-navy/88 text-white backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-mint/70 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 lg:px-8">
        <Logo light />
        <nav className="hidden items-center gap-8 text-[15px] lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative py-1 transition-colors ${
                isActive(pathname, item.href)
                  ? "font-semibold text-mint"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute inset-x-0 -bottom-1 mx-auto h-px bg-mint shadow-[0_0_10px_#41e295] transition-all duration-300 ${
                  isActive(pathname, item.href)
                    ? "w-6 opacity-100"
                    : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-70"
                }`}
              />
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] tracking-wide text-white/55">
            編號 {site.license}
          </span>
          <Link href="/register" className="btn-primary !py-2.5 !px-5 text-sm">
            立即報名
          </Link>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 transition hover:border-mint/40 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "關閉選單" : "開啟選單"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`mobile-nav-backdrop lg:hidden ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <nav
        id="mobile-nav"
        aria-hidden={!open}
        className={`mobile-nav-panel lg:hidden ${open ? "is-open" : ""}`}
      >
        <div className="mobile-nav-inner">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-item ${isActive(pathname, item.href) ? "text-mint" : "text-white/90"}`}
              style={{ transitionDelay: open ? `${80 + i * 55}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/register"
            className="mobile-nav-item btn-primary mt-2 w-full"
            style={{ transitionDelay: open ? `${80 + nav.length * 55}ms` : "0ms" }}
            onClick={() => setOpen(false)}
          >
            立即報名
          </Link>
        </div>
      </nav>
    </header>
  );
}
