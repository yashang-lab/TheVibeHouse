"use client";

import { motion } from "framer-motion";

const reels = [
  { 
    id: "vibe", 
    title: "The Vibe Reel", 
    badge: "Party Highlights", 
    src: "/vibe-reel.mp4" 
  },
  { 
    id: "ramya", 
    title: "Ramya's Review", 
    badge: "Customer Story", 
    src: "/Testimonial - Ramya.mp4" 
  },
];

export default function Offerings() {
  return (
    <section id="services" className="pt-12 pb-24 relative transparent overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Centered & Enlarged Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white leading-tight">
            See what <br className="md:hidden" /><span className="text-[#14140F] bg-brand-perk px-4 rounded-xl py-2 inline-block mt-2 rotate-[-2deg] shadow-[0_0_30px_rgba(190,255,80,0.3)]">our customers say</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 drop-shadow-md font-medium">
            Real stories, unedited vibes, and unforgettable party moments.
          </p>
        </div>

        {/* 2 Reels Side-by-Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl relative h-[65vh] md:h-[75vh] bg-black group hover:border-brand-perk/40 transition-all duration-500"
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src={reel.src} type="video/mp4" />
              </video>

              {/* Ambient Gradients for Title Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 pointer-events-none" />

              {/* Top Badge */}
              <div className="absolute top-6 left-6 z-20">
                <span className="text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-brand-perk text-[#14140F] shadow-lg">
                  {reel.badge}
                </span>
              </div>

              {/* Bottom Title */}
              <div className="absolute bottom-8 left-6 right-6 z-20">
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-lg">
                  {reel.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
