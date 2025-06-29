import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Coffee, Heart, Lightbulb } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      expertise: "Full-stack Development"
    },
    {
      name: "Maria Garcia",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      expertise: "Design Systems"
    },
    {
      name: "David Kim",
      role: "Mobile Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      expertise: "React Native"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project we deliver"
    },
    {
      icon: Coffee,
      title: "Collaboration",
      description: "Working closely with clients to achieve their vision"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in our work"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and solutions"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-neutral-50 via-accent-purple/5 to-accent-green/5 relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-green/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-padding relative z-10">
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-medium">
              ABOUT NEXMIZE
            </span>
            <h2 className="heading-lg mt-6 mb-6">Building Digital Excellence Since Day One</h2>
            <p className="text-neutral-600 mb-6 text-large">
              At Nexmize, we're passionate about transforming ideas into powerful digital solutions. Our team of experienced developers, designers, and strategists work together to deliver exceptional web applications, mobile apps, and business websites that drive real results.
            </p>
            <p className="text-neutral-600 mb-8">
              We believe in the power of technology to transform businesses and improve lives. That's why we're committed to staying at the forefront of digital innovation, using the latest tools and techniques to deliver solutions that are not just functional, but truly exceptional.
            </p>
            <button onClick={scrollToContact} className="button-primary">
              Work With Us
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-panel p-8 rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                alt="Team working"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label} 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-neutral-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="heading-md mb-4">Our Values</h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the way we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-panel p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-purple to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">{value.title}</h4>
                  <p className="text-sm text-neutral-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
