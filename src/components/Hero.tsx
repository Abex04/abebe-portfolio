import React from 'react';
import { ArrowRight, Download, Mail, MapPin, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { ImageWithFallback } from './ImageWithFallback';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background architectural glow & subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-navy-950 to-navy-950 -z-10" />
      <div 
        className="absolute inset-0 opacity-[0.03] -z-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#60a5fa 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-300 mb-6 w-fit backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.availability}</span>
              <span className="text-slate-500">•</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-electric-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              {personalInfo.name}
            </h1>

            {/* Professional Headline */}
            <div className="text-lg sm:text-xl font-medium text-electric-400 mb-6 tracking-wide">
              {personalInfo.headline}
            </div>

            {/* Concise Bio / Summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Software Engineering graduate from <strong className="text-white font-medium">Addis Ababa University (AAiT)</strong> with hands-on experience across full-stack application development, systems troubleshooting, and practical IT support. Dedicated to delivering reliable software, maintaining robust infrastructure, and driving operational excellence for forward-thinking organizations.
            </p>

            {/* Prominent Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              {/* Primary 1: View My Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-electric-600 hover:bg-electric-500 text-white shadow-lg shadow-electric-600/30 transition-all hover:shadow-electric-600/50 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-electric-400"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Primary 2: Download My CV */}
              <a
                href={personalInfo.cvDownloadPath}
                download="Abebe_Mihiretu_Demessa_CV.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/90 hover:bg-slate-700/90 text-white border border-slate-700 hover:border-slate-600 shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <Download className="w-4 h-4 text-electric-400" />
                <span>Download My CV</span>
              </a>

              {/* Secondary: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-400 flex-shrink-0" />
                <span>AAiT B.Sc. Graduated 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-400 flex-shrink-0" />
                <span>Full-Stack &amp; Systems Dev</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-400 flex-shrink-0" />
                <span>Swiss Diagnostics IT exp.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Portrait / Visual Presentation Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-electric-600/30 to-blue-400/20 blur-xl opacity-70 -z-10" />

              <div className="rounded-2xl bg-navy-900 border border-slate-800/90 shadow-2xl p-6 sm:p-7 overflow-hidden">
                {/* Photo container */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 bg-navy-950 border border-slate-800 shadow-inner group">
                  <ImageWithFallback
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top"
                    fallbackIcon={
                      <div className="text-center font-bold text-electric-400 tracking-wider">AMD</div>
                    }
                    fallbackTitle={personalInfo.name}
                    fallbackSubtitle="Software Engineer • AAiT"
                  />
                  
                  {/* Subtle verified badge overlay */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-navy-950/90 backdrop-blur-md border border-slate-700/80 text-[11px] font-medium text-slate-200 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Verified Profile
                  </div>
                </div>

                {/* Card Info summary */}
                <div className="text-left">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-bold text-white tracking-tight">{personalInfo.name}</h2>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-electric-500/10 text-electric-300 border border-electric-500/20">
                      AAiT '25
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    Software Development, Full-Stack Applications, and Enterprise IT Infrastructure Support.
                  </p>

                  {/* Quick Contact & Social links strip */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800 text-xs">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-electric-400" />
                      <span className="truncate">GitHub: {personalInfo.githubUsername}</span>
                    </a>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
                    >
                      <Mail className="w-3.5 h-3.5 text-electric-400" />
                      <span className="truncate">Email Me</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
