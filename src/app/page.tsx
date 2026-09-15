import type { Metadata } from "next";
import { site } from "@/lib/content";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { QualifiedSection } from "@/components/home/QualifiedSection";
import { CoursesSlider } from "@/components/home/CoursesSlider";
import { PricingSection } from "@/components/home/PricingSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
  title: "未來方針教育中心｜香港 AI 教育・GEO・AI Marketing 課程",
  description:
    "未來方針教育中心專注 AI 與數碼技能教育。學懂 AI，不只是跟上科技，而是跟上市場。",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <QualifiedSection />
      <CoursesSlider />
      <PricingSection />
      <PartnersSection />
      <TestimonialsSlider />
      <NewsletterSection />
      <span className="sr-only">{site.nameZh}</span>
    </>
  );
}
