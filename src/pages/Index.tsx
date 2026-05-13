import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
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
    title: "Shahil Mangroliya · Fractional CTO & AI MVP Engineer for Founders",
    description:
      "Fractional CTO and founding engineer. I help founders ship AI-native MVPs in 4–6 weeks and rescue stalled React Native builds. Ex Head of Engineering at Pointz. Top Rated Plus on Upwork.",
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
