"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface ReelCardProps {
  id: string;
  src: string;
  badge?: string;
  activeUnmutedId: string | null;
  onToggleAudio: (id: string) => void;
  delay?: number;
}

const ReelCard = ({ 
  id,
  src, 
  badge,
  activeUnmutedId,
  onToggleAudio,
  delay = 0 
}: ReelCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMuted = activeUnmutedId !== id;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (!isMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [isMuted]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="w-full aspect-[9/16] rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl relative bg-black group hover:border-brand-perk/40 transition-all duration-500"
    >
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-contain bg-black"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Ambient Gradients for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

      {/* Subtle Bottom Badge */}
      {badge && (
        <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 text-white/90 border border-white/20 backdrop-blur-md shadow-lg">
            {badge}
          </span>
        </div>
      )}

      {/* Volume Enabler Button in Bottom Right Corner */}
      <div className="absolute bottom-6 right-6 z-20">
        <button
          onClick={() => onToggleAudio(id)}
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
  const [activeUnmutedId, setActiveUnmutedId] = useState<string | null>(null);

  const handleToggleAudio = (id: string) => {
    setActiveUnmutedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section id="testimonials" className="pt-16 pb-24 relative transparent overflow-hidden scroll-mt-24">
      {/* Fallback alias for services anchor */}
      <div id="services" className="absolute -top-24 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1480px] relative z-10">
        
        {/* Big Main Section Header */}
        <div className="text-center mb-14 md:mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full bg-brand-perk/10 border border-brand-perk/30 text-brand-perk font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(190,255,80,0.15)]"
          >
            Real Event Stories & Proof
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-5"
          >
            Real Parties. <span className="text-brand-perk drop-shadow-[0_0_25px_rgba(190,255,80,0.35)]">Real Experiences.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            From hot gourmet Vibe Boxes to turnkey party setups and authentic host reviews—see how we bring celebrations to life.
          </motion.p>
        </div>

        {/* 3 Reels Side-by-Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-full mx-auto items-start">
          
          <ReelCard 
            id="vibe-reel"
            src="/vibe-reel.mp4" 
            badge="The Vibe Box"
            activeUnmutedId={activeUnmutedId}
            onToggleAudio={handleToggleAudio}
            delay={0} 
          />

          <ReelCard 
            id="shubham-event"
            src="/shubham-event.mp4" 
            badge="Shubham's Event"
            activeUnmutedId={activeUnmutedId}
            onToggleAudio={handleToggleAudio}
            delay={0.1} 
          />

          <ReelCard 
            id="ramya-review"
            src="/Testimonial - Ramya.mp4" 
            badge="Host Review"
            activeUnmutedId={activeUnmutedId}
            onToggleAudio={handleToggleAudio}
            delay={0.2} 
          />

        </div>

      </div>
    </section>
  );
}
