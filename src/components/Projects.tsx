import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, ShieldCheck, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { ProjectModal } from './ProjectModal';
import { TechIcon } from './TechIcon';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['all', 'Full-Stack', 'Web Application', 'Team Project'];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Featured Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Software Development &amp; Systems Engineering
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Real projects extracted from my CV showcasing independently deployed platforms, full-stack enterprise web systems, and collaborative engineering.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all ${
                selectedCategory === cat
                  ? 'bg-electric-600 text-white shadow-md shadow-electric-600/30'
                  : 'bg-navy-900 text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Featured Projects' : cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-navy-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between overflow-hidden shadow-lg hover-lift text-left group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div 
                  className="relative aspect-video bg-navy-900 overflow-hidden cursor-pointer"
                  onClick={() => setActiveModalProject(project)}
                >
                  <ImageWithFallback
                    src={project.image || ''}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fallbackTitle={project.title}
                    fallbackSubtitle={project.category}
                  />

                  {/* Top Badge: Category & Status */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-navy-950/90 backdrop-blur-md text-electric-300 border border-slate-700">
                      {project.category}
                    </span>
                    {project.isDeployed && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-600/50 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Live Deployed
                      </span>
                    )}
                  </div>

                  {/* Hover Quick View Overlay */}
                  <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold">
                    <Eye className="w-4 h-4 text-electric-400" />
                    <span>View Architecture Details</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Role sub-badge */}
                  <div className="text-[11px] font-semibold text-slate-400 mb-2 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-electric-400" />
                    <span>{project.role}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-electric-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Purpose & Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Key Highlights list */}
                  <div className="space-y-1.5 mb-5">
                    {project.keyFeatures.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        <TechIcon name={tech.replace(/ \(.+\)/, '')} className="w-3 h-3" />
                        <span>{tech}</span>
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-lg text-[11px] font-medium bg-slate-900 text-slate-400 border border-slate-800">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-2 flex flex-col gap-2">
                <div className="flex items-center gap-2 pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-electric-600 hover:bg-electric-500 text-white shadow-sm transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.clientRepoUrl && (
                    <a
                      href={project.clientRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                      title="Angular Client Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-electric-400" />
                      <span>Client Repo</span>
                    </a>
                  )}

                  {project.apiRepoUrl && (
                    <a
                      href={project.apiRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                      title="C# .NET API Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-electric-400" />
                      <span>API Repo</span>
                    </a>
                  )}

                  {project.generalRepoUrl && (
                    <a
                      href={project.generalRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-electric-400" />
                      <span>Source Code</span>
                    </a>
                  )}

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
                    title="View Full Architecture Details"
                    aria-label="View Full Details"
                  >
                    <ArrowUpRight className="w-4 h-4 text-electric-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal dialog for in-depth inspection */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
