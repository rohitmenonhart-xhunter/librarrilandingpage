import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import HowItWorks from './components/HowItWorks';
import TemplatesShowcase from './components/TemplatesShowcase';
import PricingSection from './components/PricingSection';
import SocialProofSection from './components/SocialProofSection';
import Footer from './components/Footer';

// Import the resizable navbar components
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle
} from './components/ui/resizable-navbar';

// Add Tally type declaration
declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string) => void;
    };
  }
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Templates", link: "#templates" },
    { name: "How it Works", link: "#how-it-works" },
    { name: "Pricing", link: "#pricing" },
    { name: "Blog", link: "#blog" }
  ];

  return (
    <div className="min-h-screen bg-bg-light text-text-dark">
      {/* Resizable Navbar */}
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} onItemClick={() => {}} />
          <div className="relative z-20 flex items-center justify-end">
            <NavbarButton 
              href="#" 
              variant="gradient"
              onClick={() => {
                // Open Tally form manually when button is clicked
                if (window.Tally) {
                  window.Tally.openPopup('wbyyPg');
                }
              }}
            >
              Get Started
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </MobileNavHeader>
          
          <MobileNavMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="w-full px-4 py-2 text-text-dark hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 flex w-full flex-col gap-2 pt-4 border-t border-secondary">
              <NavbarButton 
                href="#" 
                variant="gradient" 
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  // Open Tally form manually when button is clicked
                  if (window.Tally) {
                    window.Tally.openPopup('wbyyPg');
                  }
                }}
              >
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
      <TemplatesShowcase />
      <PricingSection />
      <SocialProofSection />
      <Footer />
    </div>
  );
}

export default App;