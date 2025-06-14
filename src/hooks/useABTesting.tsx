
import { useState, useEffect } from 'react';

interface ABTest {
  id: string;
  name: string;
  variants: string[];
  weights?: number[];
  active: boolean;
}

interface ABTestResult {
  testId: string;
  variant: string;
  conversions: number;
  views: number;
}

const AB_TESTS: ABTest[] = [
  {
    id: 'hero_cta',
    name: 'Hero CTA Button Text',
    variants: ['Start Your Project', 'Get Free Quote', 'Build With Us'],
    weights: [0.4, 0.3, 0.3],
    active: true
  },
  {
    id: 'contact_form_title',
    name: 'Contact Form Title',
    variants: ['Get Started Today', 'Ready to Begin?', 'Start Your Project'],
    active: true
  },
  {
    id: 'pricing_display',
    name: 'Pricing Information',
    variants: ['show_ranges', 'show_starting_from', 'contact_for_pricing'],
    active: true
  }
];

export const useABTesting = () => {
  const [userVariants, setUserVariants] = useState<Record<string, string>>({});
  const [testResults, setTestResults] = useState<ABTestResult[]>([]);

  useEffect(() => {
    // Get or create user's test assignments
    const storedVariants = localStorage.getItem('nexmize_ab_variants');
    if (storedVariants) {
      setUserVariants(JSON.parse(storedVariants));
    } else {
      const variants: Record<string, string> = {};
      
      AB_TESTS.filter(test => test.active).forEach(test => {
        const weights = test.weights || test.variants.map(() => 1 / test.variants.length);
        const random = Math.random();
        let cumulativeWeight = 0;
        
        for (let i = 0; i < test.variants.length; i++) {
          cumulativeWeight += weights[i];
          if (random <= cumulativeWeight) {
            variants[test.id] = test.variants[i];
            break;
          }
        }
      });
      
      setUserVariants(variants);
      localStorage.setItem('nexmize_ab_variants', JSON.stringify(variants));
    }

    // Load test results
    const storedResults = localStorage.getItem('nexmize_ab_results');
    if (storedResults) {
      setTestResults(JSON.parse(storedResults));
    }
  }, []);

  const getVariant = (testId: string): string => {
    return userVariants[testId] || AB_TESTS.find(t => t.id === testId)?.variants[0] || '';
  };

  const trackView = (testId: string) => {
    const variant = getVariant(testId);
    if (!variant) return;

    setTestResults(prev => {
      const existing = prev.find(r => r.testId === testId && r.variant === variant);
      let newResults;
      
      if (existing) {
        newResults = prev.map(r => 
          r === existing ? { ...r, views: r.views + 1 } : r
        );
      } else {
        newResults = [...prev, { testId, variant, views: 1, conversions: 0 }];
      }
      
      localStorage.setItem('nexmize_ab_results', JSON.stringify(newResults));
      return newResults;
    });
  };

  const trackConversion = (testId: string) => {
    const variant = getVariant(testId);
    if (!variant) return;

    setTestResults(prev => {
      const existing = prev.find(r => r.testId === testId && r.variant === variant);
      let newResults;
      
      if (existing) {
        newResults = prev.map(r => 
          r === existing ? { ...r, conversions: r.conversions + 1 } : r
        );
      } else {
        newResults = [...prev, { testId, variant, views: 0, conversions: 1 }];
      }
      
      localStorage.setItem('nexmize_ab_results', JSON.stringify(newResults));
      return newResults;
    });

    console.log(`AB Test Conversion: ${testId} - ${variant}`);
  };

  const getTestResults = (testId?: string) => {
    if (testId) {
      return testResults.filter(r => r.testId === testId);
    }
    return testResults;
  };

  const getConversionRate = (testId: string, variant: string) => {
    const result = testResults.find(r => r.testId === testId && r.variant === variant);
    if (!result || result.views === 0) return 0;
    return (result.conversions / result.views) * 100;
  };

  return {
    getVariant,
    trackView,
    trackConversion,
    getTestResults,
    getConversionRate,
    availableTests: AB_TESTS
  };
};
