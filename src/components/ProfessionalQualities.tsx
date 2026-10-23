import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Users, 
  Wrench, 
  Brain, 
  Lightbulb, 
  CheckCircle,
  Languages,
  UserCheck
} from 'lucide-react';
import { professionalQualities, referenceInfo } from '../data/portfolioData';

export const ProfessionalQualities: React.FC = () => {
  const getQualityIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-primary" />;
      case 'Users':
        return <Users className="w-5 h-5 text-primary" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-primary" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-primary" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-primary" />;
      default:
        return <CheckCircle className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section className="py-20 px-6 bg-[#050508] relative border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2 font-semibold">
            Work Ethic &amp; Attributes
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Professional <span className="gradient-text">Qualities</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-pinkAccent rounded-full mx-auto mt-3" />
        </motion.div>

        {/* Qualities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-12">
          {professionalQualities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="card rounded-2xl p-6 border-[#1e1e2e] hover:border-primary/45 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                {getQualityIcon(item.icon)}
              </div>
              <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Language & Reference Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Languages */}
          <div className="card rounded-2xl p-6 border-[#1e1e2e]">
            <div className="flex items-center gap-2.5 mb-3">
              <Languages className="w-5 h-5 text-primary" />
              <h3 className="text-base font-bold text-white">
                Language Proficiency
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="text-xs text-slate-400 block">Amharic</span>
                <span className="text-sm font-semibold text-white">Native / Fluent</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="text-xs text-slate-400 block">English</span>
                <span className="text-sm font-semibold text-white">Professional Working</span>
              </div>
            </div>
          </div>

          {/* Academic / Professional Reference */}
          <div className="card rounded-2xl p-6 border-[#1e1e2e]">
            <div className="flex items-center gap-2.5 mb-3">
              <UserCheck className="w-5 h-5 text-primary" />
              <h3 className="text-base font-bold text-white">
                Professional Reference
              </h3>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 mt-3">
              <span className="text-sm font-semibold text-white block">
                {referenceInfo.name}
              </span>
              <span className="text-xs text-primary block mt-0.5">
                {referenceInfo.company}
              </span>
              <span className="text-xs text-slate-400 block mt-0.5">
                {referenceInfo.note}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
