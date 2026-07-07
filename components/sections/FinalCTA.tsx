"use client";

import { motion } from "framer-motion";
import Button from "../Button";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#09090b] relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-gradient-to-br from-[#1a0800] to-[#0a0300] border border-brand/20 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_80px_rgba(255,85,0,0.15)]">
          
          {/* Confetti / blobs bg */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-white mb-6 text-balance uppercase tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to host the perfect party?
            </motion.h2>
            
            <motion.p 
              className="text-white/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Join 1000+ happy hosts in Bangalore who threw unforgettable parties without lifting a finger.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button size="lg" className="bg-brand text-white hover:bg-brand-secondary hover:shadow-[0_0_20px_rgba(255,85,0,0.6)] w-full sm:w-auto font-black tracking-widest uppercase">
                Book Your Party
              </Button>
              <Button size="lg" className="bg-transparent border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/50 w-full sm:w-auto font-bold tracking-wide uppercase">
                Talk to an Expert
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
