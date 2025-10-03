import { Code2, Database, Cloud, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "teal",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS"],
    },
    {
      title: "Backend",
      icon: Cpu,
      color: "purple",
      skills: ["Node.js", "Express", "Python", "C++", "C", "Gin"],
    },
    {
      title: "Database & Cloud",
      icon: Database,
      color: "pink",
      skills: ["MongoDB", "Firebase", "MySQL", "AWS", "Docker"],
    },
    {
      title: "Tools & DSA",
      icon: Cloud,
      color: "teal",
      skills: ["Git", "Postman", "Docker", "DSA in C++", "LeetCode (100+)"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal via-purple to-pink mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className={`p-3 rounded-lg bg-${category.color}/20 inline-block mb-4 group-hover:animate-float`}>
                  <Icon className={`w-8 h-8 text-${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 rounded-full bg-secondary/50 text-sm hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
