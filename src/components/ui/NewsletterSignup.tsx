import React, { useState } from 'react';
import Button from './Button';
import { supabase } from '../../lib/supabase';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);
      
      if (error) throw error;
      
      setSubmitMessage({
        type: 'success',
        text: 'Thank you for subscribing to our newsletter!'
      });
      
      // Reset form
      setEmail('');
    } catch (error: any) {
      console.error('Error subscribing to newsletter:', error);
      
      // Check if it's a unique constraint error (already subscribed)
      if (error.code === '23505') {
        setSubmitMessage({
          type: 'error',
          text: 'This email is already subscribed to our newsletter.'
        });
      } else {
        setSubmitMessage({
          type: 'error',
          text: 'There was an error processing your subscription. Please try again later.'
        });
      }
    } finally {
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }
  };

  return (
    <div>
      {submitMessage && (
        <div 
          className={`p-4 rounded-md mb-4 ${
            submitMessage.type === 'success' ? 'bg-success-100 text-success-800' : 'bg-error-100 text-error-800'
          }`}
        >
          {submitMessage.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input 
          type="email" 
          placeholder="Your email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          required
        />
        <Button type="submit" variant="primary" size="md" disabled={isSubmitting}>
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      <p className="text-xs text-gray-500 mt-3">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSignup;