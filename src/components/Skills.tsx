import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Globe, 
  Database, 
  Cpu, 
  GitBranch, 
  ShieldCheck, 
  Terminal,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { getTechIconData } from './TechIcon';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'software' | 'it'>('all');

  // Gradient themes per category
  const categoryThemes: Record<string, { gradient: string; border: string; titleColor: string; icon: React.ReactNode }> = {
    'Programming Languages': {
      gradient: 'from-blue-500/15 to-cyan-500/15',
      border: 'border-blue-500/30',
      titleColor: 'text-blue-400',
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
    },
    'Web Development': {
      gradient: 'from-indigo-500/15 to-purple-500/15',
      border: 'border-indigo-500/30',
      titleColor: 'text-indigo-400',
      icon: <Globe className="w-5 h-5 text-indigo-400" />,
    },
    'Backend & Databases': {
      gradient: 'from-emerald-500/15 to-teal-500/15',
      border: 'border-emerald-500/30',
      titleColor: 'text-emerald-400',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
    },
    'IT Support & Troubleshooting': {
      gradient: 'from-amber-500/15 to-orange-500/15',
      border: 'border-amber-500/30',
      titleColor: 'text-amber-400',
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
    },
    'Tools, Version Control & Deployment': {
      gradient: 'from-purple-500/15 to-pink-500/15',
      border: 'border-purple-500/30',
      titleColor: 'text-purple-400',
      icon: <GitBranch className="w-5 h-5 text-purple-400" />,
    },
    'Security & Authentication': {
      gradient: 'from-red-500/15 to-rose-500/15',
      border: 'border-rose-500/30',
      titleColor: 'text-rose-400',
      icon: <ShieldCheck className="w-5 h-5 text-rose-400" />,
    },
    'Professional Skills': {
      gradient: 'from-cyan-500/15 to-blue-500/15',
      border: 'border-cyan-500/30',
      titleColor: 'text-cyan-400',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
    },
  };

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'software') {
      return ['Programming Languages', 'Web Development', 'Backend & Databases', 'Tools, Version Control & Deployment', 'Security & Authentication'].includes(cat.title);
    }
    if (activeTab === 'it') {
      return ['IT Support & Troubleshooting', 'Tools, Version Control & Deployment', 'Professional Skills'].includes(cat.title);
    }
    return true;
  });

  return (
    <section id="skills" className="py-20 px-6 relative bg-[#050508]">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2 font-semibold">
            What I work with
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-pinkAccent rounded-full mx-auto mt-3" />
        </motion.div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeTab === 'all'
                ? 'animated-gradient text-white glow-sm shadow-md'
                : 'card text-slate-400 hover:text-white border-[#1e1e2e]'
            }`}
          >
            All Skills
          </button>
          <button
            onClick={() => setActiveTab('software')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeTab === 'software'
                ? 'animated-gradient text-white glow-sm shadow-md'
                : 'card text-slate-400 hover:text-white border-[#1e1e2e]'
            }`}
          >
            Software Engineering &amp; Web
          </button>
          <button
            onClick={() => setActiveTab('it')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeTab === 'it'
                ? 'animated-gradient text-white glow-sm shadow-md'
                : 'card text-slate-400 hover:text-white border-[#1e1e2e]'
            }`}
          >
            IT Support &amp; Systems
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => {
              const theme = categoryThemes[category.title] || {
                gradient: 'from-blue-500/15 to-cyan-500/15',
                border: 'border-blue-500/30',
                titleColor: 'text-blue-400',
                icon: <Terminal className="w-5 h-5 text-blue-400" />,
              };

              return (
                <motion.div
                  key={category.title}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`rounded-2xl p-6 bg-gradient-to-br ${theme.gradient} border ${theme.border} backdrop-blur-md flex flex-col`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                      {theme.icon}
                    </div>
                    <h3 className={`font-bold text-sm uppercase tracking-wider ${theme.titleColor}`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-2.5 flex-1 content-start">
                    {category.skills.map((skill) => {
                      const iconData = getTechIconData(skill);
                      return (
                        <div
                          key={skill}
                          className="flex items-center gap-2.5 bg-black/40 hover:bg-black/60 rounded-xl px-3 py-2.5 border border-white/5 hover:border-primary/40 transition-all duration-200 hover:scale-[1.02] group"
                        >
                          <span className={`text-base shrink-0 ${iconData.color} group-hover:scale-110 transition-transform`}>
                            {iconData.icon}
                          </span>
                          <span className="text-xs font-medium text-slate-200 truncate">
                            {skill}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
