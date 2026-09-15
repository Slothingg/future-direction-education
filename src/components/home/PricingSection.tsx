"use client";

import { useRef } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import { courses } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SnapControls, SnapRow } from "@/components/home/SnapRow";
import { RobotFloat } from "@/components/RobotFloat";
import Image from "@/components/Image";

export function PricingSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 380), behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal eager>
          <h2 className="font-display text-3xl font-semibold leading-snug text-navy md:text-[40px]">
            入門證書課與實戰課程，按程度選擇
          </h2>
          <p className="mt-5 text-base leading-8 text-ink/90">
            先由 2 小時 GEO 入門起步，再按需要延伸至 AI 網站及 AI Marketing 實戰。所有課程均為香港實體授課。
          </p>
          <SnapControls onPrev={() => scrollByCard(-1)} onNext={() => scrollByCard(1)} />
        </Reveal>
        <SnapRow showControls={false} scrollerRef={scrollerRef}>
          {courses.map((course, i) => (
            <article
              key={course.id}
              className={`snap-card price-card rounded-2xl p-7 text-center ${i === 1 ? "is-featured" : ""}`}
            >
              <p className="text-sm font-semibold text-purple">{course.level}</p>
              <h3 className="mt-2 text-lg font-semibold text-navy">
                {course.title.replace("課程", "")}
              </h3>
              <p className="mt-5 font-display text-3xl font-semibold text-navy">
                {course.fee.startsWith("HK") ? course.fee.split(" ")[0] : course.fee}
              </p>
              <ul className="mt-6 space-y-3 text-left text-sm text-muted">
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 text-purple" />
                  {course.duration}
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 text-purple" />
                  {course.format}
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 text-purple" />
                  {course.audience}
                </li>
                <li className="flex gap-2">
                  {course.fee !== "即將公布" ? (
                    <CheckCircle2 size={16} className="mt-0.5 text-purple" />
                  ) : (
                    <XCircle size={16} className="mt-0.5 text-red-400" />
                  )}
                  {course.fee !== "即將公布" ? "現正接受報名" : "開課日期即將公布"}
                </li>
              </ul>
              <Link href={`/register?course=${course.id}`} className="btn-primary mt-7 w-full">
                立即報名
              </Link>
            </article>
          ))}
        </SnapRow>
      </div>
      <RobotFloat
        variant="a"
        className="pointer-events-none absolute bottom-2 right-1 z-0 w-16 sm:bottom-3 sm:right-2 sm:w-20 lg:bottom-4 lg:right-4 lg:w-24"
      >
        <Image
          src="/assets/planrobot.png"
          alt=""
          width={225}
          height={349}
          className="h-auto w-full opacity-80"
        />
      </RobotFloat>
    </section>
  );
}
