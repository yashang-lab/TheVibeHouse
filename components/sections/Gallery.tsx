"use client";

import { motion } from "framer-motion";

const galleryItems = [
  // Row 1: 3 Portrait Cards
  {
    src: "/gallery/gdrive_event_1.jpg",
    title: "Live Buffet Catering",
    category: "Live Catering",
    alt: "Live party catering buffet chafing dish with authentic Dal Amritsari",
    colSpan: "md:col-span-2",
    heightClass: "h-[300px] sm:h-[340px] lg:h-[400px]",
    imgPosition: "object-center",
  },
  {
    src: "/gallery/chat_fairytale_cake.jpg",
    title: "Fairytale Castle Cake",
    category: "Custom Cake",
    alt: "Custom two-tier fairy birthday cake with castle topper and pink fondant bow",
    colSpan: "md:col-span-2",
    heightClass: "h-[300px] sm:h-[340px] lg:h-[400px]",
    imgPosition: "object-center",
  },
  {
    src: "/gallery/gdrive_event_4.jpg",
    title: "Aviator Theme Stage Decor",
    category: "Stage Decor",
    alt: "Advik's First Birthday Aviator Time Flies balloon arch and stage backdrop",
    colSpan: "md:col-span-2",
    heightClass: "h-[300px] sm:h-[340px] lg:h-[400px]",
    imgPosition: "object-bottom",
  },

  // Row 2: 2 Wide Landscape Cards (1/2 width each)
  {
    src: "/gallery/chat_balloon_arch.jpg",
    title: "Pastel Balloon Archway Entrance",
    category: "Entrance Decor",
    alt: "Grand pastel pink, lavender and chrome balloon arch entrance",
    colSpan: "md:col-span-3",
    heightClass: "h-[280px] sm:h-[320px] lg:h-[380px]",
    imgPosition: "object-center",
  },
  {
    src: "/gallery/chat_stage_one.jpg",
    title: "Milestone Family Celebration",
    category: "Celebration",
    alt: "Mother and baby celebrating on lighted fairy stage with butterfly wings",
    colSpan: "md:col-span-3",
    heightClass: "h-[280px] sm:h-[320px] lg:h-[380px]",
    imgPosition: "object-center",
  },

  // Row 3: 3 Portrait Cards
  {
    src: "/gallery/gdrive_event_8.jpg",
    title: "Live Street Food & Chaat Counter",
    category: "Live Counter",
    alt: "Professional chef serving fresh bhel and savory snacks at live chaat counter",
    colSpan: "md:col-span-2",
    heightClass: "h-[300px] sm:h-[340px] lg:h-[400px]",
    imgPosition: "object-center",
  },
  {
    src: "/gallery/gdrive_event_5.jpg",
    title: "Safari Train & Airplane Cake",
    category: "Custom Cake",
    alt: "Two-tier first birthday cake featuring animal train and blue airplane",
    colSpan: "md:col-span-2",
    heightClass: "h-[300px] sm:h-[340px] lg:h-[400px]",
    imgPosition: "object-center",
  },
  {
    src: "/gallery/gdrive_event_2.jpg",
    title: "Artisanal Dessert Station",
    category: "Dessert Counter",
    alt: "Live dessert station featuring golden Kesar Lencha sweet bowl display",
    colSpan: "md:col-span-2",
    heightClass: "h-[300px] sm:h-[340px] lg:h-[400px]",
    imgPosition: "object-center",
  },

  // Row 4: 3 Portrait Cards
  {
    src: "/gallery/gdrive_event_6.jpg",
    title: "Shimmer Wall & Marquee Setup",
    category: "Stage Decor",
    alt: "Full birthday stage decor with illuminated shimmer backdrop and giant ONE letters",
    colSpan: "md:col-span-2",
    heightClass: "h-[300px] sm:h-[340px] lg:h-[400px]",
    imgPosition: "object-center",
  },
  {
    src: "/gallery/chat_fairy_welcome.jpg",
    title: "Themed Welcome Board & Balloons",
    category: "Welcome Setup",
    alt: "Welcome to Anvika's Fairy First easel with pastel balloon clusters",
    colSpan: "md:col-span-2",
    heightClass: "h-[300px] sm:h-[340px] lg:h-[400px]",
    imgPosition: "object-center",
  },
  {
    src: "/gallery/gdrive_event_7.jpg",
    title: "Banquet Dining & Hospitality",
    category: "Venue Setup",
    alt: "Elegant banquet dining setup with draped tables and TVH hospitality staff",
    colSpan: "md:col-span-2",
    heightClass: "h-[300px] sm:h-[340px] lg:h-[400px]",
    imgPosition: "object-center",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative transparent w-full">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
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

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6">
          {galleryItems.map((item, i) => (
            <motion.div 
              key={i}
              className={`${item.colSpan} ${item.heightClass} relative group rounded-[1.75rem] sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden bg-[#1A1A1A] border-[4px] sm:border-[5px] border-white/90 hover:border-brand-perk shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(190,255,80,0.2)] transition-all duration-500`}
              initial={{ opacity: 0.01, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, type: "spring", stiffness: 100, damping: 15 }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  loading="lazy"
                  className={`w-full h-full object-cover ${item.imgPosition} transition-transform duration-700 group-hover:scale-105`}
                />
                {/* Bottom gradient and category pill */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 pointer-events-none">
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
