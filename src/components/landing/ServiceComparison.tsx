
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
        "3 months support",
      ],
      popular: false,
      color: "from-accent-green to-accent-blue",
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
        "6 months support",
      ],
      popular: true,
      color: "from-accent-purple to-accent-blue",
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
        "12 months support",
      ],
      popular: false,
      color: "from-accent-blue to-accent-purple",
    },
  ];

  return (
    <section id="service-comparison" className="py-24 bg-gradient-to-br from-neutral-50 via-accent-blue/10 to-accent-green/10 relative overflow-hidden">
      <div className="container-padding relative">
        <div className="text-center mb-16">
          <span className="bg-accent-blue/10 text-accent-blue px-4 py-1.5 rounded-full text-sm font-medium">
            COMPARE SERVICES
          </span>
          <h2 className="heading-lg mt-6">Choose the Right Package for You</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Compare our solutions to find the package that best fits your project and business goals.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.name}
              className={`relative`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <Card
                className={`rounded-3xl p-8 border-2 transition-all duration-300 ${
                  service.popular
                    ? "border-accent-purple bg-gradient-to-br from-accent-purple/5 to-white shadow-2xl scale-105 z-10"
                    : "border-white/30 bg-white/80"
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm z-10">
                    <Star className="inline w-4 h-4 mb-0.5 mr-1" /> Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <div className="mb-2 text-lg font-semibold text-accent-purple">{service.price}</div>
                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
                  <Clock className="w-4 h-4 text-accent-blue" />
                  <span>{service.timeline}</span>
                </div>
                <div className="mb-6">
                  <Users className="w-4 h-4 inline-block mr-2 text-accent-green" />
                  <span className="text-sm text-neutral-500">{service.ideal}</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {service.features.map((feature, idx2) => (
                    <li key={idx2} className="flex items-center gap-2 text-neutral-700">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r ${service.color} hover:scale-105 hover:shadow-xl transition-all mt-2`}
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;
