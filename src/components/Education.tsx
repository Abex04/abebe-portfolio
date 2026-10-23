import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { education, trainingList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6 relative bg-[#050508] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

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
            Academics &amp; Certifications
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Education &amp; <span className="gradient-text">Training</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-pinkAccent rounded-full mx-auto mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Degree Card (AAiT) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 card rounded-2xl p-6 sm:p-8 border-[#1e1e2e] hover:border-primary/45 transition-all duration-300 text-left"
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 text-primary flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {education.degree}
                  </h3>
                  <p className="text-sm text-primary font-medium mt-0.5">
                    {education.institution}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {education.campus} • {education.location}
                  </p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-semibold animated-gradient text-white glow-sm shadow-sm">
                Class of {education.graduationYear}
              </span>
            </div>

            {/* Degree Overview */}
            <div className="my-5 p-4 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[11px] text-primary font-semibold uppercase tracking-wider block mb-1">
                Faculty of Electrical &amp; Computer Engineering
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rigorous curriculum covering software architecture, algorithm design, database management, computer networking, operating systems, and professional software quality assurance.
              </p>
            </div>

            {/* Coursework chips */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-primary" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Key University Coursework
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-black/40 text-slate-300 border border-white/5 hover:border-primary/40 hover:text-white transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Training & Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-4 text-left"
          >
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                Specialized Technical Training
              </h3>
            </div>

            {trainingList.map((tr) => (
              <div
                key={tr.id}
                className="card rounded-2xl p-5 border-[#1e1e2e] hover:border-primary/45 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="text-base font-bold text-white leading-snug">
                    {tr.title}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-primary/15 text-primary border border-primary/30 shrink-0">
                    {tr.period}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
                  <span className="text-slate-200 font-medium">{tr.provider}</span>
                </div>

                {tr.description && (
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {tr.description}
                  </p>
                )}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
