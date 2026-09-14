const particles = [
  { t: "12%", l: "8%", s: 5, c: "#41e295", d: "0s" },
  { t: "22%", l: "18%", s: 3, c: "#6d5cff", d: "1.2s" },
  { t: "38%", l: "6%", s: 4, c: "#41e295", d: "2s" },
  { t: "58%", l: "14%", s: 3, c: "#6d5cff", d: "0.6s" },
  { t: "74%", l: "9%", s: 5, c: "#41e295", d: "1.8s" },
  { t: "16%", l: "88%", s: 4, c: "#6d5cff", d: "0.4s" },
  { t: "34%", l: "92%", s: 3, c: "#41e295", d: "2.4s" },
  { t: "52%", l: "84%", s: 5, c: "#6d5cff", d: "1s" },
  { t: "70%", l: "90%", s: 3, c: "#41e295", d: "1.6s" },
  { t: "28%", l: "48%", s: 3, c: "#ffffff", d: "2.8s" },
  { t: "64%", l: "56%", s: 4, c: "#41e295", d: "0.8s" },
  { t: "8%", l: "62%", s: 3, c: "#6d5cff", d: "2.2s" },
];

const beams = [11, 27, 43, 61, 78, 91];

export function TechField({ light = false }: { light?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className={`tech-grid ${light ? "opacity-40" : ""}`} />
      {!light ? <div className="scan-line" /> : null}
      {!light
        ? beams.map((left, i) => (
            <span
              key={left}
              className="data-beam"
              style={{ left: `${left}%`, animationDelay: `${i * 0.7}s` }}
            />
          ))
        : null}
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            top: p.t,
            left: p.l,
            width: p.s,
            height: p.s,
            background: p.c,
            animationDelay: p.d,
            boxShadow: `0 0 10px ${p.c}`,
          }}
        />
      ))}
    </div>
  );
}

export function HudCorners({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-4 z-[5] md:inset-6 ${className}`}
      aria-hidden
    >
      <span className="hud-corner hud-tl" />
      <span className="hud-corner hud-tr" />
      <span className="hud-corner hud-bl" />
      <span className="hud-corner hud-br" />
    </div>
  );
}

export function OrbitStage({
  size = 340,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <div className="hero-glow" />
      <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative" style={{ width: size, height: size }}>
          <div className="pulse-ring" />
          <div className="pulse-ring pulse-ring-2" />
          <div className="orbit-spin absolute inset-0 rounded-full border border-dashed border-mint/40">
            <span className="orbit-dot" />
          </div>
          <div className="orbit-spin-rev absolute inset-[14%] rounded-full border border-dashed border-purple/40">
            <span className="orbit-dot" style={{ background: "#6d5cff" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
