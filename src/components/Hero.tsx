import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, ArrowRight, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  // Rotating typewriter roles
  const roles = [
    'Full-Stack Web Developer',
    'React & .NET Specialist',
    'IT Systems & Troubleshooting Specialist',
    'Software Engineering Graduate',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-28 pb-16"
    >
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-pink-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(108,99,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,99,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Bio & Calls to Action */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col text-left"
        >
          {/* Status pill badge with pulsing green light */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-5 w-fit"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-sm shadow-emerald-400/50" />
            <span>Software Engineering Graduate • AAiT</span>
          </motion.div>

          {/* Candidate Name */}
          <p className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-2">
            {personalInfo.name}
          </p>

          {/* Big Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4 text-white">
            Software Developer &amp; <span className="gradient-text block">IT Specialist</span>
          </h1>

          {/* Typewriter text ticker */}
          <div className="h-9 mb-5 flex items-center">
            <span className="text-lg md:text-xl text-slate-300 font-medium">
              {displayText}
              <span className="inline-block w-0.5 h-5 bg-primary ml-1.5 animate-pulse align-middle" />
            </span>
          </div>

          {/* Concise bio */}
          <p className="text-slate-400 leading-relaxed mb-7 max-w-lg text-base">
            Graduated <span className="text-white font-semibold">2025</span> from{' '}
            <span className="text-white font-semibold">Addis Ababa University, AAiT</span> with a B.Sc. in Software Engineering. Experienced in full-stack web engineering, API design, and hands-on IT systems hardware &amp; software troubleshooting.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={personalInfo.cvDownloadPath}
              download="Abebe_Mihiretu_Demessa_CV.pdf"
              className="flex items-center gap-2.5 px-7 py-3.5 animated-gradient text-white rounded-xl font-semibold transition-all duration-200 glow hover:scale-[1.02] active:scale-95 shadow-lg text-sm"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download CV</span>
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 px-7 py-3.5 border border-primary/50 text-primary hover:bg-primary/10 rounded-xl font-semibold transition-all duration-200 text-sm hover:scale-[1.02] active:scale-95"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Social Links & Location */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#1e1e2e]/80">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>{personalInfo.location}</span>
            </div>
            
            <div className="h-4 w-px bg-[#1e1e2e]" />

            <div className="flex items-center gap-4">
              <span className="text-slate-500 text-xs uppercase tracking-wider font-medium">Find me on</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white text-xl transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5 fill-current" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-blue-400 text-xl transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5 fill-current" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-400 hover:text-pink-400 text-xl transition-colors duration-200"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Multi-Ring Glowing Floating Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center relative"
        >
          {/* Ambient blurred glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 md:w-[350px] md:h-[350px] rounded-full bg-primary/25 blur-3xl animate-pulse" />
          </div>

          {/* Floating Avatar Container */}
          <div className="relative w-64 h-64 md:w-[310px] md:h-[310px] float">
            {/* Outer delicate ring */}
            <div className="absolute -inset-6 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '24s' }} />
            {/* Middle accented ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-primary/45 border-dashed" />
            {/* Inner Profile Image Circle */}
            <div className="relative w-full h-full rounded-full border-4 border-primary/70 overflow-hidden shadow-2xl shadow-primary/30 bg-[#13131a]">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-slate-500 text-[10px] tracking-widest uppercase font-semibold">Scroll</span>
        <div className="w-5 h-8 border border-slate-700 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};
