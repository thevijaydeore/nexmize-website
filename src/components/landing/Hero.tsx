import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Palette, Zap } from "lucide-react";
import { usePersonalization } from "@/hooks/usePersonalization";

const Hero = () => {
  const { updatePreferences, preferences } = usePersonalization();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleIndustrySelect = (industry: string) => {
    updatePreferences({ industry });
  };

  const floatingIcons = [
    { icon: Code, delay: 0, position: "top-20 left-20" },
    { icon: Smartphone, delay: 0.5, position: "top-32 right-32" },
    { icon: Palette, delay: 1, position: "bottom-40 left-32" },
    { icon: Zap, delay: 1.5, position: "bottom-20 right-20" }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "24/7", label: "Support" }
  ];

  const typingText = "Build Your Clinic Presence with Nexmize";

  const industries = [
    { id: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { id: 'ecommerce', label: 'E-commerce', icon: '🛒' },
    { id: 'fintech', label: 'FinTech', icon: '💳' },
    { id: 'education', label: 'Education', icon: '📚' }
  ];

  return (
    <header className="container-padding py-12 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-green/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} hidden lg:block`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 0.6, 
            y: [0, -10, 0],
          }}
          transition={{ 
            opacity: { delay: item.delay, duration: 0.5 },
            y: { repeat: Infinity, duration: 3, delay: item.delay }
          }}
        >
          <div className="w-16 h-16 glass-panel rounded-2xl flex items-center justify-center">
            <item.icon className="w-8 h-8 text-accent-purple" />
          </div>
        </motion.div>
      ))}

      {/* Hero content */}
      <div className="max-w-6xl mx-auto text-center relative z-10 pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-purple to-accent-blue text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
            <Zap className="w-4 h-4" />
            Your Tech Partner
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          className="heading-xl mb-8 bg-gradient-to-r from-primary via-accent-purple to-accent-blue bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {typingText}
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Elevate your business with high-performance websites and exceptional UI/UX design. We craft fast, SEO-friendly, and conversion-focused web experiences that drive results.
        </motion.p>

        {/* Industry Selection for Personalization */}
        {!preferences.industry && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="text-sm text-neutral-600 mb-4">What industry are you in?</p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => handleIndustrySelect(industry.id)}
                  className="flex items-center gap-2 px-4 py-2 glass-panel rounded-full hover:shadow-lg transition-all duration-300 text-sm font-medium"
                >
                  <span>{industry.icon}</span>
                  {industry.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Enhanced CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button 
            onClick={() => scrollToSection('contact')}
            className="group bg-gradient-to-r from-accent-purple to-accent-blue text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="glass-panel px-8 py-4 rounded-xl font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            View Our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 text-sm text-neutral-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Available for new projects
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            24h response time
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            Free consultation
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
