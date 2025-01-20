import { AboutMeMain } from "./components/aboutMeSection/AboutMeMain";
import ContactSection from "./components/contactMeSection/ContacMe";
import { FooterMain } from "./components/footer/FooterMain";
import { HeroGradient } from "./components/heroSection/HeroGradient";
import { HeroMain } from "./components/heroSection/HeroMain";
import { SubHeroSection } from "./components/heroSection/SubHeroSection";
import { SkillsMain } from "./components/mySkillsSection/SkillsMain";
import { SubSkills } from "./components/mySkillsSection/SubSkills";
import { Navbar } from "./components/navbar/Navbar";
import { ProjectsMain } from "./components/projectsSection/ProjectsMain";

function App() {
  return (
    <main className="font-body">
      <Navbar />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ProjectsMain />
      <ContactSection />
      <FooterMain />
    </main>
  );
}

export default App;
