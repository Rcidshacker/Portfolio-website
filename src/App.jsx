import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import CustomCursor from './components/CustomCursor';
import ResumeModal from './components/ResumeModal';

// Create context for resume modal state
export const ResumeContext = createContext();
export const useResume = () => useContext(ResumeContext);

function App() {
  const [loading, setLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="relative">
          <div className="text-white text-6xl font-bold tracking-tighter mix-blend-difference animate-pulse">Ruchit.</div>
          <div className="absolute inset-0 bg-white mix-blend-overlay animate-ping opacity-20" />
        </div>
      </div>
    );
  }

  return (
    <ResumeContext.Provider value={{ isResumeOpen, openResume: () => setIsResumeOpen(true), closeResume: () => setIsResumeOpen(false) }}>
      <div className="bg-background text-text min-h-screen selection:bg-accent selection:text-white">
        <Navbar />

        <main className="relative z-10 w-full overflow-hidden">
          <Hero />
          <Skills />
          <Projects />

          <section className="px-4 py-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <Certificates />
              <Achievements />
            </div>
          </section>

          <Contact />
        </main>

        {/* Decorative Background Elements - Removed per user request */}

        {/* Resume Modal */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </div>
    </ResumeContext.Provider>
  );
}

export default App;
