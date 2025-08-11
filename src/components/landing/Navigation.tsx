import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Updated navigation items
  const navItems = [
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "About", id: "about" },
    
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="backdrop-blur-xl bg-white/70 border border-white/30 rounded-full px-6 py-2.5 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/215642f8-daaa-441a-8ca1-526fd330cacd.png" 
            alt="Nexmize Logo" 
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <span className="text-lg font-semibold">Nexmize</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-neutral-600 hover:text-primary transition-colors font-medium text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          {/* Only keep the Start Project button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-4 py-1.5 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium text-sm"
          >
            Start Project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-1.5 hover:bg-neutral-200/50 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden backdrop-blur-xl bg-white/80 border border-white/30 mt-2 rounded-xl p-4 shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-neutral-600 hover:text-primary transition-colors font-medium px-3 py-2 hover:bg-neutral-200/50 rounded-lg text-left text-sm"
              >
                {item.label}
              </button>
            ))}
            <hr className="border-neutral-200" />
            {/* Only keep the Start Project button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium text-sm w-full"
            >
              Start Project
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
