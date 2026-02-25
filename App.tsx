import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Tools } from './pages/Tools';
import { VFX } from './pages/VFX';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { ToolDetail } from './pages/ToolDetail';
import { Blog } from './pages/Blog';
import { Support } from './pages/Support';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { motion, useScroll, useSpring } from 'framer-motion';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-100 mix-blend-overlay"></div>
        
        {/* Film Grain / Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]"></div>
        
        {/* Moving Gradient Blobs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute -bottom-32 left-1/3 w-[700px] h-[700px] bg-slate-800/20 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"></div>
    </div>
  );
};

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-purple-500 origin-left z-[100]"
            style={{ scaleX }}
        />
    );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <ScrollProgress />
      <div className="flex flex-col min-h-screen bg-background text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 relative">
        <BackgroundEffects />
        <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/tools/:toolId" element={<ToolDetail />} />
                <Route path="/vfx" element={<VFX />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/support" element={<Support />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
            </main>
            <Footer />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;