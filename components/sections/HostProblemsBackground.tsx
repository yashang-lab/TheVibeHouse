import { motion } from "framer-motion";
import { Frown } from "lucide-react";

export default function HostProblemsBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#E8E8DE] flex items-center justify-center opacity-30 pointer-events-none select-none">
      
      {/* SVG Chaotic Lines */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <path 
          d="M 20% 20% C 30% 10%, 40% 50%, 50% 50% C 60% 50%, 40% 80%, 20% 80% C 10% 80%, 30% 30%, 20% 20%" 
          fill="none" 
          stroke="#A67B5B" 
          strokeWidth="2" 
          className="opacity-50"
        />
        <path 
          d="M 80% 20% C 70% 10%, 60% 40%, 50% 50% C 40% 60%, 70% 90%, 80% 80% C 90% 70%, 60% 30%, 80% 20%" 
          fill="none" 
          stroke="#A67B5B" 
          strokeWidth="2" 
          className="opacity-50"
        />
        <path 
          d="M 50% 50% C 30% 20%, 70% 20%, 80% 50% C 90% 80%, 10% 80%, 20% 50% C 30% 20%, 50% 50%, 50% 50%" 
          fill="none" 
          stroke="#A67B5B" 
          strokeWidth="2" 
          className="opacity-50"
        />
        <path 
          d="M 20% 20% Q 50% -10% 80% 20% T 80% 80% T 20% 80% T 20% 20%" 
          fill="none" 
          stroke="#A67B5B" 
          strokeWidth="1.5" 
          className="opacity-30"
        />
        <path 
          d="M 10% 50% Q 30% 100% 50% 50% T 90% 50% Q 70% 0% 50% 50% T 10% 50%" 
          fill="none" 
          stroke="#A67B5B" 
          strokeWidth="1.5" 
          className="opacity-30"
        />
      </svg>

      {/* Nodes Container */}
      <div className="relative w-full max-w-6xl h-full min-h-[800px] mx-auto">
        
        {/* Center Node: Stressed Host */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#E8E8DE] border-2 border-[#A67B5B] rounded-full flex flex-col items-center justify-center z-10 shadow-lg">
          <div className="relative">
            <Frown className="w-16 h-16 text-[#4A4A4A] mb-1" />
            <svg className="absolute -top-6 -left-4 w-24 h-10 text-[#4A4A4A]" viewBox="0 0 100 50">
               <path d="M10,40 Q15,10 20,40 T30,40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
               <path d="M40,40 Q45,5 50,40 T60,40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
               <path d="M70,40 Q75,10 80,40 T90,40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-bold text-[#4A4A4A] text-lg">Host</span>
        </div>

        {/* Top Left: Swiggy Delivery */}
        <div className="absolute top-[15%] left-[5%] md:left-[10%] bg-[#9CB495] px-6 py-3 rounded-2xl border border-[#7A9374] shadow-md z-10 flex items-center gap-3 transform -rotate-2">
          <img src="/3d-elements/hamburger_3d.png" className="w-10 h-10 drop-shadow-md" alt="" />
          <div>
            <h4 className="font-bold text-[#14140F] text-lg leading-none mb-1">Swiggy Delivery</h4>
            <p className="text-[#14140F]/70 text-xs font-medium">Packaging waste, Cold food</p>
          </div>
        </div>

        {/* Bottom Left: Ice & Mixers */}
        <div className="absolute bottom-[15%] left-[5%] md:left-[15%] bg-[#9CB495] px-6 py-3 rounded-2xl border border-[#7A9374] shadow-md z-10 flex items-center gap-3 transform rotate-3">
          <img src="/3d-elements/clinking_glasses_3d.png" className="w-10 h-10 drop-shadow-md" alt="" />
          <div>
            <h4 className="font-bold text-[#14140F] text-lg leading-none mb-1">Ice & Mixers</h4>
            <p className="text-[#14140F]/70 text-xs font-medium">Logistics run</p>
          </div>
        </div>

        {/* Top Right: Cleaning Agency */}
        <div className="absolute top-[15%] right-[5%] md:right-[10%] bg-[#9CB495] px-6 py-3 rounded-2xl border border-[#7A9374] shadow-md z-10 flex items-center gap-3 transform rotate-2">
          <div className="text-3xl drop-shadow-md">🧹</div>
          <div>
            <h4 className="font-bold text-[#14140F] text-lg leading-none mb-1">Cleaning Agency</h4>
            <p className="text-[#14140F]/70 text-xs font-medium">Morning after mess</p>
          </div>
        </div>

        {/* Middle Right: Local Bartender */}
        <div className="absolute top-[45%] right-[2%] md:right-[5%] bg-[#9CB495] px-6 py-3 rounded-2xl border border-[#7A9374] shadow-md z-10 flex items-center gap-3 transform -rotate-1">
          <div className="text-3xl drop-shadow-md">🍸</div>
          <div>
            <h4 className="font-bold text-[#14140F] text-lg leading-none mb-1">Local Bartender</h4>
            <p className="text-[#14140F]/70 text-xs font-medium">Unreliable/No-show</p>
          </div>
        </div>

        {/* Bottom Right: Decor Sourcing */}
        <div className="absolute bottom-[15%] right-[5%] md:right-[15%] bg-[#9CB495] px-6 py-3 rounded-2xl border border-[#7A9374] shadow-md z-10 flex items-center gap-3 transform -rotate-3">
          <img src="/3d-elements/balloon_3d.png" className="w-10 h-10 drop-shadow-md" alt="" />
          <div>
            <h4 className="font-bold text-[#14140F] text-lg leading-none mb-1">Decor Sourcing</h4>
            <p className="text-[#14140F]/70 text-xs font-medium">DIY Stress</p>
          </div>
        </div>

      </div>
    </div>
  );
}
