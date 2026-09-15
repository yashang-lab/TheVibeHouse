"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Utensils, 
  Camera, 
  Palette, 
  ArrowRight, 
  Cake, 
  GlassWater, 
  MessageCircle, 
  CheckCircle2, 
  Star,
  Sparkles
} from "lucide-react";

// Configurable WhatsApp Contact Number (with country code, no + or spaces)
const WHATSAPP_NUMBER = "919876543210"; 

const getWhatsAppUrl = (topic?: string) => {
  const message = topic
    ? `Hi The Vibe House, I'd like to connect with your party planning expert to discuss ${topic} for my upcoming event!`
    : "Hi The Vibe House, I'd like to connect with a party planning expert to help plan my event with custom details!";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-perk/10 border border-brand-perk/30 text-brand-perk font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(190,255,80,0.15)]"
          >
            <Sparkles className="w-4 h-4 text-brand-perk" />
            VIP Concierge & Bespoke Curation
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-4"
          >
            Connect With Our <span className="text-brand-perk drop-shadow-[0_0_25px_rgba(190,255,80,0.35)]">Party Planning Expert</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto font-medium"
          >
            Skip the guesswork. Just like an enterprise concierge, our dedicated event specialists design, coordinate, and execute every minute detail of your celebration — tailored precisely to your taste, budget, and venue.
          </motion.p>
        </div>

        {/* Hero Bespoke Concierge Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-gradient-to-br from-[#1F2614]/90 via-[#141414]/95 to-[#161616]/95 border-2 border-brand-perk/50 p-6 sm:p-10 lg:p-12 shadow-[0_0_50px_rgba(190,255,80,0.15)] relative overflow-hidden backdrop-blur-xl"
        >
          {/* Subtle glow orb */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-perk/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
              
              {/* Left Column: Value Proposition & Direct WhatsApp Lead Gen */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-brand-perk text-[#14140F] mb-4 shadow-md">
                  <span>✨ 1-on-1 Bespoke Planning • Dedicated Specialist</span>
                </div>
                
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                  Design Every Single Detail of Your Event
                </h3>
                
                <p className="text-white/80 text-base sm:text-lg font-medium leading-relaxed mb-6">
                  Tell us your vision — from authentic live chaat stations and royal stage decor to club DJs, bespoke cakes, and cinematic 4K reels. Your personal expert curates every vendor, locks 100% transparent pricing, and manages flawless execution on-site.
                </p>

                {/* Trust Points */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-white/90 text-sm sm:text-base font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-perk shrink-0" />
                    <span>Custom menu curation & live chef tasting coordination</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90 text-sm sm:text-base font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-perk shrink-0" />
                    <span>Bespoke theme decor, 3D stage styling & venue inspection</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90 text-sm sm:text-base font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-perk shrink-0" />
                    <span>100% price lock guarantee — zero hidden costs or surprises</span>
                  </div>
                </div>

                {/* Primary WhatsApp CTA Button */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-brand-perk text-[#14140F] hover:bg-[#a6e546] font-black text-base sm:text-lg px-8 py-4.5 rounded-2xl shadow-[0_0_35px_rgba(190,255,80,0.4)] hover:scale-105 active:scale-95 transition-all group"
                  >
                    <MessageCircle className="w-6 h-6 fill-current" />
                    <span>CHAT WITH OUR PARTY EXPERT</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <div className="flex items-center gap-2 text-xs text-white/60 font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span>Average reply time: &lt; 5 mins</span>
                  </div>
                </div>

                <div className="mt-3 text-xs text-white/40">
                  Zero consultation fee • Direct 1-on-1 WhatsApp connection
                </div>
              </div>

              {/* Right Column: Representative Portrait */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm">
                  
                  {/* Decorative Frame Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-brand-perk/30 via-brand-perk/10 to-brand-orange/20 rounded-[2.5rem] blur-xl opacity-75" />
                  
                  {/* Portrait Card */}
                  <div className="relative rounded-[2.2rem] overflow-hidden border-2 border-brand-perk/40 bg-black/60 shadow-2xl">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src="/party-planner.jpg"
                        alt="The Vibe House Party Planning Expert"
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-700"
                        priority
                      />
                      
                      {/* Gradient scrim for text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      
                      {/* Top VIP Badge */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg">
                          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                          <span>Senior Event Specialist</span>
                        </div>
                        <div className="px-3 py-1.5 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/40 text-green-300 font-bold text-xs flex items-center gap-1.5 shadow-lg">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                          <span>Available</span>
                        </div>
                      </div>

                      {/* Bottom Profile Details Card */}
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/15 shadow-2xl">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-white font-bold text-base sm:text-lg tracking-tight">
                            Pooja Sharma
                          </div>
                          <div className="flex items-center gap-1 text-brand-perk text-xs font-bold">
                            <span>4.9</span>
                            <Star className="w-3.5 h-3.5 fill-current" />
                          </div>
                        </div>
                        
                        <div className="text-white/70 text-xs font-medium mb-3">
                          Head of Bespoke Event Curation • Bangalore
                        </div>

                        <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                          <span>350+ Celebrations Hosted</span>
                          <span className="text-brand-perk font-semibold">100% Satisfaction</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* 5 Master Categories Coordinated by the Expert */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    What Our Specialist Coordinates For You
                  </h4>
                  <p className="text-xs sm:text-sm text-white/60">
                    Click any master category to ask our expert about menus, options, and live quotes.
                  </p>
                </div>
                <div className="text-xs text-brand-perk font-bold uppercase tracking-wider flex items-center gap-1">
                  <span>Direct WhatsApp Inquiries</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {masterCategories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <a 
                      key={idx} 
                      href={getWhatsAppUrl(cat.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-perk hover:bg-white/10 transition-all group cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-brand-perk/10 border border-brand-perk/20 flex items-center justify-center text-brand-perk mb-3 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-brand-perk transition-colors">
                          {cat.name}
                        </div>
                        <div className="text-xs text-white/60 mt-1 font-medium leading-relaxed hidden sm:block">
                          {cat.detail}
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-white/5 text-[11px] font-bold text-brand-perk opacity-80 group-hover:opacity-100 flex items-center gap-1">
                        <span>Ask Expert</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
