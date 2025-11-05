"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section id="home" className="  pt-36 pb-24">
      <div className="mt-12 md:mt-24">
        {/* Banner headline */}
        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
          <div className="relative flex justify-center md:justify-end">
            <div className="pointer-events-none absolute -inset-12 md:-inset-24 rounded-full bg-linear-to-b from-[#7c3aed] via-[#6d28d9]/60 to-transparent blur-3xl opacity-90"></div>
            <div>
              <Image
                src="/banner-portfolio.png"
                alt="banner"
                className="relative"
                width={240}
                height={240}
              />

              <div className="select-none pointer-events-none absolute -top-10 -right-6 md:-top-15 md:-right-50 text-xs">
                <div className="relative flex items-center justify-end">
                  <div className="relative w-16 h-6 md:w-24 md:h-16">
                    <Image
                      src="/Vector.png"
                      fill
                      alt="arrow"
                      className="object-contain scale-x-100 -rotate-6"
                    />
                  </div>
                  <div className="-mt-6 md:-mt-18 pl-2 shrink-0 text-">
                    <span>Hello! I am </span>
                    <span className="text-[#a78bfa]">Siuuuuuuuuuu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:pl-2 text-center md:text-left">
            <p className="text-sm md:text-base font-normal mb-2">
              A Design Who
            </p>

            <p className="text-4xl sm:text-5xl tracking-tight leading-[1.15] mb-2">
              <span className="block font-bold">Judges a book </span>
              <span className="block font-bold">
                by its{" "}
                <span className="relative inline-block align-baseline">
                  <span className="relative z-10 text-[#7127BA] font-normal">
                    cover
                  </span>
                  <span className="pointer-events-none absolute -inset-x-2 -inset-y-2 translate-y-1 -z-10 rotate-12">
                    <Image
                      src="/Ellipse.svg"
                      fill
                      priority
                      className="object-contain"
                      alt="ellipse"
                    />
                  </span>
                </span>
                ...
              </span>
            </p>
            <p className="text-[14px] text-white/70">
              Because if the cover does not impress you what else you can?
            </p>
          </div>
        </div>

        {/* Role Description */}
        <div className="mt-16 max-w-3xl">
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            <Typewriter
              words={[
                "I'm Super Star.",
                "Front-end Developer.",
                "SIUUUUUUUUUUUUUU.",
              ]}
              cursor
              loop
              typeSpeed={50}
            />
          </p>
          <p>
            Currently, I'm a Front-end Developer at 🍀
            <span className="text-green-400">LuckyTech</span>.
          </p>
          <p className="mt-6 text-white/70 leading-7">
            A self-taught Front-end Dev, functioning in the industry for 1 year
            now. I make meaningful and delightful websites that create an
            equilibrium between user needs and busines goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
