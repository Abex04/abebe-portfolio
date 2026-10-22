import React from 'react';
import { X, ExternalLink, CheckCircle2, ShieldCheck, Database } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-navy-900 border border-slate-700 shadow-2xl overflow-hidden my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-navy-950/70">
          <div>
            <span className="text-xs font-semibold text-electric-400 uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Image / Preview */}
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-navy-950 aspect-video relative">
            <ImageWithFallback
              src={project.image || ''}
              alt={project.title}
              className="w-full h-full object-cover"
              fallbackTitle={project.title}
              fallbackSubtitle={project.role}
            />
          </div>

          {/* Role & Context Meta */}
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">My Role:</span>
              <span className="font-semibold text-white">{project.role}</span>
            </div>
            {project.teamSize && (
              <div>
                <span className="text-slate-400 block mb-0.5">Team Composition:</span>
                <span className="font-semibold text-slate-200">{project.teamSize}</span>
              </div>
            )}
            {project.timeline && (
              <div>
                <span className="text-slate-400 block mb-0.5">Context:</span>
                <span className="font-semibold text-slate-200">{project.timeline}</span>
              </div>
            )}
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Project Architecture &amp; Implementation Details
            </h4>
            <div className="space-y-2.5 text-sm text-slate-300 leading-relaxed">
              {project.description.map((paragraph, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-electric-400 mt-1 flex-shrink-0" />
                  <span>{paragraph}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Highlighted Engineering Solutions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, i) => (
                <div key={i} className="p-3 rounded-lg bg-navy-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-5 border-t border-slate-800 bg-navy-950/70 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-electric-600 hover:bg-electric-500 text-white shadow-md transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit Live Application</span>
              </a>
            )}

            {project.clientRepoUrl && (
              <a
                href={project.clientRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-electric-400" />
                <span>Frontend Repository (Angular)</span>
              </a>
            )}

            {project.apiRepoUrl && (
              <a
                href={project.apiRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <Database className="w-3.5 h-3.5 text-electric-400" />
                <span>Backend API Repository (.NET)</span>
              </a>
            )}

            {project.generalRepoUrl && (
              <a
                href={project.generalRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-electric-400" />
                <span>GitHub Profile / Repos</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
