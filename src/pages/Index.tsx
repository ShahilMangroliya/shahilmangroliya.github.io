import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProjectsPreview from "@/components/ProjectsPreview";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";

const Index = () => {
  const location = useLocation();

  usePageMeta({
    title: "Shahil Mangroliya — Senior Software Engineer (Full-Stack · Mobile · Cloud)",
    description:
      "Senior software engineer — full-stack, mobile, and cloud. Open to senior/staff full-time roles (remote), and select AI-native MVP and contract engagements. Ex Head of Engineering at Pointz Mobility.",
    canonical: "https://shahilmangroliya.github.io/",
  });

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="home">
        <Hero />
        <Services />
        <ProjectsPreview />
        <Experience />
        <Skills />
        <Testimonials />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
