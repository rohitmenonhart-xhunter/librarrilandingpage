import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Sparkles, Bell } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

interface CTASectionProps {
  id?: string;
}

export default function CTASection({ id }: CTASectionProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section id={id} className="relative py-32 bg-warm-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 border border-primary/20">
            <Bell className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Join the Waitlist</span>
          </div>
        </motion.div>

        <motion.h2
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Be the First to
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Experience Librarri
          </span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          We're working hard to bring you the best AI writing companion. Sign up now to get notified when we launch and receive exclusive early access benefits.
        </motion.p>

        {/* Email Signup Form */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-soft"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-soft hover:shadow-md flex items-center justify-center gap-2 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GlowingEffect 
                  disabled={false} 
                  blur={8}
                  spread={30}
                  borderWidth={1}
                  variant="white"
                  className="opacity-40"
                />
                <span className="relative z-10">Join Waitlist</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>
            </form>
          ) : (
            <motion.div
              className="bg-success/10 border border-success/30 rounded-xl p-6 max-w-md mx-auto shadow-soft"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-success text-lg font-semibold mb-2">🎉 You're on the list!</div>
              <p className="text-gray-700">We'll notify you when Librarri is ready to launch.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Waitlist Benefits */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-soft">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Early Access</h3>
            <p className="text-gray-600 text-sm">Be among the first to try DocBot before public release</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-soft">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-primary font-bold text-xl">%</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Special Pricing</h3>
            <p className="text-gray-600 text-sm">Exclusive discounts for our early supporters</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-soft">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Bell className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch Updates</h3>
            <p className="text-gray-600 text-sm">Stay informed about our progress and launch date</p>
          </div>
        </motion.div>

        {/* Additional CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#features"
            className="group bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-gray-200 hover:border-gray-300 shadow-soft"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Features
          </motion.a>
          
          <motion.a
            href="mailto:info@docbot.ai"
            className="group text-gray-700 hover:text-primary px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span>No credit card required</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span>Unsubscribe anytime</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span>We respect your privacy</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}