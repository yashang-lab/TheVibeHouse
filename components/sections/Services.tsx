"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Gourmet Food",
    description: "Curated menus from appetizers to desserts.",
    icon: "🍽️",
    image: "/hero.jpg",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Decorations",
    description: "Balloons, lighting, and theme setups.",
    icon: "🎈",
    image: "/gamenight.jpg",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Live Chefs",
    description: "Hot, fresh food prepared right in your kitchen.",
    icon: "👨‍🍳",
    image: "/hero.jpg",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Bartenders",
    description: "Professional mixologists for your drinks.",
    icon: "🍹",
    image: "/gamenight.jpg",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    title: "Cleanup",
    description: "We leave your home exactly as we found it.",
    icon: "🧹",
    image: "/hero.jpg",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Party Games",
    description: "Board games, drinking games, and more.",
    icon: "🎲",
    image: "/gamenight.jpg",
    className: "md:col-span-2 md:row-span-1"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#09090b] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-5xl font-black text-white mb-4 uppercase tracking-tight">Everything under one roof</h2>
          <p className="text-xl text-text-muted max-w-2xl">
            Mix and match services to build your perfect party. We handle the coordination so you don't have to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              className={`group relative rounded-[2rem] overflow-hidden shadow-glass border border-white/10 ${service.className}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-black/40 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-xl border border-white/20 group-hover:-translate-y-2 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{service.title}</h3>
                <p className="text-white/80 font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
