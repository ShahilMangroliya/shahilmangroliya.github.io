import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05),transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {/* Email */}
                  <a 
                    href="mailto:shahil.mangroliya123@gmail.com"
                    className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 border border-border/30 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="text-foreground font-medium">shahil.mangroliya123@gmail.com</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-border/30">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="text-foreground font-medium">Surat, Gujarat, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Connect With Me</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/shahilmangroliya" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-6 h-6 text-foreground" />
                    </a>
                    <a 
                      href="https://linkedin.com/in/shahilmangroliya" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-6 h-6 text-foreground" />
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Let's Work Together</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Whether you have a project in mind, need a technical consultant, or just want to connect, I'd love to hear from you.
                  </p>
                </div>

                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 group"
                  asChild
                >
                  <a href="mailto:shahil.mangroliya123@gmail.com" className="flex items-center gap-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Send an Email
                  </a>
                </Button>

                {/* Decorative Element */}
                <div className="pt-8">
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
