
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Clock, Shield, Users, Zap, Award, HeadphonesIcon } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Fast 24-hour Response Time",
      description: "We understand urgency in business. Get quick responses to all your queries and project updates.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Free Consultation & Quotes",
      description: "No hidden costs. Get detailed project estimates and expert consultation at no charge.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Experienced Development Team",
      description: "Our skilled developers have years of experience in cutting-edge technologies and best practices.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support & Maintenance",
      description: "We don't just build and leave. Continuous support ensures your applications run smoothly.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Competitive Pricing",
      description: "Quality development services at fair, transparent pricing that fits your budget.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality checks ensure your project meets the highest standards.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-purple/10 to-accent-green/10 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="container-padding relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent px-6 py-2 rounded-full text-sm font-semibold border border-accent-purple/20 backdrop-blur-sm">
              WHY CHOOSE NEXMIZE
            </span>
            <h2 className="heading-lg mt-8 mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
              We Make the Difference
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Partner with Nexmize for exceptional digital solutions backed by expertise, reliability, and unwavering commitment to your success.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="relative backdrop-blur-xl bg-white/90 border border-white/30 p-8 rounded-3xl h-full hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                {/* Gradient background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated icon container */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <reason.icon className="w-8 h-8 text-white drop-shadow-sm" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-neutral-900 group-hover:text-neutral-800 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors">
                    {reason.description}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-accent-purple/20 via-transparent to-accent-blue/20 p-[1px]">
                  <div className="w-full h-full rounded-3xl bg-white/90"></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative backdrop-blur-xl bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple p-10 rounded-3xl text-white shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-shadow">
                Ready to Experience the Nexmize Difference?
              </h3>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
                Join our growing list of satisfied clients and transform your digital presence today.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-accent-purple px-10 py-4 rounded-2xl font-bold hover:bg-neutral-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
              >
                Start Your Project Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
