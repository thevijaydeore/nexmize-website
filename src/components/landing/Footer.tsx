import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Clinic Websites", href: "#services" },
        { name: "UI/UX Design", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Work", href: "#portfolio" },
        { name: "Careers", href: "/careers", isExternal: true },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Get Quote", href: "#contact" },
        { name: "Support Center", href: "#contact" },
        { name: "Privacy Policy", href: "/privacy-policy", isExternal: true },
        { name: "Terms of Service", href: "/terms-of-service", isExternal: true }
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@nexmize.com", href: "mailto:hello@nexmize.com" },
    { icon: Phone, text: "+91 99752 92305", href: "tel:+919975292305" }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/69597916", color: "hover:text-blue-600" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container-padding py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company info */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-blue rounded-2xl flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/215642f8-daaa-441a-8ca1-526fd330cacd.png" 
                    alt="Nexmize Logo" 
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                  Nexmize
                </span>
              </div>
              <p className="text-neutral-300 text-lg leading-relaxed mb-8 max-w-md">
                Your Tech Partner specializing in professional clinic websites and UI/UX design that helps healthcare practices grow their patient base.
              </p>

              {/* Contact info */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-neutral-700/50 rounded-lg flex items-center justify-center group-hover:bg-accent-purple/20 transition-colors">
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <span>{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-6 text-white">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {link.isExternal ? (
                        <Link 
                          to={link.href} 
                          className="text-neutral-300 hover:text-white transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ) : (
                        <a 
                          href={link.href} 
                          className="text-neutral-300 hover:text-white transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-700/50">
          <div className="container-padding py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <motion.p 
                className="text-neutral-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                © 2024 Nexmize. All rights reserved. Crafted with ❤️ for amazing businesses.
              </motion.p>
              
              <motion.div 
                className="flex gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`text-neutral-400 ${social.color} transition-all duration-300 hover:scale-110 font-medium`}
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
