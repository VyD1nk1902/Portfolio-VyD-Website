import Image from "next/image";

const TechStack = () => {
  return (
    <section id="lab" className="relative py-28">
      <div className="flex flex-col items-center justify-center leading-8">
        <p className="text-white/70 text-[24px]">
          I'm currently looking to join a{" "}
          <span className="text-[#A362FF]">cross-functional</span> team
        </p>
        <p className="text-white/50 mb-8 text-[17px]">
          that values improving people's lives through accessible design{" "}
        </p>
        <div className="relative max-w-4xl">
          <Image
            src="/skills-section.png"
            alt="teck stack"
            width={1280}
            height={920}
            className="w-full object-contain h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
