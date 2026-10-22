import React from 'react';
import { GraduationCap, Award, BookOpen, Sparkles } from 'lucide-react';
import { education, trainingList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-navy-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Academics &amp; Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Professional Training
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Formal Software Engineering degree from Ethiopia's premier technological institute, supplemented by rigorous specialized technical programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Degree Card (AAiT) */}
          <div className="lg:col-span-7 rounded-2xl bg-navy-950 border border-slate-800 p-6 sm:p-8 shadow-md text-left">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-electric-600/15 border border-electric-500/30 text-electric-400 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {education.degree}
                  </h3>
                  <p className="text-sm text-electric-300 font-medium">
                    {education.institution}
                  </p>
                  <p className="text-xs text-slate-400">
                    {education.campus} • {education.location}
                  </p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-electric-500/10 text-electric-300 border border-electric-500/20">
                {education.graduationYear}
              </span>
            </div>

            {/* Degree Overview Highlight */}
            <div className="my-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left">
              <span className="text-xs text-electric-400 font-semibold uppercase tracking-wider block mb-1">
                Faculty of Electrical &amp; Computer Engineering
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Comprehensive engineering curriculum covering software architecture, algorithm design, relational database systems, computer networking, operating systems, and professional software quality assurance.
              </p>
            </div>

            {/* Relevant Coursework */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-electric-400" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                  Relevant University Coursework
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:text-white hover:border-slate-600 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Training Section */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 mb-1">
              <Award className="w-5 h-5 text-electric-400" />
              Specialized Training Programs
            </h3>

            {trainingList.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-navy-950 border border-slate-800 hover:border-slate-700 transition-all shadow-sm"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="text-base font-bold text-white">
                    {item.title}
                  </h4>
                  <span className="text-xs font-medium text-electric-400 whitespace-nowrap bg-electric-500/10 px-2.5 py-0.5 rounded-md border border-electric-500/20">
                    {item.period}
                  </span>
                </div>

                <div className="text-xs font-semibold text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-electric-400" />
                  <span>Provider: {item.provider}</span>
                </div>

                {item.description && (
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
