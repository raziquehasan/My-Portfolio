import { User, GraduationCap, Code, Target } from "lucide-react";
import profileImage from "@/assets/profile.png";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal via-purple to-pink mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center mb-8 md:mb-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal via-purple to-pink rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img 
                src={profileImage} 
                alt="Razique Hasan - Full-Stack Developer" 
                className="relative rounded-2xl w-80 h-80 object-cover shadow-2xl"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-teal/20">
                  <User className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                  <p className="text-muted-foreground">
                    I'm Razique Hasan, a passionate Computer Science student with a love for building innovative solutions and exploring cutting-edge technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple/20">
                  <GraduationCap className="w-6 h-6 text-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    Currently pursuing B.Tech in Computer Science at Maulana Azad College of Engineering and Technology, Patna with 8.0 CGPA.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-pink/20">
                  <Code className="w-6 h-6 text-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">What I Do</h3>
                  <p className="text-muted-foreground">
                    I specialize in full-stack development with MERN stack, create innovative solutions, and actively participate in hackathons and competitive programming.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-teal/20">
                  <Target className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">My Goals</h3>
                  <p className="text-muted-foreground">
                    Solving complex problems through code, contributing to open source, and building applications that make a real-world impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
