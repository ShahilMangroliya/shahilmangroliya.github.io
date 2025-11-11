import { Card } from "@/components/ui/card";
import { Code2, Server, Shield, Cloud, Puzzle, Languages } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React Native", "React", "Next.js", "Redux", "TypeScript", "JavaScript", "Android Studio", "Xcode", "RESTful APIs"]
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Python", "Spring Boot", "Firebase", "PostgreSQL", "MongoDB", "SQL"]
  },
  {
    icon: Shield,
    title: "Security",
    skills: ["Auth/Session Tokens", "PKCE", "SSL Pinning", "Encryption", "Nonce Validation"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, RDS, S3)", "CI/CD", "Docker"]
  },
  {
    icon: Puzzle,
    title: "Integrations",
    skills: ["Payment Gateways (Stripe, RevenueCat, Razorpay, Braintree)", "In-App Purchases", "Location Services (Google Maps, Mapbox, GPS, OSM)"]
  },
  {
    icon: Languages,
    title: "Languages",
    skills: ["English - Fluent", "Hindi - Fluent", "Gujarati - Native"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.05),transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Technical Skills</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx}
              className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow-secondary group animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Icon and Title */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className="px-3 py-1.5 text-sm bg-muted/50 border border-border/50 rounded-full text-foreground/80 hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
