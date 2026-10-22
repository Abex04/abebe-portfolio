import React from 'react';
import { GraduationCap, Cpu, Code2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { stats } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-navy-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Precision &amp; Practical Problem Solving
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A software engineering graduate combining academic rigor from AAiT with real-world hands-on experience in software development and enterprise IT systems.
          </p>
        </div>

        {/* 4 Trust Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-navy-950/80 border border-slate-800 hover:border-slate-700 transition-colors shadow-sm text-left"
            >
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">
                {s.label}
              </span>
              <span className="text-xl font-bold text-white block mb-1">
                {s.value}
              </span>
              <span className="text-xs text-electric-300 font-medium">
                {s.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Biography & Key Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Detailed Biography Text */}
          <div className="lg:col-span-7 text-left space-y-5 text-slate-300 leading-relaxed text-base">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-electric-400" />
              Software Engineering Graduate from Addis Ababa University (AAiT)
            </h3>
            
            <p>
              I graduated in 2025 with a Bachelor of Science in Software Engineering from Addis Ababa University’s prestigious Addis Ababa Institute of Technology (AAiT). My education provided a comprehensive foundation in algorithms, object-oriented design, relational database systems, operating systems, and computer networks.
            </p>

            <p>
              Throughout my degree and practical engagements, I have focused on building reliable web applications and maintaining enterprise IT hardware and software infrastructure. Whether architecting a multi-lingual real estate platform independently, engineering an enterprise training management system, or serving as an on-site IT support specialist, I prioritize systematic diagnosis, data integrity, and user-centric functionality.
            </p>

            <p>
              My professional background spans corporate medical IT support at <strong className="text-white font-medium">Swiss Diagnostics Ethiopia</strong>—where I diagnosed hardware, supported operational software, and assisted multi-departmental personnel—as well as ongoing on-call support for commercial businesses. I am adaptable, equally comfortable driving projects independently or collaborating within a cross-functional team.
            </p>

            {/* Core Commitments List */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-3">
                Key Professional Attributes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Immediate availability for employment</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Fluent communication in Amharic &amp; English</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Strong major GPA (3.56 / 4.00)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Hardware &amp; network diagnostic skill</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Core Competency Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            
            {/* Pillar 1 */}
            <div className="p-5 rounded-xl bg-navy-950 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-electric-500/10 border border-electric-500/20 text-electric-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Full-Stack Application Development</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Proven ability building responsive frontends with React and Angular, integrated with C# .NET Web APIs, PostgreSQL, and Supabase backend systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 rounded-xl bg-navy-950 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-electric-500/10 border border-electric-500/20 text-electric-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Practical IT Systems &amp; Hardware Support</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Diagnosing computer workstations, network printers, operating-system issues, and software deployment to minimize downtime for business and medical teams.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 rounded-xl bg-navy-950 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-electric-500/10 border border-electric-500/20 text-electric-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Security &amp; Structural Reliability</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Implementing Role-Based Access Control (RBAC), Row Level Security (RLS), and disciplined version control workflows ensuring high reliability.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
