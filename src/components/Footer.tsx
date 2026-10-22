import React from 'react';
import { Download, Mail, ChevronUp } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8 text-left">
          
          {/* Identity */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-electric-600 text-white font-bold flex items-center justify-center text-xs">
                AMD
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Software Engineering Graduate from Addis Ababa University, Addis Ababa Institute of Technology (AAiT). Specializing in full-stack web applications, secure enterprise systems, and IT infrastructure support.
            </p>
            <div className="text-[11px] text-slate-500">
              Addis Ababa, Ethiopia • Available to start immediately
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h5>
            <ul className="space-y-1.5">
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Key Competencies</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Professional Experience</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Education &amp; Training</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect & Actions */}
          <div className="md:col-span-3 space-y-2">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Connect &amp; Documents
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href={personalInfo.cvDownloadPath}
                  download="Abebe_Mihiretu_Demessa_CV.pdf"
                  className="inline-flex items-center gap-1.5 text-electric-400 hover:text-electric-300 font-medium"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Designed for professional recruitment.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
