import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, Wrench } from 'lucide-react';
import { experience } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 relative bg-[#050508] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2 font-semibold">
            Career Timeline
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-pinkAccent rounded-full mx-auto mt-3" />
        </motion.div>

        {/* Timeline Items */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-[17px] sm:before:left-[21px] before:w-[2px] before:bg-gradient-to-b before:from-primary/60 before:via-[#1e1e2e] before:to-transparent">
          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-12 sm:pl-14 text-left"
            >
              {/* Timeline marker orb */}
              <div className="absolute left-1 sm:left-2 top-3 w-8 h-8 rounded-full bg-[#13131a] border-2 border-primary flex items-center justify-center text-primary shadow-lg shadow-primary/30 z-10">
                {item.isCurrent ? (
                  <Wrench className="w-4 h-4" />
                ) : (
                  <Briefcase className="w-4 h-4" />
                )}
              </div>

              {/* Card Container */}
              <div className="card rounded-2xl p-6 sm:p-7 border-[#1e1e2e] hover:border-primary/45 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                      {item.isCurrent ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                          Ongoing / On-Call
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                          Completed (Through 2024)
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-sm text-primary font-medium">
                      <Building className="w-3.5 h-3.5" />
                      <span>{item.company}</span>
                      {item.subtitle && (
                        <span className="text-slate-400 font-normal">
                          • {item.subtitle}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-lg border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-lg border border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-black/40 border border-white/5 text-[11px] text-slate-400">
                    {item.type}
                  </span>
                </div>

                {/* Key Achievements/Duties */}
                <ul className="space-y-2 mb-2">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
