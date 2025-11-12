"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScrollWrapper({
  children,
  headerOffset = 80, // chiều cao header
}: {
  children: React.ReactNode;
  headerOffset?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const smoother = ScrollSmoother.create({
      wrapper,
      content,
      smooth: 1.2,
      smoothTouch: 0.2,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: true,
    });

    (window as any).ScrollSmoother = ScrollSmoother;

    // ✅ Anchor click fix (dùng offset thật của GSAP)
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!el) return;
      const href = el.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href) as HTMLElement | null;
      if (!target) return;

      e.preventDefault();

      const y = smoother.offset(target, "top", true) - headerOffset;
      smoother.scrollTo(y, true, "power2.out");
    };

    document.addEventListener("click", onClick, { passive: false });

    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("click", onClick);
      smoother.kill();
    };
  }, [headerOffset]);

  return (
    <div
      ref={wrapperRef}
      className="smooth-wrapper relative overflow-visible max-[1000px]:overflow-x-hidden"
    >
      <div ref={contentRef} className="smooth-content will-change-transform">
        {children}
      </div>
    </div>
  );
}
