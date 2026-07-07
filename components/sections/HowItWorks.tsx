"use client";

import { motion } from "framer-motion";
import { MousePointerClick, Settings, Coffee, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: <MousePointerClick className="w-10 h-10 text-brand" />,
    title: "Choose your party",
    description: "Browse our curated packages or tell us what you have in mind.",
  },
  {
    icon: <Settings className="w-10 h-10 text-brand-accent" />,
    title: "Customize everything",
    description: "Select your menu, decor theme, and add-ons like bartenders or games.",
  },
  {
    icon: <Coffee className="w-10 h-10 text-brand" />,
    title: "Relax while we prepare",
    description: "Our professionals arrive early to set up everything perfectly.",
  },
  {
    icon: <PartyPopper className="w-10 h-10 text-brand-accent" />,
    title: "Enjoy with your guests",
    description: "You focus on hosting. We handle the service, food, and the cleanup.",
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#09090b] relative border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4 uppercase tracking-tight">How it Works</h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Hosting an amazing party shouldn't be stressful. Here's how we make it effortless.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="group bg-[#161618] rounded-3xl p-8 hover:bg-[#1a1a1c] transition-all duration-300 border border-white/5 hover:border-brand/30 relative overflow-hidden shadow-lg"
            >
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-brand/10 rounded-full group-hover:scale-150 transition-transform duration-500 blur-2xl" />
              
              <div className="w-20 h-20 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
              <p className="text-text-muted relative z-10">{step.description}</p>
              
              {/* Step number watermark */}
              <div className="absolute -bottom-4 right-4 text-9xl font-black text-white/5 group-hover:text-brand/10 transition-colors z-0 pointer-events-none">
                {i + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
