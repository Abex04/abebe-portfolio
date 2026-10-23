import React from 'react';
import { Download, ChevronUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] border-t border-white/10 text-slate-400 text-xs py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1e1e2e]">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-black gradient-text">AMD.</span>
            <span className="text-white font-semibold text-sm">
              {personalInfo.name}
            </span>
            <span className="text-slate-500 text-xs hidden sm:inline">
              • Software Engineer (AAiT '25)
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5 fill-current" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5 fill-current" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.cvDownloadPath}
              download="Abebe_Mihiretu_Demessa_CV.pdf"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-slate-300 hover:text-white hover:border-primary/40 transition-colors ml-2"
            >
              <Download className="w-3.5 h-3.5 text-primary" />
              <span>CV</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#13131a] hover:bg-[#1e1e2e] text-slate-400 hover:text-white transition-colors border border-[#1e1e2e]"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-3.5 h-3.5 text-primary" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Abebe Mihiretu Demessa. All rights reserved.</p>
          <p>Built with React, TypeScript &amp; Tailwind CSS • Addis Ababa, Ethiopia</p>
        </div>
      </div>
    </footer>
  );
};
