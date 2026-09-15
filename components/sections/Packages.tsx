"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ArrowRight, 
  MessageCircle, 
  Utensils, 
  Palette, 
  Cake, 
  GlassWater, 
  Camera,
  ClipboardList,
  UserCheck,
  PartyPopper
} from "lucide-react";

// Configurable WhatsApp Contact Number
const WHATSAPP_NUMBER = "919876543210"; 

const getWhatsAppUrl = (topic?: string) => {
  const message = topic
    ? `Hi The Vibe House, I'd like to connect with your party planning expert to discuss ${topic} for my upcoming event!`
    : "Hi The Vibe House, I want to share my party requirements so you can help me curate the best experience!";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const steps = [
  {
    step: "STEP 1",
    icon: ClipboardList,
    title: "Tell us your requirement",
    desc: "Share your date, guest count, and what you need for the party."
  },
  {
    step: "STEP 2",
    icon: UserCheck,
    title: "Connect with our expert",
    desc: "We will connect with you on priority soon to curate every detail."
  },
  {
    step: "STEP 3",
    icon: PartyPopper,
    title: "Sit back and relax",
    desc: "Our team handles setup and coordination on-site so you enjoy."
  }
];

const masterCategories = [
  { icon: Utensils, name: "Food & Counters" },
  { icon: Palette, name: "Themed Decor" },
  { icon: Cake, name: "Custom Cakes" },
  { icon: GlassWater, name: "Live Activities" },
  { icon: Camera, name: "Photo & Video" }
];

export default function Packages() {
  return (
    <section id="pricing" className="pt-36 sm:pt-44 pb-20 relative transparent scroll-mt-32">
      {/* Anchor alias */}
      <div id="packages" className="absolute -top-32 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header: Minimal & Clear */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0.01, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-perk/10 border border-brand-perk/30 text-brand-perk font-bold text-xs uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(190,255,80,0.15)]"
          >
            How It Works
          </motion.div>

          <motion.h2
            initial={{ opacity: 0.01, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4"
          >
            In <span className="text-brand-perk drop-shadow-[0_0_25px_rgba(190,255,80,0.35)]">Simple Steps</span> Plan Your Event
          </motion.h2>

          <motion.p
            initial={{ opacity: 0.01, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-white/80 font-medium"
          >
            Tell us your requirement and we will curate the best experience possible.
          </motion.p>
        </div>

        {/* 3 Simple Steps Cards (Inspired by Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0.01, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative rounded-3xl bg-white/[0.04] border border-white/10 hover:border-brand-perk/40 p-7 backdrop-blur-md transition-all group overflow-hidden"
              >
                {/* Large Background Watermark Number */}
                <div className="absolute -top-3 -right-2 text-7xl font-black text-white/[0.04] group-hover:text-brand-perk/[0.08] select-none transition-colors pointer-events-none">
                  {idx + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-full text-xs font-black tracking-wider bg-brand-perk text-[#14140F]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-perk group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clean, Uncluttered Connect Card with Representative */}
        <motion.div
          initial={{ opacity: 0.01, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[2.5rem] bg-gradient-to-br from-[#1A2210]/90 via-[#141414]/95 to-[#161616]/95 border border-brand-perk/40 p-6 sm:p-10 lg:p-12 shadow-[0_0_40px_rgba(190,255,80,0.12)] relative overflow-hidden backdrop-blur-xl"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-perk/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Direct CTA & Clean Copy */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-3">
                Connect With Our Party Expert
              </h3>
              
              <p className="text-white/80 text-base sm:text-lg font-medium leading-relaxed mb-6">
                Tell us your requirement and we will curate the best experience possible. From food counters and theme decor to music and photography, we handle it all.
              </p>

              {/* Category Quick Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {masterCategories.map((cat, idx) => (
                  <a
                    key={idx}
                    href={getWhatsAppUrl(cat.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-brand-perk/40 text-white/80 hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5"
                  >
                    <span>{cat.name}</span>
                  </a>
                ))}
              </div>

              {/* Primary Action Button */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-brand-perk text-[#14140F] hover:bg-[#a6e546] font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(190,255,80,0.35)] hover:scale-105 active:scale-95 transition-all group"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>CHAT ON WHATSAPP</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/70 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>We will connect with you on priority soon</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Representative Image (No Name, No Ratings) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px]">
                
                {/* Glow Border Effect */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-perk/30 to-brand-perk/10 rounded-[2rem] blur-lg opacity-70" />
                
                {/* Photo Frame */}
                <div className="relative rounded-[1.8rem] overflow-hidden border border-brand-perk/30 bg-black/60 shadow-2xl">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src="/party-planner.jpg"
                      alt="The Vibe House Expert"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                    
                    {/* Soft gradient bottom overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Top Pill: Simple Available Status */}
                    <div className="absolute top-4 left-4">
                      <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-bold text-xs flex items-center gap-2 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                        <span>The Vibe House Expert</span>
                      </div>
                    </div>

                    {/* Bottom Pill: Simple Helper Tag (No Name, No Ratings) */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/15 text-center shadow-xl">
                      <div className="text-white font-bold text-sm tracking-tight">
                        Here to help curate your event
                      </div>
                      <div className="text-white/60 text-xs mt-0.5">
                        Direct 1-on-1 assistance
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
