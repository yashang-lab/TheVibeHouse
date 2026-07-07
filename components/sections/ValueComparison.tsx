"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function ValueComparison() {
  return (
    <section className="py-24 relative transparent overflow-hidden">
      {/* Background accents just for this section to pop more */}
      <div className="absolute inset-0 z-0 bg-[#E8E8DE]" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Stop stressing. <span className="text-brand-perk bg-white/10 px-3 rounded-lg py-1 border border-white/10">Start celebrating.</span>
          </h2>
          <p className="text-xl text-white/70">
            Hosting shouldn't feel like a chore. Here is the difference we make.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-0 items-center">
          
          {/* DIY / Regular Hosting (Boring White Panel) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="solid-panel p-8 md:p-12 md:pr-16 relative z-10 md:rounded-r-none border-r-0"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500 font-bold">DIY</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-400">Regular Hosting</h3>
            </div>

            <ul className="space-y-6">
              {[
                "You buy the drinks & food.",
                "You clean the house before they arrive.",
                "You make the drinks while everyone parties.",
                "You clean the mess the next morning."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-gray-500 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Vibe House (Popping Dark Panel) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="solid-panel bg-brand rounded-[2.5rem] p-8 md:p-12 shadow-clean-xl border-2 border-brand-perk relative z-20 md:scale-110 origin-left"
          >
            {/* Absolute badge */}
            <div className="absolute -top-4 right-8 bg-brand-perk text-brand font-bold px-4 py-1.5 rounded-full text-sm shadow-clean transform rotate-3">
              The Smart Way
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-brand-perk flex items-center justify-center">
                <span className="text-brand font-bold text-xl">V</span>
              </div>
              <h3 className="text-3xl font-bold text-white">The Vibe House</h3>
            </div>

            <ul className="space-y-6">
              {[
                "We curate and deliver the exact vibe.",
                "We set up the entire space.",
                "We serve drinks and handle the food.",
                "You wake up to a spotless house."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-perk flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-brand" />
                  </div>
                  <span className="text-white font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
