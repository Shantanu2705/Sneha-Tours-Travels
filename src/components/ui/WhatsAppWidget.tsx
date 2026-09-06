"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { contactInfo } from '@/data/contact';

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
  const defaultMessage = encodeURIComponent("Hi there! I would like to know more about your cab services.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  const toggleOpen = () => setIsOpen(!isOpen);

  // Get current time formatted like "02:45 PM"
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-[#00695c] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="relative w-12 h-12 bg-white rounded-full border-2 border-white flex-shrink-0 flex items-center justify-center overflow-hidden shadow-sm">
                    <Image src="/logo.png" alt="Sneha Tours & Travels" fill className="object-contain p-1" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white z-10"></div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-[17px] leading-tight">Sneha Tours & Travels</h3>
                  <p className="text-white/80 text-sm">Online</p>
                </div>
              </div>
              <button 
                onClick={toggleOpen}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="bg-[#EAE4DC] p-5 h-[180px] flex flex-col" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: 'cover' }}>
              <p className="text-center text-xs text-gray-500 mb-4">{currentTime}</p>
              
              <div className="bg-white rounded-tr-xl rounded-b-xl px-4 py-3 shadow-sm self-start max-w-[85%] relative">
                {/* Chat bubble tail */}
                <div className="absolute top-0 -left-2 w-0 h-0 border-t-[0px] border-t-transparent border-r-[10px] border-r-white border-b-[10px] border-b-transparent"></div>
                
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Hi there 👋<br />
                  How can I help you?
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1EBE5C] text-white font-semibold py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={toggleOpen}
        className="w-16 h-16 bg-[#25D366] hover:bg-[#1EBE5C] text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 relative z-10 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Open WhatsApp chat"
      >
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
        )}
        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </button>
    </div>
  );
}
