import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Calendar, Users } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive online marketplace with advanced features including payment integration, inventory management, and real-time analytics.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Application",
      duration: "3 months",
      teamSize: "4 developers",
      results: "+250% sales increase",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Fitness Mobile App",
      description: "Cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      category: "Mobile App",
      duration: "4 months",
      teamSize: "3 developers",
      results: "50K+ downloads",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Corporate Website",
      description: "Professional business website with modern design, CMS integration, and SEO optimization for a leading consulting firm.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi"],
      category: "Business Website",
      duration: "2 months",
      teamSize: "2 developers",
      results: "+180% organic traffic",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "CampusNEX",
      description: "School management system in web and app form.",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&h=600&fit=crop",
      technologies: ["Web", "App", "School Management"],
      category: "Web & App",
      duration: "6 months",
      teamSize: "5 developers",
      results: "Efficient school operations",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "CoachingNEX",
      description: "Coaching application for making IIT JEE exam tests.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop",
      technologies: ["Web", "App", "IIT JEE", "Testing"],
      category: "Coaching Application",
      duration: "8 months",
      teamSize: "4 developers",
      results: "Enhanced test preparation",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Xrone",
      description: "Website and app for modern digital solutions.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
      technologies: ["Web", "App"],
      category: "Website & App",
      duration: "5 months",
      teamSize: "3 developers",
      results: "Improved digital presence",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-accent-green/5 via-white to-accent-blue/5 relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container-padding relative z-10">
        <div className="text-center mb-16">
          <span className="bg-accent-blue/10 text-accent-blue px-4 py-1.5 rounded-full text-sm font-medium">
            OUR PORTFOLIO
          </span>
          <h2 className="heading-lg mt-6">Featured Projects</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Explore some of our recent work and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="glass-panel p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
                {/* Project Image with Overlay */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex gap-2 mb-2">
                        <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Github className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="bg-accent-green/10 text-accent-green px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Project Info */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex items-center gap-4 mb-4 text-xs text-neutral-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {project.teamSize}
                  </div>
                </div>

                {/* Results Badge */}
                <div className="mb-4">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                    {project.results}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-neutral-200/80 backdrop-blur-sm text-neutral-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button 
                  onClick={scrollToContact}
                  className="text-accent-purple hover:text-accent-purple/80 transition-colors text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Get Similar Project 
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button onClick={scrollToContact} className="button-primary">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
