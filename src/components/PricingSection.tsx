import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Lock } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals getting started",
    monthlyPrice: 0,
    annualPrice: 0,
    icon: Zap,
    color: "primary",
    features: [
      "5 documents per month",
      "Basic templates",
      "AI writing assistance",
      "PDF export",
      "Email support"
    ],
    limitations: [
      "Limited AI credits",
      "Basic templates only"
    ]
  },
  {
    name: "Professional",
    description: "Ideal for freelancers and small teams",
    monthlyPrice: 19,
    annualPrice: 15,
    icon: Star,
    color: "accent",
    popular: true,
    features: [
      "Unlimited documents",
      "Premium templates",
      "Advanced AI features",
      "Multi-format export",
      "Collaboration tools",
      "Priority support",
      "Custom branding"
    ],
    limitations: []
  },
  {
    name: "Enterprise",
    description: "For large teams and organizations",
    monthlyPrice: 49,
    annualPrice: 39,
    icon: Crown,
    color: "warning",
    features: [
      "Everything in Professional",
      "Custom AI training",
      "API access",
      "Advanced analytics",
      "SSO integration",
      "Dedicated support",
      "Custom templates",
      "White-label solution"
    ],
    limitations: []
  }
];

const PricingCard = ({ plan, isAnnual, index }: { 
  plan: typeof plans[0]; 
  isAnnual: boolean; 
  index: number;
}) => {
  const Icon = plan.icon;
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const originalPrice = plan.monthlyPrice;
  
  return (
    <motion.div
      className={`relative rounded-3xl p-8 border overflow-hidden ${
        plan.popular 
          ? 'bg-white border-primary/30 scale-105 shadow-feature' 
          : 'bg-white border-gray-100 hover:border-primary/20 shadow-soft'
      } transition-all duration-300`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {plan.popular && (
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
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-soft">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="relative z-10">
        {/* Icon and Name */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-14 h-14 bg-${plan.color}/10 rounded-2xl flex items-center justify-center`}>
            <Icon className={`w-7 h-7 text-${plan.color}`} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
            <p className="text-gray-600 text-sm">{plan.description}</p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-gray-900">${price}</span>
            <span className="text-gray-500">/{isAnnual ? 'month' : 'month'}</span>
          </div>
          {isAnnual && originalPrice > 0 && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-400 line-through">${originalPrice}/month</span>
              <span className="text-green-500 text-sm font-semibold">
                Save {Math.round(((originalPrice - price) / originalPrice) * 100)}%
              </span>
            </div>
          )}
          {price === 0 && (
            <span className="text-green-500 font-semibold">Free forever</span>
          )}
        </div>

        {/* Features */}
        <div className="space-y-4 mb-10">
          {plan.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center gap-3">
              <Check className={`w-5 h-5 text-${plan.color} flex-shrink-0`} />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
            plan.popular
              ? 'bg-primary hover:bg-primary/90 text-white shadow-soft'
              : 'bg-white border border-gray-200 hover:border-primary/30 text-gray-800'
          }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {price === 0 ? 'Get Started Free' : 'Start Free Trial'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-32 bg-warm-white relative overflow-hidden">
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
            Simple, Transparent
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Choose the perfect plan for your needs. Start free, upgrade when you're ready.
          </p>

          {/* Locked Section Overlay */}
          <div className="relative">
            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-white rounded-xl p-2 border border-gray-200 shadow-soft">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  !isAnnual 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isAnnual 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Annual
                <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
            
            {/* Lock Overlay */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-xl z-20">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h3>
                <p className="text-gray-600">Pricing plans will be available when we launch</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard 
              key={plan.name} 
              plan={plan} 
              isAnnual={isAnnual} 
              index={index} 
            />
          ))}
          
          {/* Lock Overlay */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-20">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Coming Soon</h3>
              <p className="text-xl text-gray-600 max-w-md">Our pricing plans will be available when we officially launch</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
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
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Can I change plans anytime?</h4>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Is there a free trial?</h4>
                <p className="text-gray-600">All paid plans come with a 14-day free trial. No credit card required to start.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">What payment methods do you accept?</h4>
                <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Do you offer refunds?</h4>
                <p className="text-gray-600">Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}