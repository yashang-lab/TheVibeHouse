"use client";

import { motion } from "framer-motion";
import Button from "../Button";
import { Check } from "lucide-react";

const packages = [
  {
    title: "FIFA/Cricket Watch Party",
    price: "₹4,999",
    people: "Up to 8 People",
    description: "The ultimate game night setup for you and the boys.",
    features: [
      "Large Bean Bags Setup",
      "Chips, Dips & Popcorn Station",
      "Beer Buckets & Ice",
      "Post-Match Cleanup"
    ],
    isPopular: false
  },
  {
    title: "The Ultimate House Party",
    price: "₹14,999",
    people: "Up to 20 People",
    description: "Everything you need for a legendary night without the stress.",
    features: [
      "Full Living Room Transformation",
      "Premium Bartender Included",
      "Pass-around Appetizers",
      "Party Games Setup (Beer Pong etc.)"
    ],
    isPopular: true
  },
  {
    title: "Corporate Mixer",
    price: "₹24,999",
    people: "Up to 30 People",
    description: "Impress your team or clients with a seamless, professional setup.",
    features: [
      "Elegant Stand-up Tables",
      "Curated Wine & Cheese Board",
      "Professional Waitstaff",
      "Soft Acoustic Playlist & Lighting"
    ],
    isPopular: false
  }
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 relative transparent">
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Transparent <span className="text-brand-perk bg-white/10 px-3 rounded-lg py-1 border border-white/10">Pricing</span>
            </h2>
            <p className="text-xl text-white/70">
              Pick a vibe. Know the price. Zero hidden fees.
            </p>
          </div>
          <Button variant="outline" className="hidden md:inline-flex text-white border-white/20 hover:bg-white/10 font-bold">View All Packages</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`solid-panel relative overflow-hidden flex flex-col p-8 md:p-10 ${pkg.isPopular ? 'border-2 border-brand-perk shadow-clean-xl md:-translate-y-4' : ''}`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-brand text-brand-perk text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-brand mb-2">{pkg.title}</h3>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-4xl font-black tracking-tight text-brand">{pkg.price}</span>
              </div>
              <p className="text-brand/60 font-semibold mb-6">{pkg.people}</p>
              
              <p className="text-text-muted mb-8 leading-relaxed h-16">{pkg.description}</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-perk shrink-0 mt-0.5" />
                    <span className="text-brand font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-8 border-t border-brand/10 mt-auto">
                <Button className="w-full py-4 text-lg font-bold transition-transform active:scale-95 bg-brand-perk text-brand hover:bg-[#a6e546] shadow-clean">
                  Select Package
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full text-brand border-brand/20 hover:bg-brand/5 font-bold">View All Packages</Button>
        </div>
      </div>
    </section>
  );
}
