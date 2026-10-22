import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, Wrench } from 'lucide-react';
import { experience } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Practical IT support, systems troubleshooting, and operational software assistance grounded in real-world environments.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((item) => (
            <div
              key={item.id}
              className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 hover:border-electric-500/60 transition-colors text-left"
            >
              {/* Timeline marker icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-navy-900 border-2 border-electric-500 flex items-center justify-center text-electric-400 shadow-md">
                {item.isCurrent ? (
                  <Wrench className="w-4 h-4" />
                ) : (
                  <Briefcase className="w-4 h-4" />
                )}
              </div>

              {/* Card Container */}
              <div className="rounded-2xl bg-navy-900/90 border border-slate-800 p-6 sm:p-7 shadow-sm hover:border-slate-700 transition-all hover-lift">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                      {item.isCurrent ? (
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Ongoing / On-Call
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                          Completed (Through 2024)
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-sm text-electric-300 font-medium">
                      <Building className="w-3.5 h-3.5" />
                      <span>{item.company}</span>
                      {item.subtitle && (
                        <span className="text-slate-400 font-normal">
                          • {item.subtitle}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex sm:flex-col items-start sm:items-end gap-3 sm:gap-1 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-electric-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Type */}
                <div className="text-xs font-medium text-slate-400 mb-4 pb-3 border-b border-slate-800">
                  {item.type}
                </div>

                {/* Responsibilities list */}
                <div className="space-y-2.5">
                  {item.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-electric-400 mt-1 flex-shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
