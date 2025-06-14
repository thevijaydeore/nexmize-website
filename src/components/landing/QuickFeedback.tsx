import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Star, X, Send, ThumbsUp } from 'lucide-react';
const QuickFeedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store feedback
    const feedbackData = {
      rating,
      feedback,
      timestamp: Date.now(),
      page: window.location.pathname
    };
    const storedFeedback = JSON.parse(localStorage.getItem('quick_feedback') || '[]');
    storedFeedback.push(feedbackData);
    localStorage.setItem('quick_feedback', JSON.stringify(storedFeedback));
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setRating(0);
      setFeedback('');
    }, 2000);
  };
  const handleQuickRating = (rating: number) => {
    const feedbackData = {
      rating,
      feedback: '',
      timestamp: Date.now(),
      page: window.location.pathname,
      type: 'quick'
    };
    const storedFeedback = JSON.parse(localStorage.getItem('quick_feedback') || '[]');
    storedFeedback.push(feedbackData);
    localStorage.setItem('quick_feedback', JSON.stringify(storedFeedback));
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 1500);
  };
  return <>
      {/* Quick Feedback Button */}
      

      {/* Quick Feedback Modal */}
      <AnimatePresence>
        {isOpen && <motion.div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }}>
            <motion.div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl" initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.8,
          opacity: 0
        }}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Quick Feedback</h3>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-neutral-100 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!submitted ? <div className="space-y-4">
                  <div>
                    <p className="text-sm text-neutral-600 mb-3">
                      How's your experience so far?
                    </p>
                    <div className="flex gap-2 justify-center">
                      {[1, 2, 3, 4, 5].map(star => <button key={star} type="button" onClick={() => handleQuickRating(star)} className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-yellow-100 transition-colors flex items-center justify-center">
                          <Star className={`w-6 h-6 ${star <= 3 ? 'text-neutral-400' : 'text-yellow-400'}`} />
                        </button>)}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm font-medium mb-2">
                      Want to share more details?
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map(star => <button key={star} type="button" onClick={() => setRating(star)} className={`transition-colors ${star <= rating ? 'text-yellow-400' : 'text-neutral-300 hover:text-yellow-300'}`}>
                            <Star className={`w-5 h-5 ${star <= rating ? 'fill-current' : ''}`} />
                          </button>)}
                      </div>

                      <textarea value={feedback} onChange={e => setFeedback(e.target.value)} className="w-full p-3 border border-neutral-300 rounded-lg resize-none text-sm" rows={3} placeholder="Tell us what you think..." />

                      <button type="submit" disabled={rating === 0} className="w-full bg-gradient-to-r from-accent-purple to-accent-blue text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm">
                        <Send className="w-4 h-4" />
                        Submit Feedback
                      </button>
                    </form>
                  </div>
                </div> : <motion.div className="text-center py-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }}>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ThumbsUp className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="text-lg font-semibold mb-1">Thank you!</h4>
                  <p className="text-neutral-600 text-sm">Your feedback helps us improve.</p>
                </motion.div>}
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default QuickFeedback;