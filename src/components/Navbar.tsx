import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

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
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-electric-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-600 to-electric-400 flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-md shadow-electric-500/20 group-hover:scale-105 transition-transform">
              AMD
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-semibold text-base tracking-tight group-hover:text-electric-300 transition-colors">
                {personalInfo.shortName}
              </span>
              <span className="text-xs text-slate-400 font-normal">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-electric-400 bg-electric-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Download CV */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.cvDownloadPath}
              download="Abebe_Mihiretu_Demessa_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-electric-600 hover:bg-electric-500 text-white shadow-md shadow-electric-600/25 transition-all hover:shadow-electric-600/40 active:scale-95 focus:outline-none focus:ring-2 focus:ring-electric-400"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personalInfo.cvDownloadPath}
              download="Abebe_Mihiretu_Demessa_CV.pdf"
              className="p-2 text-slate-300 hover:text-white bg-slate-800/60 rounded-lg sm:hidden"
              title="Download CV"
            >
              <FileText className="w-5 h-5 text-electric-400" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-electric-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-800">
              <a
                href={personalInfo.cvDownloadPath}
                download="Abebe_Mihiretu_Demessa_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold bg-electric-600 hover:bg-electric-500 text-white shadow-md shadow-electric-600/30"
              >
                <Download className="w-4 h-4" />
                <span>Download My CV (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
