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

        {/* Clean, Uncluttered Connect Section with Representative */}
        <motion.div
          initial={{ opacity: 0.01, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative pt-4 sm:pt-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
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

            {/* Right Column: Clean Cutout Popping Out Through Rectangle Element */}
            <div className="lg:col-span-5 flex justify-center items-end pt-10 sm:pt-14">
              <div className="relative w-full max-w-[340px] flex flex-col items-center">
                
                {/* Glow Behind the Card */}
                <div className="absolute inset-x-4 bottom-2 top-16 bg-brand-perk/20 rounded-[2.5rem] blur-2xl pointer-events-none" />
                
                {/* The Background Rectangle Element (Arch/Pedestal Frame) */}
                <div className="absolute inset-x-0 bottom-0 top-14 rounded-[2.2rem] bg-gradient-to-b from-[#222E14]/80 via-[#181818]/90 to-[#121212]/95 border-2 border-brand-perk/40 shadow-2xl backdrop-blur-xl overflow-hidden">
                  {/* Subtle Grid / Texture inside rectangle */}
                  <div className="absolute inset-0 bg-[radial-gradient(#BEFF50_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                  <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* The Cutout Woman Popping Out Beyond the Rectangle Top */}
                <div className="relative z-10 w-full h-[400px] sm:h-[440px] flex items-end justify-center pointer-events-none">
                  <Image
                    src="/expert-cutout.png"
                    alt="The Vibe House Expert"
                    width={310}
                    height={550}
                    className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>

                {/* Bottom Glass Card Overlay (Cleanly Placed at Bottom, Never Covering Face) */}
                <div className="relative z-20 -mt-6 mb-3 w-[92%] p-3.5 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/15 text-center shadow-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-perk/30 text-xs font-bold text-brand-perk mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span>The Vibe House Expert</span>
                  </div>
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
        </motion.div>

      </div>
    </section>
  );
}
