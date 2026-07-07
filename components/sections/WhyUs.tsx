"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Sparkles, MessageSquare } from "lucide-react";

const reasons = [
  {
    icon: <Clock />,
    title: "No vendor coordination",
    description: "Stop juggling caterers, decorators, and bartenders. We manage everyone."
  },
  {
    icon: <Sparkles />,
    title: "Premium Experience",
    description: "Restaurant-quality food and instagram-worthy decor, right in your living room."
  },
  {
    icon: <Shield />,
    title: "Transparent Pricing",
    description: "No hidden fees. You know exactly what you're paying for upfront."
  },
  {
    icon: <MessageSquare />,
    title: "Dedicated Party Planner",
    description: "Your personal expert is just a WhatsApp message away to help you plan."
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#0a0a0c] text-white relative overflow-hidden border-t border-white/5">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4 uppercase tracking-tight">Why people love TVH</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We've revolutionized how people host at home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div 
              key={i}
              className="bg-[#161618] border border-white/5 p-8 rounded-3xl backdrop-blur-md hover:bg-[#1c1c1f] transition-all hover:border-brand/30 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center text-brand mb-6 border border-brand/20">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
