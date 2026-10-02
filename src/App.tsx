import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ecosystem } from './components/Ecosystem';
import { HowWeBuild } from './components/HowWeBuild';
import { About } from './components/About';
import { CorporateOperations } from './components/CorporateOperations';
import { PressRelations } from './components/PressRelations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#13262F] flex flex-col font-sans selection:bg-[#13262F] selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Ecosystem />
        <HowWeBuild />
        <About />
        <CorporateOperations />
        <PressRelations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
