"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import { useRef } from "react";

export default function AppPromo() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll linked motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const scrollRotateY = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const scrollRotateX = useTransform(scrollYProgress, [0, 1], [15, 2]);
  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);

  return (
    <section id="app" className="py-24 bg-brand relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
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

          {/* Right Visual (Spline 3D iPhone Mockup) */}
          <div 
            ref={containerRef} 
            className="relative flex flex-col justify-center items-center lg:items-end perspective-[2000px] h-full min-h-[650px] lg:min-h-[720px]"
          >
            <motion.div 
              className="relative w-[340px] sm:w-[380px] h-[660px] sm:h-[710px] shrink-0 rounded-[3.5rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.6)] border border-white/20 bg-[#16161a]"
              style={{ 
                rotateY: scrollRotateY, 
                rotateX: scrollRotateX, 
                scale: scrollScale, 
                y: scrollY, 
                opacity,
                transformStyle: 'preserve-3d' 
              }}
            >
              {/* Spline Interactive 3D Model Iframe with zoomed framing */}
              <iframe 
                src="https://my.spline.design/iphone14procopy-lRbkLYUvuebuY9iDjhN7OU9Q/" 
                frameBorder="0" 
                width="100%" 
                height="100%" 
                className="w-full h-full border-0 pointer-events-auto scale-110"
                title="3D iPhone Mockup"
              />
            </motion.div>

            {/* Decorative background glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-brand-perk/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
