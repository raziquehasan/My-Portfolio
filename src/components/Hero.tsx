import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Code2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Developer | AI/ML Enthusiast | Open Source Contributor";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground animate-fade-in">
              Hi 👋, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text animate-fade-in">
              Razique Hasan
            </h1>
            <div className="h-8 md:h-10">
              <p className="text-xl md:text-2xl text-foreground/90 font-medium min-h-[2.5rem]">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            3rd Year Computer Science Student at Maulana Azad College of Engineering and Technology, Patna
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <a href="/RESUMES.pdf" download="Razique_Hasan_Resume.pdf">
              <Button variant="hero" size="lg" className="group">
                <Download className="group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
            <Button
              variant="glass"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              <Code2 />
              View Projects
            </Button>
          </div>

          <div className="flex gap-6 justify-center animate-fade-in">
            <a
              href="https://github.com/raziquehasan"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:scale-110 hover:bg-teal/20 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/razique-hasan-73a2832a2"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:scale-110 hover:bg-purple/20 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:hasanrazique@gmail.com"
              className="glass-card p-3 hover:scale-110 hover:bg-pink/20 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-gradient-to-b from-teal to-purple rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
