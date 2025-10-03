import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal via-purple to-pink mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4">
            Let's work together on something amazing!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-secondary/50 border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-secondary/50 border-border"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-secondary/50 border-border resize-none"
                />
              </div>
              <Button type="submit" variant="hero" className="w-full">
                <Send />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:hasanrazique@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-teal/20 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-teal/20">
                    <Mail className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium group-hover:text-teal transition-colors">
                      hasanrazique@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/raziquehasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-purple/20 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-purple/20">
                    <Github className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium group-hover:text-purple transition-colors">
                      @raziquehasan
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/razique-hasan-73a2832a2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-pink/20 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-pink/20">
                    <Linkedin className="w-6 h-6 text-pink" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium group-hover:text-pink transition-colors">
                      Razique Hasan
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
