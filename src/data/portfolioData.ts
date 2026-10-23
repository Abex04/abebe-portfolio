import type { Project, Experience, EducationItem, TrainingItem, SkillCategory } from '../types';

export const personalInfo = {
  name: "Abebe Mihiretu Demessa",
  shortName: "Abebe Mihiretu",
  headline: "Software Engineering Graduate | Software Development | IT Support",
  subheadline: "AAiT Graduate (2025) with proven competencies in full-stack web applications, secure software development, and hands-on IT infrastructure support.",
  email: "abebemihiretu217@gmail.com",
  phone: "+251 919 184 704",
  phoneFormatted: "+251919184704",
  location: "Addis Ababa, Ethiopia",
  github: "https://github.com/Abex04",
  githubUsername: "Abex04",
  linkedin: "https://www.linkedin.com/in/abebe-mihiretu-b66791233/",
  linkedinUsername: "abebe-mihiretu",
  cvFileName: "Abebe_Mihiretu_CV.pdf",
  cvDownloadPath: "/Abebe_Mihiretu_CV.pdf",
  bio: `Software Engineering graduate from Addis Ababa University, Addis Ababa Institute of Technology (AAiT), with hands-on experience in software development, IT support, and technical troubleshooting. Skilled in developing web applications, diagnosing hardware and software issues, and providing practical technical assistance. A clear communicator and collaborative team player with strong analytical thinking, adaptability, and a willingness to learn. Committed to accuracy, reliability, teamwork, and continuous improvement, with the ability to contribute across technical and operational functions in a professional environment.`,
  profileImage: "/images/profile.png",
  profileFallback: "/images/profile-avatar.svg",
};

export const stats = [
  { label: "Degree & Institution", value: "B.Sc. Software Engineering, AAiT", detail: "Addis Ababa University (2025)" },
  { label: "Technical Focus", value: "Software & Systems", detail: "Full-Stack Dev + Infrastructure Support" },
  { label: "Primary Expertise", value: "Software & IT Support", detail: "Hands-on Development & Troubleshooting" },
  { label: "Location", value: "Addis Ababa", detail: "Ethiopia" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code",
    description: "Core languages for systems, backend services, and application scripting",
    skills: ["Java", "Python", "C", "C#", "JavaScript", "TypeScript", "HTML5", "CSS3", "SCSS"]
  },
  {
    title: "Web Development",
    iconName: "Globe",
    description: "Modern frontend architectures, responsive UI, and secure client-side flows",
    skills: ["Angular", "React", "Tailwind CSS", "Responsive Design", "REST APIs", "Authentication & Authorization"]
  },
  {
    title: "Backend & Databases",
    iconName: "Database",
    description: "Server architecture, relational databases, data querying, and schema modeling",
    skills: [".NET", "PostgreSQL", "Supabase", "MySQL", "Microsoft SQL Server", "SQL Queries", "Schema Design"]
  },
  {
    title: "IT Support & Troubleshooting",
    iconName: "Cpu",
    description: "System maintenance, workstation deployment, and hardware/software diagnostic triage",
    skills: ["Hardware Diagnosis & Repair", "Software Installation & Configuration", "Operating-System Troubleshooting", "User Support", "Printer & Peripherals Maintenance"]
  },
  {
    title: "Tools, Version Control & Deployment",
    iconName: "GitBranch",
    description: "Collaborative workflows, release pipelines, and technical discoverability",
    skills: ["Git", "GitHub", "Vercel", "CI/CD Pipelines", "Technical SEO", "Schema.org Structured Data"]
  },
  {
    title: "Security & Authentication",
    iconName: "ShieldCheck",
    description: "Enterprise access governance and security best practices",
    skills: ["Role-Based Access Control (RBAC)", "Row Level Security (RLS)", "Secure Login Flows", "Token-Based Authentication"]
  },
  {
    title: "Professional Skills",
    iconName: "Users",
    description: "Workplace communication, team coordination, and practical problem resolution",
    skills: ["Communication in Amharic & English", "Teamwork & Collaboration", "Task Coordination", "Analytical Problem-Solving", "Adaptability & Rapid Learning"]
  }
];

export const projects: Project[] = [
  {
    id: "property-hub",
    title: "Abebes Property Hub",
    category: "Full-Stack",
    role: "Sole Developer across Design, Development, and Deployment",
    summary: "Production-deployed real estate marketplace and administration platform built for property discovery in Addis Ababa with comprehensive multi-lingual support.",
    description: [
      "Built a modern real-estate marketplace and administration platform tailored for property search and listing management in Addis Ababa.",
      "Designed and implemented secure administrative workflows for property submissions and inventory oversight.",
      "Engineered multi-level listing filtering by property type, price, neighborhood, and amenities with real-time responsive updates.",
      "Implemented bilingual user interface localization in English and Amharic to serve local and diaspora home seekers.",
      "Deployed to production on Vercel with structured Schema.org data and technical SEO to maximize search indexing."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase (PostgreSQL)", "Vercel", "CI/CD", "Schema.org", "Row Level Security (RLS)"],
    liveUrl: "https://abebes-property-hub.vercel.app/",
    isDeployed: true,
    image: "/images/projects/property-hub.svg",
    keyFeatures: [
      "Role-Based Authentication & Supabase Row Level Security (RLS)",
      "Bilingual Amharic & English Interface Localization",
      "Multi-Level Property Search & Neighborhood Filtering",
      "Vercel Production Deployment with CI/CD & Technical SEO"
    ]
  },
  {
    id: "tms",
    title: "Training Management System (TMS)",
    category: "Web Application",
    role: "Full-Stack Developer (Qiyas Training Project)",
    summary: "Comprehensive enterprise web application for managing training programs, curriculums, courses, and trainees with strict role-based access.",
    description: [
      "Developed a full-stack training administrative suite as part of the intensive Qiyas Software Training program.",
      "Engineered distinct workflows and view permissions for system administrators, instructors, and enrolled trainees.",
      "Built a robust backend with C# and ASP.NET Web API, handling business logic, enrollment tracking, and performance reporting.",
      "Designed PostgreSQL relational schemas with optimal indexing and relational integrity for course modules and trainee records.",
      "Constructed a reactive Angular and TypeScript frontend with modular routing, interceptors, and typed services."
    ],
    technologies: ["Angular", "TypeScript", "C#/.NET Web API", "PostgreSQL", "REST APIs", "Git", "GitHub"],
    clientRepoUrl: "https://github.com/Abex04/tms-client",
    apiRepoUrl: "https://github.com/Abex04/TmsApi",
    isDeployed: false,
    image: "/images/projects/tms.svg",
    keyFeatures: [
      "Independent Frontend (Angular) & Backend (C# .NET) Repositories",
      "Role-Based Access Control for Administrators & Trainees",
      "Course Scheduling, Trainee Enrollment & Progress Reporting",
      "Relational PostgreSQL Database Architecture with Entity Mapping"
    ]
  },
  {
    id: "healthbridge",
    title: "HealthBridge",
    category: "Team Project",
    role: "Frontend Developer & Team Organizer (Team of 5)",
    timeline: "Final-Year University Project",
    teamSize: "5 Members",
    summary: "Healthcare and pharmaceutical access platform connecting patients directly with licensed pharmacies for transparent medication discovery and delivery.",
    description: [
      "Spearheaded the frontend development for our final-year engineering capstone project at Addis Ababa University (AAiT).",
      "Co-designed a platform that connects customers with licensed pharmacies to ensure timely access to critical medications at home.",
      "Organized and coordinated tasks for a collaborative 5-member engineering team, managing milestones and sprint goals.",
      "Enforced version control standards with Git and GitHub, conducting code reviews and resolving merge conflicts across shared components.",
      "Delivered a responsive user experience utilizing Angular, React, HTML, and SCSS, optimized for both desktop and mobile users."
    ],
    technologies: ["Angular", "React", "HTML5", "SCSS", "Git", "GitHub", "Team Task Coordination"],
    generalRepoUrl: "https://github.com/Abex04", // Available via GitHub
    isDeployed: false,
    image: "/images/projects/healthbridge.svg",
    keyFeatures: [
      "User-Facing Pharmacy Discovery & Medication Availability Interface",
      "Cross-Functional Team Organization & Agile Sprint Coordination",
      "Multi-Framework Frontend Collaboration (Angular / React / SCSS)",
      "Strict Git Version Control Workflows for a 5-Person Engineering Team"
    ]
  }
];

export const experience: Experience[] = [
  {
    id: "swiss-diagnostics",
    title: "IT Support Specialist",
    company: "Swiss Diagnostics Ethiopia",
    subtitle: "Advanced Medical Diagnostics",
    location: "Addis Ababa, Ethiopia",
    period: "Through 2024",
    isCurrent: false,
    type: "Corporate IT & Software Support",
    responsibilities: [
      "Developed, maintained, and supported software used in day-to-day organizational and diagnostic operations.",
      "Diagnosed and repaired computers, network printers, and other medical/office hardware to minimize disruption to staff.",
      "Installed, configured, and updated critical software and operating systems on staff workstations across departments.",
      "Served as an initial point of contact for technical issues, ranging from everyday user questions to critical hardware failures.",
      "Collaborated with cross-departmental teams to understand operational technology needs and recommend practical solutions."
    ]
  },
  {
    id: "freelance-it",
    title: "Freelance IT & Software Support",
    company: "Various Businesses",
    subtitle: "Technical Consulting & Support",
    location: "Addis Ababa, Ethiopia",
    period: "On-call basis · Ongoing",
    isCurrent: true,
    type: "Freelance Technical Services",
    responsibilities: [
      "Provide on-call IT support to commercial businesses, diagnosing software issues and troubleshooting computer hardware.",
      "Install software suites, configure network settings, and restore operating systems to healthy working condition as required.",
      "Communicate directly with business staff to diagnose reported technical issues and confirm satisfactory resolution.",
      "Perform preventative system maintenance and data backup assistance to ensure operational business continuity."
    ]
  }
];

export const education: EducationItem = {
  degree: "Bachelor of Science in Software Engineering",
  institution: "Addis Ababa University",
  campus: "Addis Ababa Institute of Technology (AAiT)",
  location: "Addis Ababa, Ethiopia",
  graduationYear: "Graduated 2025",
  coursework: [
    "Object-Oriented Programming (Java)",
    "Data Structures and Algorithms",
    "Database Systems",
    "Web Programming",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering and Design",
    "Software Testing and Quality Assurance"
  ]
};

export const trainingList: TrainingItem[] = [
  {
    id: "azure-fundamentals",
    title: "Microsoft Certified: Azure Fundamentals",
    provider: "Microsoft",
    period: "Certified",
    description: "Cloud computing concepts, Azure architecture, compute, storage, networking, security, privacy, compliance, and cloud governance."
  },
  {
    id: "cisco-networking",
    title: "Networking Basics",
    provider: "Cisco Networking Academy",
    period: "Certified",
    description: "Computer networking fundamentals, IP addressing (IPv4/IPv6), OSI & TCP/IP protocols, routing, switching, and network troubleshooting."
  },
  {
    id: "qiyas-training",
    title: "Full-Stack Development Training",
    provider: "Qiyas",
    period: "May – September 2026",
    description: "Intensive training focusing on modern full-stack web architectures, enterprise APIs (.NET), frontend engineering (Angular/TypeScript), database engineering, and professional deployment practices."
  },
  {
    id: "odc-python",
    title: "Full Python Course",
    provider: "Orange Digital Center (ODC)",
    period: "2022 / 2023",
    description: "Comprehensive foundational and practical Python training covering core syntax, object-oriented concepts, algorithms, data handling, and automation scripting."
  }
];

export const professionalQualities = [
  {
    title: "Bilingual Technical Communication",
    description: "Fluent in Amharic and professional English. Adept at bridging technical concepts with non-technical business users and colleagues.",
    icon: "MessageSquare"
  },
  {
    title: "Teamwork & Cross-Functional Coordination",
    description: "Proven experience organizing engineering tasks within a 5-member project team and collaborating across hospital/diagnostic medical departments.",
    icon: "Users"
  },
  {
    title: "Structured Technical Troubleshooting",
    description: "Methodical diagnostic approach to isolating root causes in both software logic, operating systems, and computer hardware.",
    icon: "Wrench"
  },
  {
    title: "Analytical Problem-Solving",
    description: "Strong grounding in algorithms, relational schema design, and secure authorization flows with an emphasis on correctness and efficiency.",
    icon: "Brain"
  },
  {
    title: "Adaptability & Continuous Learning",
    description: "Rapidly assimilates new languages, frameworks, and enterprise requirements, evidenced by successful projects in React, Angular, and .NET.",
    icon: "Lightbulb"
  },
  {
    title: "Commitment to Reliability & Quality",
    description: "Strict adherence to code cleanlines, reliable software deployments, and system uptime in demanding operational environments.",
    icon: "CheckCircle"
  }
];

export const referenceInfo = {
  name: "Girum Tamrat",
  company: "Swiss Diagnostics Ethiopia",
  note: "Contact details available upon request"
};
