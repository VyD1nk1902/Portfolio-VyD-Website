import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 max-[1000px]:overflow-x-hidden">
      <HeroSection />
      <WorkExperience />
      <TechStack />
      <ProjectSection />
      <Contact />
    </main>
  );
}
