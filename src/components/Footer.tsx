import Link from "next/link";
import Image from "@/components/Image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/content";

const links = [
  { href: "/courses", label: "課程" },
  { href: "/about", label: "關於我們" },
  { href: "/about#partners", label: "企業培訓" },
  { href: "/register", label: "立即報名" },
  { href: "/contact", label: "聯絡我們" },
];

const courseLinks = [
  { href: "/courses/geo", label: "GEO 證書課程" },
  { href: "/courses/ai-website", label: "AI 網站建立" },
  { href: "/courses/ai-marketing", label: "AI Marketing" },
  { href: "/about#partners", label: "院校合作" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="tech-grid opacity-30" />
      <Image
        src="/assets/news-elements2.png"
        alt=""
        width={368}
        height={365}
        className="pointer-events-none absolute left-6 top-8 h-auto w-14 object-contain opacity-55 float-b md:w-16"
      />
      <Image
        src="/assets/ashape-elements.png"
        alt=""
        width={330}
        height={342}
        className="pointer-events-none absolute -right-6 bottom-0 h-auto w-44 object-contain opacity-45 sm:w-52 md:w-56"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm leading-7 text-white/75">
            {site.slogan}
            <br />
            我們把複雜的 AI 技術轉化成簡單、實用、可即時應用的學習內容。
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-semibold">快速連結</h4>
          <ul className="space-y-2 text-sm text-white/75">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-semibold">課程</h4>
          <ul className="space-y-2 text-sm text-white/75">
            {courseLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-semibold">聯絡</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 shrink-0" />
              {site.phone}
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" />
              {site.email}
            </li>
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              {site.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © 2026 {site.nameZh}　教育局編號 {site.license}
          </p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              私隱政策
            </Link>
            <Link href="/terms" className="hover:text-white">
              條款及細則
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
