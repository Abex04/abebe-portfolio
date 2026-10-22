import React from 'react';
import { 
  SiReact, 
  SiAngular, 
  SiTailwindcss, 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiPostgresql, 
  SiSupabase, 
  SiMysql, 
  SiGit, 
  SiGithub, 
  SiVercel, 
  SiHtml5, 
  SiSass, 
  SiDotnet, 
  SiC 
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa6';
import { TbBrandCSharp, TbSql } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';
import { 
  Cpu, 
  Wrench, 
  Terminal, 
  Headphones, 
  Printer, 
  Smartphone, 
  Server, 
  ShieldCheck, 
  Key, 
  GitMerge, 
  Search, 
  FileCode2, 
  Lock, 
  MessagesSquare, 
  Users2, 
  ListTodo, 
  BrainCircuit, 
  Sparkles,
  Database
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const getTechIconData = (name: string): { icon: React.ReactNode; color: string; bg: string } => {
  switch (name) {
    // Programming Languages
    case 'Java':
      return { icon: <FaJava className="w-4 h-4" />, color: 'text-[#EA2D2E]', bg: 'bg-[#EA2D2E]/10' };
    case 'Python':
      return { icon: <SiPython className="w-4 h-4" />, color: 'text-[#3776AB]', bg: 'bg-[#3776AB]/10' };
    case 'C':
      return { icon: <SiC className="w-4 h-4" />, color: 'text-[#00599C]', bg: 'bg-[#00599C]/10' };
    case 'C#':
      return { icon: <TbBrandCSharp className="w-4 h-4" />, color: 'text-[#512BD4]', bg: 'bg-[#512BD4]/10' };
    case 'JavaScript':
      return { icon: <SiJavascript className="w-4 h-4" />, color: 'text-[#F7DF1E]', bg: 'bg-[#F7DF1E]/10' };
    case 'TypeScript':
      return { icon: <SiTypescript className="w-4 h-4" />, color: 'text-[#3178C6]', bg: 'bg-[#3178C6]/10' };
    case 'HTML5':
      return { icon: <SiHtml5 className="w-4 h-4" />, color: 'text-[#E34F26]', bg: 'bg-[#E34F26]/10' };
    case 'CSS3':
      return { icon: <FaCss3Alt className="w-4 h-4" />, color: 'text-[#1572B6]', bg: 'bg-[#1572B6]/10' };
    case 'SCSS':
      return { icon: <SiSass className="w-4 h-4" />, color: 'text-[#CC6699]', bg: 'bg-[#CC6699]/10' };

    // Web Development
    case 'Angular':
      return { icon: <SiAngular className="w-4 h-4" />, color: 'text-[#DD0031]', bg: 'bg-[#DD0031]/10' };
    case 'React':
      return { icon: <SiReact className="w-4 h-4" />, color: 'text-[#61DAFB]', bg: 'bg-[#61DAFB]/10' };
    case 'Tailwind CSS':
      return { icon: <SiTailwindcss className="w-4 h-4" />, color: 'text-[#06B6D4]', bg: 'bg-[#06B6D4]/10' };
    case 'Responsive Design':
      return { icon: <Smartphone className="w-4 h-4" />, color: 'text-[#38BDF8]', bg: 'bg-[#38BDF8]/10' };
    case 'REST APIs':
      return { icon: <Server className="w-4 h-4" />, color: 'text-[#60A5FA]', bg: 'bg-[#60A5FA]/10' };
    case 'Authentication & Authorization':
      return { icon: <Lock className="w-4 h-4" />, color: 'text-[#34D399]', bg: 'bg-[#34D399]/10' };

    // Backend & Databases
    case '.NET':
      return { icon: <SiDotnet className="w-4 h-4" />, color: 'text-[#512BD4]', bg: 'bg-[#512BD4]/10' };
    case 'PostgreSQL':
      return { icon: <SiPostgresql className="w-4 h-4" />, color: 'text-[#4169E1]', bg: 'bg-[#4169E1]/10' };
    case 'Supabase':
      return { icon: <SiSupabase className="w-4 h-4" />, color: 'text-[#3ECF8E]', bg: 'bg-[#3ECF8E]/10' };
    case 'MySQL':
      return { icon: <SiMysql className="w-4 h-4" />, color: 'text-[#4479A1]', bg: 'bg-[#4479A1]/10' };
    case 'Microsoft SQL Server':
      return { icon: <DiMsqlServer className="w-4 h-4" />, color: 'text-[#CC292B]', bg: 'bg-[#CC292B]/10' };
    case 'SQL Queries':
      return { icon: <TbSql className="w-4 h-4" />, color: 'text-[#38BDF8]', bg: 'bg-[#38BDF8]/10' };
    case 'Schema Design':
      return { icon: <Database className="w-4 h-4" />, color: 'text-[#818CF8]', bg: 'bg-[#818CF8]/10' };

    // IT Support & Troubleshooting
    case 'Hardware Diagnosis & Repair':
      return { icon: <Wrench className="w-4 h-4" />, color: 'text-[#F59E0B]', bg: 'bg-[#F59E0B]/10' };
    case 'Software Installation & Configuration':
      return { icon: <Terminal className="w-4 h-4" />, color: 'text-[#3B82F6]', bg: 'bg-[#3B82F6]/10' };
    case 'Operating-System Troubleshooting':
      return { icon: <Cpu className="w-4 h-4" />, color: 'text-[#10B981]', bg: 'bg-[#10B981]/10' };
    case 'User Support':
      return { icon: <Headphones className="w-4 h-4" />, color: 'text-[#06B6D4]', bg: 'bg-[#06B6D4]/10' };
    case 'Printer & Peripherals Maintenance':
      return { icon: <Printer className="w-4 h-4" />, color: 'text-[#A855F7]', bg: 'bg-[#A855F7]/10' };

    // Tools & Deployment
    case 'Git':
      return { icon: <SiGit className="w-4 h-4" />, color: 'text-[#F05032]', bg: 'bg-[#F05032]/10' };
    case 'GitHub':
      return { icon: <SiGithub className="w-4 h-4" />, color: 'text-[#F8FAFC]', bg: 'bg-[#F8FAFC]/10' };
    case 'Vercel':
      return { icon: <SiVercel className="w-4 h-4" />, color: 'text-[#FFFFFF]', bg: 'bg-[#FFFFFF]/10' };
    case 'CI/CD Pipelines':
      return { icon: <GitMerge className="w-4 h-4" />, color: 'text-[#38BDF8]', bg: 'bg-[#38BDF8]/10' };
    case 'Technical SEO':
      return { icon: <Search className="w-4 h-4" />, color: 'text-[#10B981]', bg: 'bg-[#10B981]/10' };
    case 'Schema.org Structured Data':
      return { icon: <FileCode2 className="w-4 h-4" />, color: 'text-[#6366F1]', bg: 'bg-[#6366F1]/10' };

    // Security & Authentication
    case 'Role-Based Access Control (RBAC)':
      return { icon: <ShieldCheck className="w-4 h-4" />, color: 'text-[#3B82F6]', bg: 'bg-[#3B82F6]/10' };
    case 'Row Level Security (RLS)':
      return { icon: <Lock className="w-4 h-4" />, color: 'text-[#10B981]', bg: 'bg-[#10B981]/10' };
    case 'Secure Login Flows':
      return { icon: <Key className="w-4 h-4" />, color: 'text-[#60A5FA]', bg: 'bg-[#60A5FA]/10' };
    case 'Token-Based Authentication':
      return { icon: <Key className="w-4 h-4" />, color: 'text-[#F59E0B]', bg: 'bg-[#F59E0B]/10' };

    // Professional Skills
    case 'Communication in Amharic & English':
      return { icon: <MessagesSquare className="w-4 h-4" />, color: 'text-[#38BDF8]', bg: 'bg-[#38BDF8]/10' };
    case 'Teamwork & Collaboration':
      return { icon: <Users2 className="w-4 h-4" />, color: 'text-[#10B981]', bg: 'bg-[#10B981]/10' };
    case 'Task Coordination':
      return { icon: <ListTodo className="w-4 h-4" />, color: 'text-[#818CF8]', bg: 'bg-[#818CF8]/10' };
    case 'Analytical Problem-Solving':
      return { icon: <BrainCircuit className="w-4 h-4" />, color: 'text-[#F59E0B]', bg: 'bg-[#F59E0B]/10' };
    case 'Adaptability & Rapid Learning':
      return { icon: <Sparkles className="w-4 h-4" />, color: 'text-[#38BDF8]', bg: 'bg-[#38BDF8]/10' };

    default:
      return { icon: <Terminal className="w-4 h-4" />, color: 'text-electric-400', bg: 'bg-electric-500/10' };
  }
};

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-4 h-4" }) => {
  const data = getTechIconData(name);
  return (
    <span className={`inline-flex items-center justify-center ${data.color} ${className}`}>
      {data.icon}
    </span>
  );
};
