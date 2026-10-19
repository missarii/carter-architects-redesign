import Nav from './components/Nav';
import Hero from './components/Hero';
import SmoothScroll from './components/SmoothScroll';
import SectionDivider from './components/SectionDivider';
import Practice from './components/Practice';
import Services from './components/Services';
import BuildSequence from './components/BuildSequence';
import Blueprint from './components/Blueprint';
import Work from './components/Work';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-night dark:text-paper">
      <a href="#contact" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Skip to contact
      </a>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <SectionDivider label="CA — 01 Practice" />
        <Practice />
        <SectionDivider label="CA — 02 Services" />
        <Services />
        <BuildSequence />
        <Blueprint />
        <SectionDivider label="CA — 03 Scope" />
        <Work />
        <SectionDivider label="CA — 04 Clients" />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

