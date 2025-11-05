import Image from "next/image";
import Link from "next/link";

const ExperienceData = [
  {
    id: 1,
    title: "Front-end Dev",
    desc: "Delivers high-performance, pixel-perfect web experiences.",
    img: "/work-experience-1.png",
  },
  {
    id: 2,
    title: "Front-end Dev",
    desc: "Delivers high-performance, pixel-perfect web experiences.",
    img: "/work-experience-2.png",
  },
  {
    id: 3,
    title: "Front-end Dev",
    desc: "Delivers high-performance, pixel-perfect web experiences.",
    img: "/work-experience-1.png",
  },
  {
    id: 4,
    title: "Front-end Dev",
    desc: "Delivers high-performance, pixel-perfect web experiences.",
    img: "/work-experience-2.png",
  },
];

const WorkExperience = () => {
  return (
    <section id="about" className="relative pt-24">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[90vw] sm:w-[760px] md:w-[1000px] h-[280px] sm:h-[380px] md:h-[520px] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(168,85,247,0.6) 0%, rgba(126,34,206,0.0)80%)",
          borderRadius: "50% 50% 60% 60%",
        }}
      ></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
        {ExperienceData.map((item) => (
          // Cards wrapper
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl p-5 sm:p-6 md:p-7 bg-[#140a26] border border-[#2f1c55] shadow-[0_10px_40px_rgba(113,39,186,0.25)] transition-all duration-300 hover:-translate-y-1 md:-translate-y-2 hover:border-[#7c3aed]/60 hover:shadow-[0_20px_60px_rgba(113,39,186,0.4)]"
          >
            {/* Card Gradient */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-90"
              style={{
                background:
                  "radial-gradient(120% 80% at 80% 10%, rgba(125,58,242,0.35)0%, rgba(126,58,242,0.15)25%, rgba(18,8,36,0)60%)",
              }}
            ></div>

            {/* Content Wrapper */}
            <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
              <div className="relative shrink-0 w-16 h-16 sm:size-20 md:size-24 transition-transform duration-300 group-hover:-translate-y-2">
                <Image
                  src={item.img}
                  alt="item.title"
                  fill
                  className="object-contain drop-shadow-[0_8px_24px_rgba(113,39,186,0.35)]"
                />
              </div>
              {/* Words */}
              <div className="transition-transform duration-300 group-hover:-translate-y-2">
                <p className="text-base sm:text-lg md:text-xl font-semibold text-white mt-4 mb-2">
                  {item.title}
                </p>
                <p className="mt-2 text-xs md:text-sm text-white/60 max-w-sm mx-auto sm:mx-0">
                  {item.desc}
                </p>
                <div className="mt-4 flex justify-center sm:justify-start">
                  <Link
                    href="#"
                    className="text-[11px] md:text-xs px-4 py-1.5 rounded-full bg-[#1a0c2e] border border-[#3e1d6d] text-white/80 hover:text-white hover:border-[#a855f7] hover:bg-[#220e3d] transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
