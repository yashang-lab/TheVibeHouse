"use client";

import { motion } from "framer-motion";
import Button from "../Button";
import Link from "next/link";
import { Check, Sparkles, Utensils, Camera, Palette, Star, ArrowRight, Cake, Music, GlassWater } from "lucide-react";

const masterCategories = [
  {
    icon: Utensils,
    name: "Food & Live Counters",
    detail: "Buffets, live chaat, desserts & gourmet boxes"
  },
  {
    icon: Palette,
    name: "Themed Decor",
    detail: "Shimmer walls, balloon arches & stage styling"
  },
  {
    icon: Cake,
    name: "Premium Cakes",
    detail: "Handcrafted 2-tier themed & chocolate truffle cakes"
  },
  {
    icon: GlassWater,
    name: "Live Activities",
    detail: "Flair mixologist bar, DJ sound & party host"
  },
  {
    icon: Camera,
    name: "Photo & Video",
    detail: "Candid photographers, 4K cinematic film & viral reels"
  }
];

const packages = [
  {
    tier: "Silver Package",
    emoji: "🥈",
    badgeColor: "border-slate-300/30 text-slate-200",
    price: "₹8,999",
    totalValue: "₹8,999",
    people: "Food for 6 People",
    tagline: "Perfect for birthdays & intimate celebrations",
    description: "Budget-friendly, ideal for birthdays and small celebrations with essential decor & photos.",
    isPopular: false,
    sections: [
      {
        title: "Decor",
        icon: Palette,
        worth: "Worth ₹2,500",
        items: [
          "Basic Balloon Decor",
          "Welcome Board",
          "Fairy Lights",
          "Table Styling"
        ]
      },
      {
        title: "Food (6 People)",
        icon: Utensils,
        worth: "Worth ₹3,499",
        items: [
          "2 Starters",
          "3 Main Course Items",
          "1 Rice",
          "Assorted Breads",
          "1 Dessert"
        ]
      },
      {
        title: "Photography",
        icon: Camera,
        worth: "Worth ₹3,000",
        items: [
          "Professional Photographer",
          "3 Hours Coverage",
          "80+ Edited Photos"
        ]
      }
    ]
  },
  {
    tier: "Gold Package",
    emoji: "🥇",
    badgeColor: "border-brand-perk text-brand-perk",
    price: "₹17,999",
    totalValue: "₹18,000",
    people: "Food for 12 People",
    tagline: "Perfect for house parties & family gatherings",
    description: "Roughly 2× Silver but feels significantly more premium—making it the ultimate value pick.",
    isPopular: true,
    popularBadge: "MOST POPULAR • BEST VALUE",
    sections: [
      {
        title: "Decor",
        icon: Palette,
        worth: "Worth ₹5,000",
        items: [
          "Premium Theme Decor",
          "Balloon Arch",
          "Backdrop Setup",
          "Fairy Lights",
          "Neon Sign",
          "Table Styling",
          "Entrance Decor"
        ]
      },
      {
        title: "Food (12 People)",
        icon: Utensils,
        worth: "Worth ₹7,000",
        items: [
          "4 Starters",
          "5 Main Course Items",
          "2 Rice Varieties",
          "Breads",
          "Live Chaat Counter / Pasta Station",
          "2 Desserts",
          "Soft Drinks"
        ]
      },
      {
        title: "Photography",
        icon: Camera,
        worth: "Worth ₹6,000",
        items: [
          "Professional Photographer",
          "4 Hours Coverage",
          "150+ Edited Photos",
          "1 Highlight Reel (30–45 sec)"
        ]
      }
    ]
  },
  {
    tier: "Platinum Package",
    emoji: "💎",
    badgeColor: "border-purple-400 text-purple-300",
    price: "₹29,999",
    totalValue: "₹30,000",
    people: "Food for 20 People",
    tagline: "The complete Vibe House experience",
    description: "For hosts who want a hassle-free, Instagram-worthy event with premium decor & content creation.",
    isPopular: false,
    popularBadge: "VIP EXPERIENCE",
    sections: [
      {
        title: "Decor",
        icon: Palette,
        worth: "Worth ₹8,000",
        items: [
          "Luxury Theme Decor",
          "Premium Balloon Installation",
          "Customized Backdrop",
          "Neon Sign",
          "LED Mood Lighting",
          "Cake Table Styling",
          "Entrance Decor",
          "Floral Elements",
          "Premium Table Decor"
        ]
      },
      {
        title: "Food (20 People)",
        icon: Utensils,
        worth: "Worth ₹12,000",
        items: [
          "5 Premium Starters",
          "7 Main Course Items",
          "2 Rice Varieties",
          "Assorted Breads",
          "Live Counter",
          "Mocktail Station",
          "3 Desserts",
          "Midnight Snacks"
        ]
      },
      {
        title: "Photography",
        icon: Camera,
        worth: "Worth ₹10,000",
        items: [
          "Professional Photographer",
          "5 Hours Coverage",
          "250+ Edited Photos",
          "Cinematic Highlight Video",
          "2 Instagram Reels",
          "Same-Day Preview"
        ]
      }
    ]
  }
];

export default function Packages() {
  return (
    <section id="pricing" className="py-24 relative transparent scroll-mt-24">
      {/* Anchor alias for packages */}
      <div id="packages" className="absolute -top-24 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Big Main Section Header */}
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
            Select food, theme, cakes, activities, and media à la carte—or choose an all-inclusive ready package.
          </motion.p>
        </div>

        {/* Hero A La Carte CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 rounded-[2.5rem] bg-gradient-to-br from-[#1F2614]/90 via-[#141414]/95 to-[#161616]/95 border-2 border-brand-perk/50 p-6 sm:p-10 lg:p-12 shadow-[0_0_50px_rgba(190,255,80,0.15)] relative overflow-hidden backdrop-blur-xl"
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
                  Select your food menu, theme decor, designer cakes, live activities, and media coverage line-by-line with real-time price calculation.
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
                    <div className="text-xs text-white/60 mt-1 font-medium leading-relaxed hidden sm:block">
                      {cat.detail}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Pre-curated Packages Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
            Prefer An All-In-One Bundle?
          </h3>
          <p className="text-sm sm:text-base text-white/70 font-medium">
            Choose from our pre-curated transparent packages with zero hidden fees.
          </p>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`rounded-[2.5rem] bg-[#121212]/90 backdrop-blur-md border flex flex-col p-8 relative shadow-2xl transition-all duration-500 hover:border-white/30 ${
                pkg.isPopular 
                  ? 'border-2 border-brand-perk shadow-[0_0_40px_rgba(190,255,80,0.2)] lg:-translate-y-4 bg-[#161811]/95' 
                  : 'border-white/10'
              }`}
            >
              {/* Top Popular / Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-perk text-[#14140F] text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1.5 whitespace-nowrap z-20">
                  <Sparkles className="w-3.5 h-3.5" />
                  {pkg.popularBadge}
                </div>
              )}

              {/* Package Title & Header */}
              <div className="mb-6 pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{pkg.emoji}</span>
                  <span className="text-xs font-bold text-white/50 uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    Valued at {pkg.totalValue}
                  </span>
                </div>
                
                <h3 className="text-3xl font-black text-white tracking-tight mb-2">
                  {pkg.tier}
                </h3>
                
                <p className="text-xs text-white/70 font-semibold mb-4 leading-relaxed">
                  {pkg.tagline}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 pt-4 border-t border-white/10">
                  <span className="text-4xl md:text-5xl font-black text-brand-perk tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-xs font-semibold text-white/60">
                    ({pkg.people})
                  </span>
                </div>
              </div>

              {/* Categorized Inclusions (Decor, Food, Photography) */}
              <div className="space-y-6 mb-8 flex-1">
                {pkg.sections.map((sec, idx) => {
                  const Icon = sec.icon;
                  return (
                    <div key={idx} className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-brand-perk" />
                          <span className="text-sm font-bold text-white uppercase tracking-wider">{sec.title}</span>
                        </div>
                        <span className="text-[11px] font-semibold text-brand-perk bg-brand-perk/10 px-2 py-0.5 rounded-md">
                          {sec.worth}
                        </span>
                      </div>
                      
                      <ul className="space-y-2">
                        {sec.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-xs text-white/80 font-medium">
                            <Check className="w-3.5 h-3.5 text-brand-perk shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Card Footer Action */}
              <div className="pt-6 border-t border-white/10 mt-auto">
                <Button className={`w-full py-4 text-base font-black tracking-wider uppercase transition-all shadow-xl ${
                  pkg.isPopular 
                    ? 'bg-brand-perk text-[#14140F] hover:bg-[#a6e546] shadow-[0_0_20px_rgba(190,255,80,0.3)]' 
                    : 'bg-white text-black hover:bg-gray-100'
                }`}>
                  Select {pkg.tier}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why this pricing works - Trust Bar */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
          <h4 className="text-xl font-black text-white mb-6 uppercase tracking-wider text-center">
            💡 Why Our Packages Work
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/40 p-5 rounded-2xl border border-white/10">
              <span className="text-lg mb-2 block text-white font-bold">🥈 Silver (₹8,999)</span>
              <p className="text-xs text-white/80 leading-relaxed font-medium">
                Budget-friendly, ideal for birthdays and small celebrations.
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-2xl border border-brand-perk/40 shadow-[0_0_15px_rgba(190,255,80,0.15)]">
              <span className="text-lg mb-2 block text-brand-perk font-bold">🥇 Gold (₹17,999)</span>
              <p className="text-xs text-white/80 leading-relaxed font-medium">
                Roughly 2× Silver but feels significantly more premium, making it the best value pick.
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-2xl border border-white/10">
              <span className="text-lg mb-2 block text-cyan-300 font-bold">💎 Platinum (₹29,999)</span>
              <p className="text-xs text-white/80 leading-relaxed font-medium">
                Targets hosts who want a hassle-free, Instagram-worthy event with premium decor & content.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
