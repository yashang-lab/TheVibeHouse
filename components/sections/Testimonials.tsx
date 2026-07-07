"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohan & Sneha",
    location: "Koramangala",
    review: "We hosted our housewarming and it was flawless. The food was incredible, and the staff left our kitchen cleaner than they found it!",
    image: "/gamenight.jpg"
  },
  {
    name: "Arjun Verma",
    location: "Indiranagar",
    review: "I've always stressed about hosting. For my 30th, TVH took care of everything. The bartender was the highlight of the night.",
    image: "/hero.jpg"
  },
  {
    name: "Meera Reddy",
    location: "HSR Layout",
    review: "The easiest way to throw a party. I just selected a package, paid, and enjoyed the evening with my friends. Highly recommended.",
    image: "/gamenight.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#09090b] overflow-hidden border-t border-white/5 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4 uppercase tracking-tight">Don't just take our word for it</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              className="bg-[#161618] rounded-[2rem] p-8 shadow-glass border border-white/5 relative hover:border-brand/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex gap-1 text-brand mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
              </div>
              <p className="text-xl text-white font-medium mb-8 leading-relaxed">"{t.review}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand/50"
                />
                <div>
                  <h4 className="font-bold text-white text-lg tracking-wide">{t.name}</h4>
                  <p className="text-sm text-brand-accent">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
