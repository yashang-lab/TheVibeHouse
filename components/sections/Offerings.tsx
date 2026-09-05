"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface ReelCardProps {
  id: string;
  src: string;
  activeUnmutedId: string | null;
  onToggleAudio: (id: string) => void;
  delay?: number;
}

const ReelCard = ({ 
  id,
  src, 
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

      {/* Ambient Gradients for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 pointer-events-none" />

      {/* Volume Enabler Button in Bottom Right Corner */}
      <div className="absolute bottom-8 right-6 z-20">
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

const floatingElements = [
  // Left Side (behind left reel)
  { src: "/3d-elements/french_fries_3d.png", x: -570, y: -180, delay: 0.1, rotate: -15, scale: 1.15, size: 140 },
  { src: "/3d-elements/hamburger_3d.png", x: -540, y: 60, delay: 0.2, rotate: -12, scale: 1.25, size: 160 },
  { src: "/3d-elements/clinking_glasses_3d.png", x: -580, y: 310, delay: 0.3, rotate: 10, scale: 1.2, size: 150 },
  { src: "/3d-elements/doughnut_3d.png", x: -440, y: -290, delay: 0.25, rotate: 20, scale: 1.25, size: 145 },

  // Center Gap (behind gap between reels)
  { src: "/3d-elements/party_popper_3d.png", x: 0, y: -180, delay: 0.15, rotate: -18, scale: 1.2, size: 155 },
  { src: "/3d-elements/balloon_3d.png", x: 0, y: 220, delay: 0.25, rotate: 15, scale: 1.25, size: 165 },

  // Right Side (behind right reel)
  { src: "/3d-elements/birthday_cake_3d.png", x: 540, y: -180, delay: 0.15, rotate: 12, scale: 1.3, size: 180 },
  { src: "/3d-elements/confetti_ball_3d.png", x: 580, y: 70, delay: 0.2, rotate: -12, scale: 1.3, size: 150 },
  { src: "/3d-elements/pizza_3d.png", x: 530, y: 310, delay: 0.3, rotate: 22, scale: 1.25, size: 160 },
  { src: "/3d-elements/hot_dog_3d.png", x: 440, y: -290, delay: 0.25, rotate: -18, scale: 1.2, size: 150 },
];

export default function Offerings() {
  const [activeUnmutedId, setActiveUnmutedId] = useState<string | null>(null);

  const handleToggleAudio = (id: string) => {
    setActiveUnmutedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section id="services" className="pt-12 pb-24 relative transparent overflow-hidden">
      
      {/* Floating 3D Elements Placed Behind the Reels */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        {floatingElements.map((item, i) => (
          <motion.div
            key={i}
            className="hidden lg:block absolute top-1/2 left-1/2 drop-shadow-2xl z-0 pointer-events-none"
            style={{ originX: 0.5, originY: 0.5, width: item.size, height: item.size }}
            initial={{ x: "-50%", y: "-50%", scale: 0.2, rotate: 0, opacity: 0 }}
            whileInView={{ 
              x: `calc(-50% + ${item.x}px)`, 
              y: `calc(-50% + ${item.y}px)`, 
              scale: item.scale,
              rotate: item.rotate,
              opacity: 1
            }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 90, 
              damping: 15, 
              delay: item.delay,
              opacity: { duration: 0.6, ease: "easeOut", delay: item.delay }
            }}
          >
            <img src={item.src} alt="" className="w-full h-full object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.6)]" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* 2 Reels Side-by-Side Grid with Dedicated Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Vibe Box Reel */}
          <div className="flex flex-col gap-4">
            <div className="min-h-[90px] flex flex-col justify-end mb-2">
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                The Vibe Box
              </h2>
              <div className="mt-2">
                <span className="text-[#14140F] bg-brand-perk px-3.5 py-1.5 rounded-xl font-bold text-sm md:text-base inline-block shadow-[0_0_20px_rgba(190,255,80,0.3)]">
                  Engineered to Keep Every Bite Perfect.
                </span>
              </div>
            </div>

            <ReelCard 
              id="vibe-reel"
              src="/vibe-reel.mp4" 
              activeUnmutedId={activeUnmutedId}
              onToggleAudio={handleToggleAudio}
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
              id="ramya-review"
              src="/Testimonial - Ramya.mp4" 
              activeUnmutedId={activeUnmutedId}
              onToggleAudio={handleToggleAudio}
              delay={0.15} 
            />
          </div>

        </div>

      </div>
    </section>
  );
}
