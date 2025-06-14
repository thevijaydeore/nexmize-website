import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import Portfolio from "@/components/landing/Portfolio";
import AboutUs from "@/components/landing/AboutUs";
import Testimonials from "@/components/landing/Testimonials";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import StickyContact from "@/components/landing/StickyContact";
import FAQ from "@/components/landing/FAQ";
import ServiceComparison from "@/components/landing/ServiceComparison";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <Navigation />
        <Hero />
        <TrustedBy />
        <Features />
        <Portfolio />
        <AboutUs />
        <Testimonials />
        <WhyChooseUs />
        <ContactForm />
        <Footer />
        <ServiceComparison />
        <FAQ />
      </div>
      <StickyContact />
    </div>
  );
};

export default Index;
