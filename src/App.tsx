import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndustrialpediaTeaser } from './components/IndustrialpediaTeaser';
import { Services } from './components/Services';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080C15] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <IndustrialpediaTeaser />
        <Services />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
