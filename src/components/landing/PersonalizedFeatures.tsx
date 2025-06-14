
import { motion } from 'framer-motion';
import { usePersonalization } from '@/hooks/usePersonalization';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';

const PersonalizedFeatures = () => {
  const { preferences, getIndustryHighlight, getRecommendedServices, isReturningVisitor } = usePersonalization();
  const industryData = getIndustryHighlight();
  const recommendedServices = getRecommendedServices();

  if (!isReturningVisitor && !industryData) {
    return null;
  }

  return (
    <motion.section 
      className="container-padding py-12 bg-gradient-to-r from-accent-purple/5 to-accent-blue/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        {isReturningVisitor && (
          <div className="text-center mb-8">
            <motion.div
              className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <Star className="w-4 h-4 fill-current" />
              Welcome back! We're ready to help you again.
            </motion.div>
          </div>
        )}

        {industryData && (
          <div className="glass-panel rounded-2xl p-8 mb-8">
            <h3 className="heading-md mb-4 text-center">
              Specialized for {preferences.industry.charAt(0).toUpperCase() + preferences.industry.slice(1)}
            </h3>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-accent-green" />
              <span className="text-lg font-semibold text-accent-purple">
                {industryData.highlight}
              </span>
              <Zap className="w-5 h-5 text-accent-blue" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Recommended Services</h4>
                <ul className="space-y-2">
                  {recommendedServices.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-accent-green" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Featured Case Study</h4>
                <div className="p-4 bg-white/50 rounded-lg">
                  <p className="text-sm text-neutral-600 mb-2">Similar to your industry:</p>
                  <p className="font-medium">{industryData.caseStudy}</p>
                  <button className="text-accent-purple hover:text-accent-blue transition-colors text-sm font-medium mt-2">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="button-primary inline-flex items-center gap-2"
          >
            Get Your Custom Solution
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default PersonalizedFeatures;
