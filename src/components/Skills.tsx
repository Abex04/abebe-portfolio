import React, { useState } from 'react';
import { 
  Code, 
  Globe, 
  Database, 
  Cpu, 
  GitBranch, 
  ShieldCheck, 
  Users, 
  Terminal 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { getTechIconData } from './TechIcon';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'software' | 'it'>('all');

  // Map category icon names to Lucide icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-electric-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-electric-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-electric-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-electric-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-electric-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-electric-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-electric-400" />;
      default:
        return <Terminal className="w-5 h-5 text-electric-400" />;
    }
  };

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'software') {
      return ['Programming Languages', 'Web Development', 'Backend & Databases', 'Tools, Version Control & Deployment', 'Security & Authentication'].includes(cat.title);
    }
    if (selectedFilter === 'it') {
      return ['IT Support & Troubleshooting', 'Tools, Version Control & Deployment', 'Professional Skills'].includes(cat.title);
    }
    return true;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Skills &amp; Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technical Capabilities
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Organized strictly according to my curriculum vitae — combining modern software engineering with hands-on systems and hardware support.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedFilter === 'all'
                ? 'bg-electric-600 text-white shadow-md shadow-electric-600/30'
                : 'bg-navy-900 text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-800'
            }`}
          >
            All Skills
          </button>
          <button
            onClick={() => setSelectedFilter('software')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedFilter === 'software'
                ? 'bg-electric-600 text-white shadow-md shadow-electric-600/30'
                : 'bg-navy-900 text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-800'
            }`}
          >
            Software Engineering &amp; Dev
          </button>
          <button
            onClick={() => setSelectedFilter('it')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedFilter === 'it'
                ? 'bg-electric-600 text-white shadow-md shadow-electric-600/30'
                : 'bg-navy-900 text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-800'
            }`}
          >
            IT Support &amp; Professional
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-navy-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover-lift shadow-sm text-left"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-electric-500/10 border border-electric-500/20">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges with Official Logos */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const iconData = getTechIconData(skill);
                    return (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-700/70 hover:border-slate-600 hover:bg-slate-800 hover:text-white transition-all duration-200 hover:-translate-y-0.5 group shadow-sm"
                      >
                        <span className={`inline-flex items-center justify-center p-1 rounded-md ${iconData.bg} ${iconData.color} transition-transform group-hover:scale-110 flex-shrink-0`}>
                          {iconData.icon}
                        </span>
                        <span>{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
