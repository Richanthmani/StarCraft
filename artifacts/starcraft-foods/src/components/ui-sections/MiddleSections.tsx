import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Utensils, Sun, Moon, Package, Star, Heart, Flame, Settings, Truck, Factory, Briefcase, Stethoscope, GraduationCap, Building2, type LucideIcon } from 'lucide-react';

type Service = { Icon: LucideIcon; title: string; desc: string };

export function Services() {
  const services: Service[] = [
    { Icon: Sun, title: "Daily Employee Meals", desc: "Balanced breakfast, lunch, and dinner served hot at your facility every single day." },
    { Icon: Settings, title: "Factory Cafeteria Management", desc: "End-to-end operation of your in-plant canteen — staff, hygiene, menu, and audits." },
    { Icon: Coffee, title: "Breakfast Services", desc: "Early-morning South Indian, North Indian, and continental breakfast at scale." },
    { Icon: Utensils, title: "Lunch Services", desc: "Nutritionist-designed lunch thalis with regional rotation and portion control." },
    { Icon: Flame, title: "Dinner Services", desc: "Warm, wholesome dinners for late-shift and residential workforce." },
    // { Icon: Moon, title: "Night Shift Meals", desc: "Round-the-clock kitchens ready for 11pm, 2am, and 5am shift changeovers." },
    { Icon: Package, title: "Packed Meals", desc: "Hygienic tamper-proof packed meals for on-site and off-site deployment." },
    { Icon: Star, title: "Executive Dining", desc: "Elevated menus for leadership floors, board meetings, and client visits." },
    // { Icon: Coffee, title: "Tea & Snacks", desc: "Two-time tea service with rotating healthy snack pairings." },
    // { Icon: Heart, title: "Special Dietary Meals", desc: "Diabetic, low-sodium, high-protein, Jain, and allergen-safe options." },
    { Icon: Flame, title: "Festival Menus", desc: "Curated menus for Pongal, Eid, Ugadi, Onam, Dussehra, Diwali, Christmas, New year Eve and more." },
    // { Icon: Truck, title: "Emergency Catering", desc: "24-hour rapid deployment for shutdowns, audits, and surge demand." }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-primary font-semibold tracking-wider text-sm mb-3">OUR SERVICES</p>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Industrial catering, end to end.</h2>
          <p className="text-lg text-muted-foreground">From breakfast on the shop floor to executive dining — one partner, one accountable team.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-muted border border-border/50 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                <svc.Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{svc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

type Industry = { Icon: LucideIcon; name: string };

export function Industries() {
  const industries: Industry[] = [
    { Icon: Factory, name: "Manufacturing Plants" },
    { Icon: Building2, name: "Factories" },
    { Icon: Factory, name: "Industrial Parks" },
    { Icon: Package, name: "Warehouses" },
    { Icon: Building2, name: "Construction Sites" },
    { Icon: Briefcase, name: "Corporate Offices" },
    // { Icon: Stethoscope, name: "Hospitals" },
    // { Icon: GraduationCap, name: "Educational Institutions" },
    // { Icon: Building2, name: "Government Facilities" },
    // { Icon: Truck, name: "Logistics Hubs" }
  ];

  return (
    <section id="industries" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-accent font-semibold tracking-wider text-sm mb-3">INDUSTRIES WE SERVE</p>
          <h2 className="text-4xl font-serif font-bold mb-4">Built for scale, tuned for every sector.</h2>
          <p className="text-primary-foreground/80 text-lg">Built for industrial workplaces, our catering services scale effortlessly with your shifts, site footprint, and workforce.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/10 border border-white/20 hover:bg-white/20 p-6 rounded-xl flex flex-col items-center justify-center text-center gap-3 transition-colors cursor-default"
            >
              <div className="text-accent opacity-90">
                <ind.Icon className="w-8 h-8" />
              </div>
              <span className="font-medium text-sm">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  const features = [
    { title: "End-to-End Industrial Kitchen Setup", desc: "Complete kitchen setup from planning to operational readiness." },
    { title: "Strict Hygiene Protocols", desc: "SOP-driven cleaning, sanitization and hand-wash discipline every hour." },
    { title: "Fresh Ingredients Daily", desc: "Zero cold-chain from farm to floor — vegetables procured every morning." },
    { title: "Customized Weekly Menus", desc: "Rotating menus co-designed with your HR and welfare committee." },
    // { title: "Nutrition-Focused Planning", desc: "In-house dietitians balance carbs, protein, fats, and micronutrients." },
    { title: "Bulk Meal Capacity", desc: "Comfortable scale from 200 to 5,000 meals per service." },
    { title: "Experienced Culinary Team", desc: "Chefs with 10+ years of industrial and hotel-grade kitchen exposure." },
    // { title: "Temperature-Controlled Transport", desc: "Insulated hot boxes and refrigerated vans preserve safety and taste." },
    // { title: "On-Time Delivery Guarantee", desc: "99.8% on-time performance backed by dual-route contingency." },
    // { title: "Digital Quality Monitoring", desc: "Live dashboards for temperature, feedback, wastage, and consumption." },
    { title: "Food Safety Compliance", desc: "FSSAI, HACCP, and ISO 22000 aligned processes, audited quarterly." },
    { title: "Dedicated Account Manager", desc: "One point of contact for menu, ops, escalations, and reporting." },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-primary font-semibold tracking-wider text-sm mb-3">WHY COMPANIES CHOOSE US</p>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">A partnership built on operational rigor.</h2>
          <p className="text-lg text-muted-foreground">The reasons India's most trusted industrial workplaces partner with StarCraft.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-secondary mt-1">•</span> {feat.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-border/50 ml-1">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { num: "01", title: "Requirement Discussion", desc: "We understand your workforce, shifts, cuisine preferences, and budget." },
    { num: "02", title: "Site Assessment", desc: "Our operations team visits to evaluate kitchen, storage, and dining setup." },
    { num: "03", title: "Customized Menu Planning", desc: "Expert chefs craft rotating menus tailored to your workforce." },
    { num: "04", title: "Food Tasting Session", desc: "Live tasting with your HR, welfare committee, and leadership for sign-off." },
    { num: "05", title: "Contract Finalization", desc: "Transparent SLAs on quantity, hygiene, timelines, and pricing." },
    { num: "06", title: "Daily Meal Operations", desc: "Cook, transport, serve — every day, every shift, without a miss." },
    { num: "07", title: "Regular Quality Reviews", desc: "Monthly reviews with satisfaction scores, wastage data, and menu refresh." }
  ];

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-semibold tracking-wider text-sm mb-3">OUR PROCESS</p>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">From first conversation to daily operations.</h2>
          <p className="text-lg text-muted-foreground">A structured seven-step onboarding designed for enterprise procurement teams.</p>
        </motion.div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-muted-foreground/20 z-0"></div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-6 overflow-x-auto pb-8 snap-x relative z-10 scrollbar-hide">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[280px] flex-shrink-0 snap-start relative group"
              >
                <div className="w-12 h-12 rounded-full bg-white border-2 border-primary text-primary font-bold flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2 pr-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm pr-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
