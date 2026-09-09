"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "../Button";

const carouselImages = [
  { src: "/hero-carousel/catering.jpg", alt: "Live Party Catering with The Vibe House Staff" },
  { src: "/hero-carousel/stage-decor.jpg", alt: "Theme Birthday Backdrop & Stage Decor" },
  { src: "/hero-carousel/cake.jpg", alt: "Custom Themed Two-Tier Birthday Cake" },
  { src: "/hero-carousel/celebration.jpg", alt: "Family Birthday Celebration with Cake Cutting" },
];

const headerLeftElements = [
  { src: "/3d-elements/french_fries_3d.png", name: "Fries", rotate: -12, size: 52, delay: 0.1, hideOn: "block" },
  { src: "/3d-elements/hamburger_3d.png", name: "Burger", rotate: -6, size: 56, delay: 0.18, hideOn: "block" },
  { src: "/3d-elements/hot_dog_3d.png", name: "Hot Dog", rotate: 12, size: 52, delay: 0.26, hideOn: "hidden xl:block" },
  { src: "/3d-elements/doughnut_3d.png", name: "Doughnut", rotate: -10, size: 50, delay: 0.34, hideOn: "hidden min-[1400px]:block" },
  { src: "/3d-elements/pizza_3d.png", name: "Pizza", rotate: 14, size: 52, delay: 0.42, hideOn: "hidden 2xl:block" },
  { src: "/3d-elements/confetti_ball_3d.png", name: "Confetti", rotate: -8, size: 50, delay: 0.5, hideOn: "hidden xl:block" },
  { src: "/3d-elements/clinking_glasses_3d.png", name: "Drinks", rotate: 12, size: 52, delay: 0.58, hideOn: "block" },
];

const headerRightElements = [
  { src: "/3d-elements/party_popper_3d.png", name: "Popper", rotate: -14, size: 52, delay: 0.15, hideOn: "block" },
  { src: "/3d-elements/birthday_cake_3d.png", name: "Cake", rotate: 8, size: 56, delay: 0.23, hideOn: "block" },
  { src: "/3d-elements/pizza_3d.png", name: "Pizza", rotate: 16, size: 52, delay: 0.31, hideOn: "hidden xl:block" },
  { src: "/3d-elements/hamburger_3d.png", name: "Burger", rotate: -6, size: 54, delay: 0.39, hideOn: "hidden min-[1400px]:block" },
  { src: "/3d-elements/doughnut_3d.png", name: "Doughnut", rotate: 12, size: 50, delay: 0.47, hideOn: "hidden 2xl:block" },
  { src: "/3d-elements/french_fries_3d.png", name: "Fries", rotate: -10, size: 52, delay: 0.55, hideOn: "hidden xl:block" },
  { src: "/3d-elements/balloon_3d.png", name: "Balloon", rotate: 12, size: 52, delay: 0.63, hideOn: "block" },
];

export default function Hero() {

  return (
    <section className="relative pt-32 pb-32 overflow-hidden transparent">
      
      {/* Top Header Floating 3D Elements (Left Side: spans from outer edge right up to beside 'INDIA'S') */}
      <div className="hidden lg:flex items-center justify-between absolute left-3 xl:left-6 2xl:left-10 right-[calc(50%+315px)] xl:right-[calc(50%+345px)] 2xl:right-[calc(50%+360px)] top-28 xl:top-32 pointer-events-none z-20">
        {headerLeftElements.map((item, i) => (
          <motion.div
            key={i}
            className={`drop-shadow-2xl ${item.hideOn}`}
            style={{ width: item.size, height: item.size }}
            initial={{ scale: 0.1, rotate: 0, opacity: 0 }}
            animate={{ 
              scale: 1,
              rotate: item.rotate,
              opacity: 1,
              y: [0, -6, 0]
            }}
            transition={{ 
              scale: { type: "spring", stiffness: 120, damping: 12, delay: item.delay },
              rotate: { type: "spring", stiffness: 120, damping: 12, delay: item.delay },
              opacity: { duration: 0.4, ease: "easeOut", delay: item.delay },
              y: { duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: item.delay + 0.5 }
            }}
          >
            <img 
              src={item.src} 
              alt={item.name} 
              className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] select-none" 
            />
          </motion.div>
        ))}
      </div>

      {/* Top Header Floating 3D Elements (Right Side: spans from beside 'SOLUTION FOR:' right to outer edge) */}
      <div className="hidden lg:flex items-center justify-between absolute left-[calc(50%+315px)] xl:left-[calc(50%+345px)] 2xl:left-[calc(50%+360px)] right-3 xl:right-6 2xl:right-10 top-28 xl:top-32 pointer-events-none z-20">
        {headerRightElements.map((item, i) => (
          <motion.div
            key={i}
            className={`drop-shadow-2xl ${item.hideOn}`}
            style={{ width: item.size, height: item.size }}
            initial={{ scale: 0.1, rotate: 0, opacity: 0 }}
            animate={{ 
              scale: 1,
              rotate: item.rotate,
              opacity: 1,
              y: [0, -6, 0]
            }}
            transition={{ 
              scale: { type: "spring", stiffness: 120, damping: 12, delay: item.delay },
              rotate: { type: "spring", stiffness: 120, damping: 12, delay: item.delay },
              opacity: { duration: 0.4, ease: "easeOut", delay: item.delay },
              y: { duration: 3.8 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: item.delay + 0.5 }
            }}
          >
            <img 
              src={item.src} 
              alt={item.name} 
              className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] select-none" 
            />
          </motion.div>
        ))}
      </div>

      {/* Horizontal Background Photo Carousel (Starting directly from the text 'Party tumhari', Sliding Left-to-Right Behind Text) */}
      <div 
        className="absolute top-[220px] sm:top-[230px] md:top-[235px] bottom-16 md:bottom-20 inset-x-0 overflow-hidden pointer-events-none z-0 flex items-start"
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
            duration: 38,
          }}
        >
          {[...carouselImages, ...carouselImages].map((item, idx) => (
            <div
              key={idx}
              className="relative w-[300px] sm:w-[360px] md:w-[410px] lg:w-[450px] h-[580px] sm:h-[660px] md:h-[720px] lg:h-[760px] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-[#141414] shrink-0"
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

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        
        {/* Main Content Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12 relative z-20"
        >
          {/* Subtle ambient back-glow for crisp text contrast against moving photos */}
          <div className="absolute -inset-6 sm:-inset-10 bg-black/50 rounded-[3rem] blur-3xl -z-10 pointer-events-none" />
          {/* Top Section: India's Leading End-To-End Solution */}
          <div className="mb-10">
            <p className="text-base md:text-xl font-black text-white/90 mb-5 tracking-widest uppercase">
              <span className="text-3xl md:text-5xl font-black text-brand-perk tracking-wider inline-block mr-1.5">INDIA&apos;S</span> LEADING END-TO-END SOLUTION FOR:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="px-6 py-3 rounded-full font-bold text-sm md:text-base text-white/90 bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                House Parties 🎉
              </span>
              <span className="px-6 py-3 rounded-full font-bold text-sm md:text-base text-white/90 bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                Birthdays 🎂
              </span>
              <span className="px-6 py-3 rounded-full font-bold text-sm md:text-base text-white/90 bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                Corporate Events 💼
              </span>
              <span className="px-6 py-3 rounded-full font-bold text-sm md:text-base text-white/70 bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
                and more... ✨
              </span>
            </div>
          </div>
          
          {/* New Promoted H1 */}
          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black text-white leading-[1.05] mb-6 tracking-tight drop-shadow-xl">
            Party tumhari.<br/>
            <span className="text-brand-perk">Tension humari.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto font-medium drop-shadow-md">
            Enjoy your own party. Food, decor, staff, and cleanup—delivered seamlessly.
          </p>
          
          {/* CTAs Rebalanced */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Primary CTA */}
            <Button size="lg" className="w-full sm:w-auto font-bold px-10 bg-brand-perk text-[#14140F] hover:bg-[#a6e546] border-none shadow-[0_0_30px_rgba(190,255,80,0.3)]">
              Book an Event
            </Button>
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
