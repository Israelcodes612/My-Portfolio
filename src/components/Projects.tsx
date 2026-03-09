import { ExternalLink, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  link?: string;
  comingSoon?: boolean;
  tags: string[];
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Travel Website",
      description: "A beautiful, responsive travel website showcasing destinations with modern UI/UX design and smooth animations.",
      thumbnail: "https://images.unsplash.com/photo-1689829538884-7a7cfabda004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMHdlYnNpdGV8ZW58MXx8fHwxNzU5NDcyNjY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "https://travel-website-flax-seven.vercel.app/",
      tags: ["React", "Tailwind CSS", "Responsive"],
    },
    {
      title: "Furniture Website",
      description: "Modern e-commerce furniture website with elegant product displays and seamless user experience.",
      thumbnail: "https://images.unsplash.com/photo-1705326701287-346fc37a2c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdXJuaXR1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTk0MjczNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "https://furni-shop-tau.vercel.app/",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Calculator App",
      description: "Functional calculator application with clean interface and smooth animations for mathematical operations.",
      thumbnail: "https://images.unsplash.com/photo-1636033503567-a59bff19d79a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdG9yJTIwYXBwJTIwbW9iaWxlfGVufDF8fHx8MTc1OTQ3MjY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
      link: "https://calculator-nine-chi-42.vercel.app/",
      tags: ["JavaScript", "CSS", "Web App"],
    },
    {
      title: "Instagram Reel Downloader",
      description: "Collaborative project enabling users to download Instagram reels. Currently in development with a team of developers.",
      thumbnail: "https://images.unsplash.com/photo-1661187259792-d0e16bf86d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBzb2NpYWwlMjBtZWRpYXxlbnwxfHx8fDE3NTk0NzI2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      comingSoon: true,
      tags: ["React", "API", "Team Project"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work and creative solutions
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Thumbnail */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-white/90 text-black">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                {/* Coming Soon Badge */}
                {project.comingSoon && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full flex items-center gap-2 animate-pulse">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Coming Soon</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Link */}
                {!project.comingSoon ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-pink-600 transition-colors group/link"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    In Development
                  </div>
                )}
              </div>

              {/* Decorative gradient border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-600 rounded-2xl transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}