"use client";

import { motion } from "framer-motion";
import Button from "../Button";
import Link from "next/link";
import { Sparkles, Utensils, Camera, Palette, ArrowRight, Cake, GlassWater, Check } from "lucide-react";

const masterCategories = [
  {
    id: "food",
    icon: Utensils,
    name: "Food & Live Counters",
    tag: "Buffets & Live Chaat",
    detail: "Royal North Indian chafing buffets, Delhi street chaat live counters, and artisanal fresh mithai stations.",
    startingPrice: "From ₹3,200",
    image: "/catalog/food-buffet-chafing.jpg",
    items: [
      "Authentic brass chafing dishes & live breads",
      "Live Delhi Pani Puri & Aloo Tikki station",
      "Kesar chamcham, jalebi-rabri & fruit custard"
    ]
  },
  {
    id: "decor",
    icon: Palette,
    name: "Themed Decor",
    tag: "Backdrops & Lighting",
    detail: "High-reflective gold shimmer walls, organic pastel balloon arches, and custom 3D kids theme stages.",
    startingPrice: "From ₹3,800",
    image: "/catalog/decor-shimmer-stage.jpg",
    items: [
      "8x8 ft Gold sequin shimmer wall & neon sign",
      "Bespoke 3D milestone aviator/safari setups",
      "Grand organic entrance balloon archway"
    ]
  },
  {
    id: "cakes",
    icon: Cake,
    name: "Premium Cakes",
    tag: "Designer Tiered & Truffle",
    detail: "Architectural 2-tier fairytale castle cakes, jungle safari fondant creations, and pure Belgian truffle bakes.",
    startingPrice: "From ₹2,400",
    image: "/catalog/cake-fairytale-castle.jpg",
    items: [
      "2-tier handcrafted fondant fairytale castles",
      "Edible sugar animal figurines & safari themes",
      "100% eggless Belgian dark chocolate truffle"
    ]
  },
  {
    id: "activities",
    icon: GlassWater,
    name: "Live Activities",
    tag: "Music, Bar & Emcee",
    detail: "High-watt JBL club DJ setup, interactive games emcee, and illuminated flare craft mocktail bar.",
    startingPrice: "From ₹4,000",
    image: "/catalog/activity-live-dj.jpg",
    items: [
      "Pro party DJ with 2000W sound & club lights",
      "Interactive games host for kids & adults",
      "Flair mixologist with signature mocktail bar"
    ]
  },
  {
    id: "media",
    icon: Camera,
    name: "Photo & Video",
    tag: "DSLR, 4K & Reels",
    detail: "Full event candid photography, 4K cinematic film with gimbal, and 24-hour viral vertical reels creators.",
    startingPrice: "From ₹3,500",
    image: "/catalog/media-viral-reels.jpg",
    items: [
      "150+ Color-graded candid DSLR photos",
      "4K Gimbal-stabilized cinematic highlight film",
      "3 Trending Instagram reels with express delivery"
    ]
  }
];

export default function Packages() {
  return (
    <section id="pricing" className="py-24 relative transparent scroll-mt-24">
      {/* Anchor alias for packages */}
      <div id="packages" className="absolute -top-24 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full bg-brand-perk/10 border border-brand-perk/30 text-brand-perk font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(190,255,80,0.15)]"
          >
            Transparent Pricing & Custom Curation
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-4"
          >
            Create Your <span className="text-brand-perk drop-shadow-[0_0_25px_rgba(190,255,80,0.35)]">Own Party</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto font-medium"
          >
            Select food, theme, cakes, activities, and media à la carte with 100% price transparency. No forced packages.
          </motion.p>
        </div>

        {/* Hero A La Carte CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-[2.5rem] bg-gradient-to-br from-[#1F2614]/90 via-[#141414]/95 to-[#161616]/95 border-2 border-brand-perk/50 p-6 sm:p-10 lg:p-12 shadow-[0_0_50px_rgba(190,255,80,0.15)] relative overflow-hidden backdrop-blur-xl"
        >
          {/* Subtle glow orb */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-perk/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
              <div className="max-w-2xl">
                <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-brand-perk text-[#14140F] mb-3 shadow-md">
                  ✨ Custom À La Carte Experience
                </span>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-3">
                  Design Every Single Detail of Your Event
                </h3>
                <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed">
                  Pick exactly what you want across our 5 master categories. Mix authentic catering, royal stage decor, artisanal cakes, live entertainment, and cinematic media with real-time price calculation.
                </p>
              </div>

              <div className="shrink-0">
                <Link href="/create-your-party">
                  <Button size="lg" className="w-full sm:w-auto bg-brand-perk text-[#14140F] hover:bg-[#a6e546] font-black text-base sm:text-lg md:text-xl px-8 sm:px-10 py-5 rounded-2xl shadow-[0_0_35px_rgba(190,255,80,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-3 border-none">
                    CREATE YOUR OWN PARTY
                    <ArrowRight className="w-6 h-6" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* 5 Master Categories Visual Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-6 border-t border-white/10">
              {masterCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <Link 
                    key={idx} 
                    href="/create-your-party"
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-perk hover:bg-white/10 transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-perk/10 border border-brand-perk/20 flex items-center justify-center text-brand-perk mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-brand-perk transition-colors">
                      {cat.name}
                    </div>
                    <div className="text-xs text-brand-perk mt-1 font-semibold">
                      {cat.startingPrice}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Master Categories Catalog Showcase Cards */}
        <div className="mb-10 text-center">
          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Explore Master Categories
          </h3>
          <p className="text-base text-white/70 font-medium max-w-2xl mx-auto">
            Browse our à la carte catalog to handpick each service for your celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {masterCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-3xl bg-[#141413] border border-white/10 hover:border-brand-perk/50 transition-all duration-300 overflow-hidden flex flex-col group shadow-xl hover:shadow-[0_0_30px_rgba(190,255,80,0.15)]"
              >
                {/* Image header */}
                <div className="relative h-52 w-full overflow-hidden bg-black/40">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black/70 backdrop-blur-md text-brand-perk border border-brand-perk/30 shadow-md">
                      {cat.tag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-brand-perk text-[#14140F] shadow-md">
                      {cat.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-perk/10 border border-brand-perk/20 flex items-center justify-center text-brand-perk shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-black text-white group-hover:text-brand-perk transition-colors">
                      {cat.name}
                    </h4>
                  </div>

                  <p className="text-white/70 text-sm font-medium leading-relaxed mb-5">
                    {cat.detail}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-white/5 pt-4 flex-grow">
                    {cat.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-xs text-white/80 font-medium">
                        <Check className="w-3.5 h-3.5 text-brand-perk shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/create-your-party" className="mt-auto">
                    <Button className="w-full py-3.5 text-sm font-black tracking-wide bg-white/10 text-white hover:bg-brand-perk hover:text-[#14140F] border border-white/15 transition-all flex items-center justify-center gap-2">
                      Customize in Studio
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom studio CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-brand-perk/15 via-white/5 to-brand-perk/10 border border-brand-perk/30 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Ready to Curate Your Celebration?
            </h4>
            <p className="text-sm sm:text-base text-white/75 font-medium">
              Choose your food counters, decor setup, designer cakes, DJ, and reels in real-time with instant pricing.
            </p>
          </div>

          <Link href="/create-your-party" className="shrink-0 w-full md:w-auto">
            <Button size="lg" className="w-full md:w-auto bg-brand-perk text-[#14140F] hover:bg-[#a6e546] font-black text-base px-8 py-4 rounded-2xl shadow-[0_0_25px_rgba(190,255,80,0.3)]">
              OPEN À LA CARTE STUDIO
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
