"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldCheck, Sparkles, Clock, DollarSign, Award, Utensils, Brush, Smile } from "lucide-react";
import HostProblemsBackground from "./HostProblemsBackground";

const comparisonData = [
  {
    feature: "End-to-End Execution",
    diy: "You juggle 5+ vendors (food, drinks, decor, cleanup)",
    vibe: "Single point of contact handles everything seamless"
  },
  {
    feature: "Food Freshness & Quality",
    diy: "Cold delivery app food or costly static buffet setups",
    vibe: "Live chefs & hot gourmet Vibe Boxes made fresh"
  },
  {
    feature: "Party Staging & Vibe Decor",
    diy: "Basic DIY balloons or generic, expensive decorators",
    vibe: "Curated aesthetic theme decor & mood staging"
  },
  {
    feature: "Hosting Stress & Bartending",
    diy: "You spend all night mixing drinks & serving guests",
    vibe: "Professional bartenders & waitstaff serve your guests"
  },
  {
    feature: "Post-Party Cleanup",
    diy: "You wake up to a messy house & dirty dishes next morning",
    vibe: "Spotless post-event cleanup included standard"
  },
  {
    feature: "Pricing Transparency",
    diy: "Hidden service charges, surge pricing, extra fees",
    vibe: "Clear, transparent 3-tier packages with zero hidden costs"
  }
];

const keyHighlights = [
  {
    icon: Clock,
    title: "Save 10+ Hours of Planning",
    desc: "From menu selection to decor installation and post-party cleanup, we take care of every single detail."
  },
  {
    icon: Award,
    title: "Gourmet Live Dining",
    desc: "Pass-around appetizers, live stations, and freshly prepared food that your guests will rave about."
  },
  {
    icon: ShieldCheck,
    title: "100% Guaranteed Reliability",
    desc: "Over 500+ successful events across Bangalore homes & offices with zero no-shows."
  },
  {
    icon: Sparkles,
    title: "Instagram-Worthy Aesthetics",
    desc: "Custom neon signs, ambient lighting, and backdrop styling designed to make your party look incredible."
  }
];

export default function ValueComparison() {
  return (
    <section id="why-us" className="py-24 relative transparent overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0 bg-[#E8E8DE]" />
      <HostProblemsBackground />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#14140F]/10 text-[#14140F] font-bold text-xs mb-4 uppercase tracking-widest border border-[#14140F]/20 backdrop-blur-sm">
            THE VIBE HOUSE ADVANTAGE
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-[#14140F] leading-tight">
            Why Us: <span className="text-brand-perk bg-[#14140F] px-4 rounded-xl py-1.5 inline-block shadow-lg">The Difference</span>
          </h2>
          <p className="text-lg md:text-xl text-[#14140F]/80 font-semibold leading-relaxed">
            Here is why 500+ hosts choose The Vibe House over traditional catering & DIY stress.
          </p>
        </div>

        {/* Feature Comparison Table Card */}
        <div className="bg-[#14140F] rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-white/10 mb-16 relative overflow-hidden">
          
          {/* Subtle Glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-perk/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 pb-6 border-b border-white/10 text-xs md:text-sm font-black uppercase tracking-wider">
            <div className="col-span-4 text-white/50">Feature</div>
            <div className="col-span-4 text-red-400/90 text-center sm:text-left flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 hidden sm:inline-block"></span>
              Regular / DIY
            </div>
            <div className="col-span-4 text-brand-perk text-center sm:text-left flex items-center gap-1.5">
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
                transition={{ delay: index * 0.08 }}
                className="grid grid-cols-12 gap-4 py-5 items-center hover:bg-white/[0.02] transition-colors rounded-xl px-2"
              >
                {/* Feature Name */}
                <div className="col-span-4 font-bold text-white text-xs md:text-base leading-snug">
                  {row.feature}
                </div>

                {/* Regular / DIY */}
                <div className="col-span-4 flex items-start gap-2 text-xs md:text-sm text-white/60 font-medium leading-relaxed bg-red-500/5 p-2.5 rounded-xl border border-red-500/10">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{row.diy}</span>
                </div>

                {/* The Vibe House */}
                <div className="col-span-4 flex items-start gap-2 text-xs md:text-sm text-white font-semibold leading-relaxed bg-brand-perk/10 p-2.5 rounded-xl border border-brand-perk/30 shadow-[0_0_15px_rgba(190,255,80,0.1)]">
                  <Check className="w-4 h-4 text-brand-perk shrink-0 mt-0.5" />
                  <span className="text-white/95">{row.vibe}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* 4 Core Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-[#14140F]/10 shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#14140F] flex items-center justify-center text-brand-perk mb-5 shadow-md">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#14140F] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#14140F]/70 text-sm font-medium leading-relaxed">
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
