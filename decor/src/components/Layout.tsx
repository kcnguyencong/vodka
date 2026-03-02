import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-dark overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />
      
      {/* Zalo Floating Button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#0068ff] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
      >
        <div className="bg-white text-[#0068ff] font-black text-[10px] px-1.5 py-0.5 rounded-sm group-hover:scale-110 transition-transform">Zalo</div>
      </a>
    </div>
  );
}
