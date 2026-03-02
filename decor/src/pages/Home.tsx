import { motion } from 'motion/react';
import { ArrowRight, Leaf, Box, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const categories = [
  {
    title: "Wood Plastic Composite",
    image: "https://picsum.photos/seed/wpc/800/1000",
    link: "/products"
  },
  {
    title: "Stone Plastic Composite",
    image: "https://picsum.photos/seed/spc/800/1000",
    link: "/products"
  },
  {
    title: "Fluted Panels",
    image: "https://picsum.photos/seed/fluted/800/1000",
    link: "/products"
  },
  {
    title: "Acoustic Panels",
    image: "https://picsum.photos/seed/acoustic/800/1000",
    link: "/products"
  }
];

const features = [
  {
    icon: Leaf,
    title: "Eco-Conscious Luxury",
    desc: "100% recyclable materials that mimic nature without harming it."
  },
  {
    icon: Box,
    title: "Deep 3D Textures",
    desc: "Multi-layered embossing techniques for authentic tactile feedback."
  },
  {
    icon: Zap,
    title: "Smart Integration",
    desc: "Seamlessly integrate LED lighting and acoustic dampening within panels."
  }
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-pulse-slow"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')",
            animation: 'ken-burns 20s infinite alternate'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/60 to-dark z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6">Premium Architectural Solutions</span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
              Elevating Spaces with <span className="text-primary italic">Architectural</span> Artistry
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Discover the pinnacle of luxury interior wall panels and sustainable plastic flooring solutions designed for premium living.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/products" className="w-full sm:w-auto px-12 py-5 bg-primary text-dark font-black rounded uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-primary/20">
                Explore Collection
              </Link>
              <Link to="/contact" className="w-full sm:w-auto px-12 py-5 border border-primary/50 text-white font-black rounded uppercase tracking-widest hover:bg-primary/10 transition-colors backdrop-blur-sm text-center">
                Request Sample
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 border-b border-white/5 bg-dark/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.5em] text-primary/60 mb-12">Trusted by Global Design Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {['ARCHI-STUDIO', 'LUXE-DEV', 'URBAN-CON', 'ELITE-VILLA', 'MODERN-SPACE'].map(brand => (
              <span key={brand} className="text-xl md:text-2xl font-black text-white tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-32 px-6 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-none uppercase">Exquisite Collections</h2>
              <div className="h-1.5 w-24 bg-primary mb-6" />
              <p className="text-slate-400 text-lg">Curated materials selected for their durability, aesthetic appeal, and environmental sustainability.</p>
            </div>
            <Link to="/products" className="group flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm">
              View All Products <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-surface border border-white/5 shadow-2xl"
              >
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-black mb-4 text-white tracking-tight leading-tight uppercase">{cat.title}</h3>
                  <Link to={cat.link} className="text-primary text-xs font-black flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mastery Section */}
      <section className="py-32 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-[0.9] uppercase tracking-tighter">Mastery in Every <span className="text-primary italic">Texture</span></h2>
            <p className="text-slate-400 mb-12 text-xl font-light leading-relaxed">We combine traditional craftsmanship aesthetics with modern material science to create surfaces that inspire and endure.</p>
            
            <div className="space-y-10">
              {features.map((f, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                    <f.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{f.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 p-4 bg-dark/50 backdrop-blur-sm">
              <img 
                src="https://picsum.photos/seed/texture/1000/1000" 
                alt="Texture detail"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary p-10 rounded-2xl shadow-[0_20px_50px_rgba(212,175,53,0.3)] hidden md:block">
              <p className="text-dark font-black text-5xl mb-1 tracking-tighter">15+</p>
              <p className="text-dark text-[10px] font-black uppercase tracking-[0.2em]">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curated Installations */}
      <section className="py-32 px-6 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Curated Installations</h2>
              <p className="text-slate-400 text-lg">Real-world projects showcasing architectural transformation.</p>
            </div>
            <Link to="/projects" className="group flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm">
              All Case Studies <ArrowRight className="w-5 h-5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://picsum.photos/seed/p1/1200/1600",
              "https://picsum.photos/seed/p2/1200/800",
              "https://picsum.photos/seed/p3/1200/800",
              "https://picsum.photos/seed/p4/1200/1600",
              "https://picsum.photos/seed/p5/1200/800"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={cn(
                  "rounded-2xl overflow-hidden group relative border border-white/5",
                  i === 0 || i === 3 ? "md:row-span-2" : ""
                )}
              >
                <img 
                  src={img} 
                  alt={`Project ${i+1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <span className="text-primary font-black text-xs uppercase tracking-widest mb-2">Residential</span>
                  <h4 className="text-xl font-bold text-white">Zen Villa, HCM City</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-surface/20">
        <div className="absolute inset-0 bg-primary/5" />
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative z-10 bg-dark p-12 md:p-24 rounded-3xl border border-primary/20 text-center shadow-[0_0_100px_rgba(212,175,53,0.1)]"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-10">
            <Star className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight uppercase leading-none">Interior Trends 2026</h2>
          <p className="text-slate-400 mb-12 text-xl font-light max-w-2xl mx-auto">Download our exclusive catalog showcasing the next generation of architectural wall solutions and design inspirations.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-white/5 border border-white/10 rounded-xl px-8 py-5 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none text-lg"
            />
            <button className="bg-primary text-dark font-black px-12 py-5 rounded-xl hover:bg-primary/90 transition-all uppercase tracking-widest shadow-xl shadow-primary/20">
              Download Now
            </button>
          </form>
        </motion.div>
      </section>
    </motion.div>
  );
}
