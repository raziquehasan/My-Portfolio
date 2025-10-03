import { Award, Trophy, GitBranch, Star } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Development Intern",
      organization: "Centre for Development of Advanced Computing (C-DAC), Patna",
      period: "June 2025",
      description: "Completed 100-hour intensive MERN stack internship. Developed full-stack modules with React, Node.js, and MongoDB integration.",
      icon: GitBranch,
      color: "teal",
    },
    {
      title: "Frontend Developer",
      organization: "TechX Ninjas ParaNox Contest",
      period: "May 2024",
      description: "Achieved 5th place among competitors. Recognized for exceptional frontend development skills and critical thinking.",
      icon: Trophy,
      color: "purple",
    },
    {
      title: "Full Stack Developer",
      organization: "ABES Institute of Technology Hackathon",
      period: "April 2025",
      description: "Built AI Resume Analyzer using MERN stack to deliver personalized feedback and enhance job readiness.",
      icon: Award,
      color: "pink",
    },
  ];

  const achievements = [
    { label: "GitHub Contributions", value: "232+", icon: GitBranch },
    { label: "Public Repositories", value: "47+", icon: GitBranch },
    { label: "LeetCode Problems", value: "100+", icon: Star },
    { label: "GitHub Stars", value: "31+", icon: Star },
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "March 2024",
    },
    {
      title: "Python Programming",
      issuer: "Infosys Springboard",
      date: "November 2023",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal via-purple to-pink mx-auto rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-${exp.color}/20 flex-shrink-0`}>
                      <Icon className={`w-6 h-6 text-${exp.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                      <p className="text-muted-foreground mb-2">
                        {exp.organization} | {exp.period}
                      </p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">GitHub Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-teal group-hover:animate-float" />
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-purple flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {cert.issuer} | {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
