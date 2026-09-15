import Image from "@/components/Image";
import { partners } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { RobotFloat } from "@/components/RobotFloat";

export function PartnersSection() {
  return (
    <section id="partners" className="relative overflow-hidden px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <RobotFloat variant="b" className="w-full max-w-md">
            <Image
              src="/assets/efective.png"
              alt=""
              width={520}
              height={480}
              className="h-auto w-full"
            />
          </RobotFloat>
          <Image
            src="/assets/efecttablet1.png"
            alt=""
            width={80}
            height={80}
            className="float-d absolute bottom-8 left-8 w-16"
          />
          <Image
            src="/assets/efecttablet2.png"
            alt=""
            width={80}
            height={80}
            className="float-b absolute right-10 top-10 w-16"
          />
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display text-3xl font-semibold text-navy md:text-[40px]">
            Education × Marketing × Technology
          </h2>
          <p className="mt-5 text-base leading-8 text-ink/90">
            課程內容結合教育設計、Marketing 實戰與技術應用，並與技術／數碼合作夥伴建立實務連結。
          </p>
          <div className="mt-8 grid gap-5">
            {partners.map((p) => (
              <article key={p.name} className="soft-card rounded-2xl p-6">
                <h3 className="font-semibold text-navy">{p.name}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{p.body}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-purple"
                >
                  官方網站 →
                </a>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
