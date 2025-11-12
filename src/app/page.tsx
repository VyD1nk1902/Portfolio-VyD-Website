import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";
import ScrollReveal from "@/components/Scroll/ScrollReveal";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6">
      <ScrollReveal id="home" stagger={0.12}>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal id="about" stagger={0.12}>
        <WorkExperience />
      </ScrollReveal>
      <ScrollReveal id="lab" stagger={0.12}>
        <TechStack />
      </ScrollReveal>
      <ScrollReveal id="project" stagger={0.12}>
        <ProjectSection />
      </ScrollReveal>
      <ScrollReveal id="contact" stagger={0.12}>
        <Contact />
      </ScrollReveal>
    </main>
  );
}
