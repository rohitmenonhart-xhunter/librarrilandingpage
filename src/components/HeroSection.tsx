import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, FileText, Zap, ChevronRight, Clock } from 'lucide-react';
import { PointerHighlight } from './ui/pointer-highlight';
import { GlowingEffect } from './ui/glowing-effect';
import { CountdownTimer } from './ui/countdown-timer';

// Add Tally type declaration if not already declared in this file
declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string) => void;
    };
  }
}

const FloatingElement = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
  >
    {children}
  </motion.div>
);

export default function HeroSection() {
  // Set target date to July 10th, 2025 at 10:00 AM
  const targetDate = new Date(2025, 6, 10, 10, 0, 0); // July 10th, 2025 (month is 0-indexed) at 10:00:00 AM

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-white to-secondary/20" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 shadow-soft border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Coming Soon</span>
          </div>
        </motion.div>

        <PointerHighlight 
          rectangleClassName="border border-primary/30 rounded-3xl"
          pointerClassName="text-primary h-6 w-6"
          containerClassName="inline-block mb-6"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight px-6 py-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your AI Writing
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Companion
            </span>
          </motion.h1>
        </PointerHighlight>

        {/* Enhanced Countdown Timer - Moved up */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-soft max-w-3xl mx-auto mb-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Launching on July 10th, 2025 at 10:00 AM
              </h3>
            </div>
            <CountdownTimer targetDate={targetDate} className="mb-2" />
            <p className="text-gray-600 text-sm">Reserve your spot now for early access and exclusive benefits</p>
          </div>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Librarri is the AI workspace that thinks, writes, and builds documents with you. Transform ideas into professional documents in seconds.
        </motion.p>

        {/* Floating 3D Document Elements */}
        <div className="relative mb-16">
          <FloatingElement delay={0} className="absolute -left-20 top-10 hidden lg:block">
            <div className="bg-white backdrop-blur-md rounded-2xl p-6 border border-gray-100 shadow-soft">
              <FileText className="w-10 h-10 text-primary mb-3" />
              <div className="w-20 h-2 bg-gray-200 rounded mb-2" />
              <div className="w-16 h-2 bg-gray-100 rounded" />
            </div>
          </FloatingElement>

          

          <motion.div
            className="inline-flex flex-col sm:flex-row gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              <PointerHighlight 
                rectangleClassName="border-2 rounded-xl border-primary/20"
                pointerClassName="text-primary h-6 w-6"
                containerClassName="mb-4 sm:mb-0"
              >
                <motion.button
                  className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-soft hover:shadow-lg flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    // Open Tally form manually when button is clicked
                    if (window.Tally) {
                      window.Tally.openPopup('wbyyPg');
                    }
                  }}
                >
                  Join Waitlist
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </PointerHighlight>
              <div className="absolute -bottom-1 -right-1 w-full h-full bg-primary/10 rounded-xl -z-10" />
            </div>
            
            <motion.button
              className="group bg-white text-gray-800 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 border border-gray-200 hover:border-gray-300 shadow-soft"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Watch Preview
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}