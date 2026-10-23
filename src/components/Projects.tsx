import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Eye, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { ProjectModal } from './ProjectModal';
import { getTechIconData } from './TechIcon';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Full-Stack', label: 'Full-Stack' },
    { id: 'Web Application', label: 'Web Applications' },
    { id: 'Team Project', label: 'Collaborative / Capstone' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 relative bg-[#050508] border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2 font-semibold">
            What I've built
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm">
            Real-world software engineering applications — deployed, full-stack, and production-tested.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-pinkAccent rounded-full mx-auto mt-3" />
        </motion.div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'animated-gradient text-white glow-sm shadow-md'
                  : 'card text-slate-400 hover:text-white border-[#1e1e2e]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isLive = Boolean(project.liveUrl);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="card rounded-2xl overflow-hidden flex flex-col group border-[#1e1e2e] hover:border-primary/45 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                >
                  {/* Top Image Container with zoom & hover overlay */}
                  <div
                    onClick={() => setModalProject(project)}
                    className="relative h-52 overflow-hidden block flex-shrink-0 cursor-pointer bg-[#0c0c14]"
                  >
                    <ImageWithFallback
                      src={project.image || ''}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />

                    {/* Centered "View Project" pill sliding up */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-full text-xs font-bold shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Eye className="w-4 h-4 text-primary" />
                        <span>View Details</span>
                      </span>
                    </div>

                    {/* Category Tag (Top-Left) */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 bg-black/75 backdrop-blur-md text-slate-200 text-[11px] rounded-full font-medium border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* Live Badge (Top-Right) */}
                    {isLive && (
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-emerald-500/40 px-2.5 py-1 rounded-full z-10 shadow-lg">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-sm shadow-emerald-400/80" />
                        <span className="text-emerald-400 text-[11px] font-semibold">Live Demo</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-1 text-left justify-between">
                    <div>
                      <h3
                        onClick={() => setModalProject(project)}
                        className="text-white font-bold text-base mb-1.5 leading-snug cursor-pointer group-hover:text-primary transition-colors"
                      >
                        {project.title}
                      </h3>

                      <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                        {project.summary}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.slice(0, 5).map((tech) => {
                          const iconData = getTechIconData(tech);
                          return (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40 border border-white/5 text-[11px] text-slate-300"
                            >
                              <span className={`text-xs ${iconData.color}`}>{iconData.icon}</span>
                              <span>{tech}</span>
                            </span>
                          );
                        })}
                        {project.technologies.length > 5 && (
                          <span className="px-2 py-1 rounded-lg bg-black/30 border border-white/5 text-[10px] text-slate-500">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="flex items-center gap-2 pt-3 border-t border-[#1e1e2e]">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold animated-gradient text-white glow-sm transition-all duration-200 hover:opacity-95"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Site</span>
                        </a>
                      )}

                      {project.clientRepoUrl && (
                        <a
                          href={project.clientRepoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium border border-[#1e1e2e] hover:border-primary/40 text-slate-300 hover:text-white transition-colors ${
                            !project.liveUrl ? 'flex-1' : ''
                          }`}
                        >
                          <GithubIcon className="w-3.5 h-3.5 fill-current" />
                          <span>{project.apiRepoUrl ? 'Client' : 'Code'}</span>
                        </a>
                      )}

                      {project.apiRepoUrl && (
                        <a
                          href={project.apiRepoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium border border-[#1e1e2e] hover:border-primary/40 text-slate-300 hover:text-white transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5 fill-current" />
                          <span>API</span>
                        </a>
                      )}

                      {project.generalRepoUrl && !project.clientRepoUrl && (
                        <a
                          href={project.generalRepoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium border border-[#1e1e2e] hover:border-primary/40 text-slate-300 hover:text-white transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5 fill-current" />
                          <span>Code</span>
                        </a>
                      )}

                      <button
                        onClick={() => setModalProject(project)}
                        className="p-2 rounded-lg text-slate-400 hover:text-white border border-[#1e1e2e] hover:border-primary/40 transition-colors"
                        title="View details"
                      >
                        <Layers className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Modal */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </section>
  );
};
