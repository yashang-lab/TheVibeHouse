"use client";

import { motion } from "framer-motion";

const images = [
  "/hero_general.jpg",
  "/corporate.jpg",
  "/fifa.jpg",
  "/housewarming.jpg",
  "/hero_general.jpg",
  "/corporate.jpg"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative transparent">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-4 tracking-tight">Moments we've created</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            From intimate housewarmings to massive corporate watch parties.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              className="break-inside-avoid relative group rounded-[2rem] overflow-hidden bg-white border-[6px] border-white shadow-clean"
              initial={{ opacity: 0.01, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
            >
              <img 
                src={src} 
                alt={`Event gallery image ${i + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
