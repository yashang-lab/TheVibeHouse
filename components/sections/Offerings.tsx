"use client";

import { motion } from "framer-motion";

export default function Offerings() {
  return (
    <section id="services" className="pt-12 pb-24 relative transparent overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* 2 Reels Side-by-Side Grid with Dedicated Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Vibe Box Reel */}
          <div className="flex flex-col gap-4">
            <div className="min-h-[90px] flex flex-col justify-end mb-2">
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase">
                THE VIBE BOX
              </h2>
              <div className="mt-2">
                <span className="text-[#14140F] bg-brand-perk px-3.5 py-1.5 rounded-xl font-bold text-sm md:text-base inline-block rotate-[-1deg] shadow-[0_0_20px_rgba(190,255,80,0.3)]">
                  Engineered to Keep Every Bite Perfect.
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl relative h-[65vh] md:h-[75vh] bg-black group hover:border-brand-perk/40 transition-all duration-500"
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/vibe-reel.mp4" type="video/mp4" />
              </video>

              {/* Ambient Gradients for Title Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 pointer-events-none" />

              {/* Top Badge */}
              <div className="absolute top-6 left-6 z-20">
                <span className="text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-brand-perk text-[#14140F] shadow-lg">
                  Party Highlights
                </span>
              </div>

              {/* Bottom Title */}
              <div className="absolute bottom-8 left-6 right-6 z-20">
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-lg">
                  The Vibe Reel
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Customer Story / Ramya's Review Reel */}
          <div className="flex flex-col gap-4">
            <div className="min-h-[90px] flex flex-col justify-end mb-2">
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                See what our customers say
              </h2>
              <div className="mt-2">
                <span className="text-[#14140F] bg-brand-perk px-3.5 py-1.5 rounded-xl font-bold text-sm md:text-base inline-block rotate-[1deg] shadow-[0_0_20px_rgba(190,255,80,0.3)]">
                  Hosts Are Obsessed.
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl relative h-[65vh] md:h-[75vh] bg-black group hover:border-brand-perk/40 transition-all duration-500"
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/Testimonial - Ramya.mp4" type="video/mp4" />
              </video>

              {/* Ambient Gradients for Title Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 pointer-events-none" />

              {/* Top Badge */}
              <div className="absolute top-6 left-6 z-20">
                <span className="text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-brand-perk text-[#14140F] shadow-lg">
                  Customer Story
                </span>
              </div>

              {/* Bottom Title */}
              <div className="absolute bottom-8 left-6 right-6 z-20">
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-lg">
                  Ramya's Review
                </h3>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
