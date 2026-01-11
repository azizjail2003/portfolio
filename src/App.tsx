import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Navigation/Sidebar';
import RequestBar from './components/Navigation/RequestBar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Research from './components/Research';
import Projects from './components/Projects';
import ApiHighlights from './components/ApiHighlights';
import Experience from './components/Experience';
import Skills from './components/Skills';
import { Awards, Contact } from './components/AwardsContact';
import { ThemeProvider } from './components/ThemeProvider';
import Intro from './components/Intro';
import { BackgroundGrid } from './components/BackgroundGrid';

import { ShootingStars } from './components/ShootingStars';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'research', 'projects', 'api-highlights', 'experience', 'skills', 'awards', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            setActiveSection(section === 'hero' ? 'overview' : section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Intro />
      <BackgroundGrid />
      <ShootingStars />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 4.5, ease: "easeOut" }}
        className="flex min-h-screen text-foreground font-sans selection:bg-primary/20 relative z-10"
      >
        <Sidebar activeSection={activeSection} />

        <div className="flex-1 flex flex-col min-w-0">
          <RequestBar currentPath={activeSection} />

          <main className="flex-1 w-full max-w-[1600px] mx-auto">
            <Hero />
            <About />
            <Education />
            <Research />
            <Projects />
            <ApiHighlights />
            <Experience />
            <Skills />
            <Awards />
            <Contact />
          </main>

          <footer className="py-6 text-center text-xs text-muted-foreground border-t border-border bg-background">
            Designed and developed by Abdelaziz Jail — Backend Engineer & AI enthusiast.
          </footer>
        </div>
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
