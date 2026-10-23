import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050508]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Monogram Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-2xl font-black gradient-text tracking-tight group-hover:scale-105 transition-transform">
            AMD.
          </span>
          <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors">
            Abebe Mihiretu
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 bg-[#13131a]/80 backdrop-blur-md border border-[#1e1e2e] px-2 py-1.5 rounded-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 block ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-primary/20 border border-primary/40 rounded-lg shadow-sm shadow-primary/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.cvDownloadPath}
            download="Abebe_Mihiretu_Demessa_CV.pdf"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white border border-[#1e1e2e] hover:border-primary/40 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-primary" />
            <span>CV</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2 animated-gradient text-white rounded-lg text-sm font-semibold glow-sm hover:opacity-95 transition-all duration-200 active:scale-95"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none rounded-lg border border-[#1e1e2e]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0a12]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-primary/20 text-white border border-primary/30 font-semibold'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-[#1e1e2e] flex flex-col gap-3">
                <a
                  href={personalInfo.cvDownloadPath}
                  download="Abebe_Mihiretu_Demessa_CV.pdf"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 border border-[#1e1e2e]"
                >
                  <Download className="w-4 h-4 text-primary" />
                  <span>Download CV</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold animated-gradient text-white glow-sm"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
