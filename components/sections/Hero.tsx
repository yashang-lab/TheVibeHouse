"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "../Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const carouselImages = [
  { src: "/hero-carousel/catering.jpg", alt: "Live Party Catering with The Vibe House Staff" },
  { src: "/hero-carousel/aviator-stage.jpg", alt: "Aviator Theme Birthday Backdrop & Stage Decor" },
  { src: "/hero-carousel/cake.jpg", alt: "Custom Fairytale Castle Birthday Cake" },
  { src: "/hero-carousel/celebration.jpg", alt: "Family Birthday Celebration with Cake Cutting" },
  { src: "/hero-carousel/stage-decor.jpg", alt: "Theme Birthday Backdrop & Stage Decor" },
  { src: "/hero-carousel/animal-train-cake.jpg", alt: "Animal Train & Airplane Themed First Birthday Cake" },
];

export default function Hero() {

  return (
    <section className="relative pt-36 sm:pt-40 md:pt-44 pb-24 sm:pb-32 overflow-hidden transparent">

      {/* Horizontal Background Photo Carousel (Starting directly behind 'Party tumhari', Sliding Left-to-Right Behind Text) */}
      <div 
        className="absolute top-[250px] sm:top-[270px] md:top-[285px] bottom-16 md:bottom-20 inset-x-0 overflow-hidden pointer-events-none z-0 flex items-start"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
        }}
      >
        <motion.div
          className="flex gap-6 md:gap-8 shrink-0"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 56,
          }}
        >
          {[...carouselImages, ...carouselImages].map((item, idx) => (
            <div
              key={idx}
              className="relative w-[280px] sm:w-[360px] md:w-[410px] lg:w-[450px] h-[520px] sm:h-[660px] md:h-[720px] lg:h-[760px] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-[#141414] shrink-0"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
              {/* Cinematic dark vignette overlay to keep foreground text 100% legible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/55 pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
        
        {/* Main Content Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-10 sm:mb-12 relative z-20"
        >
          {/* Subtle ambient back-glow for crisp text contrast against moving photos */}
          <div className="absolute -inset-6 sm:-inset-10 bg-black/50 rounded-[3rem] blur-3xl -z-10 pointer-events-none" />
          {/* Top Section: India's Leading End-To-End Solution */}
          <div className="mb-6 sm:mb-10">
            <p className="text-xs sm:text-base md:text-xl font-black text-white/90 mb-3 sm:mb-5 tracking-widest uppercase">
              <span className="text-xl sm:text-3xl md:text-5xl font-black text-brand-perk tracking-wider inline-block mr-1">INDIA&apos;S</span> LEADING END-TO-END SOLUTION FOR:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className="px-3.5 py-1.5 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base text-white/90 bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                House Parties 🎉
              </span>
              <span className="px-3.5 py-1.5 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base text-white/90 bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                Birthdays 🎂
              </span>
              <span className="px-3.5 py-1.5 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base text-white/90 bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                Corporate Events 💼
              </span>
              <span className="px-3.5 py-1.5 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base text-white/70 bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
                and more... ✨
              </span>
            </div>
          </div>
          
          {/* New Promoted H1 */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black text-white leading-[1.08] mb-5 sm:mb-6 tracking-tight drop-shadow-xl">
            Party tumhari.<br/>
            <span className="text-brand-perk">Tension humari.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-2xl text-white/80 mb-8 sm:mb-10 max-w-3xl mx-auto font-medium drop-shadow-md px-2">
            Enjoy your own party. Food, decor, staff, and cleanup—delivered seamlessly.
          </p>
          
          {/* CTAs Rebalanced */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Primary CTA */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto font-bold px-10 bg-brand-perk text-[#14140F] hover:bg-[#a6e546] border-none shadow-[0_0_30px_rgba(190,255,80,0.3)] cursor-pointer">
                Book an Event
              </Button>
            </a>
            {/* Secondary CTA downgraded */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.localzi.nxtmeal&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto font-bold px-10 text-white border-white/20 hover:bg-white/10 backdrop-blur-sm">
                Download App
              </Button>
            </a>
          </div>

          {/* Swapped Stop Stressing Pill Badge */}
          <div className="mb-12">
            <div className="inline-block px-6 py-2 rounded-full bg-white/10 text-white font-bold text-xs md:text-sm uppercase tracking-widest border border-white/15 shadow-sm backdrop-blur-sm">
              Stop Stressing. Start Celebrating.
            </div>
          </div>

          {/* Credibility Strip */}
          <div className="pt-8 border-t border-white/10 max-w-2xl mx-auto flex items-center justify-center">
            <div className="flex items-center gap-4 sm:gap-6 bg-black/40 backdrop-blur-md px-6 sm:px-8 py-3.5 sm:py-4 rounded-3xl border border-white/15 shadow-2xl hover:border-brand-perk/40 transition-colors">
              <span className="text-4xl sm:text-6xl font-black text-brand-perk tracking-tight drop-shadow-[0_0_25px_rgba(190,255,80,0.5)] leading-none">
                500+
              </span>
              <div className="text-left">
                <div className="text-sm sm:text-lg font-black text-white uppercase tracking-wider leading-tight">
                  Successful Events
                </div>
                <div className="text-xs sm:text-sm text-white/70 font-semibold tracking-wide mt-0.5">
                  Trusted across Homes & Offices
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
              <span className="text-white/30 font-bold uppercase tracking-[0.2em] text-sm">✦ Live Chefs</span>
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
