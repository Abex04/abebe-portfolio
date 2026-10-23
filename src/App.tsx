import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { ProfessionalQualities } from './components/ProfessionalQualities';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050508] text-slate-100 flex flex-col relative selection:bg-primary selection:text-white">
      {/* Background SVG noise overlay matching reference site */}
      <div className="noise" />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <ProfessionalQualities />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
