"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you only do house parties?",
    answer: "We do - Birthday parties, House parties, Corporate events, Sports event nights, Festive themed events, and more.\n\nYou name it, we do it !"
  },
  {
    question: "Can I customize the menu?",
    answer: "Absolutely. Our app allows you to customize menus down to individual dietary preferences, choosing between our curated Vibe Boxes or Live Chef experiences."
  },
  {
    question: "How does the app discount work?",
    answer: "When you download The Vibe House app, you get access to our 'Deal Feast' which offers up to 10% off your first VibeBox order.\n\nDiscounts are seasonal and may not be there always, as they keep on changing depending upon demand. Some users may get exclusive discounts, while others may get it at original price."
  },
  {
    question: "Do I need to clean up after the event?",
    answer: "Not at all! We will have our dedicated crew that will clean up after the event is done, leaving your space spotless so that there is no hassle for the host."
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
                    <div className="px-8 pb-8 text-text-muted font-medium pt-2 leading-relaxed text-lg border-t border-white/20 whitespace-pre-line">
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
