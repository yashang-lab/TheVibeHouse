"use client";

import { motion } from "framer-motion";
import { Utensils, Cake, Camera, CheckCircle2 } from "lucide-react";

export default function Offerings() {
  return (
    <section id="services" className="pt-8 pb-24 relative transparent overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Left Side: Video Reel with Sleek UI Mask */}
        <div className="w-full lg:w-5/12 sticky top-32 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative h-[60vh] lg:h-[75vh]">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/vibe-reel.mp4" type="video/mp4" />
          </video>
          
          {/* Sleek UI Gradient Mask over the reel */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111111]/80 pointer-events-none" />
          
          {/* Heavy Bottom-Right Gradient to perfectly obscure the AI watermark */}
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-tl from-[#111111] via-[#111111]/70 to-transparent pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-[#111111] blur-[40px] pointer-events-none rounded-full" />
        </div>

        {/* Right Side: Offerings (Flowing background from top) */}
        <div className="w-full lg:w-7/12 flex flex-col gap-6 pb-24">
          
          {/* Section Header */}
          <div className="text-left mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight">
              How we <br/><span className="text-brand-perk bg-white/10 px-3 rounded-lg py-1 border border-white/10 inline-block mt-2">bring the vibe</span>
            </h2>
            <p className="text-lg text-white/80 drop-shadow-md">
              From DIY boxes to full-scale VIP management. Choose how you host.
            </p>
          </div>

          {/* Premium Food Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md rounded-[2rem] p-8 relative overflow-hidden border border-white/10 flex flex-col group hover:border-brand-perk/40 transition-colors duration-500 shadow-2xl"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-perk/10 rounded-full blur-[100px] pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            
            <div className="relative z-10 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-4 shadow-xl">
                <Utensils className="w-7 h-7 text-brand-perk" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-1">Premium Food</h3>
              <p className="text-white/70 text-sm">From exquisite dining to quick bites.</p>
            </div>

            <div className="relative z-10 flex flex-col gap-3">
              {[
                { name: "The Vibe Box", desc: "A curated party box delivered to your doorstep." },
                { name: "The Vibe Buffet", desc: "Premium buffet spread featuring gourmet dishes." },
                { name: "Snackboxes", desc: "Individualized premium snack assortments." }
              ].map((item, idx) => (
                <div key={idx} className="bg-black/60 p-4 rounded-2xl border border-white/5 group-hover:bg-black/80 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-brand-perk shrink-0" />
                    <h4 className="text-base font-bold text-white">{item.name}</h4>
                  </div>
                  <p className="text-white/50 text-xs pl-7 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
            
          {/* Cakes Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-black/40 backdrop-blur-md rounded-[2rem] p-8 relative overflow-hidden border border-white/10 flex flex-col justify-center group hover:border-brand-purple/40 transition-colors duration-500 shadow-2xl"
          >
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-4 shadow-xl">
                <Cake className="w-7 h-7 text-brand-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-1">Cakes</h3>
              <p className="text-white/70 text-sm mb-4">Premium customized cakes for any occasion.</p>
              
              <div className="bg-black/60 p-4 rounded-xl border border-white/5 group-hover:bg-black/80 transition-colors duration-300">
                <h4 className="text-sm font-bold text-white mb-1">Custom Themed Cakes</h4>
                <p className="text-white/50 text-xs leading-relaxed">Visually stunning, premium cakes tailored to your exact theme. Baked fresh.</p>
              </div>
            </div>
          </motion.div>

          {/* Decor & Photography Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-black/40 backdrop-blur-md rounded-[2rem] p-8 relative overflow-hidden border border-white/10 flex flex-col justify-center group hover:border-brand-cyan/40 transition-colors duration-500 shadow-2xl"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center shrink-0 shadow-xl">
                  <Camera className="w-7 h-7 text-brand-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">Decor &<br/>Photography</h3>
              </div>
              
              <p className="text-white/70 text-sm mb-4">End-to-end event management & premium aesthetics.</p>
              
              <div className="flex flex-col gap-2">
                <div className="bg-black/60 p-4 rounded-xl border border-white/5 group-hover:bg-black/80 transition-colors duration-300">
                  <h4 className="text-sm font-bold text-white mb-1">Premium Decor Setup</h4>
                  <p className="text-white/50 text-xs">Complete spatial transformation with premium lighting & staging.</p>
                </div>
                <div className="bg-black/60 p-4 rounded-xl border border-white/5 group-hover:bg-black/80 transition-colors duration-300">
                  <h4 className="text-sm font-bold text-white mb-1">Event Photography</h4>
                  <p className="text-white/50 text-xs">Capture the vibe perfectly with our partnered high-end photographers.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
