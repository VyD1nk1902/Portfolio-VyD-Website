"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  offsetY?: number;
  duration?: number;
  ease?: string;
  triggerOffset?: string;
  stagger?: number;
};

export default function ScrollReveal({
  id,
  children,
  className,
  offsetY = 50,
  duration = 1.2,
  ease = "power3.out",
  triggerOffset = "top 80%",
  stagger = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: offsetY },
        {
          opacity: 1,
          y: 0,
          duration,
          ease,
          stagger,
          scrollTrigger: {
            trigger: el,
            start: triggerOffset,
            end: "bottom 20%",
            scrub: true, // animation 2 chiều: cuộn xuống -> ẩn, cuộn lên -> hiện
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [offsetY, duration, ease, triggerOffset, stagger]);

  return (
    <section
      id={id}
      ref={ref}
      className={`opacity-0 translate-y-6 ${className || ""}`}
    >
      {children}
    </section>
  );
}
