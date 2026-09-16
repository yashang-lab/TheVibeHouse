"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import {
  Utensils,
  Palette,
  Cake,
  GlassWater,
  Camera,
  Sparkles,
  Check,
  Plus,
  Trash2,
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  X,
  MessageCircle,
  Phone,
  Calendar,
  Users,
  ShieldCheck,
  Clock,
  ChevronDown
} from "lucide-react";

interface CatalogItem {
  id: string;
  category: "food" | "decor" | "cakes" | "activities" | "media";
  categoryName: string;
  title: string;
  tag: string;
  price: number;
  unit: string;
  image: string;
  description: string;
  features: string[];
}

const masterCategories = [
  { id: "all", label: "All Offerings", icon: Sparkles },
  { id: "food", label: "Food & Live Counters", icon: Utensils },
  { id: "decor", label: "Themed Decor", icon: Palette },
  { id: "cakes", label: "Premium Cakes", icon: Cake },
  { id: "activities", label: "Live Activities", icon: GlassWater },
  { id: "media", label: "Photo & Video", icon: Camera },
] as const;

const catalogItems: CatalogItem[] = [
  // FOOD
  {
    id: "food-1",
    category: "food",
    categoryName: "Food & Live Counters",
    title: "Royal Amritsari & North Indian Buffet",
    tag: "Chef Signature",
    price: 9750,
    unit: "Serves 15 Guests (Base)",
    image: "/catalog/food-buffet-chafing.jpg",
    description: "Authentic slow-cooked Dal Amritsari, Paneer Butter Masala, fragrant Jeera Rice, Tandoori Breads, and hot Gulab Jamun served in warm brass chafing dishes.",
    features: [
      "Dedicated butler & uniform server",
      "Traditional brass chafing dish setup",
      "Areca leaf eco-friendly dinnerware",
      "Freshly prepared hot live breads"
    ]
  },
  {
    id: "food-2",
    category: "food",
    categoryName: "Food & Live Counters",
    title: "Live Delhi Street Chaat & Tawa Station",
    tag: "Crowd Favorite",
    price: 4500,
    unit: "2-Hour Live Service",
    image: "/catalog/food-live-chaat.jpg",
    description: "Live station with crisp Pani Puri (3 flavored waters: spicy mint, sweet sonth, hing cumin), Sev Puri, Dahi Bhalla, and sizzling hot crispy Aloo Tikki prepared fresh.",
    features: [
      "Trained traditional chaat chef",
      "3 authentic artisanal pani flavors",
      "Fresh crisp puris & premium chutneys",
      "Hygiene-certified stainless counter"
    ]
  },
  {
    id: "food-3",
    category: "food",
    categoryName: "Food & Live Counters",
    title: "Artisanal Indian Mithai & Dessert Platter",
    tag: "Sweet Grandeur",
    price: 3200,
    unit: "Serves up to 25 Guests",
    image: "/catalog/food-dessert-station.jpg",
    description: "Kesar Malai Chamcham, Rasgulla, hot Jalebi with Rabri, and seasonal fresh fruit custard platter presented on elevated tiered brass stands with marigold accents.",
    features: [
      "4 authentic gourmet Indian sweets",
      "Tiered brass pedestals & marigold styling",
      "100% vegetarian & fresh preparation",
      "Serving tongs, napkins & cutlery"
    ]
  },

  // DECOR
  {
    id: "decor-1",
    category: "decor",
    categoryName: "Themed Decor",
    title: "Golden Shimmer Wall & Grand Stage Setup",
    tag: "Bestseller Stage",
    price: 8500,
    unit: "Full Stage Installation",
    image: "/catalog/decor-shimmer-stage.jpg",
    description: "High-reflective gold sequin shimmer backdrop with organic pastel balloon garland framing, warm LED uplighting, cake pedestals, and customized 3D neon acrylic name sign.",
    features: [
      "8x8 ft Premium reflective shimmer wall",
      "Custom 3D neon name sign included",
      "Organic balloon framing & cake plinth",
      "On-site installation & hassle-free dismantle"
    ]
  },
  {
    id: "decor-2",
    category: "decor",
    categoryName: "Themed Decor",
    title: "Aviator & Custom Kids Themed Backdrop",
    tag: "Thematic 3D Setup",
    price: 9500,
    unit: "Full Themed Stage",
    image: "/catalog/decor-theme-aviator.jpg",
    description: "Intricate 3D cloud cutouts, vintage propeller plane props, customized marquee milestone board, and cloud-finish balloon clusters for unforgettable kids celebrations.",
    features: [
      "Multi-layered themed 3D cutouts",
      "Customized milestone story board",
      "Thematic prop pedestals & cylinder stands",
      "Warm photo-ready focal spotlighting"
    ]
  },
  {
    id: "decor-3",
    category: "decor",
    categoryName: "Themed Decor",
    title: "Grand Entrance Balloon Arch & Welcome Easel",
    tag: "Entrance & Welcome",
    price: 3800,
    unit: "Entrance Experience",
    image: "/catalog/decor-balloon-arch.jpg",
    description: "Double-ring organic balloon arch at entrance foyer with customized printed acrylic welcome easel, fresh floral touches, and fairy twinkle lighting.",
    features: [
      "Grand organic entrance arch (6x7 ft)",
      "Customized welcome board on wooden easel",
      "Fairy twinkle lights & welcoming runner",
      "Zero wall-damage installation guarantee"
    ]
  },

  // PREMIUM CAKES
  {
    id: "cake-1",
    category: "cakes",
    categoryName: "Premium Cakes",
    title: "2-Tier Handcrafted Fairytale Castle Cake",
    tag: "Designer Tiered",
    price: 4200,
    unit: "2.5 kg Tiered Cake",
    image: "/catalog/cake-fairytale-castle.jpg",
    description: "Multi-tier architectural castle cake with edible sugar paste flowers, gold leaf dusting, and custom hand-piped celebratory nameplate. Choice of Belgian Truffle or Vanilla Berry.",
    features: [
      "2.5 kg handcrafted tiered cake",
      "Choice of 5 gourmet fillings",
      "Custom acrylic/gold leaf topper",
      "Sparkler candle & designer cutting knife"
    ]
  },
  {
    id: "cake-2",
    category: "cakes",
    categoryName: "Premium Cakes",
    title: "Safari Adventure Animal Themed Cake",
    tag: "Kids Favorite",
    price: 3800,
    unit: "2.0 kg Themed Cake",
    image: "/catalog/cake-safari-train.jpg",
    description: "Handcrafted jungle safari theme cake with edible hand-sculpted baby animals (lion, giraffe, elephant), miniature trees, and gold number accent.",
    features: [
      "2.0 kg pure chocolate truffle or butterscotch",
      "Hand-sculpted edible animal figurines",
      "100% eggless fresh bake guarantee",
      "Complimentary cake riser & candles"
    ]
  },
  {
    id: "cake-3",
    category: "cakes",
    categoryName: "Premium Cakes",
    title: "Artisanal Belgian Dark Chocolate Truffle Cake",
    tag: "Gourmet Decadence",
    price: 2400,
    unit: "1.5 kg Decadent Cake",
    image: "/catalog/cake-chocolate-truffle.jpg",
    description: "Rich 70% dark Belgian chocolate ganache cake adorned with fresh berries, edible gold leaf, and festive cake table presentation.",
    features: [
      "1.5 kg pure couverture chocolate",
      "Fresh seasonal berry & gold leaf garnish",
      "Silky melt-in-mouth ganache layers",
      "Elegant box packaging & party candles"
    ]
  },

  // LIVE ACTIVITIES
  {
    id: "act-1",
    category: "activities",
    categoryName: "Live Activities",
    title: "Live Flare Mocktail Bar & Mixologist",
    tag: "Interactive Bar",
    price: 5500,
    unit: "3 Hours Open Bar",
    image: "/catalog/activity-mocktail-bar.jpg",
    description: "Professional bartender crafting handcrafted signature mocktails (Smoked Cranberry, Blue Curacao Fizz, Spicy Chilli Guava) with illuminated bar counter and glassware.",
    features: [
      "Dedicated flair mixologist for 3 hours",
      "3 signature craft mocktails unlimited",
      "Complete glassware & bar garnish kit",
      "Illuminated party counter presentation"
    ]
  },
  {
    id: "act-2",
    category: "activities",
    categoryName: "Live Activities",
    title: "High-Energy Party DJ & Sound System",
    tag: "Dance Floor Hit",
    price: 7500,
    unit: "4 Hours Performance",
    image: "/catalog/activity-live-dj.jpg",
    description: "Professional event DJ with high-watt JBL party speakers, wireless mics, club party lights, and crowd-rocking Bollywood, Punjabi & English party setlist.",
    features: [
      "Pro party DJ with live mixing console",
      "2x 1000W JBL party audio system",
      "Sound-activated RGB strobe & laser lights",
      "Wireless handheld host mics"
    ]
  },
  {
    id: "act-3",
    category: "activities",
    categoryName: "Live Activities",
    title: "Interactive Party Host & Fun Games Emcee",
    tag: "Crowd Engagement",
    price: 4000,
    unit: "2.5 Hours Engagement",
    image: "/catalog/activity-party-games.jpg",
    description: "Charismatic emcee keeping both kids and adults energized with customized party games, dance-offs, musical chairs, and lively quiz rounds.",
    features: [
      "Bilingual high-energy event host",
      "Curated party game props & accessories",
      "Icebreakers, dance battles & competitions",
      "Award and prize handover coordination"
    ]
  },

  // MEDIA
  {
    id: "media-1",
    category: "media",
    categoryName: "Photography & Videography",
    title: "Candid & Traditional Event Photography",
    tag: "Memories Frozen",
    price: 4500,
    unit: "3 Hours Coverage",
    image: "/catalog/media-candid-photo.jpg",
    description: "Full coverage by a professional DSLR photographer capturing genuine family moments, candid laughs, group portraits, and decor details.",
    features: [
      "Dedicated professional DSLR photographer",
      "150+ color-graded high-resolution photos",
      "Private password-protected cloud gallery",
      "15 teaser photos delivered next day"
    ]
  },
  {
    id: "media-2",
    category: "media",
    categoryName: "Photography & Videography",
    title: "4K Cinematic Highlight Video",
    tag: "Cinematic Film",
    price: 6500,
    unit: "3 Hours Video Coverage",
    image: "/catalog/media-cinematic-video.jpg",
    description: "Gimbal-stabilized 4K cinematic film capturing the event's rhythm, family emotions, cake cutting, and high-energy party highlights.",
    features: [
      "Gimbal-stabilized 4K cinema setup",
      "3-4 minute color-graded highlight film",
      "Licensed upbeat background soundtrack",
      "Delivered within 5 business days"
    ]
  },
  {
    id: "media-3",
    category: "media",
    categoryName: "Photography & Videography",
    title: "Trending Instagram Reels Creator",
    tag: "Social Media Ready",
    price: 3500,
    unit: "Same-Day Delivery",
    image: "/catalog/media-viral-reels.jpg",
    description: "Dedicated smartphone content creator capturing viral vertical clips, transitions, and trending audio reels ready to post on Instagram within 24 hours.",
    features: [
      "Dedicated on-site vertical reel creator",
      "3 professionally edited Instagram reels",
      "Trending music sync & cinematic grading",
      "All raw clips shared via AirDrop/Drive"
    ]
  }
];

export default function CreateYourPartyPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [guestCount, setGuestCount] = useState<number>(15);
  const [eventDate, setEventDate] = useState<string>("");
  const [eventArea, setEventArea] = useState<string>("");

  const toggleItem = (id: string) => {
    setSelectedItemIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const removeItem = (id: string) => {
    setSelectedItemIds((prev) => prev.filter((item) => item !== id));
  };

  const clearAll = () => {
    setSelectedItemIds([]);
  };

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return catalogItems;
    return catalogItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const selectedItems = useMemo(() => {
    return catalogItems.filter((item) => selectedItemIds.includes(item.id));
  }, [selectedItemIds]);

  const totalPrice = useMemo(() => {
    return selectedItems.reduce((acc, item) => acc + item.price, 0);
  }, [selectedItems]);

  const categorySelectedCount = (catId: string) => {
    if (catId === "all") return selectedItemIds.length;
    return selectedItems.filter((item) => item.category === catId).length;
  };

  const generateWhatsAppMessage = () => {
    if (selectedItems.length === 0) return "";
    
    let msg = "👋 Hi Vibe House team! I created my custom party on your website:\n\n";
    msg += "🎉 *MY CUSTOM CURATION:*\n";
    selectedItems.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.title}* (${item.categoryName}) — ₹${item.price.toLocaleString("en-IN")}\n`;
    });
    
    msg += `\n💰 *Estimated Total: ₹${totalPrice.toLocaleString("en-IN")}*\n`;
    if (guestCount) msg += `👥 *Expected Guests:* ~${guestCount}\n`;
    if (eventDate) msg += `📅 *Preferred Date:* ${eventDate}\n`;
    if (eventArea) msg += `📍 *Location / Area:* ${eventArea}\n`;
    msg += "\nPlease let me know if this date is available to book! 🚀";

    return encodeURIComponent(msg);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`;

  return (
    <main className="min-h-screen bg-[#0C0C0B] text-white flex flex-col selection:bg-brand-perk selection:text-[#14140F]">

      {/* Hero Header Section */}
      <section className="pt-36 pb-12 px-4 sm:px-6 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-perk/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Breadcrumb / Back Link */}
          <div className="mb-6">
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 text-white/60 hover:text-brand-perk transition-colors font-medium text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-brand-perk/30"
            >
              <ArrowLeft size={16} />
              Back to Pricing & Packages
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-white/10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-perk/10 border border-brand-perk/30 text-brand-perk font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(190,255,80,0.15)]">
                <Sparkles size={14} />
                À La Carte Party Studio
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] mb-4 text-white">
                Build Your Own <span className="text-brand-perk drop-shadow-[0_0_20px_rgba(190,255,80,0.35)]">Dream Party</span>
              </h1>

              <p className="text-white/75 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                Mix and match authentic Indian street chaat, royal shimmer decor, handcrafted cakes, live DJs, and viral reels. Select exactly what you need with 100% price transparency.
              </p>
            </div>

            {/* Quick Summary Pill on Desktop */}
            <div className="hidden lg:flex flex-col items-end shrink-0">
              <div className="bg-[#181816] border border-white/15 p-4 rounded-2xl shadow-xl min-w-[240px]">
                <div className="text-xs text-white/60 font-semibold uppercase tracking-wider mb-1">
                  Selected Items: <span className="text-brand-perk font-black">{selectedItems.length}</span>
                </div>
                <div className="text-2xl font-black text-white">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </div>
                {selectedItems.length > 0 && (
                  <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="mt-2 text-xs font-bold text-brand-perk hover:underline flex items-center gap-1"
                  >
                    View Selection <ChevronDown size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs Filter */}
      <section className="sticky top-20 z-30 bg-[#0C0C0B]/90 backdrop-blur-md border-y border-white/10 py-4 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            {masterCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              const count = categorySelectedCount(cat.id);

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                    isActive
                      ? "bg-brand-perk text-[#14140F] shadow-[0_0_20px_rgba(190,255,80,0.3)] scale-105"
                      : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <Icon size={16} />
                  <span>{cat.label}</span>
                  {count > 0 && (
                    <span
                      className={`ml-1 text-[11px] font-black px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-[#14140F] text-brand-perk"
                          : "bg-brand-perk text-[#14140F]"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catalog Grid Section */}
      <section className="py-12 px-4 sm:px-6 flex-grow">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <span>Showing {filteredItems.length} Offerings</span>
              {activeCategory !== "all" && (
                <span className="text-sm font-medium text-white/50">
                  in {masterCategories.find((c) => c.id === activeCategory)?.label}
                </span>
              )}
            </h2>

            {selectedItems.length > 0 && (
              <button
                onClick={clearAll}
                className="text-xs font-bold text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 bg-red-500/10 px-3 py-1.5 rounded-full border border-red-500/20"
              >
                <Trash2 size={13} />
                Clear Selection
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              const isSelected = selectedItemIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  className={`rounded-3xl bg-[#141413] border transition-all duration-300 overflow-hidden flex flex-col group relative ${
                    isSelected
                      ? "border-brand-perk shadow-[0_0_30px_rgba(190,255,80,0.2)] bg-[#171a13]"
                      : "border-white/10 hover:border-white/25 hover:bg-[#181816]"
                  }`}
                >
                  {/* Image Container with Badges */}
                  <div className="relative h-60 w-full overflow-hidden bg-black/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-transparent to-black/30" />

                    {/* Tag badge */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black/70 backdrop-blur-md text-brand-perk border border-brand-perk/30 shadow-md">
                        {item.tag}
                      </span>
                    </div>

                    {/* Category pill */}
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/10 backdrop-blur-md text-white/90 border border-white/15">
                        {item.categoryName}
                      </span>
                    </div>

                    {/* Selected badge overlay */}
                    {isSelected && (
                      <div className="absolute bottom-3 right-3 bg-brand-perk text-[#14140F] font-black text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                        <Check size={14} className="stroke-[3]" />
                        Selected
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-black text-white leading-snug group-hover:text-brand-perk transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-white/70 text-sm leading-relaxed mb-5 font-medium">
                      {item.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-white/80 font-medium">
                          <Check size={14} className="text-brand-perk shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Price & Add CTA */}
                    <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-white/50 font-bold">
                          {item.unit}
                        </div>
                        <div className="text-2xl font-black text-white tracking-tight">
                          ₹{item.price.toLocaleString("en-IN")}
                        </div>
                      </div>

                      <button
                        onClick={() => toggleItem(item.id)}
                        className={`px-5 py-3 rounded-2xl font-black text-sm transition-all duration-200 flex items-center gap-2 active:scale-95 ${
                          isSelected
                            ? "bg-brand-perk text-[#14140F] hover:bg-[#a6e546] shadow-[0_0_20px_rgba(190,255,80,0.35)]"
                            : "bg-white/10 text-white hover:bg-brand-perk hover:text-[#14140F] border border-white/15"
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check size={16} className="stroke-[3]" />
                            Added
                          </>
                        ) : (
                          <>
                            <Plus size={16} />
                            Add to Party
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating Bottom Cart / Sticky Summary Bar */}
      <AnimatePresence>
        {selectedItems.length > 0 && (
          <motion.aside
            aria-label="Party selection bar"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-[#141412]/95 backdrop-blur-xl border-t border-brand-perk/40 shadow-[0_-10px_40px_rgba(0,0,0,0.7)] py-4 px-4 sm:px-8"
          >
            <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="flex items-center gap-3 text-left group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-perk text-[#14140F] flex items-center justify-center font-black text-lg shadow-md group-hover:scale-105 transition-transform">
                    <ShoppingBag size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-brand-perk font-bold uppercase tracking-wider flex items-center gap-1">
                      <span>{selectedItems.length} {selectedItems.length === 1 ? "Item" : "Items"} Selected</span>
                      <span className="text-white/40">• Click to inspect</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white">
                      ₹{totalPrice.toLocaleString("en-IN")} <span className="text-xs font-medium text-white/50">(Estimated)</span>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="sm:hidden text-xs font-bold text-white/80 bg-white/10 px-3 py-2 rounded-xl"
                >
                  View Details
                </button>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="hidden md:flex items-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-colors"
                >
                  Review Items
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow sm:flex-grow-0 px-7 py-3.5 rounded-2xl font-black text-sm sm:text-base bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-[0_0_25px_rgba(37,211,102,0.35)] transition-all flex items-center justify-center gap-2.5 active:scale-95 text-center"
                >
                  <MessageCircle size={20} className="fill-white" />
                  Book Party via WhatsApp
                </a>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Review Drawer / Slide-Over Modal */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Slide-over panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-y-0 right-0 max-w-full flex pl-10"
            >
              <div className="w-screen max-w-md bg-[#161614] border-l border-white/15 flex flex-col shadow-2xl">
                {/* Drawer Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-perk/10 border border-brand-perk/30 flex items-center justify-center text-brand-perk">
                      <ShoppingBag size={18} />
                    </div>
                    <div>
                      <h3 className="font-black text-lg text-white">Your Custom Party</h3>
                      <p className="text-xs text-white/50">{selectedItems.length} services chosen</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Drawer Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {selectedItems.length === 0 ? (
                    <div className="text-center py-16">
                      <Sparkles size={36} className="mx-auto text-white/30 mb-3" />
                      <h4 className="font-bold text-white text-base mb-1">No services selected yet</h4>
                      <p className="text-xs text-white/50 max-w-xs mx-auto">
                        Browse the à la carte catalog to pick food counters, decor setups, cakes, DJ, and reels.
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* Item list */}
                      <div className="space-y-3">
                        {selectedItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 relative group"
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-16 h-16 rounded-xl object-cover shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <span className="text-[10px] font-bold text-brand-perk uppercase tracking-wider block">
                                {item.categoryName}
                              </span>
                              <h4 className="text-sm font-bold text-white truncate">{item.title}</h4>
                              <div className="text-sm font-black text-white/90">
                                ₹{item.price.toLocaleString("en-IN")}
                              </div>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-white/40 hover:text-red-400 p-2 transition-colors"
                              title="Remove item"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Optional Party Details */}
                      <div className="pt-4 border-t border-white/10 space-y-3">
                        <h4 className="text-xs font-black uppercase tracking-wider text-white/70">
                          Party Details (Optional)
                        </h4>

                        <div>
                          <label className="text-[11px] font-semibold text-white/60 block mb-1">
                            Expected Guests
                          </label>
                          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                            <Users size={16} className="text-brand-perk" />
                            <input
                              type="number"
                              min="5"
                              max="500"
                              value={guestCount}
                              onChange={(e) => setGuestCount(Number(e.target.value))}
                              className="bg-transparent text-sm text-white w-full outline-none font-medium"
                              placeholder="15"
                            />
                            <span className="text-xs text-white/40">people</span>
                          </div>
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-white/60 block mb-1">
                            Event Date
                          </label>
                          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                            <Calendar size={16} className="text-brand-perk" />
                            <input
                              type="date"
                              value={eventDate}
                              onChange={(e) => setEventDate(e.target.value)}
                              className="bg-transparent text-sm text-white w-full outline-none font-medium"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-white/60 block mb-1">
                            Location / Area in Bangalore
                          </label>
                          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                            <ShieldCheck size={16} className="text-brand-perk" />
                            <input
                              type="text"
                              value={eventArea}
                              onChange={(e) => setEventArea(e.target.value)}
                              className="bg-transparent text-sm text-white w-full outline-none font-medium"
                              placeholder="e.g. Indiranagar, Whitefield, HSR"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Drawer Footer */}
                {selectedItems.length > 0 && (
                  <div className="p-6 border-t border-white/10 bg-[#121210] space-y-4">
                    <div className="flex justify-between items-center text-sm text-white/70 font-medium">
                      <span>Services Selected</span>
                      <span>{selectedItems.length}</span>
                    </div>

                    <div className="flex justify-between items-center text-lg font-black text-white pt-2 border-t border-white/5">
                      <span>Estimated Subtotal</span>
                      <span className="text-2xl text-brand-perk">
                        ₹{totalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <p className="text-[11px] text-white/50 leading-tight">
                      * Taxes, logistics & exact timing confirmed with our Bangalore party coordinator before payment.
                    </p>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-2xl font-black text-base bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-[0_0_25px_rgba(37,211,102,0.35)] transition-all flex items-center justify-center gap-2 text-center active:scale-95"
                    >
                      <MessageCircle size={20} className="fill-white" />
                      Send Manifest on WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
