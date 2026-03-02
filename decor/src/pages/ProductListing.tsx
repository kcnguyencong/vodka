import { motion } from 'motion/react';
import { Filter, Search, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

const products = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: i % 2 === 0 ? "Tấm Ốp Nano Vân Gỗ Óc Chó" : "Tấm Ốp Vân Đá Marble Trắng Ý",
  category: i % 2 === 0 ? "Wood Plastic Composite" : "Stone Plastic Composite",
  image: `https://picsum.photos/seed/prod${i}/800/600`,
  badge: i === 0 ? "Premium" : i === 1 ? "New Arrival" : null,
  specs: i % 2 === 0 ? "Kích thước: 3000 x 400 x 9mm" : "Bề mặt: Bóng gương (Glossy)"
}));

const filters = [
  {
    name: "Chủng loại",
    options: ["Wood Plastic (WPC)", "Stone Plastic (SPC)", "Tấm ốp Lam Sóng", "Tấm Acoustic"]
  },
  {
    name: "Bề mặt",
    options: ["Phẳng (Smooth)", "Nổi 3D (Textured)", "Mờ (Matte)"]
  },
  {
    name: "Ứng dụng",
    options: ["Nội thất (Indoor)", "Ngoại thất (Outdoor)", "Phòng ẩm (Bathroom)"]
  }
];

export default function ProductListing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary font-black">Bộ sưu tập</span>
        </nav>

        {/* Hero */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">Bộ Sưu Tập <span className="text-primary italic">Vật Liệu</span> Cao Cấp</h1>
          <p className="text-slate-400 max-w-3xl text-xl font-light leading-relaxed">
            Khám phá các giải pháp ốp tường và lát sàn tinh tế, mang lại vẻ đẹp sang trọng và bền bỉ cho không gian sống của bạn. Từ vân gỗ tự nhiên đến đá marble hiện đại.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="sticky top-32 space-y-10">
              <div className="bg-surface/30 border border-white/5 p-8 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-10">
                  <Filter className="w-5 h-5 text-primary" />
                  <h2 className="font-black text-lg uppercase tracking-tight text-white">Bộ lọc thông minh</h2>
                </div>

                {filters.map((group, idx) => (
                  <div key={idx} className="mb-10 last:mb-0">
                    <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">{group.name}</h3>
                    <div className="space-y-4">
                      {group.options.map(opt => (
                        <label key={opt} className="flex items-center gap-4 cursor-pointer group">
                          <div className="relative flex items-center">
                            <input type="checkbox" className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-transparent checked:bg-primary checked:border-primary transition-all" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none">
                              <div className="w-2 h-2 bg-dark rounded-sm" />
                            </div>
                          </div>
                          <span className="text-sm text-slate-400 group-hover:text-primary transition-colors">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="mb-10">
                  <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">Bảng màu</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {['#5d4037', '#d7ccc8', '#455a64', '#212121'].map(color => (
                      <button 
                        key={color}
                        className="w-10 h-10 rounded-full border border-white/10 hover:scale-110 transition-transform ring-offset-2 ring-primary focus:ring-2"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6 border-b border-white/5 pb-8">
              <p className="text-sm text-slate-500">Hiển thị <span className="text-white font-black">24</span> sản phẩm</p>
              <div className="flex items-center gap-4">
                <span className="text-xs font-black uppercase tracking-widest text-slate-500">Sắp xếp:</span>
                <select className="bg-dark border border-white/10 rounded-lg text-sm text-white px-6 py-3 focus:ring-1 focus:ring-primary outline-none">
                  <option>Mới nhất</option>
                  <option>Phổ biến nhất</option>
                  <option>Giá: Thấp đến Cao</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((p, idx) => (
                <motion.div 
                  key={p.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.1 }}
                  className="group bg-surface/20 border border-white/5 rounded-2xl overflow-hidden flex flex-col hover:border-primary/40 transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={p.image} 
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    {p.badge && (
                      <div className={cn(
                        "absolute top-5 left-5 px-4 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-widest shadow-2xl",
                        p.badge === "Premium" ? "bg-primary text-dark" : "bg-white text-dark"
                      )}>
                        {p.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-black mb-3">{p.category}</span>
                    <h3 className="text-xl font-bold text-white mb-6 group-hover:text-primary transition-colors line-clamp-2">{p.title}</h3>
                    
                    <div className="mt-auto space-y-6">
                      <div className="flex justify-between items-center pb-6 border-b border-white/5">
                        <span className="text-xs text-slate-500 font-medium">{p.specs}</span>
                        <span className="text-primary font-black uppercase tracking-widest text-xs">Báo giá</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Link to={`/products/${p.id}`} className="text-[10px] font-black border border-white/10 py-4 rounded-xl hover:bg-white hover:text-dark transition-all uppercase tracking-widest text-center">
                          Chi tiết
                        </Link>
                        <button className="text-[10px] font-black bg-primary/10 text-primary py-4 rounded-xl hover:bg-primary hover:text-dark transition-all uppercase tracking-widest">
                          Mẫu thử
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-24 flex justify-center items-center gap-6">
              <button className="w-14 h-14 flex items-center justify-center rounded-xl border border-white/10 hover:bg-primary/10 transition-colors text-primary">
                <ChevronLeft />
              </button>
              <div className="flex items-center gap-3">
                {[1, 2, 3, '...', 12].map((n, i) => (
                  <button 
                    key={i}
                    className={cn(
                      "w-14 h-14 flex items-center justify-center rounded-xl font-black transition-all",
                      n === 1 ? "bg-primary text-dark shadow-xl shadow-primary/20" : "text-slate-500 hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <button className="w-14 h-14 flex items-center justify-center rounded-xl border border-white/10 hover:bg-primary/10 transition-colors text-primary">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
