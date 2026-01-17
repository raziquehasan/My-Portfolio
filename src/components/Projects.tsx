import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "ZapChat — Real-Time Chat & Calling SaaS Platform",
      description: "A production-grade WhatsApp-style real-time chat and calling platform with voice/video calling, real-time messaging, groups, notifications, and media sharing.",
      tech: ["React", "Java", "Spring Boot", "MongoDB", "WebRTC", "WebSockets", "Docker", "Cloudinary"],
      github: "https://github.com/raziquehasan/ZapChat",
      live: "https://chatapp-eta-seven.vercel.app/",
      gradient: "from-purple to-pink",
      featured: true,
    },
    {
      title: "Samyak ERP - SIH Hackathon Project",
      description: "Smart Academic Management System built for SIH hackathon. Secured 2nd position in college internal round. Comprehensive ERP solution for educational institutions with advanced features.",
      tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
      github: "https://github.com/raziquehasan/SIH",
      live: "https://samyak-erp.vercel.app/",
      gradient: "from-orange to-red",
    },
    {
      title: "PYQ Deck - BEU Student Portal",
      description: "A comprehensive PYQ deck app that helps all BEU students with previous year question solutions for all semesters.",
      tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      github: "https://github.com/raziquehasan",
      live: "https://pyqdeck.vercel.app/login",
      gradient: "from-blue to-cyan",
    },
    {
      title: "One2Z Solutions",
      description: "Complete business solutions platform offering comprehensive services and innovative technology solutions for modern enterprises.",
      tech: ["React", "Next.js", "TailwindCSS", "TypeScript"],
      github: "https://github.com/raziquehasan/one2z-solutions",
      live: "https://one2zsolutions.vercel.app/",
      gradient: "from-green to-blue",
    },
    {
      title: "Scatch - Bag Selling E-commerce",
      description: "Full-stack e-commerce platform for premium bag collections with user authentication, cart management, and secure checkout.",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      github: "https://github.com/raziquehasan/scatch",
      live: "https://scatch-7yje.onrender.com/",
      gradient: "from-teal to-purple",
    },
    {
      title: "BEU Syllabus Web Application",
      description: "Comprehensive syllabus management platform for CDAC with course details, curriculum, and resource management.",
      tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      github: "https://github.com/raziquehasan/syllabus-cdac",
      live: "https://syllabus-wvoa.onrender.com/",
      gradient: "from-purple to-pink",
    },
    {
      title: "AI Cyber Guardian (PARANOX 2.0)",
      description: "Advanced AI-powered cybersecurity platform for threat detection, monitoring, and automated security responses.",
      tech: ["React", "AI/ML", "TailwindCSS", "TypeScript"],
      github: "https://github.com/raziquehasan/PARANOX2.0-FRONTEND",
      live: "https://paranox-2-0-frontend.vercel.app/",
      gradient: "from-pink to-teal",
    },
    {
      title: "AI Resume Analyzer",
      description: "Built at ABES Institute Hackathon - MERN stack platform delivering personalized feedback and insights for job readiness.",
      tech: ["MongoDB", "Express", "React", "Node.js", "AI/ML"],
      github: "https://github.com/raziquehasan",
      live: "https://resume-analyzer-ai-bot.vercel.app/",
      gradient: "from-teal to-purple",
    },
    {
      title: "Job Portal",
      description: "Comprehensive job portal connecting talent with opportunities using MERN stack and Firebase authentication.",
      tech: ["React", "Node.js", "MongoDB", "Firebase"],
      github: "https://github.com/raziquehasan",
      live: "#",
      gradient: "from-purple to-pink",
    },
    {
      title: "Uber Clone",
      description: "Ride-sharing application clone with real-time tracking and seamless booking experience.",
      tech: ["Node.js", "MongoDB", "Express", "Socket.io"],
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
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group relative"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-4`}></div>

              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple to-pink rounded-full text-xs font-semibold">
                  ⭐ Featured
                </div>
              )}

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
