import { Navbar, Hero, TrustedBy, Stats } from '../components/ui-sections/TopSections';
import { Services, Industries, Features, Process } from '../components/ui-sections/MiddleSections';
import { WeeklyMenu, Gallery, Hygiene, CaseStudies } from '../components/ui-sections/BottomSections';
import { Testimonials, FAQ, CTA, Contact, Footer, FloatingCTA } from '../components/ui-sections/EndSections';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        {/*<TrustedBy />*/}
        {/*<Stats />*/}
        <Services />
        <Industries />
        <Features />
        <Process />
        <WeeklyMenu />
        <Gallery />
        <Hygiene />
        {/*<CaseStudies />*/}
        {/*<Testimonials />*/}
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
