import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Resume Builder",
      description: "Dynamic resume builder with LaTeX export support, user authentication, and Firebase data persistence.",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Firebase"],
      github: "https://github.com/raziquehasan",
      live: "#",
      gradient: "from-teal to-purple",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce platform handling 1000+ daily transactions with Stripe integration and optimized backend.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/raziquehasan",
      live: "#",
      gradient: "from-purple to-pink",
    },
    {
      title: "AI Resume Analyzer",
      description: "Built at ABES Institute Hackathon - MERN stack platform delivering personalized feedback and insights for job readiness.",
      tech: ["MongoDB", "Express", "React", "Node.js", "AI/ML"],
      github: "https://github.com/raziquehasan",
      live: "#",
      gradient: "from-pink to-teal",
    },
    {
      title: "Job Portal",
      description: "Comprehensive job portal connecting talent with opportunities using MERN stack and Firebase authentication.",
      tech: ["React", "Node.js", "MongoDB", "Firebase"],
      github: "https://github.com/raziquehasan",
      live: "#",
      gradient: "from-teal to-purple",
    },
    {
      title: "Uber Clone",
      description: "Ride-sharing application clone with real-time tracking and seamless booking experience.",
      tech: ["Node.js", "MongoDB", "Express", "Socket.io"],
      github: "https://github.com/raziquehasan",
      live: "#",
      gradient: "from-purple to-pink",
    },
    {
      title: "Zomato Clone",
      description: "Food delivery platform with restaurant listings, cart management, and order tracking.",
      tech: ["React", "Firebase", "TailwindCSS"],
      github: "https://github.com/raziquehasan",
      live: "#",
      gradient: "from-pink to-teal",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal via-purple to-pink mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-4`}></div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 rounded-full bg-secondary/50 text-xs hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="glass" size="sm" className="w-full">
                    <Github />
                    Code
                  </Button>
                </a>
                {project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="hero" size="sm" className="w-full">
                      <ExternalLink />
                      Live
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
