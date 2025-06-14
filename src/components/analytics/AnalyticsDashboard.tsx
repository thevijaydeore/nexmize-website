
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useABTesting } from '@/hooks/useABTesting';
import { usePerformanceMonitoring } from '@/hooks/usePerformanceMonitoring';

const AnalyticsDashboard = () => {
  const { getEngagementMetrics, getConversionFunnelStats, events, heatmapData } = useAnalytics();
  const { getTestResults, availableTests } = useABTesting();
  const { metrics, getPerformanceGrade, errors } = usePerformanceMonitoring();
  const [isVisible, setIsVisible] = useState(false);

  const engagementMetrics = getEngagementMetrics();
  const funnelStats = getConversionFunnelStats();
  const performanceGrade = getPerformanceGrade();

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c'];

  // Convert engagement data for charts
  const clickData = Object.entries(engagementMetrics.mostClickedElements).map(([element, clicks]) => ({
    element: element.replace('_', ' ').toUpperCase(),
    clicks
  }));

  const funnelData = funnelStats.map(stat => ({
    step: stat.step.replace('_', ' ').toUpperCase(),
    completed: stat.completed,
    rate: stat.total > 0 ? (stat.completed / stat.total * 100).toFixed(1) : '0'
  }));

  // Toggle dashboard visibility (for demo purposes)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-neutral-800 text-white px-3 py-1 rounded text-xs hover:bg-neutral-700 transition-colors"
        >
          Analytics (Ctrl+Shift+A)
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="fixed inset-4 bg-white rounded-lg shadow-2xl z-50 overflow-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
          <button
            onClick={() => setIsVisible(false)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Key Metrics */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
            <h3 className="text-sm font-medium opacity-90">Total Events</h3>
            <p className="text-2xl font-bold">{events.length}</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
            <h3 className="text-sm font-medium opacity-90">Max Scroll Depth</h3>
            <p className="text-2xl font-bold">{engagementMetrics.maxScrollDepth}%</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg">
            <h3 className="text-sm font-medium opacity-90">Performance Grade</h3>
            <p className="text-2xl font-bold">{performanceGrade}</p>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg">
            <h3 className="text-sm font-medium opacity-90">Error Count</h3>
            <p className="text-2xl font-bold">{errors.length}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Click Heatmap */}
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Most Clicked Elements</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={clickData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="element" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="clicks" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Conversion Funnel */}
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Conversion Funnel</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={funnelData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="step" />
                <YAxis />
                <Tooltip formatter={(value, name) => [`${value}%`, 'Conversion Rate']} />
                <Bar dataKey="rate" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* A/B Test Results */}
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">A/B Test Results</h3>
            <div className="space-y-3">
              {availableTests.map(test => {
                const results = getTestResults(test.id);
                return (
                  <div key={test.id} className="bg-white p-3 rounded">
                    <h4 className="font-medium">{test.name}</h4>
                    <div className="grid grid-cols-3 gap-2 mt-2 text-sm">
                      {results.map(result => (
                        <div key={result.variant} className="text-center">
                          <p className="font-medium">{result.variant}</p>
                          <p className="text-neutral-600">
                            {result.views} views | {result.conversions} conv.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
            {metrics && (
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Load Time:</span>
                  <span className="font-medium">{(metrics.loadTime / 1000).toFixed(2)}s</span>
                </div>
                <div className="flex justify-between">
                  <span>First Contentful Paint:</span>
                  <span className="font-medium">{(metrics.firstContentfulPaint / 1000).toFixed(2)}s</span>
                </div>
                <div className="flex justify-between">
                  <span>Overall Grade:</span>
                  <span className={`font-bold ${
                    performanceGrade === 'A' ? 'text-green-600' : 
                    performanceGrade === 'B' ? 'text-blue-600' : 
                    performanceGrade === 'C' ? 'text-yellow-600' : 'text-red-600'
                  }`}>{performanceGrade}</span>
                </div>
              </div>
            )}
            
            {errors.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium text-red-600 mb-2">Recent Errors:</h4>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {errors.slice(-3).map((error, index) => (
                    <div key={index} className="text-xs bg-red-50 p-2 rounded">
                      <p className="font-medium text-red-800">{error.message}</p>
                      <p className="text-red-600">
                        {new Date(error.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-neutral-500">
          <p>Real-time analytics • Data stored locally • Press Ctrl+Shift+A to toggle</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AnalyticsDashboard;
