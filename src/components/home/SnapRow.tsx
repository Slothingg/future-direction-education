"use client";

import { useRef, type ReactNode, type RefObject } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function SnapControls({
  onPrev,
  onNext,
  className = "",
}: {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}) {
  return (
    <div className={`mt-6 flex gap-3 ${className}`}>
      <button type="button" className="nav-arrow" onClick={onPrev} aria-label="上一組">
        <ChevronLeft size={18} />
      </button>
      <button type="button" className="nav-arrow" onClick={onNext} aria-label="下一組">
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export function SnapRow({
  children,
  className = "",
  showControls = true,
  scrollerRef,
}: {
  children: ReactNode;
  className?: string;
  showControls?: boolean;
  scrollerRef?: RefObject<HTMLDivElement | null>;
}) {
  const localRef = useRef<HTMLDivElement>(null);
  const ref = scrollerRef ?? localRef;

  const scrollByCard = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 380), behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div ref={ref} className="snap-row pb-2">
        {children}
      </div>
      {showControls ? (
        <SnapControls onPrev={() => scrollByCard(-1)} onNext={() => scrollByCard(1)} />
      ) : null}
    </div>
  );
}
