import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { getTechIconData } from './TechIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl rounded-2xl bg-[#13131a] border border-[#1e1e2e] shadow-2xl shadow-primary/20 overflow-hidden my-8 text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[#1e1e2e] bg-[#0c0c14]">
            <div>
              <span className="text-[11px] font-semibold text-primary uppercase tracking-wider block mb-0.5">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors border border-white/5"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Visual preview */}
            <div className="rounded-xl overflow-hidden border border-[#1e1e2e] bg-black aspect-video relative">
              <ImageWithFallback
                src={project.image || ''}
                alt={project.title}
                className="w-full h-full object-cover"
                fallbackTitle={project.title}
                fallbackSubtitle={project.role}
              />
            </div>

            {/* Role & Context Meta */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div>
                <span className="text-slate-500 block mb-0.5">Role:</span>
                <span className="font-semibold text-white">{project.role}</span>
              </div>
              {project.teamSize && (
                <div>
                  <span className="text-slate-500 block mb-0.5">Team Composition:</span>
                  <span className="font-semibold text-slate-200">{project.teamSize}</span>
                </div>
              )}
              {project.timeline && (
                <div>
                  <span className="text-slate-500 block mb-0.5">Context:</span>
                  <span className="font-semibold text-slate-200">{project.timeline}</span>
                </div>
              )}
            </div>

            {/* Detailed Description */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Project Overview
              </h4>
              <div className="space-y-2">
                {project.description.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-sm text-slate-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Key Features &amp; Engineering Solutions
              </h4>
              <ul className="space-y-2.5">
                {project.keyFeatures.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => {
                  const iconData = getTechIconData(tech);
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-xs text-slate-200"
                    >
                      <span className={iconData.color}>{iconData.icon}</span>
                      <span>{tech}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="p-5 border-t border-[#1e1e2e] bg-[#0c0c14] flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold animated-gradient text-white glow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Live Demo</span>
                </a>
              )}
              {project.clientRepoUrl && (
                <a
                  href={project.clientRepoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border border-[#1e1e2e] hover:border-primary/40 text-slate-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 fill-current" />
                  <span>{project.apiRepoUrl ? 'Client Repository' : 'Source Code'}</span>
                </a>
              )}
              {project.apiRepoUrl && (
                <a
                  href={project.apiRepoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border border-[#1e1e2e] hover:border-primary/40 text-slate-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 fill-current" />
                  <span>Backend API Repository</span>
                </a>
              )}
              {project.generalRepoUrl && (
                <a
                  href={project.generalRepoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border border-[#1e1e2e] hover:border-primary/40 text-slate-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 fill-current" />
                  <span>Source Code</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
