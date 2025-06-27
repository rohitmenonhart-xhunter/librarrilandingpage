import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

// Add Tally type declaration if not already declared in this file
declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string) => void;
    };
  }
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 px-3 py-2"
  >
    {children}
  </a>
);

const NavDropdown = ({ title, items }: { title: string; items: { label: string; href: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button 
        className="flex items-center text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 px-3 py-2 gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown className="w-4 h-4" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
          {items.map((item, i) => (
            <a 
              key={i}
              href={item.href}
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                Librarri
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="#features">Features</NavLink>
            <NavDropdown 
              title="Templates" 
              items={[
                { label: "Business", href: "#business" },
                { label: "Academic", href: "#academic" },
                { label: "Creative", href: "#creative" },
                { label: "Technical", href: "#technical" },
              ]} 
            />
            <NavLink href="#how-it-works">How it Works</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#blog">Blog</NavLink>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-soft hover:shadow-lg"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                if (window.Tally) {
                  window.Tally.openPopup('wbyyPg');
                }
              }}
            >
              Get Started
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white border-t border-gray-100"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">
              Features
            </a>
            <a href="#templates" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">
              Templates
            </a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">
              How it Works
            </a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">
              Pricing
            </a>
            <a href="#blog" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">
              Blog
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <a
                href="#"
                className="block px-3 py-2 mt-1 bg-primary hover:bg-primary/90 text-white rounded-md"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  if (window.Tally) {
                    window.Tally.openPopup('wbyyPg');
                  }
                }}
              >
                Get Started
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
} 