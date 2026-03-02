import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="inline-block text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6">Contact Us</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight uppercase">
            Let's Build <span className="text-primary italic">Something</span> Extraordinary
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
            Have a project in mind? Our team of experts is ready to help you select the perfect materials for your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Phone, title: "Phone", value: "+84 901 234 567", sub: "Mon-Fri from 8am to 6pm" },
                { icon: Mail, title: "Email", value: "hello@tamopnhua.vn", sub: "We'll respond within 24 hours" },
                { icon: MapPin, title: "Showroom", value: "District 7, HCM City", sub: "Visit our flagship location" },
                { icon: Clock, title: "Hours", value: "8:00 AM - 6:00 PM", sub: "Open Monday through Saturday" }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-surface/20 border border-white/5 hover:border-primary/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-dark transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-2">{item.title}</h3>
                  <p className="text-xl font-bold text-white mb-1">{item.value}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative group">
              <img 
                src="https://picsum.photos/seed/map/1200/800?grayscale" 
                alt="Map"
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-dark/80 backdrop-blur-md p-6 rounded-2xl border border-primary/20 text-center">
                  <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
                  <p className="text-white font-bold">Tam Op Nhua Luxury Showroom</p>
                  <p className="text-slate-400 text-sm">Ho Chi Minh City, Vietnam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface/10 border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Send a Message</h2>
              </div>

              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none">
                    <option className="bg-dark">Product Inquiry</option>
                    <option className="bg-dark">Project Consultation</option>
                    <option className="bg-dark">Request Samples</option>
                    <option className="bg-dark">Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                  />
                </div>

                <button className="w-full bg-primary text-dark font-black py-6 rounded-2xl hover:brightness-110 transition-all uppercase tracking-widest shadow-2xl shadow-primary/20 flex items-center justify-center gap-3">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
