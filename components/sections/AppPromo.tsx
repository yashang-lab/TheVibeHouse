"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import dynamic from "next/dynamic";

const SplinePhone = dynamic(() => import("../SplinePhone"), {
  ssr: false,
  loading: () => (
    <div className="relative w-full h-[600px] sm:h-[680px] lg:h-[740px] flex flex-col items-center justify-center gap-3 text-white/50">
      <div className="w-10 h-10 rounded-full border-2 border-brand-perk border-t-transparent animate-spin" />
      <span className="text-xs font-semibold tracking-wider uppercase text-white/60">Loading 3D iPhone...</span>
    </div>
  )
});

export default function AppPromo() {
  return (
    <section id="app" className="py-24 bg-brand relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0.01, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/20">
              📱 NOW AVAILABLE ON iOS & ANDROID
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Manage your entire event from your pocket.
            </h2>
            
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
              Download The Vibe House app to browse packages, customize your menu, track your live chefs, and manage your guest list effortlessly. 
            </p>
            
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-8 backdrop-blur-sm max-w-md shadow-xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-[#FF5500] text-white text-xs font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                  DEAL FEAST
                </div>
                <span className="text-white font-bold text-sm">App Exclusive Offer</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Get up to <span className="font-black text-brand-perk text-lg bg-brand-perk/15 px-3 py-1 rounded-xl border border-brand-perk/40 inline-block shadow-[0_0_20px_rgba(190,255,80,0.35)] mx-1">10% OFF</span> your first VibeBox order when you book through the app.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://play.google.com/store/apps/details?id=com.localzi.nxtmeal&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-brand px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
              >
                <Download size={20} />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-gray-500">Download on the</div>
                  <div className="text-sm leading-none font-bold">App Store</div>
                </div>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.localzi.nxtmeal&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-brand px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
              >
                <Download size={20} />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-gray-500">GET IT ON</div>
                  <div className="text-sm leading-none font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Visual (Seamless Floating 3D iPhone Mockup) */}
          <div className="relative flex flex-col items-center justify-center">
            <SplinePhone />
            
            {/* Interactive Drag Helper Badge */}
            <div className="mt-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 font-medium text-xs backdrop-blur-md flex items-center gap-2 shadow-lg">
              <span>🖱️ Click & Drag to rotate 3D iPhone 360°</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
