import Image from "@/components/Image";
import Link from "next/link";
import { Play } from "lucide-react";
import { site } from "@/lib/content";
import { RobotFloat } from "@/components/RobotFloat";

export function Hero() {
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden bg-[#071631] text-white lg:min-h-[760px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(65,226,149,0.14),transparent_24%),radial-gradient(circle_at_16%_34%,rgba(91,77,255,0.18),transparent_34%)]" />
      <span className="hero-ai-word" aria-hidden>
        AI
      </span>
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <span className="hero-star left-[11%] top-[34%]" />
        <span className="hero-star left-[78%] top-[21%] !bg-mint" />
        <span className="hero-star left-[82%] top-[42%] !bg-purple" />
        <span className="hero-star left-[58%] top-[30%] !h-2 !w-2 !bg-mint" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 pb-28 pt-16 sm:pt-20 lg:min-h-[760px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:pb-36 lg:pt-8">
        <div className="hero-copy relative max-w-[620px]">
          <div className="relative z-10">
            <p className="hero-line mb-5 text-sm font-medium tracking-[0.18em] text-mint">
              {site.slogan}
            </p>
            <h1 className="hero-line max-w-[620px] font-display text-[2.6rem] font-semibold leading-[1.08] sm:text-5xl lg:text-[64px]">
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

        <div className="relative mx-auto h-[390px] w-full max-w-[480px] sm:h-[470px] lg:h-[560px] lg:max-w-none">
          <div className="hero-glow !left-[52%] !top-[48%] !h-72 !w-72 opacity-60" />
          <RobotFloat
            variant="b"
            className="absolute inset-x-0 bottom-6 z-10 mx-auto w-[260px] sm:w-[330px] lg:bottom-2 lg:w-[390px]"
          >
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
        className="pointer-events-none absolute bottom-[-1px] left-0 z-20 h-[86px] w-full object-cover object-top sm:h-[105px] lg:h-[140px]"
      />
    </section>
  );
}
