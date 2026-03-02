import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Droplets, Zap, Quote, Box, Star } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const relatedProducts = [
  { title: "Tấm Ốp Nano Vân Gỗ Sồi Nga", image: "https://picsum.photos/seed/rel1/600/600" },
  { title: "Tấm Ốp PVC Vân Đá Trắng Ý", image: "https://picsum.photos/seed/rel2/600/600" },
  { title: "Lam Sóng Than Hoạt Tính Gray", image: "https://picsum.photos/seed/rel3/600/600" },
  { title: "Tấm Ốp Nano Vân Xi Măng", image: "https://picsum.photos/seed/rel4/600/600" }
];

export default function ProductDetail() {
  const { id } = useParams();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      class="pt-32 pb-20 px-6"
    >
      <div class="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav class="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-12">
          <Link to="/" class="hover:text-primary transition-colors">Trang chủ</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" class="hover:text-primary transition-colors">Tấm Ốp Nano</Link>
          <ChevronRight className="w-3 h-3" />
          <span class="text-primary font-black">Vân Gỗ Óc Chó</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          {/* Gallery */}
          <div class="space-y-6">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              class="aspect-[4/3] rounded-3xl overflow-hidden bg-surface/30 border border-white/5 p-4"
            >
              <img 
                src="https://picsum.photos/seed/detail/1200/900" 
                alt="Main Product"
                class="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div class="grid grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => (
                <button 
                  key={i}
                  class={cn(
                    "aspect-square rounded-2xl border-2 overflow-hidden transition-all",
                    i === 1 ? "border-primary" : "border-white/5 hover:border-primary/50"
                  )}
                >
                  <img 
                    src={`https://picsum.photos/seed/thumb${i}/400/400`} 
                    alt={`Thumb ${i}`}
                    class="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div class="flex flex-col">
            <div class="mb-10">
              <span class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-primary/20">Premium Collection</span>
              <h1 class="text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase">Tấm Ốp Nano <span class="text-primary italic">Vân Gỗ</span> Óc Chó</h1>
              <p class="text-3xl font-black text-primary mb-8 tracking-tight">Giá: Liên hệ báo giá</p>
              <p class="text-slate-400 text-xl font-light leading-relaxed mb-10">
                Mang đến vẻ đẹp tinh tế của gỗ óc chó tự nhiên kết hợp với công nghệ Nano hiện đại. Giải pháp hoàn mỹ cho không gian sống đẳng cấp, bền bỉ và dễ dàng bảo trì.
              </p>
            </div>

            {/* Highlights */}
            <div class="flex flex-wrap gap-4 mb-12">
              {[
                { icon: ShieldCheck, text: "Thân thiện môi trường" },
                { icon: Droplets, text: "Chống thấm nước 100%" },
                { icon: Zap, text: "Thi công nhanh chóng" }
              ].map((h, i) => (
                <div key={i} class="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10">
                  <h.icon className="w-5 h-5 text-primary" />
                  <span class="text-sm font-bold text-slate-300">{h.text}</span>
                </div>
              ))}
            </div>

            {/* Specs */}
            <div class="border border-white/10 rounded-2xl overflow-hidden mb-12 bg-surface/10">
              <div class="grid grid-cols-2 border-b border-white/5 bg-white/5">
                <div class="p-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Thông số kỹ thuật</div>
                <div class="p-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Chi tiết</div>
              </div>
              {[
                ["Kích thước", "3000 x 400 x 9mm"],
                ["Chất liệu", "WPC (Nhựa gỗ Composite)"],
                ["Bề mặt", "Vân nổi (Textured) chống trầy"]
              ].map(([label, val], i) => (
                <div key={i} class="grid grid-cols-2 border-b border-white/5 last:border-0">
                  <div class="p-5 text-sm font-bold text-slate-300">{label}</div>
                  <div class="p-5 text-sm text-slate-400">{val}</div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="flex-1 bg-primary hover:bg-primary/90 text-dark font-black py-6 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 uppercase tracking-widest">
                <Quote className="w-5 h-5" />
                Liên hệ báo giá ngay
              </button>
              <button class="flex-1 bg-transparent hover:bg-primary/10 border border-primary text-primary font-black py-6 rounded-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest">
                <Box className="w-5 h-5" />
                Nhận mẫu thử miễn phí
              </button>
            </div>
          </div>
        </div>

        {/* Rich Content */}
        <div class="py-32 border-t border-white/5">
          <div class="max-w-5xl mx-auto space-y-32">
            <div class="text-center space-y-6">
              <h3 class="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Vẻ Đẹp Sang Trọng Trong <span class="text-primary italic">Từng Chi Tiết</span></h3>
              <p class="text-slate-400 text-xl font-light max-w-2xl mx-auto">Tấm ốp Nano Walnut Luxury không chỉ là vật liệu trang trí, mà là một tác phẩm nghệ thuật kiến trúc.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <h4 class="text-3xl font-black mb-8 text-primary uppercase tracking-tight">Công nghệ Nano tiên tiến</h4>
                <p class="text-slate-400 text-lg leading-relaxed font-light">
                  Lớp phủ Nano giúp bảo vệ bề mặt tối ưu trước các tác động của môi trường, chống bay màu và chống bám bẩn tuyệt đối. Sản phẩm giữ được vẻ đẹp nguyên bản sau hàng chục năm sử dụng.
                </p>
              </motion.div>
              <motion.div 
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                class="rounded-3xl overflow-hidden border border-white/10 p-4 bg-surface/20"
              >
                <img 
                  src="https://picsum.photos/seed/nano/1000/800" 
                  alt="Detail"
                  class="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                class="order-2 md:order-1 rounded-3xl overflow-hidden border border-white/10 p-4 bg-surface/20"
              >
                <img 
                  src="https://picsum.photos/seed/app/1000/800" 
                  alt="Application"
                  class="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                class="order-1 md:order-2"
              >
                <h4 class="text-3xl font-black mb-8 text-primary uppercase tracking-tight">Ứng dụng đa dạng</h4>
                <p class="text-slate-400 text-lg leading-relaxed font-light">
                  Phù hợp cho phòng khách, phòng ngủ, văn phòng làm việc hay các sảnh khách sạn cao cấp. Dễ dàng kết hợp với các vật liệu khác như đá, kim loại và ánh sáng LED để tạo nên không gian ấn tượng.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Related */}
        <div class="py-32 border-t border-white/5">
          <div class="flex items-center justify-between mb-16">
            <h3 class="text-3xl font-black text-white uppercase tracking-tighter">Sản phẩm <span class="text-primary italic">liên quan</span></h3>
            <Link to="/products" class="text-primary font-bold uppercase tracking-widest text-xs hover:underline">Xem tất cả</Link>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p, i) => (
              <Link 
                key={i}
                to={`/products/${i+10}`}
                class="group bg-surface/10 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500"
              >
                <div class="aspect-square overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.title}
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div class="p-6">
                  <h5 class="font-bold text-white mb-2 group-hover:text-primary transition-colors">{p.title}</h5>
                  <p class="text-primary text-[10px] font-black uppercase tracking-widest">Báo giá: Liên hệ</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
