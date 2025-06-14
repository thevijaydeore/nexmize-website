
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Calendar, CheckCircle, Clock, Shield } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: ""
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-accent-blue/5 via-accent-purple/5 to-accent-green/5 relative overflow-hidden">
        <div className="container-padding relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="glass-panel p-12 rounded-3xl">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
              <p className="text-neutral-600 mb-6">
                We've received your inquiry and will get back to you within 2 hours during business hours.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-green-700 text-sm">
                  ✅ Confirmation email sent<br/>
                  ✅ Project consultation scheduled<br/>
                  ✅ Proposal will be ready within 24 hours
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-accent-blue/5 via-accent-purple/5 to-accent-green/5 relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-padding relative z-10">
        <div className="text-center mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
            GET IN TOUCH
          </span>
          <h2 className="heading-lg mt-6">Ready to Start Your Project?</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Let's discuss your ideas and turn them into reality. Fill out the form below and we'll get back to you within 24 hours.
          </p>
          
          {/* Urgency Banner */}
          <div className="mt-6 inline-block bg-gradient-to-r from-accent-green/10 to-accent-blue/10 border border-accent-green/20 rounded-xl px-6 py-3">
            <div className="flex items-center gap-2 text-accent-green font-medium">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Limited Time: 20% OFF new projects this month!</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl p-8 rounded-3xl">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-neutral-600 mb-2">
                  <span>Step {step} of 3</span>
                  <span>{Math.round((step / 3) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-accent-purple to-accent-blue h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Basic Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Your company"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Project Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="web-application">Web Application</option>
                        <option value="mobile-app">Mobile App (Android & iOS)</option>
                        <option value="business-website">Business Website</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-5k">Under $5,000</option>
                          <option value="5k-15k">$5,000 - $15,000</option>
                          <option value="15k-30k">$15,000 - $30,000</option>
                          <option value="30k-50k">$30,000 - $50,000</option>
                          <option value="over-50k">Over $50,000</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700 mb-2">
                          Preferred Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP (Rush project)</option>
                          <option value="1-2-months">1-2 months</option>
                          <option value="2-4-months">2-4 months</option>
                          <option value="4-6-months">4-6 months</option>
                          <option value="flexible">Flexible timeline</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Message */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Tell us about your project *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Describe your project goals, features needed, target audience, and any specific requirements..."
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className={`px-6 py-2 rounded-xl transition-all ${
                      step === 1 
                        ? 'opacity-0 pointer-events-none' 
                        : 'glass-panel hover:shadow-lg'
                    }`}
                  >
                    Previous
                  </button>
                  
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="button-primary px-8"
                    >
                      Next Step
                    </button>
                  ) : (
                    <Button type="submit" className="button-primary px-8">
                      Send Message
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl p-6 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-blue rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-neutral-600">info@nexmize.com</p>
                </div>
              </div>
            </Card>

            <Card className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl p-6 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-green to-accent-blue rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-neutral-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </Card>

            <Card className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl p-6 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Schedule a Call</h3>
                  <p className="text-neutral-600 text-sm">Book a free consultation</p>
                </div>
              </div>
              <button className="w-full glass-panel py-2 rounded-xl hover:shadow-lg transition-all text-sm">
                Schedule Now
              </button>
            </Card>

            <Card className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl p-6 rounded-3xl">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-green" />
                Why Choose Us?
              </h3>
              <div className="text-sm text-neutral-600 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Free consultation & proposal
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  2-hour response guarantee
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Transparent, fixed pricing
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  100% satisfaction guarantee
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
