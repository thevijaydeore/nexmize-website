
import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import Portfolio from "@/components/landing/Portfolio";
import AboutUs from "@/components/landing/AboutUs";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      <Hero />
      <TrustedBy />
      <Features />
      <Portfolio />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
