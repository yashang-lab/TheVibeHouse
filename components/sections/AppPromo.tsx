"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import { useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import Spline component with SSR disabled for WebGL
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center text-white/60 gap-3">
      <div className="w-8 h-8 border-2 border-brand-perk border-t-transparent rounded-full animate-spin" />
      <span className="text-xs font-semibold">Loading 3D iPhone...</span>
    </div>
  )
});

export default function AppPromo() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll linked motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const scrollRotateY = useTransform(scrollYProgress, [0, 1], [180, 0]);
  const scrollRotateX = useTransform(scrollYProgress, [0, 1], [15, 2]);
  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

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

          {/* Right Visual (Official Spline 3D iPhone Scene) */}
          <div 
            ref={containerRef} 
            className="relative flex flex-col justify-center items-center lg:items-end perspective-[2000px] h-full min-h-[650px] lg:min-h-[750px]"
          >
            <motion.div 
              className="relative w-full max-w-[500px] lg:max-w-[600px] h-[650px] sm:h-[720px] shrink-0"
              style={{ 
                rotateY: scrollRotateY, 
                rotateX: scrollRotateX, 
                scale: scrollScale, 
                y: scrollY, 
                opacity,
                transformStyle: 'preserve-3d' 
              }}
            >
              {/* Spline 3D Interactive Model */}
              <Spline 
                scene="https://prod.spline.design/lRbkLYUvuebuY9iDjhN7OU9Q/scene.splinecode" 
                className="w-full h-full"
                onLoad={(splineApp) => {
                  try {
                    // Hide any 2D grey card or background plane object in the Spline scene hierarchy
                    const objects = splineApp.getObjects ? splineApp.getObjects() : [];
                    objects.forEach((obj: any) => {
                      if (obj && obj.name) {
                        const name = obj.name.toLowerCase();
                        if (
                          name.includes('rectangle') || 
                          name.includes('bg') || 
                          name.includes('background') || 
                          name.includes('card') ||
                          name.includes('plane')
                        ) {
                          obj.visible = false;
                        }
                      }
                    });
                  } catch (e) {
                    console.log('Spline scene loaded:', e);
                  }
                }}
              />
            </motion.div>
            
            {/* Interactive Drag Helper Badge */}
            <div className="mt-4 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs backdrop-blur-md flex items-center gap-2 shadow-xl">
              <span>🖱️ Hover & drag mouse to rotate 3D iPhone scene</span>
            </div>

            {/* Decorative background glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-brand-perk/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
