import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const IndependenceDayOffer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);
  const [hasShownOnLoad, setHasShownOnLoad] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setShowFloatingIcon(true);
  };

  const handleFloatingIconClick = () => {
    setIsOpen(true);
    setShowFloatingIcon(false);
  };

  // Show popup after 3 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownOnLoad) {
        setIsOpen(true);
        setHasShownOnLoad(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasShownOnLoad]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // Submit to FormSubmit.co asynchronously
      await fetch('https://formsubmit.co/iamvijaydeore@gmail.com', {
        method: 'POST',
        body: formData
      });
      
      // Show success message without page reload
      setIsSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      // Still show success message for better UX
      setIsSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  };

  return (
    <>
      {/* Main Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md"
            >
              <Card className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50 border-4 border-orange-400 shadow-2xl">
                {/* Indian Flag Stripe Pattern */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500"></div>
                <div className="absolute top-2 left-0 right-0 h-2 bg-white"></div>
                <div className="absolute top-4 left-0 right-0 h-2 bg-gradient-to-r from-green-600 via-green-500 to-green-600"></div>
                
                {/* Decorative Stars */}
                <div className="absolute top-3 left-3 text-orange-400 text-xs">✦</div>
                <div className="absolute top-6 right-6 text-green-500 text-xs">✦</div>
                <div className="absolute bottom-6 left-4 text-orange-400 text-xs">✦</div>
                <div className="absolute bottom-3 right-8 text-green-500 text-xs">✦</div>
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {!isSubmitted ? (
                  <div className="p-6 pt-10">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="text-2xl">🇮🇳</div>
                        <Gift className="w-7 h-7 text-orange-500 animate-pulse" />
                        <div className="text-2xl">🎉</div>
                      </div>
                      <div className="relative mb-2">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-lg opacity-20"></div>
                        <h2 className="relative text-2xl font-bold text-gray-800 py-2 px-4 drop-shadow-sm">
                          🎊Independence Day Special🎊
                        </h2>
                      </div>
                      <div className="relative rounded-lg p-4 border-2 border-dashed border-orange-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-lg opacity-10"></div>
                        <div className="relative">
                          {/* Tricolor stripes inside the box */}
                          <div className="absolute -top-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full"></div>
                        <p className="text-sm font-semibold text-orange-700 mb-2">🔥 Freedom Sale - Limited Time Only! 🔥</p>
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <span className="text-xl line-through text-gray-500">₹50,000</span>
                          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                            62% OFF 🎯
                          </div>
                        </div>
                        <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                          ₹18,999 only! 💰
                        </p>
                        <p className="text-xs text-orange-600 mt-2 font-medium">🗓️ Valid till 15th August 2024 | 🚀 Celebrate Freedom with Savings!</p>
                        </div>
                      </div>
                    </div>

                    {/* Freedom Sales Form */}
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      {/* FormSubmit.co Configuration */}
                      <input type="hidden" name="_subject" value="🇮🇳 Freedom Sales - Independence Day Special Offer!" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />
                      <input type="hidden" name="_autoresponse" value="Thank you for your interest in our Independence Day Special! We'll contact you soon." />
                      
                      <div>
                        <Label htmlFor="name" className="text-orange-700 font-semibold">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="mt-1 border-orange-300 focus:border-orange-500 focus:ring-orange-500"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-orange-700 font-semibold">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="mt-1 border-orange-300 focus:border-orange-500 focus:ring-orange-500"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="whatsapp" className="text-orange-700 font-semibold">WhatsApp Number *</Label>
                        <Input
                          id="whatsapp"
                          name="whatsapp"
                          type="tel"
                          required
                          className="mt-1 border-orange-300 focus:border-orange-500 focus:ring-orange-500"
                          placeholder="+91 9975292305"
                        />
                      </div>



                      <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 via-white to-green-600 text-black font-bold py-3 text-lg hover:scale-105 transition-transform duration-200 border-2 border-orange-400 shadow-lg">
                        🎊 Claim Freedom Offer Now! 🇮🇳
                      </Button>
                    </form>

                    <div className="text-center mt-4 p-3 bg-gradient-to-r from-orange-50 to-green-50 rounded-lg border border-orange-200">
                      <p className="text-xs text-orange-700 font-medium">
                        🎯 Offer valid till Independence Day | 📞 Terms & conditions apply
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        🌟 Join thousands celebrating digital freedom with Nexmize!
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">Thank You!</h3>
                    <p className="text-neutral-600">We will reach to you soon</p>
                  </div>
                )}
              </Card>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Icon */}
      <AnimatePresence>
        {showFloatingIcon && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: -100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: -100 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed bottom-6 left-6 z-40"
          >
            <button
              onClick={handleFloatingIconClick}
              className="w-16 h-16 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110 border-4 border-white"
            >
              <Gift className="w-8 h-8 text-gray-800 group-hover:animate-bounce" />
              {/* Pulse animation with tricolor */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-white to-green-600 animate-ping opacity-30"></div>
              {/* Sparkle effect */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse text-xs flex items-center justify-center">✨</div>
            </button>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Grab Now!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default IndependenceDayOffer;