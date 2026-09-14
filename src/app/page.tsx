import type { Metadata } from "next";
import Image from "@/components/Image";
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
import { RobotFloat } from "@/components/RobotFloat";
import { HudCorners, TechField } from "@/components/TechField";

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
      {/* Hero — a two-column composition based on the reference home page */}
      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#071631] text-white lg:min-h-[680px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(65,226,149,0.14),transparent_24%),radial-gradient(circle_at_16%_34%,rgba(91,77,255,0.18),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <span className="hero-star left-[11%] top-[34%]" />
          <span className="hero-star left-[78%] top-[21%] !bg-mint" />
          <span className="hero-star left-[82%] top-[42%] !bg-purple" />
          <span className="hero-star left-[58%] top-[30%] !h-2 !w-2 !bg-mint" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 pb-28 pt-16 sm:pt-20 lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:pb-32 lg:pt-12">
          <div className="hero-copy relative max-w-[600px]">
            <Image
              src="/assets/t-element.png"
              alt=""
              width={309}
              height={225}
              priority
              className="pointer-events-none absolute -left-20 -top-16 w-64 opacity-25 sm:-left-24 sm:w-72"
            />
            <div className="relative">
              <p className="hero-line mb-5 text-sm font-medium tracking-[0.18em] text-mint">
                {site.slogan}
              </p>
              <h1 className="hero-line max-w-[600px] font-display text-[2.8rem] font-semibold leading-[1.08] sm:text-5xl lg:text-[64px]">
                學懂 <span className="mint-glow">AI</span>，
                <br />
                不只是跟上科技，
                <br />
                而是跟上市場。
              </h1>
              <p className="hero-line mt-6 max-w-xl text-base leading-8 text-white/75">
                我們把複雜的 AI 技術轉化成人人都聽得明、做得到、帶得走的實戰能力。
                面向中小企、Marketing 從業員、Agency 及創業者。
              </p>
              <div className="hero-line mt-8 flex flex-wrap items-center gap-5">
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
            </div>
          </div>

          <div className="relative mx-auto h-[390px] w-full max-w-[480px] sm:h-[470px] lg:h-[540px] lg:max-w-none">
            <div className="hero-glow !left-[52%] !top-[48%] !h-72 !w-72 opacity-60" />
            <RobotFloat variant="b" className="absolute inset-x-0 bottom-6 z-10 mx-auto w-[260px] sm:w-[330px] lg:bottom-0 lg:w-[380px]">
              <Image
                src="/assets/banner1.png"
                alt="AI 教學機器人"
                width={421}
                height={579}
                priority
                className="h-auto w-full object-contain drop-shadow-[0_22px_45px_rgba(0,0,0,0.28)]"
              />
            </RobotFloat>
            <Image
              src="/assets/rocket-element.png"
              alt=""
              width={219}
              height={290}
              className="float-c absolute bottom-[18%] right-[-2%] z-20 w-24 sm:right-[-4%] sm:w-32 lg:bottom-[20%] lg:right-[-1%] lg:w-40"
            />
            <Image
              src="/assets/ai-element.png"
              alt=""
              width={118}
              height={125}
              className="float-a absolute left-[8%] top-[10%] z-20 w-14 sm:left-[10%] sm:w-20"
            />
            <Image
              src="/assets/ball-element.png"
              alt=""
              width={95}
              height={86}
              className="float-b absolute bottom-[11%] left-[-2%] z-20 w-12 sm:left-[-3%] sm:w-16"
            />
          </div>
        </div>

        <Image
          src="/assets/shape-element1.png"
          alt=""
          width={1920}
          height={213}
          className="pointer-events-none absolute bottom-[-1px] left-0 z-20 h-[86px] w-full object-cover object-top sm:h-[105px] lg:h-[125px]"
        />
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
              className="float-b absolute left-0 top-0 w-24 lg:-left-2 lg:top-2 lg:w-28"
            />
            <RobotFloat variant="c" className="relative z-10 mx-auto w-[72%]">
              <Image
                src="/assets/about1.png"
                alt="未來方針教學機器人"
                width={420}
                height={517}
                className="h-auto w-full drop-shadow-[0_18px_40px_rgba(17,28,68,0.12)]"
              />
            </RobotFloat>
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
        <div className="relative mx-auto mt-10 grid max-w-6xl items-start gap-5 lg:grid-cols-3 lg:gap-6">
          <div className="grid gap-3">
            {whyNow.slice(0, 2).map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <article className="tech-card flex gap-3 rounded-xl p-4 text-left">
                  <Image
                    src={item.icon}
                    alt=""
                    width={36}
                    height={36}
                    className="mt-0.5 h-7 w-7 shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={80} className="relative order-first mx-auto lg:order-none lg:pt-2">
            <div className="hero-glow !top-[55%] !h-44 !w-44 opacity-50" />
            <RobotFloat variant="b" className="relative z-10 w-52 lg:w-64">
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
          <div className="grid gap-3">
            {whyNow.slice(2).map((item, i) => (
              <Reveal key={item.title} delay={i * 90 + 120}>
                <article className="tech-card flex gap-3 rounded-xl p-4 text-left">
                  <Image
                    src={item.icon}
                    alt=""
                    width={36}
                    height={36}
                    className="mt-0.5 h-7 w-7 shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
                  </div>
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
            <RobotFloat variant="d" className="relative z-10 w-full">
              <Image
                src="/assets/qualified.png"
                alt="課程實戰示意"
                width={640}
                height={480}
                className="h-auto w-full"
              />
            </RobotFloat>
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
        <div className="relative z-10 mx-auto mt-12 grid max-w-7xl items-stretch gap-6 md:grid-cols-3">
          {courses.map((course, i) => (
            <Reveal key={course.id} delay={i * 90}>
              <article className="tech-card h-full rounded-2xl p-7 text-center">
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
        <RobotFloat
          variant="a"
          className="pointer-events-none absolute bottom-2 right-1 z-0 w-16 sm:bottom-3 sm:right-2 sm:w-20 lg:bottom-4 lg:right-4 lg:w-24 xl:right-6"
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
              <details key={item.q} open className="group px-6 py-5">
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
