import { motion } from "framer-motion";
import { Check, Star, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
const ServiceComparison = () => {
  const services = [{
    name: "Business Website",
    price: "From $2,500",
    timeline: "2-4 weeks",
    ideal: "Small to medium businesses",
    features: ["Responsive design", "Content management", "SEO optimization", "Contact forms", "Social media integration", "Analytics setup", "Mobile optimization", "3 months support"],
    popular: false,
    color: "from-accent-green to-accent-blue"
  }, {
    name: "Web Application",
    price: "From $8,000",
    timeline: "6-12 weeks",
    ideal: "Growing businesses & startups",
    features: ["Custom functionality", "User authentication", "Database integration", "Admin dashboard", "API development", "Cloud hosting setup", "Security implementation", "6 months support"],
    popular: true,
    color: "from-accent-purple to-accent-blue"
  }, {
    name: "Mobile App",
    price: "From $15,000",
    timeline: "8-16 weeks",
    ideal: "Established companies",
    features: ["iOS & Android apps", "Native performance", "Push notifications", "Offline functionality", "App store deployment", "Backend integration", "User analytics", "12 months support"],
    popular: false,
    color: "from-accent-blue to-accent-purple"
  }];
  return;
};
export default ServiceComparison;