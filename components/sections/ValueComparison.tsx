"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import HostProblemsBackground from "./HostProblemsBackground";

export default function ValueComparison() {
  return (
    <section className="py-24 relative transparent overflow-hidden">
      {/* Background accents just for this section to pop more */}
      <div className="absolute inset-0 z-0 bg-[#E8E8DE]" />
      <HostProblemsBackground />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-[#14140F]">
            Stop stressing. <span className="text-brand-perk bg-[#14140F] px-4 rounded-xl py-2 inline-block mt-2 shadow-[0_0_20px_rgba(20,20,15,0.2)]">Start celebrating.</span>
          </h2>
          <p className="text-xl text-[#14140F]/70 font-medium">
            Hosting shouldn't feel like a chore. Here is the difference we make.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-0 items-center">
          
          {/* DIY / Regular Hosting (Boring White Panel) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="solid-panel p-8 md:p-12 md:pr-16 relative z-10 md:rounded-r-none border-r-0 border-[#14140F]/10 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500 font-bold">DIY</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-700">Regular Hosting</h3>
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
                  <span className="text-gray-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Vibe House (Popping Dark Panel) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#14140F] rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-brand-perk/30 relative z-20 md:scale-110 origin-left"
          >
            {/* Absolute badge */}
            <div className="absolute -top-4 right-8 bg-brand-perk text-[#14140F] font-black px-5 py-2 rounded-full text-sm shadow-[0_10px_20px_rgba(190,255,80,0.3)] transform rotate-3">
              The Smart Way
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-brand-perk flex items-center justify-center shadow-lg">
                <span className="text-[#14140F] font-black text-xl">V</span>
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">The Vibe House</h3>
            </div>

            <ul className="space-y-6">
              {[
                "We curate and deliver the exact vibe.",
                "We set up the entire space.",
                "We serve drinks and handle the food.",
                "You wake up to a spotless house."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-brand-perk/20 border border-brand-perk/50 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(190,255,80,0.2)]">
                    <Check className="w-4 h-4 text-brand-perk" />
                  </div>
                  <span className="text-white/90 font-medium text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
