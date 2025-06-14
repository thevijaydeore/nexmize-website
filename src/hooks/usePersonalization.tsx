
import { useState, useEffect } from 'react';

interface UserPreferences {
  industry: string;
  location: string;
  serviceInterest: string[];
  isReturningVisitor: boolean;
  visitCount: number;
}

const INDUSTRIES = {
  'healthcare': {
    highlight: 'HIPAA-compliant applications',
    services: ['Web Applications', 'Mobile Apps'],
    caseStudy: 'Patient Management System'
  },
  'ecommerce': {
    highlight: 'High-converting online stores',
    services: ['Web Applications', 'UI/UX Design'],
    caseStudy: 'E-commerce Platform'
  },
  'fintech': {
    highlight: 'Secure financial applications',
    services: ['Web Applications', 'Mobile Apps'],
    caseStudy: 'Banking Dashboard'
  },
  'education': {
    highlight: 'Interactive learning platforms',
    services: ['Web Applications', 'UI/UX Design'],
    caseStudy: 'Learning Management System'
  }
};

export const usePersonalization = () => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    industry: '',
    location: '',
    serviceInterest: [],
    isReturningVisitor: false,
    visitCount: 1
  });

  useEffect(() => {
    // Check for returning visitor
    const visitData = localStorage.getItem('nexmize_visitor_data');
    const lastVisit = localStorage.getItem('nexmize_last_visit');
    const today = new Date().toDateString();

    if (visitData) {
      const data = JSON.parse(visitData);
      setPreferences({
        ...data,
        isReturningVisitor: true,
        visitCount: lastVisit !== today ? data.visitCount + 1 : data.visitCount
      });
    }

    // Store visit data
    localStorage.setItem('nexmize_last_visit', today);
  }, []);

  const updatePreferences = (newPrefs: Partial<UserPreferences>) => {
    const updated = { ...preferences, ...newPrefs };
    setPreferences(updated);
    localStorage.setItem('nexmize_visitor_data', JSON.stringify(updated));
  };

  const getIndustryHighlight = () => {
    if (preferences.industry && INDUSTRIES[preferences.industry as keyof typeof INDUSTRIES]) {
      return INDUSTRIES[preferences.industry as keyof typeof INDUSTRIES];
    }
    return null;
  };

  const getRecommendedServices = () => {
    const industryData = getIndustryHighlight();
    if (industryData) {
      return industryData.services;
    }
    return ['Web Applications', 'Mobile Apps', 'UI/UX Design', 'Websites'];
  };

  return {
    preferences,
    updatePreferences,
    getIndustryHighlight,
    getRecommendedServices,
    isReturningVisitor: preferences.isReturningVisitor
  };
};
