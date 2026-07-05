import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, ChevronDown, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

export function Testimonials() {
  const testimonials = [
    {
      quote: "StarCraft transformed our factory canteen. On-time, hygienic, and our workforce actually looks forward to lunch now.",
      author: "Rajesh Menon",
      role: "Plant Head · Automotive OEM, Pune"
    },
    {
      quote: "Their 24×7 shift catering has been a game-changer. Consistency is what impresses me most — quality never dips.",
      author: "Priya Sharma",
      role: "HR Director · Pharma Major, Hyderabad"
    },
    {
      quote: "Transparent SLAs, a dedicated account manager, and monthly reviews. Feels like a partnership, not a vendor relationship.",
      author: "Aakash Verma",
      role: "Facility Manager · Logistics Park, Bhiwandi"
    },
    {
      quote: "FSSAI audits pass without a hiccup. Their kitchen discipline is genuinely industrial-grade.",
      author: "Meera Iyer",
      role: "Admin & Procurement Lead · Textile Manufacturer, Coimbatore"
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-semibold tracking-wider text-sm mb-3">WHAT CLIENTS SAY</p>
          <h2 className="text-4xl font-serif font-bold text-foreground">Trusted by HR leaders and plant heads.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-border/50 relative"
            >
              <div className="text-6xl text-accent/30 font-serif absolute top-4 left-6 leading-none">"</div>
              <p className="text-lg text-foreground mb-6 relative z-10 italic mt-4 leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-auto">
                <p className="font-bold text-primary">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "Can you serve more than 2,000 employees per shift?", a: "Yes, our central kitchen has capacity to comfortably scale up to 5,000 meals per service without compromising on quality or timeliness." },
    { q: "Can menus be customized to our workforce?", a: "Absolutely. We work with your HR and welfare committees to design a rotating 28-day menu that considers regional preferences, nutritional needs, and budget." },
    { q: "Do you support multiple shifts and night operations?", a: "Yes. We run 24×7 operations and are fully equipped to serve night shifts with fresh, hot meals at 11pm, 2am, or any custom schedule." },
    { q: "Do you provide emergency meal services?", a: "We offer 24-hour rapid deployment for unexpected shutdowns, audits, and surge demands to ensure your team remains fed and productive." },
    { q: "How do you ensure hygiene and food safety?", a: "Every batch follows strict FSSAI, HACCP, and ISO 22000 aligned processes. We conduct batch-wise quality inspections." },
    { q: "Can we request a trial meal or tasting session?", a: "Yes. We arrange a comprehensive live tasting session for your leadership and HR teams to evaluate food quality before contract finalization." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-primary font-semibold tracking-wider text-sm mb-3">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="text-4xl font-serif font-bold text-foreground">Answers to what enterprise buyers ask us.</h2>
        </motion.div>

        <Accordion.Root type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <Accordion.Item key={i} value={`item-${i}`} className="border-b border-border/60 overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between py-6 text-left font-bold text-lg text-foreground hover:text-primary transition-colors group">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-muted-foreground text-base data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown pb-6 pr-8">
                {faq.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1E5631] to-[#0d2a17] text-white">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-semibold tracking-wider text-sm mb-4">LET'S TALK</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">Looking for a reliable industrial catering partner?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how StarCraft can serve fresh, hygienic, and cost-effective meals for your workforce.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center gap-2">
              Request Proposal
            </a>
            <a href="#contact" className="bg-white text-[#1E5631] hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center">
              Book Food Tasting
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const inputCls = "w-full p-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50";

export function Contact() {
  const [form, setForm] = useState({
    companyName: '', industry: '', location: '', employees: '',
    startDate: '', phone: '', email: '', mealReq: '', specialReq: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER ?? '916366682345').replace(/\D/g, '');
  const whatsappMessage = import.meta.env.VITE_WHATSAPP_MESSAGE ?? 'Hi, I would like to chat with your team.';
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const ct = res.headers.get('content-type') ?? '';
      const data = ct.includes('application/json') ? await res.json() : {};
      if (!res.ok) throw new Error(data.error || `Server error (${res.status}). Please try again.`);
      setStatus('success');
      setForm({ companyName: '', industry: '', location: '', employees: '', startDate: '', phone: '', email: '', mealReq: '', specialReq: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const busy = status === 'loading';

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-semibold tracking-wider text-sm mb-3">CONTACT US</p>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Start the conversation.</h2>
          <p className="text-lg text-muted-foreground">Share a few details and our enterprise team will respond within one business day.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-3/5 bg-white p-8 rounded-2xl shadow-sm border border-border/50"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                <CheckCircle className="w-16 h-16 text-primary" />
                <h3 className="text-2xl font-serif font-bold text-foreground">Enquiry Sent!</h3>
                <p className="text-muted-foreground max-w-sm">Thank you! We've received your enquiry and will get back to you within one business day.</p>
                <button onClick={() => setStatus('idle')} className="mt-4 text-sm text-primary underline underline-offset-2">Submit another enquiry</button>
              </div>
            ) : (
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="company-name" className="block text-sm font-semibold mb-2 text-foreground">Company Name *</label>
                  <input id="company-name" type="text" className={inputCls} placeholder="Acme Corp" required disabled={busy} value={form.companyName} onChange={set('companyName')} />
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold mb-2 text-foreground">Industry *</label>
                  <select id="industry" className={inputCls} required disabled={busy} value={form.industry} onChange={set('industry')}>
                    <option value="">Select Industry</option>
                    <option>Manufacturing</option>
                    <option>Logistics &amp; Warehousing</option>
                    {/*<option>Pharmaceutical</option>*/}
                    <option>Corporate</option>
                    <option>Construction Sites</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold mb-2 text-foreground">Location *</label>
                  <input id="location" type="text" className={inputCls} placeholder="City, State" required disabled={busy} value={form.location} onChange={set('location')} />
                </div>
                <div>
                  <label htmlFor="employees" className="block text-sm font-semibold mb-2 text-foreground">Number of Employees *</label>
                  <select id="employees" className={inputCls} required disabled={busy} value={form.employees} onChange={set('employees')}>
                    <option value="">Select Range</option>
                    <option>200 - 500</option>
                    <option>500 - 1000</option>
                    <option>1000 - 2000</option>
                    <option>2000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="start-date" className="block text-sm font-semibold mb-2 text-foreground">Preferred Start Date</label>
                  <input id="start-date" type="date" className={inputCls} disabled={busy} value={form.startDate} onChange={set('startDate')} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-foreground">Phone *</label>
                  <input id="phone" type="tel" className={inputCls} placeholder="+91 XXXXX XXXXX" required disabled={busy} value={form.phone} onChange={set('phone')} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">Work Email *</label>
                  <input id="email" type="email" className={inputCls} placeholder="name@company.com" required disabled={busy} value={form.email} onChange={set('email')} />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="meal-req" className="block text-sm font-semibold mb-2 text-foreground">Meal Requirements *</label>
                  <textarea id="meal-req" className={`${inputCls} h-24`} placeholder="E.g. Breakfast and Lunch for 500 employees, general shift." required disabled={busy} value={form.mealReq} onChange={set('mealReq')}></textarea>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="special-req" className="block text-sm font-semibold mb-2 text-foreground">Special Requirements</label>
                  <textarea id="special-req" className={`${inputCls} h-24`} placeholder="Any dietary restrictions, night shift needs, etc." disabled={busy} value={form.specialReq} onChange={set('specialReq')}></textarea>
                </div>
                {status === 'error' && (
                  <div className="col-span-1 md:col-span-2 flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-3 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMsg}
                  </div>
                )}
                <div className="col-span-1 md:col-span-2 mt-2">
                  <button type="submit" disabled={busy} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-md transition-colors flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                    {busy ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</> : 'Send Enquiry'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/5 flex flex-col gap-6"
          >
            <div className="bg-white p-6 rounded-xl border border-border/50 flex items-start gap-4 shadow-sm">
              <div className="bg-muted p-3 rounded-full text-primary mt-1">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Call Us</p>
                <p className="text-lg font-bold text-foreground">+91 636668 2345</p>
                {whatsappHref ? (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary font-medium mt-1 inline-flex items-center gap-1 hover:underline"
                  >
                    WhatsApp: Chat with our team
                    <MessageCircle className="w-4 h-4" />
                  </a>
                ) : (
                  <p className="text-sm text-primary font-medium mt-1">
                    WhatsApp: Chat with our team
                  </p>
                )}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border/50 flex items-start gap-4 shadow-sm">
              <div className="bg-muted p-3 rounded-full text-primary mt-1">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Email</p>
                <p className="text-lg font-bold text-foreground">1985satishtalla@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border/50 flex items-start gap-4 shadow-sm">
              <div className="bg-muted p-3 rounded-full text-primary mt-1">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Head Office</p>
                <p className="text-base text-foreground font-medium leading-relaxed">
                  Site number 49, Pariwar pride <br/>
                  205, Anugraha layout<br/>
                  Kodichikkanahalli, Bangalore <br/>
                  560076
                </p>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl overflow-hidden h-48 border border-border/50 w-full relative">
              {/* Fallback to simple placeholder for map if iframe is blocked, but providing iframe */}
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                loading="lazy" 
                allowFullScreen 
                src="https://www.openstreetmap.org/export/embed.html?bbox=73.7431,18.5204,73.9431,18.7204&amp;layer=mapnik&amp;marker=18.6204,73.8431">
              </iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-white p-1.5 rounded">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none">StarCraft</span>
                <span className="text-[10px] font-semibold tracking-wider text-gray-400">FOODS & SERVICES</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              An industrial catering partner for factories, warehouses, and corporate campuses across India. Nourishing India's workforce, one shift at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="StarCraft Foods on LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="StarCraft Foods on Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="StarCraft Foods on Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="StarCraft Foods on Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="flex flex-col gap-3 text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Daily Employee Meals</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cafeteria Management</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Night Shift Catering</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Executive Dining</a></li>
              {/*<li><a href="#" className="hover:text-accent transition-colors">Emergency Catering</a></li>*/}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Industries</h4>
            <ul className="flex flex-col gap-3 text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Manufacturing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Warehousing & Logistics</a></li>
              {/*<li><a href="#" className="hover:text-accent transition-colors">Pharma & Healthcare</a></li>*/}
              <li><a href="#" className="hover:text-accent transition-colors">Corporate Offices</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Educational Institutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="flex flex-col gap-3 text-gray-400">
              <li><a href="#WeeklyMenu" className="hover:text-accent transition-colors">Weekly Menu</a></li>
              <li><a href="#hygiene" className="hover:text-accent transition-colors">Hygiene & Compliance</a></li>
              {/*<li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>*/}
              <li><a href="#fac" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 StarCraft Foods & Services. All rights reserved. · FSSAI Licensed · ISO 22000 Aligned</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a href="#contact" className="bg-primary hover:bg-primary/90 text-white shadow-xl px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105 border-2 border-white/20">
        <MessageCircle className="w-5 h-5 fill-current" /> Request Proposal
      </a>
    </motion.div>
  );
}
