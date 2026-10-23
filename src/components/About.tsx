import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, MapPin, Code2, Laptop } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-primary" />,
      title: 'Education',
      desc: 'B.Sc. in Software Engineering, Addis Ababa University (AAiT), 2025',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      title: 'Professional Experience',
      desc: 'IT Support Specialist at Swiss Diagnostics Ethiopia & Freelance Technical Support',
    },
    {
      icon: <Code2 className="w-5 h-5 text-primary" />,
      title: 'Full-Stack Development',
      desc: 'Modern web applications using React, Angular, TypeScript, and .NET Web APIs',
    },
    {
      icon: <Laptop className="w-5 h-5 text-primary" />,
      title: 'IT & Infrastructure Support',
      desc: 'Hardware repair, operating systems configuration, user support, and structured troubleshooting',
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: 'Location & Availability',
      desc: 'Addis Ababa, Ethiopia — open to on-site, hybrid, and remote engineering opportunities',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 relative bg-[#050508] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2 font-semibold">
            Get to know me
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-pinkAccent rounded-full mx-auto mt-3" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Column: Narrative & Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Software Engineer &amp; Practical Technologist
            </h3>
            
            <p className="text-slate-400 leading-relaxed mb-4 text-sm">
              I am a Software Engineering graduate from <span className="text-white font-medium">Addis Ababa University, Addis Ababa Institute of Technology (AAiT)</span>, class of 2025.
            </p>

            <p className="text-slate-400 leading-relaxed mb-4 text-sm">
              My expertise bridges modern software engineering with hands-on IT infrastructure support. Whether designing responsive client applications in React/Angular, building secure .NET and Node backend APIs, or resolving mission-critical hardware and network challenges, I approach every project with discipline, analytical rigor, and attention to detail.
            </p>

            <p className="text-slate-400 leading-relaxed mb-6 text-sm">
              With experience at <span className="text-white font-medium">Swiss Diagnostics Ethiopia</span> and on-call freelance support for Ethiopian enterprises, I communicate fluently in both Amharic and English, adapting comfortably to fast-paced team environments.
            </p>

            {/* Metrics cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="rounded-xl bg-primary/10 border border-primary/20 px-4 py-3.5 text-center">
                <div className="text-2xl font-black gradient-text">AAiT</div>
                <div className="text-slate-400 text-xs mt-1">Software Engineering</div>
              </div>
              <div className="rounded-xl bg-primary/10 border border-primary/20 px-4 py-3.5 text-center">
                <div className="text-2xl font-black gradient-text">3+</div>
                <div className="text-slate-400 text-xs mt-1">Featured Projects</div>
              </div>
              <div className="rounded-xl bg-primary/10 border border-primary/20 px-4 py-3.5 text-center col-span-2 sm:col-span-1">
                <div className="text-2xl font-black gradient-text">15+</div>
                <div className="text-slate-400 text-xs mt-1">Technologies</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Highlight Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl bg-[#13131a]/80 border border-[#1e1e2e] hover:border-primary/40 px-4 py-3.5 transition-all duration-300 hover:translate-x-1"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                  {item.icon}
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    {item.title}
                  </p>
                  <p className="text-white text-sm font-medium leading-snug mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
