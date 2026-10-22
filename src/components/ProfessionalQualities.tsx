import React from 'react';
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
        return <MessageSquare className="w-5 h-5 text-electric-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-electric-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-electric-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-electric-400" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-electric-400" />;
      case 'CheckCircle':
        return <CheckCircle className="w-5 h-5 text-electric-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-electric-400" />;
    }
  };

  return (
    <section className="py-20 bg-navy-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Work Ethic &amp; Attributes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Qualities &amp; Collaboration
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A reliable, communicative, and analytical approach essential for banking, corporate IT, and cross-functional engineering teams.
          </p>
        </div>

        {/* 6 Professional Qualities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {professionalQualities.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-navy-900/80 border border-slate-800 hover:border-slate-700 transition-all text-left shadow-sm hover-lift"
            >
              <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center mb-4">
                {getQualityIcon(item.icon)}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner: Languages & Official Reference */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Languages Card */}
          <div className="md:col-span-6 p-6 rounded-2xl bg-navy-900 border border-slate-800 flex items-start gap-4 text-left shadow-sm">
            <div className="p-3 rounded-xl bg-electric-500/10 border border-electric-500/20 text-electric-400 flex-shrink-0">
              <Languages className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Language Proficiency
              </h4>
              <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                Clear verbal and written technical communication across diverse stakeholders and user communities.
              </p>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700">
                  Amharic (Native / Fluent)
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700">
                  English (Professional Working)
                </span>
              </div>
            </div>
          </div>

          {/* Professional Reference Card */}
          <div className="md:col-span-6 p-6 rounded-2xl bg-navy-900 border border-slate-800 flex items-start gap-4 text-left shadow-sm">
            <div className="p-3 rounded-xl bg-electric-500/10 border border-electric-500/20 text-electric-400 flex-shrink-0">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Professional Reference
              </h4>
              <p className="text-sm font-semibold text-electric-300">
                {referenceInfo.name}
              </p>
              <p className="text-xs text-slate-400 mb-2">
                {referenceInfo.company}
              </p>
              <span className="inline-block text-xs text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/80">
                {referenceInfo.note}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
