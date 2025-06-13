
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Clock, Shield, Users, Zap, Award, HeadphonesIcon } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Fast 24-hour Response Time",
      description: "We understand urgency in business. Get quick responses to all your queries and project updates."
    },
    {
      icon: Shield,
      title: "Free Consultation & Quotes",
      description: "No hidden costs. Get detailed project estimates and expert consultation at no charge."
    },
    {
      icon: Users,
      title: "Experienced Development Team",
      description: "Our skilled developers have years of experience in cutting-edge technologies and best practices."
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support & Maintenance",
      description: "We don't just build and leave. Continuous support ensures your applications run smoothly."
    },
    {
      icon: Zap,
      title: "Competitive Pricing",
      description: "Quality development services at fair, transparent pricing that fits your budget."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality checks ensure your project meets the highest standards."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
              WHY CHOOSE NEXMIZE
            </span>
            <h2 className="heading-lg mt-6 mb-6">We Make the Difference</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Partner with Nexmize for exceptional digital solutions backed by expertise, reliability, and unwavering commitment to your success.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-panel p-8 rounded-2xl h-full hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{reason.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-accent-purple to-accent-blue p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Nexmize Difference?</h3>
            <p className="text-xl mb-6 opacity-90">Join our growing list of satisfied clients and transform your digital presence today.</p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-accent-purple px-8 py-4 rounded-xl font-semibold hover:bg-neutral-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your Project Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
