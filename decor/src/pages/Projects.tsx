import { motion } from 'motion/react';
import { ArrowRight, MapPin, Calendar, Maximize2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Zen Villa - Thảo Điền",
    category: "Residential",
    location: "District 2, Ho Chi Minh City",
    year: "2023",
    image: "https://picsum.photos/seed/project1/1200/1600",
    size: "large"
  },
  {
    id: 2,
    title: "Luxe Penthouse",
    category: "Interior",
    location: "District 7, Ho Chi Minh City",
    year: "2024",
    image: "https://picsum.photos/seed/project2/1200/800",
    size: "small"
  },
  {
    id: 3,
    title: "Modern Office Hub",
    category: "Commercial",
    location: "District 1, Ho Chi Minh City",
    year: "2023",
    image: "https://picsum.photos/seed/project3/1200/800",
    size: "small"
  },
  {
    id: 4,
    title: "Coastal Retreat",
    category: "Hospitality",
    location: "Phu Quoc Island",
    year: "2024",
    image: "https://picsum.photos/seed/project4/1200/1600",
    size: "large"
  },
  {
    id: 5,
    title: "Urban Loft",
    category: "Residential",
    location: "Binh Thanh District, HCM",
    year: "2023",
    image: "https://picsum.photos/seed/project5/1200/800",
    size: "small"
  },
  {
    id: 6,
    title: "Grand Hotel Lobby",
    category: "Hospitality",
    location: "Da Nang City",
    year: "2024",
    image: "https://picsum.photos/seed/project6/1200/800",
    size: "small"
  }
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="inline-block text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6">Our Portfolio</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight uppercase">
            Architectural <span className="text-primary italic">Transformations</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            A showcase of our most prestigious installations, where luxury materials meet exceptional design.
          </p>
        </div>

        {/* Filter Bar (Static for now) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['All Projects', 'Residential', 'Commercial', 'Hospitality', 'Interior'].map((filter, i) => (
            <button 
              key={i}
              className={cn(
                "px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all border",
                i === 0 ? "bg-primary text-dark border-primary" : "text-slate-400 border-white/10 hover:border-primary/50 hover:text-primary"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-surface/20 border border-white/5",
                project.size === "large" ? "md:row-span-2" : ""
              )}
            >
              <div className="h-full w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">{project.category}</span>
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">{project.title}</h3>
                  
                  <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <MapPin className="w-3 h-3 text-primary" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Calendar className="w-3 h-3 text-primary" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
                
                <button className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary hover:text-dark">
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">Ready to start your <span className="text-primary italic">project</span>?</h2>
          <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-5 bg-primary text-dark font-black rounded-xl uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-primary/20">
            Get a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
