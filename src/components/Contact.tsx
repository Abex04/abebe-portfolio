import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Copy, 
  Check, 
  Send,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('Software Engineering Role');

  const emailTemplates = [
    {
      label: 'Software Engineering Role',
      subject: 'Job Opportunity: Software Engineering Role',
      body: `Hello Abebe,\n\nWe came across your portfolio and qualifications as a Software Engineering graduate from AAiT. We would like to discuss an opportunity regarding a software engineering position with our team.\n\nBest regards,\n[Your Name]\n[Your Organization]`
    },
    {
      label: 'IT Support & Systems',
      subject: 'Inquiry: IT Systems & Technical Support Role',
      body: `Hello Abebe,\n\nWe noticed your hands-on IT support and hardware troubleshooting background from Swiss Diagnostics and AAiT. We would like to connect regarding IT systems administration.\n\nBest regards,\n[Your Name]\n[Your Organization]`
    },
    {
      label: 'General Discussion',
      subject: 'Inquiry regarding your Portfolio & Projects',
      body: `Hello Abebe,\n\nI reviewed your portfolio (including Abebes Property Hub and your .NET/Angular projects) and would like to connect with you.\n\nBest regards,\n[Your Name]`
    }
  ];

  const currentTemplate = emailTemplates.find(t => t.label === selectedTemplate) || emailTemplates[0];
  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(currentTemplate.subject)}&body=${encodeURIComponent(currentTemplate.body)}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 relative bg-[#050508] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-[130px] pointer-events-none" />

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
            Get in touch
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm">
            I am actively open to software engineering, full-stack, and IT infrastructure roles. Feel free to reach out directly.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-pinkAccent rounded-full mx-auto mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4 text-left"
          >
            {/* Email Card */}
            <div className="card rounded-2xl p-5 border-[#1e1e2e] hover:border-primary/45 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 text-primary flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Direct Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-primary transition-colors block truncate max-w-[220px]"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-black/40 hover:bg-black/60 border border-white/5 text-slate-400 hover:text-white transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="card rounded-2xl p-5 border-[#1e1e2e] hover:border-primary/45 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 text-primary flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Phone / Telegram</p>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-white hover:text-primary transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-black/40 hover:bg-black/60 border border-white/5 text-slate-400 hover:text-white transition-colors"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="card rounded-2xl p-5 border-[#1e1e2e] hover:border-blue-500/50 transition-all duration-300 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                  <LinkedinIcon className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">LinkedIn Profile</p>
                  <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    abebe-mihiretu
                  </p>
                </div>
              </div>
              <span className="text-xs text-slate-500 group-hover:text-blue-400 font-medium">Connect &rarr;</span>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="card rounded-2xl p-5 border-[#1e1e2e] hover:border-purple-500/50 transition-all duration-300 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                  <GithubIcon className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">GitHub Repositories</p>
                  <p className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                    github.com/Abex04
                  </p>
                </div>
              </div>
              <span className="text-xs text-slate-500 group-hover:text-purple-400 font-medium">Explore &rarr;</span>
            </a>

            {/* Location Pill */}
            <div className="p-4 rounded-xl bg-black/30 border border-white/5 flex items-center gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Based in Addis Ababa, Ethiopia • Open to local &amp; remote roles</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Quick Email Launcher */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 card rounded-2xl p-6 sm:p-8 border-[#1e1e2e] text-left"
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-white">Send a Message</h3>
            </div>

            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Select a subject template to quickly open your email client with pre-formatted details:
            </p>

            {/* Topic Selector Tabs */}
            <div className="flex flex-wrap gap-2 mb-5">
              {emailTemplates.map((t) => (
                <button
                  key={t.label}
                  onClick={() => setSelectedTemplate(t.label)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedTemplate === t.label
                      ? 'bg-primary text-white font-semibold shadow-md shadow-primary/30'
                      : 'bg-black/40 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Message Preview */}
            <div className="rounded-xl bg-black/50 border border-white/5 p-4 mb-6">
              <div className="text-[11px] text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                Subject Preview:
              </div>
              <div className="text-xs font-semibold text-slate-200 mb-3">
                {currentTemplate.subject}
              </div>

              <div className="text-[11px] text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                Body Preview:
              </div>
              <div className="text-xs text-slate-300 font-mono whitespace-pre-line leading-relaxed bg-black/40 p-3 rounded-lg border border-white/5">
                {currentTemplate.body}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <a
                href={mailtoLink}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 animated-gradient text-white rounded-xl font-semibold text-xs glow transition-all hover:scale-[1.02] active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email in Mail Client</span>
              </a>

              <a
                href={personalInfo.cvDownloadPath}
                download="Abebe_Mihiretu_Demessa_CV.pdf"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold text-slate-200 border border-[#1e1e2e] hover:border-primary/40 transition-colors"
              >
                <Download className="w-4 h-4 text-primary" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
