
import { motion } from "framer-motion";
import { Check, Star, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const ServiceComparison = () => {
  const services = [
    {
      name: "Business Website",
      price: "From $2,500",
      timeline: "2-4 weeks",
      ideal: "Small to medium businesses",
      features: [
        "Responsive design",
        "Content management",
        "SEO optimization",
        "Contact forms",
        "Social media integration",
        "Analytics setup",
        "Mobile optimization",
        "3 months support"
      ],
      popular: false,
      color: "from-accent-green to-accent-blue"
    },
    {
      name: "Web Application",
      price: "From $8,000",
      timeline: "6-12 weeks",
      ideal: "Growing businesses & startups",
      features: [
        "Custom functionality",
        "User authentication",
        "Database integration",
        "Admin dashboard",
        "API development",
        "Cloud hosting setup",
        "Security implementation",
        "6 months support"
      ],
      popular: true,
      color: "from-accent-purple to-accent-blue"
    },
    {
      name: "Mobile App",
      price: "From $15,000",
      timeline: "8-16 weeks",
      ideal: "Established companies",
      features: [
        "iOS & Android apps",
        "Native performance",
        "Push notifications",
        "Offline functionality",
        "App store deployment",
        "Backend integration",
        "User analytics",
        "12 months support"
      ],
      popular: false,
      color: "from-accent-blue to-accent-purple"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-accent-purple/5 to-accent-blue/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-padding relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
            SERVICE COMPARISON
          </span>
          <h2 className="heading-lg mt-6">Choose the Right Solution</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Compare our service offerings to find the perfect solution for your business needs and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${service.popular ? 'md:-translate-y-4' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <Card className={`glass-panel p-8 rounded-3xl h-full border-2 ${service.popular ? 'border-accent-purple/30 shadow-2xl' : 'border-white/30'} relative overflow-hidden`}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-2xl`}></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-4">{service.price}</div>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-neutral-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.timeline}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {service.ideal}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                      service.popular 
                        ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white hover:shadow-xl' 
                        : 'glass-panel hover:shadow-lg border border-white/30'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="glass-panel p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Need a Custom Solution?</h3>
            <p className="text-neutral-600 mb-6">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution that fits your exact needs and budget.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="button-primary"
            >
              Get Custom Quote
            </button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceComparison;
