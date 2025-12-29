import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
      <div className="bg-background text-text min-h-screen selection:bg-accent selection:text-white cursor-none">
        <CustomCursor />
        <Navbar />

        <main className="relative z-10 w-full overflow-hidden">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Decorative Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[30%] h-[30%] bg-red-900/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-orange-900/5 rounded-full blur-[150px]" />
        </div>

        {/* Resume Modal */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </div>
    </ResumeContext.Provider>
  );
}

export default App;
