"use client";

import Link from "next/link";
import { 
  Sparkles, 
  Utensils, 
  Palette, 
  Cake, 
  Camera, 
  Music, 
  CheckCircle2, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  ArrowRight,
  MessageCircle,
  Users,
  Award,
  Zap,
  Sparkle
} from "lucide-react";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { getWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER } from "@/lib/whatsapp";

const offerings = [
  {
    icon: Utensils,
    title: "Gourmet Food & Live Counters",
    description: "From hot Vibe Boxes to sizzling live barbecue and multi-cuisine buffets prepared fresh by verified chefs.",
    badge: "Food & Bar",
    gradient: "from-[#FF5500]/15 to-transparent",
    border: "border-[#FF5500]/30",
    iconBg: "bg-[#FF5500]/20 text-[#FF8C5F]"
  },
  {
    icon: Palette,
    title: "Bespoke Themed Decor",
    description: "Immersive theme styling, neon signage, organic balloon arches, and photo backdrops that transform any space.",
    badge: "Decor & Styling",
    gradient: "from-purple-500/15 to-transparent",
    border: "border-purple-500/30",
    iconBg: "bg-purple-500/20 text-[#C8A0FF]"
  },
  {
    icon: Cake,
    title: "Custom Designer Cakes",
    description: "Artisanal handcrafted cakes customized to your party theme, flavor profile, and midnight celebration schedule.",
    badge: "Artisanal",
    gradient: "from-pink-500/15 to-transparent",
    border: "border-pink-500/30",
    iconBg: "bg-pink-500/20 text-[#FAB9FA]"
  },
  {
    icon: Camera,
    title: "Photo & Cinematic Video",
    description: "Pro photographers and videographers capturing candid moments, 4K cinematic reels, and drone coverage.",
    badge: "Media & Reels",
    gradient: "from-cyan-500/15 to-transparent",
    border: "border-cyan-500/30",
    iconBg: "bg-cyan-500/20 text-[#82DCFA]"
  },
  {
    icon: Music,
    title: "Live Activities & Entertainment",
    description: "VIP mixologists, craft mobile bars, high-energy DJs, emcees, live acoustic artists, and interactive party games.",
    badge: "Entertainment",
    gradient: "from-amber-500/15 to-transparent",
    border: "border-amber-500/30",
    iconBg: "bg-amber-500/20 text-[#FFBE00]"
  },
  {
    icon: ShieldCheck,
    title: "Dedicated Crew & Spotless Cleanup",
    description: "Our on-ground event crew manages delivery, setup, live hosting assistance, and complete post-party cleanup so the host enjoys zero hassle.",
    badge: "Included Standard",
    gradient: "from-brand-perk/15 to-transparent",
    border: "border-brand-perk/40",
    iconBg: "bg-brand-perk/20 text-brand-perk"
  }
];

const values = [
  {
    title: "One Single Point of Contact",
    description: "No more juggling 5 different vendor phone calls or WhatsApp groups. One dedicated event manager coordinates all food, decor, cakes, and artists."
  },
  {
    title: "Zero-Hassle Crew & Cleanup",
    description: "Our professional crew sets up before your guests arrive and conducts a spotless cleanup once the party ends, leaving your venue pristine."
  },
  {
    title: "Transparent & Flexible",
    description: "From intimate 10-person housewarmings to 300+ guest corporate galas, scale services with transparent pricing and no hidden charges."
  },
  {
    title: "500+ Celebrations Delivered",
    description: "Proven track record with top hosts, families, and fast-growing tech teams across Bangalore."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-white pt-32 sm:pt-40">
      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-5xl text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-brand-perk/10 border border-brand-perk/30 text-brand-perk px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-8 shadow-[0_0_20px_rgba(190,255,80,0.15)]">
          <Sparkles size={16} />
          One-Stop Event Solution
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
          Party tumhari. <br />
          <span className="text-brand-perk drop-shadow-[0_0_35px_rgba(190,255,80,0.4)]">
            Tension humari.
          </span>
        </h1>

        <p className="text-lg sm:text-2xl text-white/80 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          The Vibe House is your complete, end-to-end event experience partner. We believe hosting should be just as joyful as attending—eliminating vendor chaos so you can stop stressing and start celebrating.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl("Hi! I would like to learn more about planning an event with The Vibe House.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="w-full sm:w-auto bg-brand-perk text-[#14140F] font-bold text-base px-8 py-4 rounded-2xl hover:bg-[#a6e546] shadow-[0_0_25px_rgba(190,255,80,0.3)] transition-all flex items-center justify-center gap-3">
              <MessageCircle size={20} />
              Chat With Our Event Team
            </Button>
          </a>

          <Link href="/create-your-party" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-base px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
              Build Your Party Online
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* 5 Core Pillars Section */}
      <section className="container mx-auto px-6 max-w-6xl mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Everything Under One Roof
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            No more dealing with five separate vendors. We bring the entire celebration together seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`bg-[#141416] bg-gradient-to-br ${item.gradient} ${item.border} border rounded-3xl p-8 backdrop-blur-md hover:scale-[1.02] transition-transform shadow-xl flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center`}>
                      <Icon size={26} />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-white/60 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bangalore to Pan-Asia Footprint & Vision */}
      <section className="container mx-auto px-6 max-w-6xl mb-24">
        <div className="bg-[#141416] border border-white/10 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-perk/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#FF5500]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-brand-perk text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
                <Globe size={16} />
                Footprint & Vision
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Catering All Across Bangalore. <br />
                <span className="text-brand-perk">Expanding Pan-Asia.</span>
              </h2>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Today, The Vibe House proudly caters to homes, villas, corporate workspaces, and venues across the entirety of <strong className="text-white font-bold">Bangalore</strong>—including Indiranagar, Koramangala, Whitefield, HSR Layout, Sarjapur, and beyond.
              </p>
              <p className="text-white/75 text-base leading-relaxed">
                With a tech-driven operations model and uncompromising standards for food hygiene and aesthetic excellence, our mission is to scale this effortless celebration model to major metros across India and expand <strong className="text-brand-perk font-bold">Pan-Asia in the near future</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3 text-brand-perk">
                  <MapPin size={22} />
                  <span className="font-bold text-sm uppercase tracking-wider text-brand-perk">Current Base</span>
                </div>
                <p className="text-2xl font-black text-white mb-1">Bangalore</p>
                <p className="text-xs text-white/60 leading-relaxed">Full-service catering, decor, cakes, media & cleanup across all Bangalore zones.</p>
              </div>

              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3 text-brand-cyan">
                  <Globe size={22} />
                  <span className="font-bold text-sm uppercase tracking-wider text-[#82DCFA]">Next Horizon</span>
                </div>
                <p className="text-2xl font-black text-white mb-1">Pan-Asia</p>
                <p className="text-xs text-white/60 leading-relaxed">Scaling the seamless modern host experience across Asia.</p>
              </div>

              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3 text-[#FF8C5F]">
                  <Users size={22} />
                  <span className="font-bold text-sm uppercase tracking-wider text-[#FF8C5F]">Track Record</span>
                </div>
                <p className="text-2xl font-black text-white mb-1">500+ Events</p>
                <p className="text-xs text-white/60 leading-relaxed">From birthdays & game nights to high-end corporate parties.</p>
              </div>

              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3 text-[#FAB9FA]">
                  <ShieldCheck size={22} />
                  <span className="font-bold text-sm uppercase tracking-wider text-[#FAB9FA]">Execution</span>
                </div>
                <p className="text-2xl font-black text-white mb-1">100% Turnkey</p>
                <p className="text-xs text-white/60 leading-relaxed">We handle coordination from setup to cleanup so you enjoy the night.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vibe House Advantage */}
      <section className="container mx-auto px-6 max-w-6xl mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            The Vibe House Advantage
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Why Bangalore hosts trust us to run their most memorable celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div 
              key={v.title}
              className="bg-[#141416] border border-white/10 rounded-2xl p-6 sm:p-8 flex gap-5 items-start hover:border-brand-perk/40 transition-colors shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-perk/20 text-brand-perk flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="container mx-auto px-6 max-w-5xl mb-20 text-center">
        <div className="bg-gradient-to-r from-brand-perk/20 via-white/5 to-brand-perk/10 border border-brand-perk/30 rounded-3xl p-10 sm:p-16 backdrop-blur-md shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Ready to plan your next vibe?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 font-normal">
            Tell us about your occasion, guest count, and date. Our team will tailor the food, theme decor, cake, and entertainment to match your vision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hi The Vibe House team! I'm planning an event and would love to get a quote.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-brand-perk text-[#14140F] font-bold text-base px-8 py-4 rounded-xl hover:bg-[#a6e546] shadow-lg flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Book via WhatsApp ({WHATSAPP_DISPLAY_NUMBER})
              </Button>
            </a>
            <Link href="/create-your-party" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-base px-8 py-4 rounded-xl flex items-center justify-center gap-2">
                Create Your Party
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
