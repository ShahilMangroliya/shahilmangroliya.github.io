import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Name with Gradient */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              Shahil Mangroliya
            </h1>
            <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Software Engineer
          </h2>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <MapPin className="w-5 h-5" />
            <span>Surat, Gujarat, India</span>
          </div>

          {/* Summary */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Senior Software Engineer with 5+ years of experience building secure, scalable, and high-performance applications across mobile and backend systems. Currently at Pointz, owning all technical operations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#experience">View Experience</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-8 animate-fade-in" style={{ animationDelay: "0.6s" }} role="list" aria-label="Social media links">
            <a 
              href="https://github.com/shahilmangroliya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-110"
              aria-label="Visit Shahil Mangroliya's GitHub profile"
            >
              <Github className="w-6 h-6" aria-hidden="true" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shahil-mangroliya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-110"
              aria-label="Visit Shahil Mangroliya's LinkedIn profile"
            >
              <Linkedin className="w-6 h-6" aria-hidden="true" />
            </a>
            <a 
              href="mailto:shahil.mangroliya123@gmail.com"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-110"
              aria-label="Send email to Shahil Mangroliya"
            >
              <Mail className="w-6 h-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-slide-up" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
