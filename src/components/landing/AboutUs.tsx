
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const AboutUs = () => {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            <p className="text-neutral-600 mb-6">
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
            <Card className="backdrop-blur-sm bg-white/70 border border-white/30 shadow-xl p-8 rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                alt="Team working"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-neutral-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
