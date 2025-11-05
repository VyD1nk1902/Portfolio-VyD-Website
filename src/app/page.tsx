import HeroSection from "@/components/HeroSection";
import WorkExperience from "@/components/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6">
      <HeroSection />
      <WorkExperience />

      <div id="lab" className="min-h-screen py-24">
        Lab
      </div>
      <div id="project" className="min-h-screen py-24">
        Project
      </div>
      <div id="contact" className="min-h-screen py-24">
        Contact
      </div>
    </main>
  );
}
