import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Phone, Mail, Gift } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const IndependenceDayOffer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsappNumber: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Independence Day Offer Form:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <Card className="relative overflow-hidden">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {!isSubmitted ? (
            <div className="p-6">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Gift className="w-6 h-6 text-accent-orange" />
                  <h2 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                    Independence Day Special
                  </h2>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-600">Limited Time Offer!</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg line-through text-neutral-400">₹50,000</span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">62% OFF</span>
                  </div>
                  <p className="text-2xl font-bold text-accent-green">₹18,999 only!</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
                  <Input
                    id="whatsappNumber"
                    name="whatsappNumber"
                    type="tel"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="+91 9975292305"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Claim This Offer Now!
                </Button>
              </form>

              <p className="text-xs text-center text-neutral-500 mt-4">
                Offer valid till Independence Day. Terms & conditions apply.
              </p>
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
  );
};

export default IndependenceDayOffer;