
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, ArrowRight } from 'lucide-react';

const MobileContact = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Now',
      subtitle: 'Instant connection',
      action: () => {
        window.open('tel:+15551234567');
      },
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      subtitle: 'Quick response',
      action: () => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      },
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Detailed inquiry',
      action: () => {
        window.open('mailto:hello@nexmize.com');
      },
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-200 px-4 py-3 shadow-lg">
      <div className="flex gap-2">
        {contactMethods.map((method, index) => (
          <motion.button
            key={index}
            onClick={method.action}
            className={`flex-1 flex flex-col items-center gap-1 p-3 rounded-xl bg-gradient-to-r ${method.color} text-white shadow-lg`}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <method.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{method.title}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MobileContact;
