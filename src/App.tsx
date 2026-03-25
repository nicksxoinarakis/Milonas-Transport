import { motion } from "motion/react";
import { Phone, Mail, MapPin, Facebook, Truck, Globe, Award, Clock } from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-black/80 backdrop-blur-lg border-b border-white/10" : "py-6 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center">
            <Truck className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">Milonas <span className="text-brand-accent">Transport</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#home" className="hover:text-brand-accent transition-colors">Home</a>
          <a href="#services" className="hover:text-brand-accent transition-colors">Services</a>
          <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
          <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
        </div>

        <a href="tel:2310797009" className="hidden sm:flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-accent hover:text-white transition-all">
          <Phone size={16} />
          231 079 7009
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000" 
          alt="Logistics background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
              Established 1978
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              Bringing The <br />
              <span className="text-gradient">World Closer,</span> <br />
              Fast Freight.
            </h1>
            <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
              National & International transport solutions powered by 45+ years of excellence and reliability.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
                Get a Quote
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
              </button>
              <button className="glass px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Our Services
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-accent/10">
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Truck" 
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Stats Cards - Bento Style */}
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl hidden md:block">
              <div className="text-4xl font-bold text-brand-accent">45+</div>
              <div className="text-xs uppercase tracking-widest opacity-60">Years of Legacy</div>
            </div>
            <div className="absolute -top-10 -right-10 glass p-8 rounded-2xl hidden md:block">
              <div className="text-4xl font-bold text-white">24k+</div>
              <div className="text-xs uppercase tracking-widest opacity-60">Shipments Delivered</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Εθνικές Μεταφορές",
      subtitle: "Domestic Transport",
      desc: "Reliable logistics across all of Greece. From Thessaloniki to Athens and beyond, we ensure your cargo arrives safely and on time.",
      icon: <Truck className="w-8 h-8 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Διεθνείς Μεταφορές",
      subtitle: "International Transport",
      desc: "Connecting Greece with Europe. Our international fleet handles cross-border logistics with precision and full regulatory compliance.",
      icon: <Globe className="w-8 h-8 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Core Services <br />
            <span className="text-gray-500">That Deliver.</span>
          </h2>
          <div className="w-20 h-1 bg-brand-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden border border-white/5"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                <p className="text-brand-accent font-medium mb-4 uppercase tracking-widest text-sm">{service.subtitle}</p>
                <p className="text-gray-400 leading-relaxed max-w-sm">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800" 
                alt="Legacy" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-10 rounded-3xl">
              <Award className="w-12 h-12 text-brand-accent mb-4" />
              <div className="text-xl font-bold">45+ Years</div>
              <div className="text-sm opacity-60">of Trusted Excellence</div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              A Legacy of <br />
              <span className="text-brand-accent">Reliability.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Founded in 1978, Milonas Transport has grown from a local family business into a leading logistics provider in Sindos, Thessaloniki. For over four decades, we have been the backbone of domestic and international trade for our clients.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <Clock className="text-brand-accent" />
                <h4 className="font-bold">Punctuality</h4>
                <p className="text-sm text-gray-500">Every shipment arrives exactly when promised.</p>
              </div>
              <div className="space-y-2">
                <Truck className="text-brand-accent" />
                <h4 className="font-bold">Modern Fleet</h4>
                <p className="text-sm text-gray-500">Equipped with the latest tracking and safety tech.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              Let's Move <br />
              <span className="text-gray-500">Your Business.</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Headquarters</h4>
                  <p className="text-gray-400">Γοργοποτάμου 8, 57400 Σίνδος, Θεσσαλονίκη</p>
                  <p className="text-gray-500 text-sm">Gorgopotamou 8, Sindos, Thessaloniki</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <a href="tel:2310797009" className="text-gray-400 hover:text-brand-accent transition-colors">(+30) 231 079 7009</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-400">info@milonastransport.gr</p>
                </div>
              </div>
            </div>

            <div className="h-[300px] rounded-3xl overflow-hidden border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.876352417409!2d22.8083!3d40.6694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8397a6e6e6e6e%3A0x0!2zNDDCsDQwJzA5LjgiTiAyMsKwNDgnMjkuOSJF!5e0!3m2!1sen!2sgr!4v1620000000000!5m2!1sen!2sgr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Google Maps Location"
              />
            </div>
          </div>

          <div className="glass p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-8">Request a Quote</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest opacity-60">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest opacity-60">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest opacity-60">Service Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-all appearance-none">
                  <option className="bg-black">National Transport</option>
                  <option className="bg-black">International Transport</option>
                  <option className="bg-black">Logistics Consulting</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest opacity-60">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-all"></textarea>
              </div>
              <button className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
              <Truck className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tighter uppercase">Milonas <span className="text-brand-accent">Transport</span></span>
          </div>
          
          <div className="flex gap-8 text-sm opacity-60">
            <a href="#" className="hover:text-brand-accent">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent">Terms of Service</a>
            <a href="#" className="hover:text-brand-accent">Cookies</a>
          </div>

          <div className="flex gap-4">
            <a href="https://facebook.com" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-accent transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        <div className="mt-10 pt-10 border-t border-white/5 text-center text-xs opacity-40">
          © {new Date().getFullYear()} Milonas Transport. All rights reserved. Designed for Excellence.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />

      {/* Floating CTA for Mobile */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 right-6 z-40 md:hidden"
      >
        <a href="tel:2310797009" className="bg-brand-accent text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-brand-accent/40">
          <Phone size={24} />
        </a>
      </motion.div>
    </div>
  );
}
