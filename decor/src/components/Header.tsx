import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-dark/90 backdrop-blur-md py-3 border-b border-primary/20" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-dark font-black text-xl">T</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-white uppercase leading-none">TAM OP NHUA</span>
            <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Luxury Material</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { name: 'Sản phẩm', path: '/products' },
            { name: 'Dự án', path: '/projects' },
            { name: 'Liên hệ', path: '/contact' }
          ].map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-slate-300"
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded px-3 py-1.5 focus-within:border-primary/50 transition-colors">
            <Search className="w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Tìm kiếm..." 
              className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-slate-500 w-32 xl:w-48"
            />
          </div>
          
          <button className="p-2 text-slate-300 hover:text-primary transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          
          <button className="hidden sm:block btn-primary">
            Get Free Samples
          </button>

          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark border-b border-primary/20 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {[
            { name: 'Sản phẩm', path: '/products' },
            { name: 'Dự án', path: '/projects' },
            { name: 'Liên hệ', path: '/contact' }
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className="text-lg font-bold text-white hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="btn-primary w-full mt-4">Get Free Samples</button>
        </div>
      )}
    </header>
  );
}
