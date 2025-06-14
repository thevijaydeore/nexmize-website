
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
import PersonalizedFeatures from "@/components/landing/PersonalizedFeatures";
import MobileContact from "@/components/landing/MobileContact";
import AccessibleNavigation from "@/components/landing/AccessibleNavigation";
import FeedbackWidget from "@/components/landing/FeedbackWidget";
import AnalyticsDashboard from "@/components/analytics/AnalyticsDashboard";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useABTesting } from "@/hooks/useABTesting";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { useEffect } from "react";

const Index = () => {
  const { trackConversionStep } = useAnalytics();
  const { trackView } = useABTesting();
  const { trackUserJourney } = usePerformanceMonitoring();

  useEffect(() => {
    // Track page view
    trackView('hero_cta');
    trackView('contact_form_title');
    trackConversionStep('page_view');
    
    // Track user journey
    trackUserJourney();
  }, [trackView, trackConversionStep, trackUserJourney]);

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col">
      <AccessibleNavigation />
      <div className="flex-1">
        <div className="max-w-7xl mx-auto" id="main-content">
          <Navigation />
          <Hero />
          <TrustedBy />
          <PersonalizedFeatures />
          <Features />
          <Portfolio />
          <AboutUs />
          <Testimonials />
          <WhyChooseUs />
          <ContactForm />
          <ServiceComparison />
          <FAQ />
        </div>
      </div>
      <Footer />
      <StickyContact />
      <MobileContact />
      <FeedbackWidget />
      <AnalyticsDashboard />
    </div>
  );
};

export default Index;
