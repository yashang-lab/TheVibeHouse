"use client";

import { motion } from "framer-motion";

const galleryItems = [
  {
    src: "/gallery/gdrive_event_1.jpg",
    title: "Live Buffet Catering",
    category: "Live Catering",
    alt: "Live party catering buffet chafing dish with authentic Dal Amritsari",
  },
  {
    src: "/gallery/gdrive_event_4.jpg",
    title: "Aviator Theme Stage Decor",
    category: "Stage Decor",
    alt: "Advik's First Birthday Aviator Time Flies balloon arch and stage backdrop",
  },
  {
    src: "/gallery/chat_fairytale_cake.jpg",
    title: "Fairytale Castle Cake",
    category: "Custom Cake",
    alt: "Custom two-tier fairy birthday cake with castle topper and pink fondant bow",
  },
  {
    src: "/gallery/gdrive_event_8.jpg",
    title: "Live Street Food & Chaat Counter",
    category: "Live Counter",
    alt: "Professional chef serving fresh bhel and savory snacks at live chaat counter",
  },
  {
    src: "/gallery/chat_balloon_arch.jpg",
    title: "Pastel Balloon Archway Entrance",
    category: "Entrance Decor",
    alt: "Grand pastel pink, lavender and chrome balloon arch entrance",
  },
  {
    src: "/gallery/gdrive_event_5.jpg",
    title: "Safari Train & Airplane Cake",
    category: "Custom Cake",
    alt: "Two-tier first birthday cake featuring animal train and blue airplane",
  },
  {
    src: "/gallery/gdrive_event_7.jpg",
    title: "Banquet Dining & Hospitality",
    category: "Venue Setup",
    alt: "Elegant banquet dining setup with draped tables and TVH hospitality staff",
  },
  {
    src: "/gallery/chat_fairy_welcome.jpg",
    title: "Themed Welcome Board & Balloons",
    category: "Welcome Setup",
    alt: "Welcome to Anvika's Fairy First easel with pastel balloon clusters",
  },
  {
    src: "/gallery/gdrive_event_2.jpg",
    title: "Artisanal Dessert Station",
    category: "Dessert Counter",
    alt: "Live dessert station featuring golden Kesar Lencha sweet bowl display",
  },
  {
    src: "/gallery/gdrive_event_6.jpg",
    title: "Shimmer Wall & Marquee Setup",
    category: "Stage Decor",
    alt: "Full birthday stage decor with illuminated shimmer backdrop and giant ONE letters",
  },
  {
    src: "/gallery/chat_stage_one.jpg",
    title: "Milestone Family Celebration",
    category: "Celebration",
    alt: "Mother and baby celebrating on lighted fairy stage with butterfly wings",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative transparent">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black text-brand-perk mb-4 tracking-tight drop-shadow-[0_0_25px_rgba(190,255,80,0.35)]"
          >
            Moments We Create
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto font-medium"
          >
            From intimate housewarmings to massive corporate watch parties.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, i) => (
            <motion.div 
              key={i}
              className="break-inside-avoid relative group rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden bg-[#1A1A1A] border-[5px] border-white/90 hover:border-brand-perk shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(190,255,80,0.2)] transition-all duration-500"
              initial={{ opacity: 0.01, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, type: "spring", stiffness: 100, damping: 15 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle bottom gradient and category pill on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                  <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-brand-perk text-[#14140F] mb-1.5 shadow-md">
                    {item.category}
                  </span>
                  <p className="text-white font-bold text-base md:text-lg leading-snug drop-shadow-md">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
