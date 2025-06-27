import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const SocialIcon = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a 
    href={href}
    className="bg-white hover:bg-gray-50 text-primary p-2 rounded-full border border-gray-200 hover:border-primary/30 transition-colors duration-200 shadow-sm"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Librarri
              </span>
            </a>
            <p className="text-gray-600 mb-6 max-w-xs mx-auto">
              The AI workspace that thinks, writes, and builds documents with you.
            </p>
            <div className="flex justify-center space-x-3">
              <SocialIcon icon={Twitter} href="#" />
              <SocialIcon icon={Facebook} href="#" />
              <SocialIcon icon={Instagram} href="#" />
              <SocialIcon icon={Linkedin} href="#" />
            </div>
          </motion.div>

          {/* Bottom */}
          <motion.div
            className="border-t border-gray-100 pt-10 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Librarri AI. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}