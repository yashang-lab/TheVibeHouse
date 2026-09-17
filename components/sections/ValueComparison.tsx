"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldCheck, Sparkles, Clock, Award } from "lucide-react";

const comparisonData = [
  {
    feature: "Vendor Coordination",
    diy: "Juggling 5+ separate vendors (caterer, tent house, DJ, baker, cleaner) with endless calls & delay stress.",
    vibe: "1 Dedicated Event Manager handles everything from arrival to pack-up. Zero coordination headaches."
  },
  {
    feature: "Food Taste & Freshness",
    diy: "Cold delivery app containers or static catering trays sitting cold for hours.",
    vibe: "Live chef cooking stations, authentic hot brass chafing buffets & sizzling Delhi street chaat."
  },
  {
    feature: "Party Staging & Decor",
    diy: "Cheap flimsy balloons taped to walls that deflate, tangled wires, and dull lighting.",
    vibe: "Bespoke 3D themed backdrops, gold sequin shimmer walls, neon signs & ambient photo lighting."
  },
  {
    feature: "Entertainment & Energy",
    diy: "Awkward silences, fighting over the AUX cable, or muffled Bluetooth speakers.",
    vibe: "High-watt club party DJ, energetic interactive games emcee & craft flair mocktail bar."
  },
  {
    feature: "Post-Party Cleanup",
    diy: "Exhausting 1 AM garbage clearing, spilled drinks, and waking up to dirty dishes.",
    vibe: "Spotless post-event cleanup included standard. You enjoy the night, we handle the mess."
  },
  {
    feature: "Price Transparency",
    diy: "Hidden service charges, surprise overtime fees, and unexpected vendor markups.",
    vibe: "100% transparent itemized à la carte pricing with real-time tally and zero hidden fees."
  }
];

const keyHighlights = [
  {
    icon: Clock,
    title: "Save 15+ Hours of Planning",
    desc: "From theme styling to live counters and cleanup, our Bangalore team executes the complete experience so you can truly enjoy your party."
  },
  {
    icon: Award,
    title: "Live Gourmet Dining",
    desc: "Sizzling live street chaat, slow-cooked royal curries in warm brass chafing dishes, and artisanal fresh mithai that guests rave about."
  },
  {
    icon: ShieldCheck,
    title: "500+ Events & 100% Reliability",
    desc: "Bangalore's trusted home & venue party partner with verified on-time arrival guarantee and zero vendor no-shows."
  },
  {
    icon: Sparkles,
    title: "Instagram-Worthy Aesthetic",
    desc: "Golden shimmer walls, customized neon typography, curated photo corners, and viral reel coverage built for social media."
  }
];

export default function ValueComparison() {
  return (
    <section id="why-us" className="py-16 sm:py-24 relative transparent overflow-hidden scroll-mt-24">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-perk/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-brand-perk/10 border border-brand-perk/30 text-brand-perk font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(190,255,80,0.15)]"
          >
            THE VIBE HOUSE ADVANTAGE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight text-white leading-[1.1]"
          >
            Why Us: <span className="text-brand-perk drop-shadow-[0_0_25px_rgba(190,255,80,0.35)]">The Difference</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/75 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Here is why 500+ hosts choose The Vibe House over traditional catering & DIY stress.
          </motion.p>
        </div>

        {/* ============================================================ */}
        {/* MOBILE VIEW (< md): Vertical Stacked Cards (Optimized for iPhone) */}
        {/* ============================================================ */}
        <div className="block md:hidden space-y-4 mb-14">
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gradient-to-b from-[#181816] to-[#121210] rounded-3xl p-5 border border-white/10 shadow-xl"
            >
              {/* Feature Title */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-brand-perk shadow-[0_0_8px_#BEFF50]" />
                <h3 className="font-extrabold text-white text-base sm:text-lg tracking-tight">
                  {row.feature}
                </h3>
              </div>

              {/* The Vibe House (Prominent & First) */}
              <div className="bg-brand-perk/10 border border-brand-perk/30 rounded-2xl p-4 mb-3 shadow-[0_0_25px_rgba(190,255,80,0.08)]">
                <div className="flex items-center gap-1.5 text-brand-perk text-xs font-black uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Vibe House</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-perk/20 flex items-center justify-center shrink-0 mt-0.5 border border-brand-perk/40">
                    <Check className="w-3.5 h-3.5 text-brand-perk stroke-[3]" />
                  </div>
                  <p className="text-white text-sm font-semibold leading-relaxed">
                    {row.vibe}
                  </p>
                </div>
              </div>

              {/* Regular / DIY (Contrast Below) */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-3.5">
                <div className="flex items-center gap-1.5 text-red-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                  <span>Regular / DIY</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/30">
                    <X className="w-3.5 h-3.5 text-red-400 stroke-[2.5]" />
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm font-medium leading-relaxed">
                    {row.diy}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ============================================================ */}
        {/* DESKTOP VIEW (>= md): Full 3-Column Comparison Table          */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block bg-gradient-to-b from-[#161614]/90 via-[#131311]/95 to-[#111110]/95 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 mb-16 relative overflow-hidden"
        >
          {/* Subtle Corner Glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-perk/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-6 pb-6 border-b border-white/10 text-sm font-black uppercase tracking-wider">
            <div className="col-span-4 text-white/50">Feature</div>
            <div className="col-span-4 text-red-400 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse inline-block" />
              Regular / DIY
            </div>
            <div className="col-span-4 text-brand-perk flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-perk" />
              The Vibe House
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-white/5">
            {comparisonData.map((row, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-12 gap-6 py-5 items-center hover:bg-white/[0.02] transition-colors rounded-2xl px-2"
              >
                {/* Feature Name */}
                <div className="col-span-4 font-bold text-white text-base leading-snug">
                  {row.feature}
                </div>

                {/* Regular / DIY */}
                <div className="col-span-4 flex items-start gap-2.5 text-sm text-white/70 font-medium leading-relaxed bg-red-500/10 p-4 rounded-2xl border border-red-500/20">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{row.diy}</span>
                </div>

                {/* The Vibe House */}
                <div className="col-span-4 flex items-start gap-2.5 text-sm text-white font-semibold leading-relaxed bg-brand-perk/10 p-4 rounded-2xl border border-brand-perk/30 shadow-[0_0_20px_rgba(190,255,80,0.12)]">
                  <Check className="w-4 h-4 text-brand-perk shrink-0 mt-0.5 stroke-[2.5]" />
                  <span className="text-white/95">{row.vibe}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4 Core Value Cards Grid - Dark Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {keyHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-[#141412]/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/10 hover:border-brand-perk/40 shadow-xl hover:shadow-[0_0_30px_rgba(190,255,80,0.15)] transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-perk/10 border border-brand-perk/25 flex items-center justify-center text-brand-perk mb-4 sm:mb-5 shadow-md">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-white mb-2 sm:mb-2.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-base font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
