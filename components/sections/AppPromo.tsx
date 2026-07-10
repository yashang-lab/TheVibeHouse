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
    <section className="py-24 bg-brand relative overflow-hidden">
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
              <button className="flex items-center gap-3 bg-white text-brand px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                <Download size={20} />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-gray-500">Download on the</div>
                  <div className="text-sm leading-none">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-white text-brand px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                <Download size={20} />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-gray-500">GET IT ON</div>
                  <div className="text-sm leading-none">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right Visual (Mockup) */}
          <div ref={containerRef} className="relative flex justify-center lg:justify-end perspective-[2000px] h-full min-h-[700px] items-center">
            <motion.div 
              className="relative w-[320px] h-[650px] shrink-0"
              style={{ 
                rotateY, 
                rotateX, 
                scale, 
                y, 
                opacity,
                transformStyle: 'preserve-3d' 
              }}
            >
              
              {/* Phone Mockup 3D Frame Base */}
              <div 
                className="absolute inset-0 bg-[#2A2A2A] rounded-[3.5rem] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] border border-[#444] z-0 translate-z-[-20px]" 
                style={{ transform: "translateZ(-10px)" }}
              />

              {/* The Phone Bezel and Screen */}
              <div 
                className="absolute inset-0 bg-black rounded-[3.5rem] border-[10px] border-[#1c1c1c] shadow-[inset_0_0_20px_rgba(255,255,255,0.1),_0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-10"
                style={{ transform: "translateZ(10px)" }}
              >
                {/* Screen Glare (Reflective 3D effect) */}
                <div className="absolute top-0 left-[-50%] w-[200%] h-[150%] bg-gradient-to-tr from-transparent via-white/5 to-transparent -rotate-45 pointer-events-none z-50 transform translate-y-[-20%]" />
                
                {/* Dynamic Island */}
                <div className="absolute top-2 inset-x-0 h-7 bg-black rounded-full w-28 mx-auto z-50 shadow-inner" />
                
                {/* Screen Content */}
                <div className="absolute inset-0 bg-white flex flex-col font-sans">
                  
                  {/* Top Graphic Header area (gradient matching screenshot) */}
                  <div className="bg-gradient-to-br from-[#1E1B4B] to-[#4c1d95] text-white pt-12 pb-24 px-5 rounded-b-[2.5rem] relative overflow-hidden">
                    {/* Background decorations (Disco ball/lights effect) */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/40 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-cyan/40 blur-2xl rounded-full" />
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <p className="text-xs text-white/70">Hello</p>
                          <p className="font-semibold text-lg">Rohan Gupta 👋</p>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center">
                          <Star size={16} />
                        </div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 text-white/70 text-sm mb-6 border border-white/10 shadow-inner">
                        Search for "Food, Party, Decor..."
                      </div>
                      
                      <h3 className="text-5xl font-black italic mb-2 tracking-tight drop-shadow-lg">Let's<br/>Vibe!</h3>
                    </div>
                  </div>
                  
                  {/* Floating Categories (overlapping header) */}
                  <div className="relative z-20 -mt-16 px-4 flex gap-3 overflow-x-auto pb-4 hide-scrollbar snap-x">
                    <div className="bg-white text-brand rounded-2xl p-3 text-center text-xs font-bold w-24 shrink-0 shadow-[0_10px_20px_rgba(0,0,0,0.1)] snap-center flex flex-col items-center justify-between border border-gray-50 h-28">
                      <div className="text-brand-purple leading-tight">Birthday<br/>Bash</div>
                      <img src="/3d-elements/birthday_cake_3d.png" alt="Cake" className="w-12 h-12 object-contain drop-shadow-md" />
                    </div>
                    <div className="bg-white text-brand rounded-2xl p-3 text-center text-xs font-bold w-24 shrink-0 shadow-[0_10px_20px_rgba(0,0,0,0.1)] snap-center flex flex-col items-center justify-between border border-gray-50 h-28">
                      <div className="text-brand-cyan leading-tight">FIFA<br/>Watch Party</div>
                      <img src="/3d-elements/pizza_3d.png" alt="Pizza" className="w-12 h-12 object-contain drop-shadow-md" />
                    </div>
                    <div className="bg-white text-brand rounded-2xl p-3 text-center text-xs font-bold w-24 shrink-0 shadow-[0_10px_20px_rgba(0,0,0,0.1)] snap-center flex flex-col items-center justify-between border border-gray-50 h-28 relative overflow-hidden">
                      <div className="text-[#FF5500] leading-tight z-10">Deal<br/>Feast</div>
                      <div className="absolute -bottom-2 -right-2 bg-[#FF5500] text-white p-2 rounded-full font-black text-[10px] transform -rotate-12 w-14 h-14 flex items-center justify-center text-center leading-none border-2 border-white shadow-md z-10">
                        GET<br/>70%<br/>OFF
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 px-5 pt-2">
                    <div className="flex justify-between items-end mb-4">
                      <h4 className="font-black text-xl text-gray-900 italic tracking-tight">CREATE YOUR VIBE ✨</h4>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-gray-700">Services</span>
                      <span className="text-brand-purple font-semibold text-sm">View all</span>
                    </div>
                    
                    <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x">
                      {/* Vibe Box Card */}
                      <div className="w-[180px] shrink-0 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden snap-center">
                        <div className="h-28 bg-gray-200 w-full relative">
                           <img src="/hero.jpg" alt="Vibe Box" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-3">
                          <p className="font-bold text-gray-900">Vibe Box</p>
                          <p className="text-[10px] text-gray-500 mb-2 truncate">Bulk food delivery...</p>
                          <div className="flex justify-between items-end mb-2">
                            <span className="text-[10px] text-gray-400">Starting at</span>
                            <span className="text-sm font-bold text-brand-purple">₹3,499</span>
                          </div>
                          <button className="w-full py-1.5 bg-gradient-to-r from-brand-purple to-fuchsia-600 text-white text-xs font-bold rounded-lg shadow-md uppercase">View</button>
                        </div>
                      </div>
                      
                      {/* Live Chef Card */}
                      <div className="w-[180px] shrink-0 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden snap-center">
                        <div className="h-28 bg-gray-200 w-full relative">
                           <img src="/hero_general.jpg" alt="Live Chef" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-3">
                          <p className="font-bold text-gray-900">VibeBox + Live</p>
                          <p className="text-[10px] text-gray-500 mb-2 truncate">Food delivery + live...</p>
                          <div className="flex justify-between items-end mb-2">
                            <span className="text-[10px] text-gray-400">Starting at</span>
                            <span className="text-sm font-bold text-brand-purple">₹5,999</span>
                          </div>
                          <button className="w-full py-1.5 bg-gradient-to-r from-brand-purple to-fuchsia-600 text-white text-xs font-bold rounded-lg shadow-md uppercase">View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Bottom Nav (Glassmorphism) */}
                  <div className="absolute bottom-4 inset-x-4 h-16 bg-white/90 backdrop-blur-md rounded-full border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-around px-2 text-[10px] font-semibold text-gray-400 z-50">
                    <div className="text-brand-purple flex flex-col items-center"><div className="w-5 h-5 mb-1 bg-brand-purple rounded-md shadow-sm"></div>Home</div>
                    <div className="flex flex-col items-center"><div className="w-5 h-5 mb-1 bg-gray-300 rounded-md"></div>Categories</div>
                    <div className="flex flex-col items-center"><div className="w-5 h-5 mb-1 bg-gray-300 rounded-md"></div>My Bookings</div>
                    <div className="flex flex-col items-center"><div className="w-5 h-5 mb-1 bg-gray-300 rounded-md"></div>Profile</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative background glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-brand-perk/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
