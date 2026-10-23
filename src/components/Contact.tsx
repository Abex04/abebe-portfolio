import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Copy, 
  Check, 
  ExternalLink,
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
      subject: 'Interview Invitation / Job Opportunity: Software Engineering Role',
      body: `Hello Abebe,\n\nWe came across your portfolio and qualifications as a Software Engineering graduate from AAiT. We would like to discuss an opportunity regarding a software engineering position with our team.\n\nBest regards,\n[Your Name]\n[Your Organization]`
    },
    {
      label: 'IT Support & Systems',
      subject: 'Inquiry: IT Support & Systems Technical Role',
      body: `Hello Abebe,\n\nWe noticed your hands-on IT support and hardware troubleshooting background from Swiss Diagnostics and AAiT. We have an opportunity regarding IT systems administration and technical support.\n\nBest regards,\n[Your Name]\n[Your Organization]`
    },
    {
      label: 'General Technical Discussion',
      subject: 'Inquiry regarding your Portfolio & Projects',
      body: `Hello Abebe,\n\nI reviewed your portfolio (including Abebes Property Hub and your .NET/Angular projects) and would like to connect with you regarding technical work.\n\nBest regards,\n[Your Name]`
    }
  ];

  const currentTemplate = emailTemplates.find(t => t.label === selectedTemplate) || emailTemplates[0];
  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(currentTemplate.subject)}&body=${encodeURIComponent(currentTemplate.body)}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-navy-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Direct Contact &amp; Engagement
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Open for corporate, banking, and software engineering opportunities in Addis Ababa or remote positions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-navy-950 border border-slate-800 hover:border-slate-700 transition-all shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 text-electric-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-electric-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-navy-950 border border-slate-800 hover:border-slate-700 transition-all shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 text-electric-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Phone / Mobile</span>
                    <a
                      href={`tel:${personalInfo.phoneFormatted}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-electric-300 transition-colors font-mono"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl bg-navy-950 border border-slate-800 hover:border-slate-700 transition-all shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 text-electric-400 flex items-center justify-center">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">GitHub Profile</span>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-white hover:text-electric-300 transition-colors"
                    >
                      github.com/{personalInfo.githubUsername}
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  aria-label="Open GitHub"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-navy-950 border border-slate-800 hover:border-slate-700 transition-all shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 text-electric-400 flex items-center justify-center">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">LinkedIn Profile</span>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-white hover:text-electric-300 transition-colors"
                    >
                      linkedin.com/in/{personalInfo.linkedinUsername}
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  aria-label="Open LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-navy-950 border border-slate-800 hover:border-slate-700 transition-all shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 text-electric-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Residential Location</span>
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Prominent Download CV Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-electric-900/40 via-navy-950 to-navy-950 border border-electric-500/30 text-left">
              <h4 className="text-base font-bold text-white mb-1">
                Official Curriculum Vitae (PDF)
              </h4>
              <p className="text-xs text-slate-300 mb-4">
                Download my official CV document containing complete education, professional experience, and technical projects.
              </p>
              <a
                href={personalInfo.cvDownloadPath}
                download="Abebe_Mihiretu_Demessa_CV.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs bg-electric-600 hover:bg-electric-500 text-white shadow-md shadow-electric-600/30 transition-all active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Download CV Document (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Pre-Composed Email Action Builder */}
          <div className="lg:col-span-7 rounded-2xl bg-navy-950 border border-slate-800 p-6 sm:p-8 text-left shadow-lg">
            
            <div className="flex items-center gap-2.5 mb-2">
              <MessageSquare className="w-5 h-5 text-electric-400" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Email Composer
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
              No fake form submissions or delayed servers. Select your inquiry type below to generate a pre-drafted message directly in your default email application.
            </p>

            {/* Template Selector Pills */}
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2.5">
                Select Inquiry Topic:
              </span>
              <div className="flex flex-wrap gap-2">
                {emailTemplates.map((t) => (
                  <button
                    key={t.label}
                    onClick={() => setSelectedTemplate(t.label)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedTemplate === t.label
                        ? 'bg-electric-600 text-white shadow-sm'
                        : 'bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/80'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Preview Box */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1">
                  Recipient
                </label>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                  {personalInfo.email}
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1">
                  Subject Line
                </label>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white font-medium">
                  {currentTemplate.subject}
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1">
                  Message Body Preview
                </label>
                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 whitespace-pre-line leading-relaxed font-mono">
                  {currentTemplate.body}
                </div>
              </div>
            </div>

            {/* Launch Action Button */}
            <a
              href={mailtoLink}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-electric-600 hover:bg-electric-500 text-white shadow-lg shadow-electric-600/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send className="w-4 h-4" />
              <span>Open Email Client with this Message</span>
            </a>

            <p className="text-[11px] text-slate-500 text-center mt-3">
              Opens your preferred email client (Outlook, Gmail, Apple Mail, Thunderbird).
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
