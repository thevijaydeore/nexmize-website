
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

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/215642f8-daaa-441a-8ca1-526fd330cacd.png" 
            alt="Nexmize Logo" 
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <span className="text-xl font-semibold">Nexmize</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="text-neutral-600 hover:text-primary transition-colors font-medium">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-neutral-600 hover:text-primary transition-colors font-medium">Portfolio</button>
          <button onClick={() => scrollToSection('about')} className="text-neutral-600 hover:text-primary transition-colors font-medium">About</button>
          <button onClick={() => scrollToSection('contact')} className="text-neutral-600 hover:text-primary transition-colors font-medium">Contact</button>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Get Quote
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="button-secondary"
          >
            Start Project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-neutral-200/50 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden glass-panel mt-2 rounded-xl p-4 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollToSection('services')} className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left">Portfolio</button>
            <button onClick={() => scrollToSection('about')} className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left">Contact</button>
            <hr className="border-neutral-200" />
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-primary hover:text-primary/80 transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left"
            >
              Get Quote
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="button-secondary w-full"
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
