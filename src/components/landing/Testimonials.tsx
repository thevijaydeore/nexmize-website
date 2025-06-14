import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      rating: 5,
      text: "Nexmize transformed our outdated website into a modern, high-performing platform. Their attention to detail and technical expertise exceeded our expectations. Our conversion rates increased by 150% after launch.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "Founder, GrowthLab",
      company: "GrowthLab",
      rating: 5,
      text: "Working with Nexmize was a game-changer for our startup. They delivered a beautiful mobile app that our users love. The project was completed on time and within budget. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, Digital Plus",
      company: "Digital Plus",
      rating: 5,
      text: "The team at Nexmize created an amazing e-commerce platform for us. Their UI/UX design skills are top-notch, and the website performs flawlessly. Our sales have doubled since the launch.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-accent-purple/5 via-white to-accent-blue/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container-padding relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-medium">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="heading-lg mt-6">What Our Clients Say</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with Nexmize.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-panel p-8 md:p-12 rounded-3xl relative">
              <Quote className="w-12 h-12 text-accent-blue/30 mb-6" />
              
              <blockquote className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="flex items-center gap-6">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="flex-1">
                  <div className="font-bold text-lg text-primary">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-neutral-600 mb-2">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-neutral-500">Company</div>
                  <div className="font-medium text-accent-purple">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 glass-panel rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-600 group-hover:text-accent-purple transition-colors" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-accent-purple shadow-lg" 
                      : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 glass-panel rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-neutral-600 group-hover:text-accent-purple transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
