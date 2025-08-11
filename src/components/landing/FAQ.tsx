import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Clock, DollarSign, Shield, Zap, Users, Wrench, Package, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      icon: Clock,
      question: "How long does it take to build a clinic website?",
      answer: "Most clinic websites are completed within 2-4 weeks. This includes custom design, development, content setup, appointment booking integration, and testing. We provide a detailed timeline during consultation.",
      category: "Timeline"
    },
    {
      icon: Shield,
      question: "Is my clinic website HIPAA compliant?",
      answer: "Yes! We build all clinic websites with HIPAA compliance in mind, including secure contact forms, patient portals, and proper data encryption. We also provide ongoing security maintenance.",
      category: "Security"
    },
    {
      icon: Zap,
      question: "Can patients book appointments online through the website?",
      answer: "Absolutely! We integrate appointment booking systems that allow patients to schedule, reschedule, and cancel appointments 24/7. It syncs with your existing practice management software.",
      category: "Features"
    },
    {
      icon: Users,
      question: "Do you help with patient reviews and testimonials?",
      answer: "Yes, we build patient review sections into your website and can integrate with Google Reviews, Healthgrades, and other platforms to showcase your practice's reputation.",
      category: "Marketing"
    },
    {
      icon: Wrench,
      question: "Can you update my existing clinic website?",
      answer: "Definitely! We can modernize your existing website, improve search rankings, add new features like online booking, or build a completely new site while preserving your current patient data.",
      category: "Updates"
    },
    {
      icon: Package,
      question: "What's included in the clinic website package?",
      answer: "Our clinic websites include responsive design, appointment booking, patient forms, service pages, doctor profiles, contact integration, SEO optimization, and 3 months of free updates and support.",
      category: "Pricing"
    },
    {
      icon: Award,
      question: "Will my clinic website rank well on Google?",
      answer: "Yes! We build all websites with SEO best practices, local search optimization for your area, and Google My Business integration to help patients find your clinic online.",
      category: "SEO"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container-padding relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-accent-blue/10 text-accent-blue px-4 py-1.5 rounded-full text-sm font-medium">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="heading-lg mt-6">Everything You Need to Know</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Get answers to common questions about our services, pricing, and process. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-panel border border-white/30 overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left hover:bg-neutral-50/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 rounded-full flex items-center justify-center">
                          <faq.icon className="w-5 h-5 text-accent-purple" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-primary">
                            {faq.question}
                          </h3>
                          <span className="text-xs text-accent-blue bg-accent-blue/10 px-2 py-1 rounded-full">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {openItems.includes(index) ? (
                          <Minus className="w-5 h-5 text-accent-purple" />
                        ) : (
                          <Plus className="w-5 h-5 text-neutral-400" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-neutral-200 pt-4">
                            <p className="text-neutral-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA after FAQ */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-panel p-8 rounded-3xl">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-neutral-600 mb-6">
                Our team is here to help. Get a free consultation and detailed project proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="button-primary"
                >
                  Get Free Consultation
                </button>
                <button 
                  onClick={() => window.open('tel:+919975292305')}
                  className="button-secondary"
                >
                  Call Us: +91 99752 92305
                </button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
