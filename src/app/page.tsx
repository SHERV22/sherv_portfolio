import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import GitHubProjects from "@/components/GitHubProjects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FeaturedProjects />
        <GitHubProjects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
