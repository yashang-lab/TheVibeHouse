"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Download, Star, Search, Utensils, Cake, Gift, Sparkles, Wand2, Shield, Sweep, User } from "lucide-react";
import { useRef, useState } from "react";

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

  // Interactive Drag / Mouse Spin state
  const dragX = useMotionValue(0);
  const smoothDragY = useSpring(dragX, { stiffness: 150, damping: 20 });
  const [isDragging, setIsDragging] = useState(false);

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

          {/* Right Visual (Interactive 3D iPhone 14 Pro Mockup) */}
          <div 
            ref={containerRef} 
            className="relative flex flex-col justify-center items-center lg:items-end perspective-[2000px] h-full min-h-[720px] cursor-grab active:cursor-grabbing select-none"
          >
            <motion.div 
              className="relative w-[340px] h-[680px] shrink-0"
              style={{ 
                rotateY: scrollRotateY, 
                rotateX: scrollRotateX, 
                scale: scrollScale, 
                y: scrollY, 
                opacity,
                transformStyle: 'preserve-3d' 
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              onPan={(_, info) => {
                dragX.set(dragX.get() + info.delta.x * 0.8);
              }}
            >
              <motion.div 
                className="w-full h-full relative"
                style={{ 
                  rotateY: smoothDragY,
                  transformStyle: 'preserve-3d' 
                }}
              >
                
                {/* 3D Phone Chassis / Back Layer */}
                <div 
                  className="absolute inset-0 bg-[#1e1e24] rounded-[3.8rem] border border-[#3a3a42] shadow-[0_30px_70px_rgba(0,0,0,0.7)]" 
                  style={{ transform: "translateZ(-12px)" }}
                >
                  {/* Camera Island on Back */}
                  <div className="absolute top-6 left-6 w-24 h-24 bg-[#141418] rounded-3xl border border-[#333] shadow-inner p-2 grid grid-cols-2 gap-1.5">
                    <div className="w-8 h-8 rounded-full bg-[#0a0a0c] border-2 border-[#2a2a30] shadow-md"></div>
                    <div className="w-8 h-8 rounded-full bg-[#0a0a0c] border-2 border-[#2a2a30] shadow-md"></div>
                    <div className="w-8 h-8 rounded-full bg-[#0a0a0c] border-2 border-[#2a2a30] shadow-md"></div>
                  </div>
                </div>

                {/* 3D Titanium Side Edges (Depth effect) */}
                <div 
                  className="absolute inset-0 rounded-[3.8rem] bg-gradient-to-r from-[#2c2c34] via-[#1a1a20] to-[#2c2c34] border-[2px] border-white/20" 
                  style={{ transform: "translateZ(0px)" }}
                />

                {/* Phone Front Bezel & Screen Layer */}
                <div 
                  className="absolute inset-0 bg-black rounded-[3.8rem] border-[10px] border-[#18181c] shadow-[inset_0_0_15px_rgba(255,255,255,0.1),_0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden z-10"
                  style={{ transform: "translateZ(10px)" }}
                >
                  {/* Screen Glare (Dynamic 3D glass reflection) */}
                  <div className="absolute top-0 left-[-60%] w-[220%] h-[160%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -rotate-45 pointer-events-none z-50 transform translate-y-[-20%]" />
                  
                  {/* Dynamic Island */}
                  <div className="absolute top-2.5 inset-x-0 h-7 bg-black rounded-full w-28 mx-auto z-50 shadow-inner flex items-center justify-end px-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0d0d12] border border-white/10" />
                  </div>
                  
                  {/* Screen Content - Vibe House App UI */}
                  <div className="absolute inset-0 bg-[#F8F9FB] flex flex-col font-sans pt-10 text-gray-900 overflow-hidden">
                    
                    {/* App Header */}
                    <div className="px-5 pt-3 pb-3 bg-white border-b border-gray-100 flex justify-between items-center shadow-sm">
                      <div>
                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Hello</p>
                        <p className="font-extrabold text-base text-gray-900 flex items-center gap-1">
                          Rohan Gupta 👋
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 border border-gray-200">
                        <User size={18} />
                      </div>
                    </div>
                    
                    {/* Scrollable App Body */}
                    <div className="flex-1 overflow-y-auto px-4 pt-4 pb-20 space-y-5 hide-scrollbar">
                      
                      {/* Search Bar */}
                      <div className="bg-white rounded-2xl p-3 flex items-center gap-3 text-gray-400 text-xs border border-gray-200 shadow-sm">
                        <Search size={16} className="text-gray-400" />
                        <span>Search for "Food, Party, Decor..."</span>
                      </div>

                      {/* Party Essentials Grid */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Party Essentials</h4>
                        <div className="grid grid-cols-4 gap-2.5">
                          {[
                            { label: "Food Menu", emoji: "🍔", color: "bg-orange-50 text-orange-600" },
                            { label: "Cakes", emoji: "🎂", color: "bg-pink-50 text-pink-600" },
                            { label: "Gifts", emoji: "🎁", color: "bg-purple-50 text-purple-600" },
                            { label: "Decoration", emoji: "🎈", color: "bg-yellow-50 text-yellow-600" },
                            { label: "Magician", emoji: "🎩", color: "bg-indigo-50 text-indigo-600" },
                            { label: "Cutlery", emoji: "🪑", color: "bg-emerald-50 text-emerald-600" },
                            { label: "Captain", emoji: "👔", color: "bg-blue-50 text-blue-600" },
                            { label: "Cleanup", emoji: "🧹", color: "bg-teal-50 text-teal-600" },
                          ].map((cat, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-2.5 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 hover:scale-105 transition-transform">
                              <span className="text-2xl mb-1">{cat.emoji}</span>
                              <span className="text-[10px] font-bold text-gray-800 leading-tight">{cat.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Popular Packages Banner Cards */}
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">POPULAR FOR YOU</h4>
                          <span className="text-[11px] font-bold text-brand-purple">View all</span>
                        </div>
                        
                        <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                          {/* House Party Card */}
                          <div className="w-[160px] shrink-0 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="h-24 bg-gray-200 relative">
                              <img src="/hero.jpg" alt="House Party" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-2.5">
                              <p className="font-bold text-xs text-gray-900 truncate">House Party Essentials</p>
                              <p className="text-[10px] font-bold text-brand-purple mt-1">From ₹3,499</p>
                            </div>
                          </div>

                          {/* Birthday Package Card */}
                          <div className="w-[160px] shrink-0 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="h-24 bg-gray-200 relative">
                              <img src="/hero_general.jpg" alt="Birthday Package" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-2.5">
                              <p className="font-bold text-xs text-gray-900 truncate">Birthday Party Packages</p>
                              <p className="text-[10px] font-bold text-brand-purple mt-1">From ₹1,499</p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    
                    {/* Floating Bottom Nav (Glassmorphism) */}
                    <div className="absolute bottom-3 inset-x-3 h-14 bg-white/95 backdrop-blur-md rounded-full border border-gray-200 shadow-[0_10px_25px_rgba(0,0,0,0.12)] flex items-center justify-around px-3 text-[10px] font-bold text-gray-400 z-50">
                      <div className="text-brand-purple flex flex-col items-center"><div className="w-4 h-4 mb-0.5 bg-brand-purple rounded-md shadow-sm"></div>Home</div>
                      <div className="flex flex-col items-center"><div className="w-4 h-4 mb-0.5 bg-gray-300 rounded-md"></div>Categories</div>
                      <div className="flex flex-col items-center"><div className="w-4 h-4 mb-0.5 bg-gray-300 rounded-md"></div>My Bookings</div>
                      <div className="flex flex-col items-center"><div className="w-4 h-4 mb-0.5 bg-gray-300 rounded-md"></div>Profile</div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Interactive Drag Helper Badge */}
            <div className="mt-6 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs backdrop-blur-md flex items-center gap-2 shadow-xl animate-pulse">
              <span>🖱️ Click & Drag mouse to spin 3D iPhone 360°</span>
            </div>

            {/* Decorative background glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-brand-perk/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
