import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/lib/content";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="tech-card group block overflow-hidden rounded-2xl"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={course.cover}
          alt={course.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-70" />
        <span className="absolute left-4 top-4 rounded-full bg-purple px-3 py-1 text-xs font-semibold text-white shadow-[0_0_16px_rgba(91,77,255,0.55)]">
          {course.level}
        </span>
      </div>
      <div className="relative p-6">
        <h3 className="text-lg font-semibold text-navy">{course.title}</h3>
        <p className="mt-2 text-sm leading-7 text-muted">{course.summary}</p>
        <p className="mt-4 text-sm font-semibold text-purple">了解詳情 →</p>
      </div>
    </Link>
  );
}
