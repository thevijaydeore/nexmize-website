import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, ArrowRight } from "lucide-react";

const StickyContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handlePhoneClick = () => {
    window.open('tel:+919021188628');
  };

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sticky Contact Button - Hidden on mobile */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 hidden md:block"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              onClick={handleToggleOpen}
              className="w-14 h-14 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              exit={{ scale: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white animate-pulse">!</span>
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl p-6 w-80 border border-white/20"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">Quick Contact</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-neutral-100 rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-accent-green/10 to-accent-blue/10 p-3 rounded-xl border border-accent-green/20">
                  <div className="flex items-center gap-2 text-sm text-accent-green font-medium mb-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Limited Time Offer
                  </div>
                  <p className="text-sm text-neutral-600">
                    <strong>20% OFF</strong> on new projects this month!
                  </p>
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-accent-purple to-accent-blue text-white py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handlePhoneClick}
                  className="w-full glass-panel py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  Call Now: +91 90211 88628
                </button>

                <div className="text-center text-xs text-neutral-500">
                  ⚡ Average response time: 2 hours
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default StickyContact;
