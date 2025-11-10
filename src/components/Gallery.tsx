import { useState } from "react";
import { Award, Trophy, Medal, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Your actual certificates and achievements
  const achievements = [
    {
      id: 1,
      title: "SIH Hackathon - 2nd Position",
      description: "Secured 2nd position in college internal round for Smart India Hackathon with Samyak ERP project",
      image: "/certificates/sih certificate.jpg",
      category: "Hackathon",
      date: "2024",
      icon: Trophy,
    },
    {
      id: 2,
      title: "SIH Achievement Certificate",
      description: "Official certificate for participation and achievement in Smart India Hackathon",
      image: "/certificates/sih.jpg",
      category: "Hackathon",
      date: "2024",
      icon: Award,
    },
    {
      id: 3,
      title: "C-DAC Certification",
      description: "Advanced certification from Centre for Development of Advanced Computing (C-DAC)",
      image: "/certificates/c-dac certificate.jpg",
      category: "Course",
      date: "2024",
      icon: Medal,
    },
    {
      id: 4,
      title: "ABES IT Hackathon",
      description: "Participated in ABES Institute of Technology hackathon with AI Resume Analyzer project",
      image: "/certificates/abesit heckathon.jpg",
      category: "Hackathon",
      date: "2024",
      icon: Trophy,
    },
    {
      id: 5,
      title: "GeeksforGeeks Certification",
      description: "Programming and development certification from GeeksforGeeks platform",
      image: "/certificates/Geeks for Greeks certificate.jpg",
      category: "Course",
      date: "2024",
      icon: Award,
    },
  ];

  const categories = ["All", "Hackathon", "Course", "Competition"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredAchievements = activeCategory === "All" 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeCategory);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal via-purple to-pink mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my certifications, achievements, and recognition in various competitions and courses.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "hero" : "glass"}
              onClick={() => setActiveCategory(category)}
              className="px-6 py-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={achievement.id}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
                onClick={() => openModal(achievement.image)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full flex-col items-center justify-center text-center">
                      <IconComponent className="w-16 h-16 mx-auto mb-2 text-primary" />
                      <p className="text-sm text-muted-foreground">Certificate Image</p>
                      <p className="text-xs text-muted-foreground mt-1">Click to view</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-xs font-medium">
                      {achievement.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{achievement.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:gradient-text transition-all">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for full-size image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <Button
                variant="glass"
                size="sm"
                className="absolute top-4 right-4 z-10"
                onClick={closeModal}
              >
                <X className="w-4 h-4" />
              </Button>
              <div className="bg-white rounded-lg p-4">
                <img
                  src={selectedImage}
                  alt="Certificate"
                  className="w-full h-auto max-h-[80vh] object-contain rounded"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex-col items-center justify-center rounded">
                  <Award className="w-24 h-24 mx-auto mb-4 text-primary" />
                  <p className="text-lg font-semibold text-gray-700">Certificate Preview</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Certificate image not available
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;
