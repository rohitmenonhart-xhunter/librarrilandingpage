import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  FileText, 
  Zap, 
  Brain, 
  Palette, 
  Share2,
  MessageSquare,
  Download,
  Shield
} from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';
import { cn } from '../lib/utils';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Writing",
    description: "Advanced AI understands context and generates human-like content tailored to your needs."
  },
  {
    icon: FileText,
    title: "Smart Templates",
    description: "Start with intelligent templates that adapt to your content and industry requirements."
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description: "Transform ideas into polished documents in seconds, not hours."
  },
  {
    icon: MessageSquare,
    title: "Prompt-to-Document",
    description: "Simply describe what you need and watch AI build your document step by step."
  },
  {
    icon: Palette,
    title: "Professional Styling",
    description: "Beautiful formatting and design applied automatically to every document."
  },
  {
    icon: Share2,
    title: "Easy Collaboration",
    description: "Share, comment, and collaborate with team members in real-time."
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
    >
      {/* Glowing Effect */}
      <GlowingEffect 
        disabled={false} 
        blur={12}
        spread={40}
        borderWidth={1}
        variant="white"
        className="opacity-60"
      />
      
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-warm-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors">
          {feature.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed text-lg">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-32 bg-warm-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"> Modern Writing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, edit, and share professional documents with the power of AI
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
        
        {/* Feature Highlight */}
        <motion.div 
          className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Enterprise-Grade Security</h3>
              <p className="text-lg text-gray-600 mb-6">
                Your documents and data are protected with bank-level encryption. Our platform is built with privacy and security at its core.
              </p>
              <motion.button
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </div>
            <div className="bg-warm-white rounded-2xl p-6 shadow-lg">
              <div className="h-64 flex items-center justify-center">
                <div className="w-full h-full bg-[url('/security-illustration.svg')] bg-contain bg-center bg-no-repeat" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}