"use client";

import { CheckCircle2 } from "lucide-react";

const items = [
  "Food",
  "Decor",
  "Chefs",
  "Bartenders",
  "Cleanup",
  "Games",
  "Return Gifts"
];

export default function TrustBar() {
  return (
    <div className="bg-brand text-white py-6 border-y border-white/10 shadow-premium">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-shrink-0 font-black text-2xl uppercase tracking-tight">
            Everything you need. <br />
            <span className="text-white/80 font-medium text-sm tracking-normal capitalize">One booking.</span>
          </div>
          
          <div className="w-full overflow-hidden">
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end gap-x-8 gap-y-4">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-white" />
                  <span className="font-bold whitespace-nowrap text-lg uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
