"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleMockSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 p-4"
          >
            <div className="bg-[#111111] border border-white/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-perk/20 rounded-full blur-[100px] pointer-events-none" />

              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
                  {isLogin ? "Welcome back." : "Join the vibe."}
                </h2>
                <p className="text-white/60">
                  {isLogin ? "Sign in to manage your bookings." : "Create an account to start hosting."}
                </p>
              </div>

              {/* Form fields (Placeholder for future email/pass implementation) */}
              <div className="space-y-4 mb-6">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-perk/50 transition-colors"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-perk/50 transition-colors"
                  />
                </div>
              </div>

              <Button className="w-full font-bold bg-brand-perk text-[#14140F] hover:bg-[#a6e546] border-none mb-6">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>

              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <span className="relative bg-[#111111] px-4 text-xs text-white/40 uppercase tracking-widest font-semibold">Or</span>
              </div>

              {/* Google Sign In */}
              <button 
                onClick={handleMockSignIn}
                disabled={loading}
                className="w-full bg-white text-black font-bold rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                {loading ? "Signing in..." : "Continue with Google"}
              </button>

              <div className="mt-8 text-center">
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
