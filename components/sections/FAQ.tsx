"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you only do house parties?",
    answer: "No! While we started with house parties, we now handle end-to-end management for corporate mixers, FIFA/Cricket watch nights, traditional housewarmings (Griha Pravesh), and more."
  },
  {
    question: "Can I customize the menu?",
    answer: "Absolutely. Our app allows you to customize menus down to individual dietary preferences, choosing between our curated Vibe Boxes or Live Chef experiences."
  },
  {
    question: "How does the app discount work?",
    answer: "When you download The Vibe House app, you get exclusive access to our 'Deal Feast' which offers up to 70% off your first VibeBox order, plus you earn loyalty points on every booking."
  },
  {
    question: "Do I need to clean up after the event?",
    answer: "Not if you select our 'Full Experience' or add the Cleanup module! Our team handles post-event cleanup, leaving your space exactly as we found it."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative transparent">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Got questions?</h2>
          <p className="text-xl text-white/70">Everything you need to know about the TVH experience.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              className="solid-panel overflow-hidden group"
              initial={{ opacity: 0.01, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-black text-xl text-text-main group-hover:text-brand transition-colors">{faq.question}</span>
                <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm ${openIndex === i ? 'bg-gradient-to-r from-brand-accent to-brand text-white shadow-neon-pink' : 'bg-white/80 text-brand'}`}>
                  {openIndex === i ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-text-muted font-medium pt-2 leading-relaxed text-lg border-t border-white/20">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
