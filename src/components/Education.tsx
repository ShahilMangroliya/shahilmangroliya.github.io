import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.03),transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-12 h-12 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Gujarat Technological University
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    Bachelor of Engineering - Computer Engineering
                  </p>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Conferred Feb 2023 (Coursework completed Jul 2022)</span>
                </div>

                {/* Decorative Line */}
                <div className="pt-4">
                  <div className="h-1 w-full bg-gradient-to-r from-primary/50 via-secondary/50 to-transparent rounded-full" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
