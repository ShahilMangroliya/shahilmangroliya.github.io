import { Building2, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    company: "Pointz Mobility",
    location: "Remote (USA)",
    period: "Aug 2022 - Present",
    roles: [
      {
        title: "Head of Engineering",
        period: "Sep 2024 – Present",
        achievements: [
          "Sole technical owner of the platform, handling backend, frontend, databases, security, and infrastructure",
          "Built a robust, secure system with modern standards: auth/session tokens, PKCE, SSL pinning, nonce validation, and encryption",
          "Reduced AWS infrastructure costs by 65% through EC2/RDS optimization and effective resource management",
          "Improved backend performance, reducing API response times and making TBT (time-to-backend) more reliable",
          "Side Project: Used Madina (Python) to build an MVP for network analysis"
        ]
      },
      {
        title: "Full-Stack Developer",
        period: "Sep 2023 – Sep 2024",
        achievements: [
          "Took over the backend in Java Spring Boot within one week",
          "Architected payments integration with In-App Purchases and RevenueCat",
          "Developed new features under the Pointz Plus subscription model",
          "Designed and implemented crowdsourcing features for hazards, shortcuts, and amenities",
          "Added Stripe integration to increase profit by migrating to in-app purchase"
        ]
      },
      {
        title: "Frontend Developer",
        period: "Aug 2022 – Sep 2023",
        achievements: [
          "Re-architected the navigation system to make TTS and re-routing better",
          "Added integrations like Firebase, code-push, FB SDK, etc...",
          "Upgraded the app to the latest versions so the app supports new devices effectively"
        ]
      }
    ]
  },
  {
    company: "Eglaf Technology",
    location: "Remote (India)",
    period: "Jun 2022 - Oct 2022",
    roles: [
      {
        title: "Sr React Native Developer",
        period: "Jun 2022 - Oct 2022",
        achievements: [
          "Took over the Project to integrate API and design state management",
          "Integrated stormglass.io API to get weather data"
        ]
      }
    ]
  },
  {
    company: "Artistry Solutions",
    location: "Surat, India",
    period: "Sep 2020 - Aug 2022",
    roles: [
      {
        title: "React Native Developer",
        period: "Sep 2020 - Aug 2022",
        achievements: [
          "MoodMe: Relationship Mood App - Integrated In-app notifications with Firebase messaging and linked to the relevant pages. The app reached more than 100k downloads",
          "Trace Bust - Redesigned UI and implemented light/dark theme switching. Upgraded the app to support new devices",
          "Prank Caller - Created a Unique Drawer animation with 60 fps smoothness. Implemented Prank Chat messaging"
        ]
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,240,255,0.05),transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, expIdx) => (
            <Card 
              key={expIdx}
              className="p-8 bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${expIdx * 0.2}s` }}
            >
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roles */}
              <div className="space-y-6">
                {exp.roles.map((role, roleIdx) => (
                  <div key={roleIdx} className="relative pl-6 border-l-2 border-primary/30 group-hover:border-primary/60 transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-glow" />
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-1">{role.title}</h4>
                        <p className="text-sm text-muted-foreground">{role.period}</p>
                      </div>
                      
                      <ul className="space-y-2">
                        {role.achievements.map((achievement, achIdx) => (
                          <li key={achIdx} className="text-foreground/80 flex items-start gap-2">
                            <span className="text-primary mt-1.5">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
