
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    timeline: ""
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
      timeline: ""
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-blue/10 text-accent-blue px-4 py-1.5 rounded-full text-sm font-medium">
            GET IN TOUCH
          </span>
          <h2 className="heading-lg mt-6">Start Your Project Today</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Fill out the form below and let's discuss your project requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-panel p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label>Service Required *</Label>
                <RadioGroup value={formData.service} onValueChange={handleServiceChange}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="web-app" id="web-app" />
                    <Label htmlFor="web-app">Web Application Development</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mobile-app" id="mobile-app" />
                    <Label htmlFor="mobile-app">Mobile App (Android/iOS)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="website" id="website" />
                    <Label htmlFor="website">Business Website</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ui-ux" id="ui-ux" />
                    <Label htmlFor="ui-ux">UI/UX Design</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="multiple" id="multiple" />
                    <Label htmlFor="multiple">Multiple Services</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget">Project Budget</Label>
                  <Input
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="e.g., $10,000 - $50,000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Expected Timeline</Label>
                  <Input
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    placeholder="e.g., 3-6 months"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Description *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button type="submit" className="button-primary px-12">
                  Send Project Inquiry
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
