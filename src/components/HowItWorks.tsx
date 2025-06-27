import React from 'react';
import { motion } from 'framer-motion';
import { BookTemplate as FileTemplate, MessageSquare, Download, ArrowRight } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const steps = [
  {
    icon: FileTemplate,
    title: "Choose Template",
    description: "Start with a smart template or describe what you need",
    demo: "Resume, Pitch Deck, Blog Post..."
  },
  {
    icon: MessageSquare,
    title: "AI Collaboration",
    description: "Chat with AI to refine, expand, and perfect your content",
    demo: "Make it more professional, Add examples, Summarize this..."
  },
  {
    icon: Download,
    title: "Export & Share",
    description: "Download in multiple formats or share with a simple link",
    demo: "PDF, DOCX, HTML, Link sharing"
  }
];

const StepCard = ({ step, index, isActive }: { step: typeof steps[0]; index: number; isActive: boolean }) => {
  const Icon = step.icon;
  
  return (
    <motion.div
      className={`relative flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-500 overflow-hidden ${
        isActive 
          ? 'bg-white border-primary/30 scale-105 shadow-feature' 
          : 'bg-white border-gray-100 hover:border-primary/20 shadow-soft'
      } border`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {isActive && (
        <GlowingEffect 
          disabled={false} 
          blur={10}
          spread={30}
          borderWidth={1}
          variant="white"
          className="opacity-60"
        />
      )}
      
      {/* Step Number */}
      <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
        isActive ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
      }`}>
        {index + 1}
      </div>
      
      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
        isActive 
          ? 'bg-primary/10' 
          : 'bg-gray-100'
      }`}>
        <Icon className={`w-8 h-8 ${isActive ? 'text-primary' : 'text-gray-500'}`} />
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
      
      {/* Demo Preview */}
      <div className="bg-gray-50 rounded-lg p-4 w-full border border-gray-100">
        <div className="text-sm text-primary font-mono">{step.demo}</div>
      </div>
    </motion.div>
  );
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="py-32 bg-warm-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-white to-secondary/20" />
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: '50%',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          />
        ))}
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
            How It
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From idea to finished document in three simple steps
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <StepCard 
                step={step} 
                index={index} 
                isActive={activeStep === index}
              />
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-8 h-8 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Demo Preview */}
        <motion.div
          className="bg-white rounded-3xl p-10 shadow-feature border border-gray-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">See It In Action</h3>
              <p className="text-gray-600 text-lg">Watch how AI transforms your prompts into professional documents</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 font-mono text-sm border border-gray-100 shadow-inner">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-500 ml-4">DocBot AI Workspace</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-semibold">You:</span>
                  <span className="text-gray-800">Create a professional resume for a software engineer</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-semibold">AI:</span>
                  <span className="text-gray-700">I'll create a professional software engineer resume. Let me start with the structure...</span>
                </div>
                <div className="bg-white rounded p-4 ml-8 border border-gray-100">
                  <div className="text-green-500">✓ Generated header section</div>
                  <div className="text-green-500">✓ Added technical skills</div>
                  <div className="text-green-500">✓ Created experience section</div>
                  <div className="text-primary">⟳ Optimizing for ATS compatibility...</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}