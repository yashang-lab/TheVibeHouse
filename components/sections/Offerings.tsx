"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const ReelCard = ({ 
  src, 
  badge, 
  title, 
  delay = 0 
}: { 
  src: string; 
  badge: string; 
  title: string; 
  delay?: number 
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl relative h-[65vh] md:h-[75vh] bg-black group hover:border-brand-perk/40 transition-all duration-500"
    >
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Ambient Gradients for Title Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 pointer-events-none" />

      {/* Top Badge */}
      <div className="absolute top-6 left-6 z-20">
        <span className="text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-brand-perk text-[#14140F] shadow-lg">
          {badge}
        </span>
      </div>

      {/* Bottom Title & Volume Enabler Button */}
      <div className="absolute bottom-8 left-6 right-6 z-20 flex justify-between items-end gap-4">
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
          {title}
        </h3>

        {/* Volume Enabler Button in Bottom Right Corner */}
        <button
          onClick={toggleMute}
          className="w-12 h-12 rounded-full bg-black/60 border border-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-perk hover:text-[#14140F] hover:border-brand-perk transition-all shadow-xl active:scale-95 shrink-0"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          title={isMuted ? "Enable Audio" : "Mute Audio"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5 text-brand-perk hover:text-[#14140F]" />
          )}
        </button>
      </div>
    </motion.div>
  );
};

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
                <span className="text-[#14140F] bg-brand-perk px-3.5 py-1.5 rounded-xl font-bold text-sm md:text-base inline-block shadow-[0_0_20px_rgba(190,255,80,0.3)]">
                  Engineered to Keep Every Bite Perfect.
                </span>
              </div>
            </div>

            <ReelCard 
              src="/vibe-reel.mp4" 
              badge="Party Highlights" 
              title="The Vibe Reel" 
              delay={0} 
            />
          </div>

          {/* Right Column: Customer Story / Ramya's Review Reel */}
          <div className="flex flex-col gap-4">
            <div className="min-h-[90px] flex flex-col justify-end mb-2">
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                See what our customers say
              </h2>
              <div className="mt-2">
                <span className="text-[#14140F] bg-brand-perk px-3.5 py-1.5 rounded-xl font-bold text-sm md:text-base inline-block shadow-[0_0_20px_rgba(190,255,80,0.3)]">
                  Hosts Are Obsessed.
                </span>
              </div>
            </div>

            <ReelCard 
              src="/Testimonial - Ramya.mp4" 
              badge="Customer Story" 
              title="Ramya's Review" 
              delay={0.15} 
            />
          </div>

        </div>

      </div>
    </section>
  );
}
