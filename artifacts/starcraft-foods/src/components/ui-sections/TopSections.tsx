import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, animate } from 'framer-motion';
import { Star, ArrowRight, CheckCircle, ShieldCheck, Clock, Award, Building, Activity, Menu, X } from 'lucide-react';
import heroBg from '@assets/generated_images/hero.jpg';

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Menu", href: "#menu" },
  { label: "Hygiene", href: "#hygiene" },
  // { label: "Case Studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer when a link is clicked
  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-white p-1.5 rounded">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none text-foreground">StarCraft</span>
              <span className="text-[10px] font-semibold tracking-wider text-muted-foreground">FOODS & SERVICES</span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium transition-colors items-center gap-2">
              Request a Proposal <ArrowRight className="w-4 h-4" />
            </a>
            {/* Hamburger — visible below lg */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] inset-x-0 z-40 bg-white shadow-lg border-t border-border lg:hidden"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-1 border-b border-border/30 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="mt-2 bg-primary text-white px-5 py-3 rounded-md text-sm font-semibold flex items-center justify-center gap-2"
              >
                Request a Proposal <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Industrial Kitchen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            We Nourish India's Workforce
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
            Catering Solutions That Keep Your Workforce <span className="text-accent italic">Productive.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            Fresh, hygienic, and nutritious meals delivered on time — every single day — for factories, manufacturing units, warehouses, industrial parks, and corporate campuses across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center gap-2">
              Request a Proposal <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center">
              Schedule a Food Tasting
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-medium text-white/90">
            {/*<div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded">*/}
            {/*  <CheckCircle className="w-4 h-4 text-accent" /> 10,000+ Meals / day*/}
            {/*</div>*/}
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded">
              <ShieldCheck className="w-4 h-4 text-accent" /> FSSAI Certified kitchen
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded">
              <Clock className="w-4 h-4 text-accent" /> 24×7 Shift catering
            </div>
          </div>
        </motion.div>
      </div>

      {/*<motion.div */}
      {/*  initial={{ opacity: 0, x: 50 }}*/}
      {/*  animate={{ opacity: 1, x: 0 }}*/}
      {/*  transition={{ duration: 0.8, delay: 0.4 }}*/}
      {/*  className="hidden lg:flex absolute bottom-12 right-12 bg-white p-6 rounded-xl shadow-2xl max-w-sm border border-gray-100 flex-col gap-4 z-20"*/}
      {/*>*/}
      {/*  <div className="flex items-center justify-between">*/}
      {/*    <div className="flex items-center gap-2 text-xs font-bold text-red-600 tracking-wider">*/}
      {/*      <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" /> LIVE · TODAY*/}
      {/*    </div>*/}
      {/*    <Award className="text-accent w-6 h-6" />*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <div className="text-4xl font-serif font-bold text-foreground">99.8%</div>*/}
      {/*    <div className="text-sm text-muted-foreground font-medium mt-1">On-time delivery across 50+ industrial sites</div>*/}
      {/*  </div>*/}
      {/*</motion.div>*/}
      
      <div className="absolute top-24 right-6 md:top-32 md:right-12 z-20">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded text-xs font-semibold flex items-center gap-3">
          <span className="opacity-70 text-[10px] tracking-widest">CERTIFICATIONS</span>
          <span>FSSAI · HACCP · ISO 22000</span>
        </div>
      </div>
    </section>
  );
}

export function TrustedBy() {
  const industries = [
    "Automotive", "Pharmaceutical", "Textile", "Warehousing", "Logistics", 
    "Food Processing", "Corporate Offices", "Manufacturing", "Automotive", 
    "Pharmaceutical", "Textile", "Warehousing", "Logistics", "Food Processing"
  ];

  return (
    <div className="py-10 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-4">
        <p className="text-xs font-bold tracking-widest text-muted-foreground text-center">TRUSTED ACROSS INDIA'S INDUSTRIAL SECTORS</p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="ticker-track flex gap-12 items-center px-12">
          {industries.map((ind, i) => (
            <div key={i} className="text-xl md:text-2xl font-serif font-bold text-gray-300 whitespace-nowrap">
              {ind}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });
    return () => controls.stop();
  }, [from, to, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
}

export function Stats() {
  const stats = [
    // { value: 10000, suffix: "+", label: "Meals Served Daily" },
    // { value: 50, suffix: "+", label: "Industrial Clients" },
    // { value: 99.8, suffix: "%", label: "On-Time Delivery", isFloat: true },
    // { value: 24, suffix: "×7", label: "Shift Catering Support" },
    // { value: 15, suffix: "+", label: "Years of Experience" },
    // { value: 100, suffix: "%", label: "FSSAI Compliant" },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-semibold tracking-wider text-sm mb-3">BY THE NUMBERS</p>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Operational excellence, measured every day.</h2>
          <p className="text-lg text-muted-foreground">Fifteen years of serving India's industrial workforce with unwavering consistency.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl font-serif font-bold text-primary mb-2 flex items-center justify-center">
                {stat.isFloat ? stat.value + stat.suffix : <Counter to={stat.value} suffix={stat.suffix} />}
              </div>
              <div className="text-sm font-medium text-muted-foreground leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
