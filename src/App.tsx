import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcosystemDashboard } from './components/EcosystemDashboard';
import { Services } from './components/Services';
import { StatementSection } from './components/StatementSection';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#00D4FF] selection:text-slate-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <EcosystemDashboard />
        <Services />
        <StatementSection />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
