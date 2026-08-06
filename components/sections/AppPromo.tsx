"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Star } from "lucide-react";
import { useRef } from "react";

export default function AppPromo() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [180, -5]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 2]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  return (
    <section id="app" className="py-24 bg-brand relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      
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
            
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-8 backdrop-blur-sm max-w-md">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-[#FF5500] text-white text-xs font-bold px-2 py-1 rounded">DEAL FEAST</div>
                <span className="text-white font-semibold">App Exclusive Offer</span>
              </div>
              <p className="text-white/90 text-sm">Get up to <span className="font-bold text-brand-accent text-lg">70% OFF</span> your first VibeBox order when you book through the app.</p>
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
                  <div className="text-sm leading-none">App Store</div>
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
                  <div className="text-sm leading-none">Google Play</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Visual (Spline 3D iPhone Mockup - Seamless 3D Canvas) */}
          <div ref={containerRef} className="relative flex flex-col justify-center items-center lg:items-end h-full min-h-[700px] lg:min-h-[800px]">
            <motion.div 
              className="relative w-full max-w-[550px] lg:max-w-[650px] h-[680px] sm:h-[780px] shrink-0"
              style={{ 
                rotateY, 
                rotateX, 
                scale, 
                y, 
                opacity,
                transformStyle: 'preserve-3d' 
              }}
            >
              {/* Spline Interactive 3D Model Canvas */}
              <iframe 
                src="https://my.spline.design/iphone14procopy-lRbkLYUvuebuY9iDjhN7OU9Q/" 
                frameBorder="0" 
                width="100%" 
                height="100%" 
                className="w-full h-full border-0 bg-transparent pointer-events-auto"
                title="3D iPhone 14 Pro Mockup"
              />
            </motion.div>
            
            {/* Interactive Drag Helper Pill */}
            <div className="mt-4 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold backdrop-blur-md flex items-center gap-2 shadow-lg">
              <span>🖱️ Drag mouse to spin 3D iPhone</span>
            </div>

            {/* Decorative background glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-brand-perk/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
