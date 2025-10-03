import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Razique Hasan. Built with{" "}
              <Heart className="inline w-4 h-4 text-pink animate-pulse" /> using React & TailwindCSS
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/raziquehasan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-teal/20 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/razique-hasan-73a2832a2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-purple/20 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hasanrazique@gmail.com"
              className="p-2 rounded-lg hover:bg-pink/20 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
