import Image from "@/components/Image";
import { principles, stats } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function QualifiedSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold leading-snug text-navy md:text-[40px]">
            把 AI 由「聽過」變成「識用」
          </h2>
          <p className="mt-5 text-base leading-8 text-ink/90">
            你不需要先懂 Coding，也不需要成為 AI
            工程師。我們更重視你能否理解背後邏輯、選擇合適工具，並把所學應用到真實工作。
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {principles.map((p) => (
              <li key={p.key} className="soft-card rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-purple">{p.key}</p>
                <h3 className="mt-1 font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120} className="relative">
          <Image
            src="/assets/qualified.png"
            alt="課程實戰示意"
            width={799}
            height={457}
            className="h-auto w-full"
          />
        </Reveal>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-y-8 border-t border-[#e6eaf3] pt-10 sm:grid-cols-4 sm:divide-x sm:divide-[#e6eaf3]">
        {stats.map((s, i) => (
          <Reveal key={s.label} eager className="px-4 text-center">
            <p
              className={`font-display text-3xl font-semibold md:text-4xl ${
                ["text-purple", "text-mint", "text-navy", "text-purple"][i % 4]
              }`}
            >
              {s.value}
            </p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
