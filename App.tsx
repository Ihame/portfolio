
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsMarquee from './components/SkillsMarquee';
import ProjectsSection from './components/ProjectsSection';
import GeminiSection from './components/GeminiSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-crt-primary font-crt-mono">
      <Header />
      <main className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 relative z-10"> {/* Added relative z-10 for content above scanlines */}
        <Hero />
        <AboutSection />
        <SkillsMarquee />
        <ProjectsSection />
        <GeminiSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;