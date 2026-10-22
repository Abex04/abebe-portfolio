export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Web Application' | 'Team Project';
  role: string;
  timeline?: string;
  teamSize?: string;
  summary: string;
  description: string[];
  technologies: string[];
  liveUrl?: string;
  clientRepoUrl?: string;
  apiRepoUrl?: string;
  generalRepoUrl?: string;
  isDeployed: boolean;
  image?: string;
  keyFeatures: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  subtitle?: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  campus: string;
  location: string;
  graduationYear: string;
  cgpa: string;
  majorGpa: string;
  coursework: string[];
}

export interface TrainingItem {
  id: string;
  title: string;
  provider: string;
  period: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: string[];
}
