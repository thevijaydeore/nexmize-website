
import { useState, useEffect, useCallback } from 'react';

interface AnalyticsEvent {
  type: 'click' | 'scroll' | 'hover' | 'form_interaction' | 'cta_click';
  element: string;
  timestamp: number;
  position?: { x: number; y: number };
  scrollDepth?: number;
  value?: string;
}

interface HeatmapPoint {
  x: number;
  y: number;
  intensity: number;
  element: string;
}

interface ConversionFunnel {
  step: string;
  timestamp: number;
  completed: boolean;
}

export const useAnalytics = () => {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [heatmapData, setHeatmapData] = useState<HeatmapPoint[]>([]);
  const [conversionFunnel, setConversionFunnel] = useState<ConversionFunnel[]>([]);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  const trackEvent = useCallback((event: Omit<AnalyticsEvent, 'timestamp'>) => {
    const fullEvent = { ...event, timestamp: Date.now() };
    setEvents(prev => [...prev, fullEvent]);
    
    // Store in localStorage for persistence
    const storedEvents = JSON.parse(localStorage.getItem('nexmize_analytics') || '[]');
    storedEvents.push(fullEvent);
    localStorage.setItem('nexmize_analytics', JSON.stringify(storedEvents.slice(-100))); // Keep last 100 events
    
    console.log('Analytics Event:', fullEvent);
  }, []);

  const trackClick = useCallback((element: string, position?: { x: number; y: number }) => {
    trackEvent({ type: 'click', element, position });
    
    // Add to heatmap data
    if (position) {
      setHeatmapData(prev => {
        const existing = prev.find(point => 
          Math.abs(point.x - position.x) < 20 && Math.abs(point.y - position.y) < 20
        );
        
        if (existing) {
          return prev.map(point => 
            point === existing 
              ? { ...point, intensity: point.intensity + 1 }
              : point
          );
        } else {
          return [...prev, { ...position, intensity: 1, element }];
        }
      });
    }
  }, [trackEvent]);

  const trackScroll = useCallback((scrollDepth: number) => {
    trackEvent({ type: 'scroll', element: 'page', scrollDepth });
  }, [trackEvent]);

  const trackConversionStep = useCallback((step: string, completed: boolean = true) => {
    const funnelStep = { step, timestamp: Date.now(), completed };
    setConversionFunnel(prev => [...prev, funnelStep]);
    trackEvent({ type: 'form_interaction', element: step, value: completed.toString() });
  }, [trackEvent]);

  const getEngagementMetrics = useCallback(() => {
    const clickEvents = events.filter(e => e.type === 'click');
    const scrollEvents = events.filter(e => e.type === 'scroll');
    const maxScroll = Math.max(...scrollEvents.map(e => e.scrollDepth || 0));
    
    return {
      totalClicks: clickEvents.length,
      maxScrollDepth: maxScroll,
      timeOnPage: events.length > 0 ? Date.now() - events[0].timestamp : 0,
      mostClickedElements: clickEvents.reduce((acc, event) => {
        acc[event.element] = (acc[event.element] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }, [events]);

  const getConversionFunnelStats = useCallback(() => {
    const steps = ['hero_cta', 'contact_form_view', 'form_filled', 'form_submitted'];
    return steps.map(step => ({
      step,
      completed: conversionFunnel.filter(f => f.step === step && f.completed).length,
      total: conversionFunnel.filter(f => f.step === step).length
    }));
  }, [conversionFunnel]);

  // Track scroll depth automatically
  useEffect(() => {
    const handleScroll = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      trackScroll(scrollDepth);
    };

    const throttledScroll = throttle(handleScroll, 1000);
    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [trackScroll]);

  return {
    trackClick,
    trackScroll,
    trackEvent,
    trackConversionStep,
    getEngagementMetrics,
    getConversionFunnelStats,
    heatmapData,
    sessionId,
    events
  };
};

// Throttle utility
function throttle<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeoutId: NodeJS.Timeout;
  let lastExecTime = 0;
  return ((...args) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  }) as T;
}
