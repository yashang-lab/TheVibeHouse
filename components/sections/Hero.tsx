"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "../Button";

const occasions = [
  { id: "house", label: "House Party 🎉" },
  { id: "birthday", label: "Birthday 🎂" },
  { id: "corporate", label: "Corporate Event 💼" },
];

export default function Hero() {
  const [activeOccasion, setActiveOccasion] = useState("house");

  return (
    <section className="relative pt-32 pb-32 overflow-hidden transparent">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        
        {/* Main Content Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12 relative z-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-sm mb-6 uppercase tracking-widest border border-white/10 shadow-sm backdrop-blur-sm">
            Stop Stressing. Start Celebrating.
          </div>
          
          {/* New Promoted H1 */}
          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black text-white leading-[1.05] mb-6 tracking-tight drop-shadow-xl">
            Party tumhari.<br/>
            <span className="text-brand-perk">Tension hamari.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto font-medium drop-shadow-md">
            Enjoy your own party. Food, decor, staff, and cleanup—delivered seamlessly.
          </p>
          
          {/* CTAs Rebalanced */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {/* Primary CTA */}
            <Button size="lg" className="w-full sm:w-auto font-bold px-10 bg-brand-perk text-[#14140F] hover:bg-[#a6e546] border-none shadow-[0_0_30px_rgba(190,255,80,0.3)]">
              Book an Event
            </Button>
            {/* Secondary CTA downgraded */}
            <Button variant="outline" size="lg" className="w-full sm:w-auto font-bold px-10 text-white border-white/20 hover:bg-white/10 backdrop-blur-sm">
              Download App
            </Button>
          </div>

          {/* Occasion Chip Selector */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {occasions.map((occ) => (
              <button
                key={occ.id}
                onClick={() => setActiveOccasion(occ.id)}
                className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 border backdrop-blur-md ${
                  activeOccasion === occ.id
                    ? "bg-white text-[#14140F] border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {occ.label}
              </button>
            ))}
          </div>

          {/* Credibility Strip */}
          <div className="pt-8 border-t border-white/10 max-w-lg mx-auto">
            <p className="text-sm md:text-base font-semibold text-white/60 tracking-wide uppercase">
              Trusted for <span className="text-white">500+ events</span> across homes & offices
            </p>
          </div>
        </motion.div>

        {/* Floating High-Quality 3D Elements (Anchored center) */}
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
          {[
            // Left Side
            { src: "/3d-elements/hamburger_3d.png", x: -550, y: -150, delay: 0.5, rotate: -15, scale: 1.2, size: 160 },
            { src: "/3d-elements/clinking_glasses_3d.png", x: -650, y: 100, delay: 0.7, rotate: -5, scale: 1.2, size: 150 },
            { src: "/3d-elements/party_popper_3d.png", x: -450, y: 280, delay: 0.65, rotate: -20, scale: 1.2, size: 160 },
            { src: "/3d-elements/french_fries_3d.png", x: -850, y: -40, delay: 0.8, rotate: -10, scale: 1.1, size: 140 },
            { src: "/3d-elements/doughnut_3d.png", x: -800, y: 220, delay: 0.85, rotate: 15, scale: 1.3, size: 150 },
            
            // Right Side
            { src: "/3d-elements/birthday_cake_3d.png", x: 550, y: -140, delay: 0.6, rotate: 10, scale: 1.3, size: 180 },
            { src: "/3d-elements/balloon_3d.png", x: 650, y: 80, delay: 0.55, rotate: 15, scale: 1.3, size: 170 },
            { src: "/3d-elements/pizza_3d.png", x: 500, y: 280, delay: 0.75, rotate: 25, scale: 1.3, size: 160 },
            { src: "/3d-elements/confetti_ball_3d.png", x: 850, y: -60, delay: 0.9, rotate: -10, scale: 1.4, size: 150 },
            { src: "/3d-elements/hot_dog_3d.png", x: 800, y: 200, delay: 0.95, rotate: -15, scale: 1.2, size: 160 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="hidden lg:block absolute top-1/2 left-1/2 drop-shadow-2xl z-0 pointer-events-none"
              style={{ originX: 0.5, originY: 0.5, width: item.size, height: item.size }}
              initial={{ x: "-50%", y: "-50%", scale: 0.1, rotate: 0, opacity: 0 }}
              animate={{ 
                x: `calc(-50% + ${item.x}px)`, 
                y: `calc(-50% + ${item.y}px)`, 
                scale: item.scale,
                rotate: item.rotate,
                opacity: 1
              }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 14, 
                delay: item.delay,
                opacity: { duration: 0.6, ease: "easeOut", delay: item.delay }
              }}
            >
              <img src={item.src} alt="" className="w-full h-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Scrolling Marquee to fill the gap */}
      <div className="w-full relative z-20 mt-20 md:mt-32 py-6 border-y border-white/5 bg-black/20 flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* We repeat the phrase set twice so it loops seamlessly */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center">
              <span className="text-white/30 font-bold uppercase tracking-[0.2em] text-sm">✦ Premium Food</span>
              <span className="text-white/30 font-bold uppercase tracking-[0.2em] text-sm">✦ Immersive Decor</span>
              <span className="text-white/30 font-bold uppercase tracking-[0.2em] text-sm">✦ VIP Bartenders</span>
              <span className="text-white/30 font-bold uppercase tracking-[0.2em] text-sm">✦ Seamless Execution</span>
              <span className="text-white/30 font-bold uppercase tracking-[0.2em] text-sm">✦ End-To-End Management</span>
              <span className="text-white/30 font-bold uppercase tracking-[0.2em] text-sm">✦ Curated Playlists</span>
              <span className="text-white/30 font-bold uppercase tracking-[0.2em] text-sm">✦ Custom Cakes</span>
              <span className="text-white/30 font-bold uppercase tracking-[0.2em] text-sm">✦ Unforgettable Vibes</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
