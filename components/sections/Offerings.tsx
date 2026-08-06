"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Cake, Camera, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const videos = [
  { id: "vibe", title: "The Vibe Reel", badge: "Party Highlights", src: "/vibe-reel.mp4" },
  { id: "ramya", title: "Ramya's Review", badge: "Customer Story", src: "/Testimonial - Ramya.mp4" },
];

const CategoryAccordion = ({ 
  icon: Icon, 
  title, 
  shortDesc, 
  items,
  colorClass = "text-brand-perk"
}: { 
  icon: any, 
  title: string, 
  shortDesc: string, 
  items: {name: string, desc: string}[],
  colorClass?: string
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-black/40 backdrop-blur-md rounded-[2rem] p-6 relative overflow-hidden border border-white/10 flex flex-col group hover:border-white/30 transition-colors duration-500 shadow-xl cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between z-10 relative">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-black/80 border border-white/10 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Icon className={`w-7 h-7 ${colorClass}`} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-1">{title}</h3>
            <p className="text-white/70 text-sm">{shortDesc}</p>
          </div>
        </div>
        <ChevronDown className={`w-6 h-6 text-white/50 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden relative z-10"
          >
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-5">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className={`w-5 h-5 ${colorClass} mt-0.5 shrink-0`} />
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{item.name}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Offerings() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  return (
    <section id="services" className="pt-12 pb-24 relative transparent overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Centered & Enlarged Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white leading-tight">
            See what <br className="md:hidden" /><span className="text-[#14140F] bg-brand-perk px-4 rounded-xl py-2 inline-block mt-2 rotate-[-2deg] shadow-[0_0_30px_rgba(190,255,80,0.3)]">our customers say</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 drop-shadow-md font-medium">
            From DIY boxes to full-scale VIP management. Choose how you host.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Interactive Dual Video Reel Player */}
          <div className="w-full lg:w-5/12 sticky top-32 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative h-[60vh] lg:h-[75vh] bg-black">
            <video 
              key={videos[activeVideoIndex].src}
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src={videos[activeVideoIndex].src} type="video/mp4" />
            </video>
            
            {/* Ambient Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none" />
            
            {/* Top Bar Video Selector Buttons */}
            <div className="absolute top-4 inset-x-4 z-20 flex gap-2 justify-center">
              {videos.map((vid, idx) => (
                <button
                  key={vid.id}
                  onClick={() => setActiveVideoIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all backdrop-blur-md border ${
                    activeVideoIndex === idx
                      ? "bg-white text-black border-white shadow-lg scale-105"
                      : "bg-black/40 text-white/80 border-white/20 hover:bg-black/60"
                  }`}
                >
                  {vid.title}
                </button>
              ))}
            </div>

            {/* Bottom Controls & Info */}
            <div className="absolute bottom-6 inset-x-6 z-20 flex justify-between items-end">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-brand-perk text-[#14140F] mb-2 inline-block shadow-md">
                  {videos[activeVideoIndex].badge}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-md">
                  {videos[activeVideoIndex].title}
                </h3>
              </div>

              {/* Prev / Next controls */}
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))}
                  className="w-10 h-10 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-lg"
                  aria-label="Previous Video"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => setActiveVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1))}
                  className="w-10 h-10 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-lg"
                  aria-label="Next Video"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Main Category Accordions */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6 pb-24">
            
            <CategoryAccordion 
              icon={Utensils}
              title="Premium Food"
              shortDesc="From exquisite dining to quick bites."
              colorClass="text-brand-perk"
              items={[
                { name: "The Vibe Box", desc: "A curated party box delivered to your doorstep." },
                { name: "The Vibe Buffet", desc: "Premium buffet spread featuring gourmet dishes." },
                { name: "Snackboxes", desc: "Individualized premium snack assortments." }
              ]}
            />

            <CategoryAccordion 
              icon={Cake}
              title="Cakes"
              shortDesc="Premium customized cakes for any occasion."
              colorClass="text-brand-purple"
              items={[
                { name: "Custom Themed Cakes", desc: "Visually stunning, premium cakes tailored to your exact theme. Baked fresh." }
              ]}
            />

            <CategoryAccordion 
              icon={Camera}
              title="Decor & Photography"
              shortDesc="End-to-end event management & premium aesthetics."
              colorClass="text-brand-cyan"
              items={[
                { name: "Premium Decor Setup", desc: "Complete spatial transformation with premium lighting & staging." },
                { name: "Event Photography", desc: "Capture the vibe perfectly with our partnered high-end photographers." }
              ]}
            />

          </div>
        </div>
      </div>
    </section>
  );
}
