import { Star } from "lucide-react";
import { courses } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SnapRow } from "@/components/home/SnapRow";

export function TestimonialsSlider() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 lg:px-8 lg:py-28">
      <Reveal eager className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold text-navy md:text-[40px]">
          帶得走嘅實戰收穫
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-ink/90">
          每一堂課都唔止聽完就算。我們希望你離開課室嗰刻，手上已經有一件可以即刻用嘅嘢。
        </p>
      </Reveal>
      <div className="mx-auto mt-12 max-w-7xl">
        <SnapRow>
          {courses.map((course) => (
            <article key={course.id} className="snap-card soft-card rounded-2xl p-7">
              <div className="flex gap-1 text-purple">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-ink/90">{course.takeaways[0]}</p>
              <p className="mt-6 text-sm font-semibold text-navy">{course.title}</p>
              <p className="text-xs text-muted">{course.level}</p>
            </article>
          ))}
        </SnapRow>
      </div>
    </section>
  );
}
