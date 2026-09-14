import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, CheckCircle2, Play, Quote } from "lucide-react";
import {
  audiences,
  courses,
  credentials,
  differentiators,
  faqs,
  partners,
  principles,
  site,
  stats,
  whyNow,
} from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { HudCorners, OrbitStage, TechField } from "@/components/TechField";

export const metadata: Metadata = {
  title: "未來方針教育中心｜香港 AI 教育・GEO・AI Marketing 課程",
  description:
    "未來方針教育中心專注 AI 與數碼技能教育。學懂 AI，不只是跟上科技，而是跟上市場。",
};

const serviceIcons = [
  "/assets/braindata.png",
  "/assets/dataprocessing.png",
  "/assets/datastored.png",
];

const serviceBg = ["bg-purple/10", "bg-mint/15", "bg-navy/5"];

export default function HomePage() {
  return (
    <>
      {/* Hero — centred composition with flanking illustrations, inspired by Home 3 */}
      <section className="relative overflow-hidden bg-navy text-white">
        <TechField />
        <HudCorners />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(91,77,255,0.32),transparent_38%),radial-gradient(circle_at_82%_12%,rgba(65,226,149,0.22),transparent_30%)]" />
        <OrbitStage size={420} />

        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-28 pt-16 text-center sm:pt-20 lg:px-8 lg:pb-36 lg:pt-24">
          <p className="hero-watermark pointer-events-none absolute inset-x-0 top-2 z-0 select-none text-center">
            AI
          </p>
          <div className="hero-copy relative z-10">
            <p className="hero-line relative mx-auto mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-[0.18em] text-mint">
              {site.slogan}
            </p>
            <h1 className="hero-line relative font-display text-[2.1rem] font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.12]">
              學懂 <span className="mint-glow">AI</span>，不只是跟上科技，
              <br className="hidden sm:block" />
              而是跟上市場。
            </h1>
            <p className="hero-line relative mx-auto mt-6 max-w-xl text-base leading-8 text-white/80">
              我們把複雜的 AI 技術轉化成人人都聽得明、做得到、帶得走的實戰能力。面向中小企、Marketing
              從業員、Agency 及創業者。
            </p>
            <div className="hero-line relative mt-9 flex flex-wrap items-center justify-center gap-5">
              <Link href="/register" className="btn-primary">
                立即報名
              </Link>
              <Link href="/courses" className="btn-ghost">
                <span className="play-orb">
                  <Play size={14} fill="white" />
                </span>
                了解課程
              </Link>
            </div>
            <div className="hero-line hero-status relative mx-auto mt-10 max-w-xl justify-center">
              <span className="inline-flex items-center gap-2 text-mint">
                <span className="status-dot" />
                System Online
              </span>
              <span>GEO</span>
              <span>AI Web</span>
              <span>AI Marketing</span>
              <span className="text-white/45">香港實體授課</span>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[300px] xl:block">
          <Image
            src="/assets/banner1.png"
            alt=""
            width={421}
            height={579}
            priority
            className="float-b absolute left-2 top-1/2 w-40 -translate-y-1/2 object-contain opacity-90 drop-shadow-[0_20px_50px_rgba(91,77,255,0.35)]"
          />
          <Image
            src="/assets/rocket-element.png"
            alt=""
            width={219}
            height={290}
            className="float-c absolute left-16 top-[26%] w-16"
          />
          <Image
            src="/assets/ball-element.png"
            alt=""
            width={95}
            height={86}
            className="float-a absolute bottom-[22%] left-6 w-10 opacity-80"
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[300px] xl:block">
          <Image
            src="/assets/about1.png"
            alt=""
            width={420}
            height={517}
            priority
            className="float-a absolute right-2 top-1/2 w-40 -translate-y-1/2 object-contain opacity-90 drop-shadow-[0_18px_40px_rgba(17,28,68,0.35)]"
          />
          <Image
            src="/assets/brain-element.png"
            alt=""
            width={282}
            height={282}
            className="float-b absolute right-14 top-[24%] w-14"
          />
          <Image
            src="/assets/ai-element.png"
            alt=""
            width={118}
            height={125}
            className="float-d absolute bottom-[24%] right-6 w-12"
          />
        </div>

        <svg className="hero-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
          <path
            d="M0 70C180 120 360 10 540 50C720 90 900 20 1080 55C1260 90 1350 70 1440 40V120H0Z"
            fill="#f4f6ff"
          />
        </svg>
      </section>

      {/* About */}
      <section className="relative overflow-hidden px-4 py-20 lg:px-8 lg:py-28">
        <TechField light />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-md">
            <Image
              src="/assets/brain-element.png"
              alt=""
              width={282}
              height={282}
              className="float-b absolute -left-6 top-8 w-36 lg:-left-10 lg:w-48"
            />
            <Image
              src="/assets/about1.png"
              alt="未來方針教學機器人"
              width={420}
              height={517}
              className="relative z-10 mx-auto h-auto w-[78%] drop-shadow-[0_18px_40px_rgba(17,28,68,0.12)]"
            />
            <Image
              src="/assets/ai-element.png"
              alt=""
              width={80}
              height={80}
              className="float-a absolute right-6 top-4 w-16"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="section-kicker">About Centre</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-snug text-navy md:text-[40px]">
              面向成人、企業及 Marketing 的未來技能教育平台
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/90">
              未來方針教育中心過往以傳統教育／補習服務為基礎，現階段重新定位為
              AI 教育機構。我們希望讓你真正學懂 AI，而不是只聽懂幾個新名詞。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="tech-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-navy"
                >
                  <BadgeCheck size={14} className="text-purple" />
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-muted">
              適合：{audiences.join(" ｜ ")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Now */}
      <section className="relative overflow-hidden px-4 py-16 lg:px-8 lg:py-24">
        <Image
          src="/assets/feature-rocket.png"
          alt=""
          width={150}
          height={199}
          className="float-c pointer-events-none absolute bottom-8 left-2 w-24 lg:w-32"
        />
        <Reveal className="mx-auto max-w-7xl text-center">
          <p className="section-kicker justify-center">Why Now</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-navy md:text-[40px]">
            為甚麼現在要學 AI？
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-ink/90">
            AI 已經不只是科技公司的工具。真正的差距，不一定是「有沒有用
            AI」，而是你是否知道在甚麼情況用、如何判斷結果。
          </p>
        </Reveal>
        <div className="relative mx-auto mt-14 grid max-w-6xl items-center gap-8 lg:grid-cols-3">
          <div className="grid gap-6">
            {whyNow.slice(0, 2).map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <article className="tech-card rounded-2xl p-6 text-left">
                  <Image src={item.icon} alt="" width={36} height={36} className="h-9 w-9" />
                  <h3 className="mt-3 text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={80} className="relative order-first mx-auto lg:order-none">
            <div className="hero-glow !top-[55%] !h-52 !w-52 opacity-50" />
            <Image
              src="/assets/feature.png"
              alt="AI 協作機器人"
              width={400}
              height={584}
              className="relative z-10 h-auto w-64 lg:w-80"
            />
            <Image
              src="/assets/feature-ali.png"
              alt=""
              width={72}
              height={72}
              className="float-d absolute right-0 top-8 z-20 w-14"
            />
          </Reveal>
          <div className="grid gap-6">
            {whyNow.slice(2).map((item, i) => (
              <Reveal key={item.title} delay={i * 90 + 120}>
                <article className="tech-card rounded-2xl p-6 text-left">
                  <Image src={item.icon} alt="" width={36} height={36} className="h-9 w-9" />
                  <h3 className="mt-3 text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services — checklist + stacked course cards + counters, inspired by Home 3 */}
      <section className="relative overflow-hidden bg-white px-4 py-20 lg:px-8 lg:py-28">
        <TechField light />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="section-kicker">Services</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-navy md:text-[40px]">
              我們提供嘅課程與教學服務
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/90">
              由入門證書課程到企業實戰培訓，我們專注將 AI
              應用拆解成可以立即帶走使用的方法，而唔係一堆聽完就忘記嘅新名詞。
            </p>
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
            <Reveal>
              <ul className="grid gap-4 sm:grid-cols-2">
                {differentiators.map((d) => (
                  <li key={d} className="tech-card flex items-start gap-3 rounded-xl px-4 py-4">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-mint" size={18} />
                    <span className="text-sm leading-6 text-ink/90">{d}</span>
                  </li>
                ))}
              </ul>
              <Link href="/courses" className="btn-primary mt-8 inline-flex">
                查看所有課程
              </Link>
            </Reveal>
            <div className="grid gap-5">
              {courses.map((course, i) => (
                <Reveal key={course.id} delay={i * 100}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="tech-card group flex items-start gap-4 rounded-2xl p-5"
                  >
                    <span
                      className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl ${serviceBg[i % serviceBg.length]}`}
                    >
                      <Image
                        src={serviceIcons[i % serviceIcons.length]}
                        alt=""
                        width={30}
                        height={30}
                        className="h-7 w-7"
                      />
                    </span>
                    <span>
                      <h3 className="font-semibold text-navy transition group-hover:text-purple">
                        {course.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-muted">{course.summary}</p>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mt-16 grid gap-6 border-t border-[#e6eaf3] pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <Reveal key={s.label} className="text-center">
                <p className="font-display text-3xl font-semibold text-navy md:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Teach */}
      <section className="relative overflow-hidden px-4 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="section-kicker">How We Teach</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-snug text-navy md:text-[40px]">
              把 AI 由「聽過」變成「識用」
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/90">
              你不需要先懂 Coding，也不需要成為 AI
              工程師。我們更重視你能否理解背後邏輯、選擇合適工具，並把所學應用到真實工作。
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {principles.map((p, i) => (
                <li key={p.key} className="tech-card rounded-2xl p-5" style={{ transitionDelay: `${i * 60}ms` }}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-mint">{p.key}</p>
                  <h3 className="mt-1 font-semibold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{p.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="hero-glow !left-[45%] !opacity-40" />
            <Image
              src="/assets/qualified.png"
              alt="課程實戰示意"
              width={640}
              height={480}
              className="relative z-10 h-auto w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* Course showcase — photo tiles, inspired by Home 3 case studies grid */}
      <section className="relative overflow-hidden bg-white px-4 py-20 lg:px-8 lg:py-28">
        <TechField light />
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4">
          <Reveal>
            <p className="section-kicker">Courses</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-navy md:text-[40px]">
              我們教甚麼？
            </h2>
          </Reveal>
          <Link href="/courses" className="text-sm font-semibold text-purple hover:underline">
            查看所有課程 →
          </Link>
        </div>
        <div className="relative mx-auto mt-12 grid max-w-7xl gap-7 md:grid-cols-3">
          {courses.map((course, i) => (
            <Reveal key={course.id} delay={i * 110}>
              <Link
                href={`/courses/${course.slug}`}
                className="group block overflow-hidden rounded-2xl border border-[#e6eaf3] bg-white shadow-[0_10px_30px_rgba(17,28,68,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(17,28,68,0.14)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={course.cover}
                    alt={course.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-mint/15 px-3 py-1 text-xs font-semibold text-navy">
                    {course.level}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-navy">{course.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-purple">了解詳情 →</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Fees */}
      <section className="relative overflow-hidden px-4 py-20 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-7xl">
          <p className="section-kicker">Fees</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-snug text-navy md:text-[40px]">
            入門證書課與實戰課程，按程度選擇
          </h2>
        </Reveal>
        <div className="relative mx-auto mt-12 grid max-w-7xl items-stretch gap-6 md:grid-cols-3">
          {courses.map((course, i) => (
            <Reveal key={course.id} delay={i * 90}>
              <article
                className={`tech-card h-full rounded-2xl p-7 text-center ${
                  i === 0 ? "ring-2 ring-purple shadow-[0_0_30px_rgba(91,77,255,0.18)]" : ""
                }`}
              >
                <p className="text-sm font-semibold text-purple">{course.level}</p>
                <h3 className="mt-2 text-lg font-semibold text-navy">
                  {course.title.replace("課程", "")}
                </h3>
                <p className="mt-5 font-display text-3xl font-semibold text-navy">
                  {course.fee.startsWith("HK") ? course.fee.split(" ")[0] : course.fee}
                </p>
                <ul className="mt-5 space-y-2 text-left text-sm text-muted">
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
                </ul>
                <Link href={`/register?course=${course.id}`} className="btn-primary mt-7 w-full">
                  立即報名
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <Image
          src="/assets/planrobot.png"
          alt=""
          width={225}
          height={349}
          className="float-a pointer-events-none absolute bottom-8 right-4 hidden w-36 lg:block xl:right-10"
        />
      </section>

      {/* Takeaways — honest "what you leave with" cards, replacing a generic testimonial slot */}
      <section className="relative overflow-hidden px-4 py-20 lg:px-8 lg:py-28">
        <TechField light />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="section-kicker justify-center">Takeaways</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-navy md:text-[40px]">
            帶得走嘅實戰收穫
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-ink/90">
            每一堂課都唔止聽完就算。我們希望你離開課室嗰刻，手上已經有一件可以即刻用嘅嘢。
          </p>
        </Reveal>
        <div className="relative mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {courses.map((course, i) => (
            <Reveal key={course.id} delay={i * 100}>
              <article className="tech-card h-full rounded-2xl p-7">
                <Quote className="text-mint" size={26} />
                <p className="mt-4 text-sm leading-7 text-ink/90">{course.takeaways[0]}</p>
                <p className="mt-6 text-sm font-semibold text-navy">{course.title}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="relative overflow-hidden bg-white px-4 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <Image
              src="/assets/efective.png"
              alt=""
              width={520}
              height={480}
              className="h-auto w-full max-w-md"
            />
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
            <p className="section-kicker">Partners</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-navy md:text-[40px]">
              Education × Marketing × Technology
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/90">
              課程內容結合教育設計、Marketing 實戰與技術應用，並與技術／數碼合作夥伴建立實務連結。
            </p>
            <div className="mt-8 grid gap-5">
              {partners.map((p) => (
                <article key={p.name} className="tech-card rounded-2xl p-6">
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

      {/* FAQ */}
      <section className="px-4 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-semibold text-navy">
            常見問題
          </h2>
          <div className="tech-card mt-10 divide-y divide-[#e6eaf3] overflow-hidden rounded-2xl">
            {faqs.slice(0, 6).map((item) => (
              <details key={item.q} className="group px-6 py-5">
                <summary className="cursor-pointer list-none font-semibold text-navy transition-colors group-open:text-purple">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-7 text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-4 pb-24 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-navy px-6 py-16 text-white md:px-12">
            <TechField />
            <HudCorners className="opacity-80" />
            <Image
              src="/assets/news-element1.png"
              alt=""
              width={120}
              height={120}
              className="float-a absolute left-6 top-6 w-16 opacity-80"
            />
            <Image
              src="/assets/news-elements2.png"
              alt=""
              width={120}
              height={120}
              className="float-b absolute bottom-4 right-8 w-20 opacity-80"
            />
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                AI 已經改變工作方式，你準備好未？
              </h2>
              <p className="mt-4 text-white/75">
                個人報名、企業包班或院校合作，都可以與未來方針教育中心聯絡。想第一時間收到新課程通知，歡迎透過查詢表格留下聯絡方式。
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/register" className="btn-primary">
                  立即報名
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg border border-white/20 px-5 py-3 font-semibold transition hover:border-mint/60 hover:text-mint"
                >
                  企業／院校查詢
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
