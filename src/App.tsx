import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsBar } from './components/PillarsBar';
import { Ecosystem } from './components/Ecosystem';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#0E2433] flex flex-col font-sans selection:bg-[#FF6B35] selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PillarsBar />
        <Ecosystem />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
