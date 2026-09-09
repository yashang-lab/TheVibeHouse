"use client";

import { motion } from "framer-motion";
import Button from "../Button";
import Link from "next/link";
import { Sparkles, Utensils, Camera, Palette, ArrowRight, Cake, GlassWater } from "lucide-react";

const masterCategories = [
  {
    icon: Utensils,
    name: "Food & Live Counters",
    detail: "Buffets, live chaat & fresh mithai"
  },
  {
    icon: Palette,
    name: "Themed Decor",
    detail: "Shimmer walls, arches & 3D stages"
  },
  {
    icon: Cake,
    name: "Premium Cakes",
    detail: "Handcrafted 2-tier & truffle bakes"
  },
  {
    icon: GlassWater,
    name: "Live Activities",
    detail: "Club DJ, emcee host & mocktail bar"
  },
  {
    icon: Camera,
    name: "Photo & Video",
    detail: "Candid DSLR, 4K film & viral reels"
  }
];

export default function Packages() {
  return (
    <section id="pricing" className="py-24 relative transparent scroll-mt-24">
      {/* Anchor alias for packages */}
      <div id="packages" className="absolute -top-24 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full bg-brand-perk/10 border border-brand-perk/30 text-brand-perk font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(190,255,80,0.15)]"
          >
            Transparent Pricing & Custom Curation
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-4"
          >
            Create Your <span className="text-brand-perk drop-shadow-[0_0_25px_rgba(190,255,80,0.35)]">Own Party</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto font-medium"
          >
            Select food, theme, cakes, activities, and media à la carte with 100% price transparency. No forced packages.
          </motion.p>
        </div>

        {/* Hero A La Carte CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-gradient-to-br from-[#1F2614]/90 via-[#141414]/95 to-[#161616]/95 border-2 border-brand-perk/50 p-6 sm:p-10 lg:p-12 shadow-[0_0_50px_rgba(190,255,80,0.15)] relative overflow-hidden backdrop-blur-xl"
        >
          {/* Subtle glow orb */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-perk/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
              <div className="max-w-2xl">
                <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-brand-perk text-[#14140F] mb-3 shadow-md">
                  ✨ Custom À La Carte Experience
                </span>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-3">
                  Design Every Single Detail of Your Event
                </h3>
                <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed">
                  Pick exactly what you want across our 5 master categories. Mix authentic catering, royal stage decor, artisanal cakes, live entertainment, and cinematic media with real-time price calculation.
                </p>
              </div>

              <div className="shrink-0">
                <Link href="/create-your-party">
                  <Button size="lg" className="w-full sm:w-auto bg-brand-perk text-[#14140F] hover:bg-[#a6e546] font-black text-base sm:text-lg md:text-xl px-8 sm:px-10 py-5 rounded-2xl shadow-[0_0_35px_rgba(190,255,80,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-3 border-none">
                    CREATE YOUR OWN PARTY
                    <ArrowRight className="w-6 h-6" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* 5 Master Categories Visual Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-6 border-t border-white/10">
              {masterCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <Link 
                    key={idx} 
                    href="/create-your-party"
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-perk hover:bg-white/10 transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-perk/10 border border-brand-perk/20 flex items-center justify-center text-brand-perk mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-brand-perk transition-colors">
                      {cat.name}
                    </div>
                    <div className="text-xs text-white/60 mt-1 font-medium leading-relaxed hidden sm:block">
                      {cat.detail}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
