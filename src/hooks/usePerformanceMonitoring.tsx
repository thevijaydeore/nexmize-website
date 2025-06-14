
import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

interface ErrorLog {
  message: string;
  stack?: string;
  timestamp: number;
  url: string;
  userAgent: string;
}

export const usePerformanceMonitoring = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [errors, setErrors] = useState<ErrorLog[]>([]);
  const [pageLoadTime, setPageLoadTime] = useState<number>(0);

  const logError = useCallback((error: Error, errorInfo?: any) => {
    const errorLog: ErrorLog = {
      message: error.message,
      stack: error.stack,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    setErrors(prev => [...prev, errorLog]);
    
    // Store in localStorage
    const storedErrors = JSON.parse(localStorage.getItem('nexmize_errors') || '[]');
    storedErrors.push(errorLog);
    localStorage.setItem('nexmize_errors', JSON.stringify(storedErrors.slice(-50))); // Keep last 50 errors

    console.error('Performance Monitor - Error logged:', errorLog);
  }, []);

  const measureCoreWebVitals = useCallback(() => {
    if ('performance' in window) {
      // Measure page load time
      const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationTiming) {
        setPageLoadTime(navigationTiming.loadEventEnd - navigationTiming.fetchStart);
      }

      // Get paint timings
      const paintTimings = performance.getEntriesByType('paint');
      const fcp = paintTimings.find(entry => entry.name === 'first-contentful-paint');

      // Basic metrics that we can measure
      const basicMetrics: Partial<PerformanceMetrics> = {
        loadTime: navigationTiming ? navigationTiming.loadEventEnd - navigationTiming.fetchStart : 0,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        // These would typically require additional libraries like web-vitals
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
        timeToInteractive: 0
      };

      setMetrics(basicMetrics as PerformanceMetrics);
    }
  }, []);

  const getResourceMetrics = useCallback(() => {
    if ('performance' in window) {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      return resources.map(resource => ({
        name: resource.name,
        duration: resource.duration,
        size: resource.transferSize,
        type: resource.initiatorType
      }));
    }
    return [];
  }, []);

  const trackUserJourney = useCallback(() => {
    const journey = {
      timestamp: Date.now(),
      page: window.location.pathname,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      screenResolution: `${screen.width}x${screen.height}`,
      viewportSize: `${window.innerWidth}x${window.innerHeight}`,
      connectionType: (navigator as any).connection?.effectiveType || 'unknown'
    };

    const storedJourney = JSON.parse(localStorage.getItem('nexmize_user_journey') || '[]');
    storedJourney.push(journey);
    localStorage.setItem('nexmize_user_journey', JSON.stringify(storedJourney.slice(-20)));

    return journey;
  }, []);

  const getPerformanceGrade = useCallback(() => {
    if (!metrics) return 'N/A';
    
    let score = 100;
    
    // Deduct points based on Core Web Vitals thresholds
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.firstContentfulPaint > 1800) score -= 15;
    if (metrics.largestContentfulPaint > 2500) score -= 25;
    if (metrics.firstInputDelay > 100) score -= 20;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 20;

    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, [metrics]);

  useEffect(() => {
    // Measure performance on mount
    setTimeout(measureCoreWebVitals, 1000);
    
    // Track initial page load
    trackUserJourney();

    // Set up global error handler
    const handleError = (event: ErrorEvent) => {
      logError(new Error(event.message), { filename: event.filename, lineno: event.lineno });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      logError(new Error(`Unhandled Promise Rejection: ${event.reason}`));
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [measureCoreWebVitals, trackUserJourney, logError]);

  return {
    metrics,
    errors,
    pageLoadTime,
    logError,
    measureCoreWebVitals,
    getResourceMetrics,
    trackUserJourney,
    getPerformanceGrade
  };
};
