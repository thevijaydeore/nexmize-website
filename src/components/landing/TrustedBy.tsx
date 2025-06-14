
import { motion } from "framer-motion";
import { Star, Users, Award, Clock } from "lucide-react";

const TrustedBy = () => {
  const trustMetrics = [
    { icon: Star, value: "4.9/5", label: "Client Rating", color: "text-yellow-500" },
    { icon: Users, value: "25+", label: "Happy Clients", color: "text-blue-500" },
    { icon: Award, value: "50+", label: "Projects Completed", color: "text-green-500" },
    { icon: Clock, value: "24h", label: "Response Time", color: "text-purple-500" }
  ];

  const companies = [
    { name: "Tech Startup A", className: "w-32 h-12", logo: "TS" },
    { name: "Digital Agency B", className: "w-32 h-12", logo: "DA" },
    { name: "E-commerce Co", className: "w-32 h-12", logo: "EC" },
    { name: "Mobile Solutions", className: "w-32 h-12", logo: "MS" }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-neutral-50 via-white to-neutral-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container-padding relative z-10">
        {/* Trust Metrics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="glass-panel p-6 rounded-2xl text-center group hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 ${metric.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-sm text-neutral-600">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-primary mb-3">Trusted by Growing Businesses</h2>
          <p className="text-neutral-600">Join our community of successful clients who've transformed their digital presence</p>
        </motion.div>

        {/* Company Logos */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className={`${company.className} glass-panel rounded-xl flex items-center justify-center group hover:shadow-lg transition-all duration-300 cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-xl font-bold text-neutral-400 group-hover:text-accent-purple transition-colors">
                {company.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-neutral-600 mb-4">Ready to join our success stories?</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
          >
            Get Your Free Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
