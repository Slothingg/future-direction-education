import Image from "@/components/Image";
import Link from "next/link";
import { courses } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SnapRow } from "@/components/home/SnapRow";

export function CoursesSlider() {
  return (
    <section className="relative overflow-hidden px-4 py-20 lg:px-8 lg:py-28">
      <Reveal eager className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-6">
        <div className="flex items-start gap-4">
          <Image
            src="/assets/ai-element.png"
            alt=""
            width={118}
            height={125}
            className="mt-1 w-14 sm:w-16"
          />
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy md:text-[40px]">
              我們教甚麼？
            </h2>
            <p className="mt-3 max-w-xl text-base leading-8 text-ink/90">
              由 GEO、AI 網站到 AI Marketing，每門課都對應真實工作場景，讓你帶走可即時使用的方法。
            </p>
          </div>
        </div>
        <Link href="/courses" className="btn-primary">
          查看所有課程
        </Link>
      </Reveal>
      <div className="mx-auto mt-12 max-w-7xl">
        <SnapRow>
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="snap-card group overflow-hidden rounded-2xl bg-white shadow-[0_16px_40px_rgba(17,28,68,0.08)]"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={course.cover}
                  alt={course.title}
                  fill
                  sizes="360px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-md bg-mint/15 px-3 py-1 text-xs font-semibold text-navy">
                  {course.level}
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-navy">{course.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{course.summary}</p>
                <p className="mt-4 text-sm font-semibold text-purple">了解詳情 →</p>
              </div>
            </Link>
          ))}
        </SnapRow>
      </div>
    </section>
  );
}
