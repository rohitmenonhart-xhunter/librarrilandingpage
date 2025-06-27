import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Presentation, Mail, FileCode, Briefcase, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const templates = [
  {
    id: 1,
    icon: FileText,
    title: "Professional Resume",
    category: "Career",
    preview: "Modern ATS-optimized resume with clean design",
    color: "primary",
    popular: true
  },
  {
    id: 2,
    icon: Presentation,
    title: "Startup Pitch Deck",
    category: "Business",
    preview: "Investor-ready presentation with compelling narrative",
    color: "accent",
    popular: true
  },
  {
    id: 3,
    icon: Mail,
    title: "Email Campaign",
    category: "Marketing",
    preview: "High-converting email sequences for any industry",
    color: "success",
    popular: false
  },
  {
    id: 4,
    icon: FileCode,
    title: "Technical Proposal",
    category: "Business",
    preview: "Detailed technical documentation and proposals",
    color: "warning",
    popular: true
  },
  {
    id: 5,
    icon: Briefcase,
    title: "Business Plan",
    category: "Strategy",
    preview: "Comprehensive business plan with financial projections",
    color: "accent",
    popular: false
  },
  {
    id: 6,
    icon: GraduationCap,
    title: "Research Paper",
    category: "Academic",
    preview: "Well-structured academic papers with citations",
    color: "primary",
    popular: true
  }
];

const TemplateCard = ({ template, isActive, onClick }: { 
  template: typeof templates[0]; 
  isActive: boolean; 
  onClick: () => void;
}) => {
  const Icon = template.icon;
  
  return (
    <motion.div
      className={`relative cursor-pointer transition-all duration-300 ${
        isActive ? 'scale-105 z-10' : 'scale-95 hover:scale-100'
      }`}
      onClick={onClick}
      whileHover={{ y: -5 }}
    >
      <div className={`relative bg-white rounded-3xl p-6 border overflow-hidden ${
        isActive ? 'border-primary/30 shadow-feature' : 'border-gray-100 hover:border-primary/20 shadow-soft'
      }`}>
        {isActive && (
          <GlowingEffect 
            disabled={false} 
            blur={8}
            spread={30}
            borderWidth={1}
            variant="white"
            className="opacity-60"
          />
        )}
        
        {/* Popular Badge */}
        {template.popular && (
          <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
            Popular
          </div>
        )}
        
        <div className="relative z-10">
          <div className={`inline-flex items-center justify-center w-14 h-14 bg-${template.color}/10 rounded-2xl mb-5`}>
            <Icon className={`w-7 h-7 text-${template.color}`} />
          </div>
          
          <div className="mb-2">
            <span className={`text-xs text-${template.color} font-semibold uppercase tracking-wide`}>
              {template.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">{template.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{template.preview}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function TemplatesShowcase() {
  const [activeTemplate, setActiveTemplate] = useState(0);
  
  const nextTemplate = () => {
    setActiveTemplate((prev) => (prev + 1) % templates.length);
  };
  
  const prevTemplate = () => {
    setActiveTemplate((prev) => (prev - 1 + templates.length) % templates.length);
  };

  return (
    <section id="templates" className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-white to-secondary/10" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            Smart Templates for
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"> Every Need</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our collection of AI-powered templates that adapt to your content and requirements
          </p>
        </motion.div>

        {/* Template Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center mb-10">
            <button
              onClick={prevTemplate}
              className="p-3 rounded-full bg-white shadow-soft border border-gray-100 hover:bg-gray-50 transition-colors mr-6"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
              {templates.slice(activeTemplate, activeTemplate + 3).map((template, index) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  isActive={index === 1}
                  onClick={() => setActiveTemplate((activeTemplate + index) % templates.length)}
                />
              ))}
            </div>
            
            <button
              onClick={nextTemplate}
              className="p-3 rounded-full bg-white shadow-soft border border-gray-100 hover:bg-gray-50 transition-colors ml-6"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mb-16">
            {templates.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTemplate(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeTemplate === index ? 'bg-primary' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Live Preview Section */}
        <motion.div
          className="bg-white rounded-3xl p-10 shadow-feature border border-gray-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Live Template Preview</h3>
              <p className="text-gray-600 mb-8 text-lg">
                See how your content will look with our AI-powered templates. Each template adapts to your industry and requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Auto-formatting and styling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Industry-specific content suggestions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">ATS-optimized formatting</span>
                </div>
              </div>
              
              <motion.button
                className="mt-8 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-soft"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Try Template
              </motion.button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-inner">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-500 ml-4">Document Preview</span>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTemplate}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="h-4 bg-primary/30 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-full"></div>
                  <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 bg-accent/20 rounded w-1/2"></div>
                    <div className="h-2 bg-accent/20 rounded w-3/5"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}