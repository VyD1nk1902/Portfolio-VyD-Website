import Image from "next/image";

const ProjectSection = () => {
  return (
    <section id="project" className="relative py-28 space-y-24">
      <div>
        <div
          className="pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[650px] opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 60% 40%, rgba(125,58,242,0.65) 0%, rgba(18,8,36,0)90%)",
          }}
        ></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Project Content */}
          <div className="relative z-10">
            {/* Heading */}
            <div className="mb-12">
              <span className="text-[#9857D3] text-base">Featured Project</span>
              <p className="text-2xl md:text-[34px] font-semibold text-white/90">
                Example Project
              </p>
            </div>
            {/* Description */}
            <div className="relative md:-mr-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,0.25)]">
              <p className="text-xs md:text-[18px] p-4 text-white/75">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </p>
            </div>
          </div>

          {/* Project Image */}
          <div
            tabIndex={0}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[50px_0_150px_rgba(168,85,247,0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1"
          >
            <div className="overflow-hidden h-[360px]">
              <Image
                src="/Portfolio.png"
                alt="Portfolio"
                width={582}
                height={640}
                className="w-full h-auto transition-transform duration-2300 ease-linear group-hover:-translate-y-[65%] group-active:-translate-y-[65%] group-focus:-translate-y-[65%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
