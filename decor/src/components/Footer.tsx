import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-10 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-dark font-black text-sm">T</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase">TAM OP NHUA</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            Setting the standard for luxury wall cladding and flooring in Vietnam. Quality architecture starts from the surface.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all text-slate-400 hover:text-primary">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs text-primary">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            {[
              { name: 'Bộ sưu tập', path: '/products' },
              { name: 'Dự án tiêu biểu', path: '/projects' },
              { name: 'Liên hệ tư vấn', path: '/contact' },
              { name: 'Chính sách bảo hành', path: '#' }
            ].map(item => (
              <li key={item.name}>
                <Link to={item.path} className="text-slate-400 hover:text-primary transition-colors">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs text-primary">Contact Us</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>Dist 7, Ho Chi Minh City, Vietnam</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span>+84 901 234 567</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span>hello@tamopnhua.vn</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs text-primary">Bản tin</h4>
          <p className="text-sm text-slate-500 mb-6">Đăng ký để nhận báo giá và ưu đãi mới nhất từ chúng tôi.</p>
          <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email của bạn" 
              className="bg-white/5 border border-white/10 rounded px-4 py-2 w-full text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none"
            />
            <button className="bg-primary text-dark p-2 rounded hover:brightness-110 transition-all">
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em]">© 2024 TAMOPNHUA.VN. All Rights Reserved.</p>
        <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] text-slate-600">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
