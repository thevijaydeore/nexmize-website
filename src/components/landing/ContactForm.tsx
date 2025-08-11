import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Calendar, CheckCircle, Clock, Shield, Copy, Check } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinicName: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        clinicName: ""
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handlePhoneClick = () => {
    setShowPhonePopup(true);
    setTimeout(() => setShowPhonePopup(false), 3000);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("+919975292305");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  if (isSubmitted) {
    return <section id="contact" className="py-24 bg-gradient-to-br from-accent-blue/5 via-accent-purple/5 to-accent-green/5 relative overflow-hidden">
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
                  ✅ Confirmation email sent<br />
                  ✅ Project consultation scheduled<br />
                  ✅ Proposal will be ready within 24 hours
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>;
  }
  return <section id="contact" className="py-24 bg-gradient-to-br from-accent-blue/5 via-accent-purple/5 to-accent-green/5 relative overflow-hidden">
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
              <h3 className="text-lg font-semibold mb-6">Get Started with Your Clinic Website</h3>
              
              <form action="https://formsubmit.co/iamvijaydoere@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
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
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                      placeholder="+91 99752 92305" 
                    />
                  </div>
                  <div>
                    <label htmlFor="clinicName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Clinic Name *
                    </label>
                    <input 
                      type="text" 
                      id="clinicName" 
                      name="clinicName" 
                      required
                      value={formData.clinicName} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                      placeholder="Your clinic name" 
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full button-primary">
                  Get Free Consultation
                </Button>
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
                  <p className="text-neutral-600">hello@nexmize.com</p>
                </div>
              </div>
            </Card>

            <Card className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl p-6 rounded-3xl relative">
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-12 h-12 bg-gradient-to-br from-accent-green to-accent-blue rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                  onClick={handlePhoneClick}
                >
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-neutral-600">+91 99752 92305</p>
                </div>
              </div>
              
              {/* Phone Popup */}
              {showPhonePopup && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent-green to-accent-blue text-white p-4 rounded-xl shadow-lg z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Call us now!</p>
                      <p className="text-sm opacity-90">+91 99752 92305</p>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="text-xs">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-xs">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
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
    </section>;
};
export default ContactForm;