"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, User as UserIcon, LogOut } from "lucide-react";
import Button from "./Button";
import Link from "next/link";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      
      <motion.div
        className="fixed top-0 left-0 right-0 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <header
          className={`transition-all duration-300 ${
            isScrolled ? "bg-[#1A1A1A] rounded-full m-4 px-2 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10" : "bg-transparent py-6 border border-transparent m-0"
          }`}
        >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform">
            <div className="h-20 w-20 md:h-24 md:w-24 shrink-0 rounded-full overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)] border-2 border-white/10 flex items-center justify-center bg-white">
              <img 
                src="/logo-light-mode.png" 
                alt="The Vibe House Logo" 
                className="w-[120%] h-[120%] object-cover"
              />
            </div>
            <span className="hidden sm:block font-black text-white text-xl md:text-2xl tracking-tight">
              THE VIBE HOUSE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Services", "Packages", "Why Us", "App", "FAQ"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => setIsAuthModalOpen(true)}
              className="text-white hover:text-brand-perk font-semibold"
            >
              Log In
            </Button>
            <Button className="font-semibold bg-brand-perk text-[#14140F] hover:bg-[#a6e546] shadow-md border-none">Book Event</Button>
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
            {["Services", "Packages", "Why Us", "App", "FAQ"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-lg font-semibold text-white py-2 border-b border-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Button 
                variant="outline" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAuthModalOpen(true);
                }} 
                className="w-full justify-center font-semibold border-white/20 text-white"
              >
                Log In
              </Button>
              <Button className="w-full justify-center bg-brand-perk text-[#14140F] font-semibold border-none">Book Event</Button>
            </div>
          </div>
        )}
        </header>
      </motion.div>
    </>
  );
}
