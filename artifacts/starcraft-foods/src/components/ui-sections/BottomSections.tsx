import React from 'react';
import { motion } from 'framer-motion';
import { Check, Download, ArrowUpRight } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

// Import images
import gal1 from '@assets/generated_images/gallery1.jpg';
import gal2 from '@assets/generated_images/gallery2.jpg';
import gal3 from '@assets/generated_images/gallery3.jpg';
import gal4 from '@assets/generated_images/gallery4.jpg';
import gal5 from '@assets/generated_images/gallery5.jpg';
import gal6 from '@assets/generated_images/gallery6.jpg';

import case1 from '@assets/generated_images/case1.jpg';
import case2 from '@assets/generated_images/case2.jpg';
import case3 from '@assets/generated_images/case3.jpg';

export function WeeklyMenu() {
  const breakfast = [
    { day: "MONDAY", item: "Idli, Sambar, Chutney, Boiled Egg, Tea / Coffee" },
    { day: "TUESDAY", item: " Vada, Chutney, Banana, Masala Chai" },
    { day: "WEDNESDAY", item: "Poha, Sev, Sprouts Salad, Tea / Coffee" },
    { day: "THURSDAY", item: "Upma, Chutney, Fruit Bowl, Tea" },
    { day: "FRIDAY", item: "Puri Bhaji, Boondi, Seasonal Fruit, Coffee" },
    { day: "SATURDAY", item: "Tomato Bhath, Tea / Coffee" },
  ];

  return (
    <section id="menu" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-primary font-semibold tracking-wider text-sm mb-3">WEEKLY MENU</p>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">A rotating menu, thoughtfully designed.</h2>
            <p className="text-lg text-muted-foreground">Regional variety, seasonal freshness, and balanced nutrition—refreshed regularly to keep every meal enjoyable.</p>
          </motion.div>
          {/*<motion.button */}
          {/*  initial={{ opacity: 0, x: 20 }}*/}
          {/*  whileInView={{ opacity: 1, x: 0 }}*/}
          {/*  viewport={{ once: true }}*/}
          {/*  className="flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-5 py-2.5 rounded-md font-medium transition-colors"*/}
          {/*>*/}
          {/*  <Download className="w-4 h-4" /> Download Menu PDF*/}
          {/*</motion.button>*/}
        </div>

        <Tabs.Root defaultValue="breakfast" className="w-full">
          <Tabs.List className="flex overflow-x-auto border-b border-border/60 mb-8 scrollbar-hide">
            {["Breakfast", "Lunch", "Dinner", "Special", "Healthy"].map((tab) => (
              <Tabs.Trigger 
                key={tab.toLowerCase()} 
                value={tab.toLowerCase()}
                className="px-6 py-3 font-medium text-muted-foreground hover:text-foreground data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary transition-colors whitespace-nowrap"
              >
                {tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <Tabs.Content value="breakfast" className="outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {breakfast.map((meal, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-border/40"
                >
                  <div className="text-xs font-bold text-secondary mb-2 tracking-widest">{meal.day}</div>
                  <div className="text-foreground font-medium leading-relaxed">{meal.item}</div>
                </motion.div>
              ))}
            </div>
          </Tabs.Content>

          {/* Placeholder for other tabs to keep it complete functionally */}
          {["lunch", "dinner", "special", "healthy"].map(tab => (
            <Tabs.Content key={tab} value={tab} className="outline-none py-12 text-center text-muted-foreground bg-white rounded-xl border border-border/40">
              <p>Detailed {tab} menu available in the full proposal.</p>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}

export function Gallery() {
  const images = [
    { src: gal1, label: "Central Industrial Kitchen", colSpan: "col-span-1 md:col-span-2 row-span-2" },
    { src: gal2, label: "Steam Cooking & Bulk Prep", colSpan: "col-span-1" },
    { src: gal3, label: "Chef-Led Culinary Team", colSpan: "col-span-1" },
    { src: gal4, label: "Quality Inspection", colSpan: "col-span-1" },
    { src: gal5, label: "Delivery Fleet", colSpan: "col-span-1 md:col-span-2" },
    { src: gal6, label: "Cafeteria Setup", colSpan: "col-span-1" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-primary font-semibold tracking-wider text-sm mb-3">KITCHEN & OPERATIONS</p>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Inside the machinery that feeds thousands.</h2>
          <p className="text-lg text-muted-foreground">Steam kettles, cold rooms, prep lines, and a fleet built for reliability at industrial scale.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-xl overflow-hidden group ${img.colSpan}`}
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Hygiene() {
  const points = [
    { title: "FSSAI Compliance", desc: "100% adherence to national standards." },
    { title: "Daily Sanitation", desc: "Rigorous cleaning of all surfaces and equipment." },
    { title: "Hair Nets & Gloves", desc: "Mandatory PPE for all kitchen staff." },
    { title: "Quality Inspections", desc: "Batch-wise testing before dispatch." },
    { title: "Temperature-Controlled Storage", desc: "Cold rooms and hot holding cabinets." },
    { title: "Safe Transportation", desc: "Food-grade insulated hot boxes." },
    { title: "Clean Water Systems", desc: "RO purified water for all cooking." },
    { title: "Pest Control", desc: "Weekly scheduled professional treatment." },
    { title: "Staff Training", desc: "Monthly hygiene and SOP workshops." }
  ];

  return (
    <section id="hygiene" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-accent font-semibold tracking-wider text-sm mb-3">HYGIENE & FOOD SAFETY</p>
          <h2 className="text-4xl font-serif font-bold mb-4">Uncompromising standards. Every batch. Every day.</h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">Food safety is not an add-on — it is the foundation of every meal we serve.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {points.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="bg-white/20 p-1.5 rounded-full mt-0.5">
                <Check className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{point.title}</h3>
                <p className="text-sm text-white/70">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudies() {
  const cases = [
    {
      img: case1,
      title: "Automotive Manufacturing Plant",
      desc: "800 employees served daily · Daily Breakfast + Lunch across 2 shifts.",
      stats: [
        { label: "On-Time Delivery", value: "99.9%" },
        { label: "Complaint Reduction", value: "-68%" },
        { label: "Satisfaction Score", value: "4.7/5" }
      ]
    },
    {
      img: case2,
      title: "Pharmaceutical Warehouse",
      desc: "1,200 employees · Three shifts · Strict allergen protocols.",
      stats: [
        { label: "Delivery Accuracy", value: "100%" },
        { label: "Dietary Compliance", value: "96%" },
        { label: "Renewal Rate", value: "3 years" }
      ]
    },
    {
      img: case3,
      title: "Logistics Park",
      desc: "600 employees · Night shift dominant · 24×7 operations.",
      stats: [
        { label: "On-Time Delivery", value: "99.6%" },
        { label: "Wastage Reduced", value: "-42%" },
        { label: "Employee Rating", value: "4.8/5" }
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-primary font-semibold tracking-wider text-sm mb-3">CLIENT SUCCESS STORIES</p>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Measurable outcomes for enterprise clients.</h2>
          <p className="text-lg text-muted-foreground">A snapshot of what long-term catering partnerships look like across industries.</p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {cases.map((cs, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-2xl overflow-hidden flex flex-col lg:flex-row border border-border/50 group"
            >
              <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                <img src={cs.img} alt={cs.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{cs.title}</h3>
                <p className="text-muted-foreground mb-8 text-lg">{cs.desc}</p>
                
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/60">
                  {cs.stats.map((stat, j) => (
                    <div key={j}>
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
