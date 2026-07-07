import Link from "next/link";
import { Instagram, MessageCircle, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10 pt-20 pb-10 relative z-10 mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 inline-flex group">
              <div className="w-10 h-10 bg-brand text-white font-bold text-xl flex items-center justify-center rounded-xl shadow-md group-hover:scale-105 transition-transform">
                T
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">The Vibe House</span>
            </Link>
            <p className="text-gray-500 mb-6 font-medium leading-relaxed">
              Powered by NxtMeal.<br />
              Event management reimagined for the modern host.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-brand hover:text-white transition-colors shadow-sm border border-gray-100">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-[#25D366] hover:text-white transition-colors shadow-sm border border-gray-100">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-500 hover:text-brand font-medium transition-colors">Vibe Box Delivery</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand font-medium transition-colors">Live Chef Experiences</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand font-medium transition-colors">Corporate Events</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand font-medium transition-colors">Custom Housewarmings</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-500 hover:text-brand font-medium transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand font-medium transition-colors">Download App</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand font-medium transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand font-medium transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-500">
                <Phone size={18} className="text-brand" />
                <span className="font-medium">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Mail size={18} className="text-brand" />
                <span className="font-medium">hello@thevibehouse.in</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse mt-1 shrink-0" />
                <span className="font-medium">Available in Bangalore</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-medium">© {new Date().getFullYear()} The Vibe House. All rights reserved.</p>
          <p className="text-gray-400 text-sm font-medium flex items-center gap-1">
            Made with <span className="text-brand">♥</span> in Bangalore
          </p>
        </div>
      </div>
    </footer>
  );
}
