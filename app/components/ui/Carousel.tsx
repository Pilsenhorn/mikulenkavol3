"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const card = el.querySelector(".carousel-item") as HTMLElement | null;
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 24; // odpovídá gap-6
    const amount = cardWidth + gap;

    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Arrow */}
      <button
        aria-label="Scroll left"
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 hover:bg-white/20 transition"
      >
        <ChevronLeft size={18} className="text-white" />
      </button>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="
          flex gap-6 
          overflow-x-auto 
          no-scrollbar 
          snap-x snap-mandatory 
          scroll-smooth 
          px-8 py-4
          w-full
        "
      >
        {children}
      </div>

      {/* Right Arrow */}
      <button
        aria-label="Scroll right"
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 hover:bg-white/20 transition"
      >
        <ChevronRight size={18} className="text-white" />
      </button>
    </div>
  );
}
