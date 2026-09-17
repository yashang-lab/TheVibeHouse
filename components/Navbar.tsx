"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navItems = ["About Us", "Testimonials", "Pricing", "Why Us", "App", "FAQ"];
  const getHref = (item: string) => {
    if (item === "About Us") return "/about";
    const hash = `#${item.toLowerCase().replace(/\s+/g, '-')}`;
    return pathname === "/" ? hash : `/${hash}`;
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40">
        <header
          className={`transition-all duration-300 ${
            isScrolled ? "bg-[#1A1A1A]/95 backdrop-blur-md rounded-full m-3 max-w-6xl mx-auto px-2 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10" : "bg-transparent py-3 border border-transparent m-0"
          }`}
        >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
            <div className="h-10 w-10 md:h-12 md:w-12 shrink-0 rounded-full overflow-hidden shadow-[0_0_10px_rgba(255,255,255,0.1)] border border-white/20 flex items-center justify-center bg-white">
              <img 
                src="/logo-light-mode.png" 
                alt="The Vibe House Logo" 
                className="w-[120%] h-[120%] object-cover"
              />
            </div>
            <span className="hidden sm:block font-black text-white text-base md:text-lg tracking-tight">
              THE VIBE HOUSE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item === "About Us" && pathname === "/about";
              return (
                <Link 
                  key={item} 
                  href={getHref(item)}
                  className={`text-sm font-semibold transition-colors ${
                    isActive ? "text-brand-perk" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="font-semibold bg-brand-perk text-[#14140F] hover:bg-[#a6e546] shadow-md border-none cursor-pointer">
                Book Event
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#111111] border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl rounded-b-3xl">
            {navItems.map((item) => {
              const isActive = item === "About Us" && pathname === "/about";
              return (
                <Link 
                  key={item} 
                  href={getHref(item)}
                  className={`text-lg font-semibold py-2 border-b border-white/5 transition-colors ${
                    isActive ? "text-brand-perk" : "text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
            <div className="flex flex-col gap-2 mt-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full justify-center bg-brand-perk text-[#14140F] font-semibold border-none">
                  Book Event
                </Button>
              </a>
            </div>
          </div>
        )}
        </header>
      </div>
    </>
  );
}
