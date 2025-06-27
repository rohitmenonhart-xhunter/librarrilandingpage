import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Users, TrendingUp, Award } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const partners = [
  "Microsoft", "Google", "Salesforce", "Slack", "Adobe", "Notion"
];

export default function SocialProofSection() {
  return (
    <section className="py-32 bg-warm-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-white to-secondary/10" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Coming Soon Section */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Coming Soon</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"> Waitlist</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Be the first to experience Librarri when we launch. Sign up for early access and exclusive benefits.
          </p>
          
          <div className="flex justify-center mb-16">
            <motion.div
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-feature max-w-md w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GlowingEffect 
                disabled={false} 
                blur={8}
                spread={30}
                borderWidth={1}
                variant="white"
                className="opacity-60"
              />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Early Access Benefits</h3>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Priority access when we launch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-700">30% discount on premium plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Extended free trial period</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Exclusive beta features</span>
                  </li>
                </ul>
                
                <div className="inline-flex items-center gap-2 text-gray-600 mb-4">
                  <Clock className="w-5 h-5" />
                  <span>Limited spots available</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Integration Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-10">
            Will integrate with your favorite tools
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                className="text-xl font-semibold text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ opacity: 1, color: '#4361ee' }}
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-gray-100 shadow-soft">
            <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-800 font-semibold">SOC 2 Compliant</span>
          </div>
          
          <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-gray-100 shadow-soft">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-800 font-semibold">GDPR Compliant</span>
          </div>
          
          <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-gray-100 shadow-soft">
            <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-800 font-semibold">Enterprise Ready</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}