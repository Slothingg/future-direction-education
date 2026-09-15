import Image from "@/components/Image";
import { whyNow } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { RobotFloat } from "@/components/RobotFloat";

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 lg:px-8 lg:py-24">
      <Image
        src="/assets/feature-rocket.png"
        alt=""
        width={150}
        height={199}
        className="float-c pointer-events-none absolute bottom-8 left-2 w-24 lg:w-32"
      />
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold text-navy md:text-[40px]">
          為甚麼現在要學 AI？
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-ink/90">
          AI 已經不只是科技公司的工具。真正的差距，不一定是「有沒有用
          AI」，而是你是否知道在甚麼情況用、如何判斷結果。
        </p>
      </Reveal>
      <div className="relative mx-auto mt-12 grid max-w-6xl items-center gap-6 lg:grid-cols-3">
        <div className="grid gap-6">
          {whyNow.slice(0, 2).map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="soft-card rounded-2xl p-6 text-left">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-purple shadow-[0_10px_24px_rgba(91,77,255,0.32)]">
                  <Image src={item.icon} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80} className="relative order-first mx-auto lg:order-none">
          <RobotFloat variant="b" className="relative z-10 w-56 lg:w-72">
            <Image
              src="/assets/feature.png"
              alt="AI 協作機器人"
              width={400}
              height={584}
              className="h-auto w-full"
            />
          </RobotFloat>
          <Image
            src="/assets/feature-ali.png"
            alt=""
            width={72}
            height={72}
            className="float-d absolute right-0 top-6 z-20 w-12"
          />
        </Reveal>
        <div className="grid gap-6">
          {whyNow.slice(2).map((item, i) => (
            <Reveal key={item.title} delay={i * 90 + 120}>
              <article className="soft-card rounded-2xl p-6 text-left">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-purple shadow-[0_10px_24px_rgba(91,77,255,0.32)]">
                  <Image src={item.icon} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
