import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlowingEffect } from './glowing-effect';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = ({ targetDate, className = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If target date is passed, set all to zero
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <div className={`flex justify-center space-x-4 md:space-x-6 ${className}`}>
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="relative">
            <motion.div 
              className="bg-white rounded-xl border border-primary/20 shadow-soft w-16 md:w-24 h-16 md:h-24 flex items-center justify-center mb-2 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowingEffect 
                disabled={false} 
                blur={8}
                spread={30}
                borderWidth={1}
                variant="white"
                className="opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-primary/5 opacity-80" />
              
              <motion.span 
                className="relative z-10 text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                key={unit.value}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {unit.value.toString().padStart(2, '0')}
              </motion.span>
              
              {/* Pulse animation for seconds */}
              {unit.label === "Seconds" && (
                <motion.div
                  className="absolute inset-0 border-2 border-primary/30 rounded-xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.div>
            
            {/* Divider dots (only between hours, minutes, seconds) */}
            {(unit.label === "Hours" || unit.label === "Minutes") && (
              <div className="absolute -right-4 md:-right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              </div>
            )}
          </div>
          <span className="text-sm md:text-base font-medium text-gray-600">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}; 