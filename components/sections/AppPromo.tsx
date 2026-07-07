"use client";

import { motion } from "framer-motion";
import { Download, Star } from "lucide-react";

export default function AppPromo() {
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
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0.01, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Phone Mockup Frame */}
            <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden shrink-0">
              {/* Dynamic Island */}
              <div className="absolute top-0 inset-x-0 h-7 bg-black rounded-b-3xl w-40 mx-auto z-50" />
              
              {/* Screen Content (Based on Blueprint) */}
              <div className="absolute inset-0 bg-white flex flex-col">
                <div className="bg-[#1E1B4B] text-white pt-12 pb-6 px-5 rounded-b-3xl">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-xs text-white/70">Hello</p>
                      <p className="font-semibold text-lg">Rohan Gupta 👋</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                      <Star size={16} />
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-3 flex items-center gap-3 text-white/50 text-sm mb-6 border border-white/10">
                    Search for "Food, Decor..."
                  </div>
                  
                  <h3 className="text-4xl font-black italic mb-6">Let's<br/>Vibe!</h3>
                  
                  <div className="flex gap-3 overflow-hidden">
                    <div className="bg-white text-brand rounded-xl p-3 text-center text-xs font-bold w-24 shrink-0 shadow-lg">
                      Birthday Bash
                    </div>
                    <div className="bg-white text-brand rounded-xl p-3 text-center text-xs font-bold w-24 shrink-0 shadow-lg">
                      FIFA Watch
                    </div>
                    <div className="bg-white text-brand rounded-xl p-3 text-center text-xs font-bold w-24 shrink-0 shadow-lg">
                      Deal Feast
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 p-5">
                  <h4 className="font-bold text-lg mb-4 text-gray-900 italic">CREATE YOUR VIBE ✨</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4 border border-gray-100 p-3 rounded-2xl shadow-sm">
                      <div className="w-20 h-20 bg-gray-100 rounded-xl"></div>
                      <div>
                        <p className="font-bold text-gray-900">Vibe Box</p>
                        <p className="text-xs text-gray-500 mb-2">Bulk food delivery...</p>
                        <p className="text-sm font-semibold text-brand">₹3,499</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Nav */}
                <div className="h-16 border-t border-gray-100 flex items-center justify-around px-2 text-xs font-medium text-gray-400 pb-2">
                  <div className="text-brand flex flex-col items-center"><div className="w-5 h-5 mb-1 bg-brand rounded-md"></div>Home</div>
                  <div className="flex flex-col items-center"><div className="w-5 h-5 mb-1 bg-gray-300 rounded-md"></div>Categories</div>
                  <div className="flex flex-col items-center"><div className="w-5 h-5 mb-1 bg-gray-300 rounded-md"></div>Bookings</div>
                  <div className="flex flex-col items-center"><div className="w-5 h-5 mb-1 bg-gray-300 rounded-md"></div>Profile</div>
                </div>
              </div>
            </div>
            
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-white/5 rounded-full blur-[50px] -z-10 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
