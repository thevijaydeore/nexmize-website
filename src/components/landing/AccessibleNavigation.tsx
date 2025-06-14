
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Menu, X } from 'lucide-react';

const AccessibleNavigation = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: 'services', label: 'Services', ariaLabel: 'Navigate to Services section' },
    { id: 'portfolio', label: 'Portfolio', ariaLabel: 'Navigate to Portfolio section' },
    { id: 'about', label: 'About', ariaLabel: 'Navigate to About section' },
    { id: 'testimonials', label: 'Testimonials', ariaLabel: 'Navigate to Testimonials section' },
    { id: 'contact', label: 'Contact', ariaLabel: 'Navigate to Contact section' }
  ];

  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent-purple text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Quick navigation for keyboard users */}
      <nav
        className="hidden lg:block fixed left-4 top-1/2 -translate-y-1/2 z-40"
        aria-label="Quick navigation"
      >
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                aria-label={item.ariaLabel}
                className="w-3 h-3 rounded-full bg-neutral-300 hover:bg-accent-purple transition-colors focus:outline-none focus:ring-2 focus:ring-accent-purple focus:ring-offset-2"
                tabIndex={0}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-accent-purple focus:ring-offset-2 z-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          aria-label="Scroll to top of page"
          tabIndex={0}
        >
          <ArrowUp className="w-5 h-5 text-accent-purple" />
        </motion.button>
      )}
    </>
  );
};

export default AccessibleNavigation;
