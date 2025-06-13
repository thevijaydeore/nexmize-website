
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive online marketplace with advanced features including payment integration, inventory management, and real-time analytics.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Application"
    },
    {
      title: "Fitness Mobile App",
      description: "Cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      category: "Mobile App"
    },
    {
      title: "Corporate Website",
      description: "Professional business website with modern design, CMS integration, and SEO optimization for a leading consulting firm.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi"],
      category: "Business Website"
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
            >
              <Card className="backdrop-blur-sm bg-white/70 border border-white/30 shadow-xl p-6 rounded-2xl hover:shadow-2xl transition-all duration-300">
                <div className="mb-4">
                  <span className="bg-accent-green/10 text-accent-green px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-neutral-200/80 backdrop-blur-sm text-neutral-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={scrollToContact}
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  Get Similar Project →
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
