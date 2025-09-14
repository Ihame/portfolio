import React from 'react';
import { Project, NavLink, Experience, Award, Certification, ContactInfo, Skill, AccentColor, SocialLink } from './types';

// Feature flag to gate not-yet-present sections to avoid dead anchors
export const ENABLE_NEW_SECTIONS = true; // TODO: set to true when sections are merged (experience, awards, certifications)

export const NAV_LINKS: NavLink[] = [
  { name: 'co/about', href: '#about' },
  // TODO: Activate when Experience section is implemented
  ...(ENABLE_NEW_SECTIONS ? [{ name: 'co/experience', href: '#experience' } as NavLink] : []),
  { name: 'co/projects', href: '#projects' },
  // TODO: Activate when Awards section is implemented
  ...(ENABLE_NEW_SECTIONS ? [{ name: 'co/awards', href: '#awards' } as NavLink] : []),
  // TODO: Activate when Certifications section is implemented
  ...(ENABLE_NEW_SECTIONS ? [{ name: 'co/certifications', href: '#certifications' } as NavLink] : []),
  { name: 'co/contact', href: '#contact' },
];

export const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4 ml-1" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const PERSONA_NAME = "IHAME Lievin";
export const PERSONA_TAGLINE = "Founder & CEO @ Smart Garage | IT Management (7+ yrs) | Embedded Systems | Digital Transformation";
export const PERSONA_BIO = `Founder & CEO of Smart Garage Africa, leading digital transformation across automotive services with mini EV platforms, predictive maintenance, and OBD-integrated mobile systems. With 7+ years in IT management and engineering leadership, I design and scale ERP systems, embedded solutions, and data-driven platforms that deliver measurable business outcomes. Recognized with national and international awards for innovation, I focus on building resilient products and teams that accelerate Africa’s transition to smarter, sustainable technology.`;

export const CONTACT_INFO: ContactInfo = {
  email: 'ihame.lievin@gmail.com',
  phone: '+250 783 629 499',
  location: 'Kigali, Rwanda',
  links: {
    linkedin: 'https://www.linkedin.com/in/ihamelievin/',
    portfolio: 'https://smartgarage.live',
    github: 'https://github.com/Ihame',
    twitter: 'https://x.com/__Lievin__',
  },
};

export const SKILLS_LIST: Skill[] = [
  { name: 'Embedded Systems', category: 'Technical', proficiency: 'Expert' },
  { name: 'Electronics Design', category: 'Technical', proficiency: 'Advanced' },
  { name: 'IoT & Microcontrollers (Arduino, ESP32)', category: 'Technical', proficiency: 'Advanced' },
  { name: 'OBD Systems & Automotive Tech', category: 'Technical', proficiency: 'Advanced' },
  { name: 'Predictive Maintenance', category: 'Technical', proficiency: 'Advanced' },
  { name: 'Full-Stack Development (React, Node.js, Python)', category: 'Technical', proficiency: 'Advanced' },
  { name: 'RTOS & C/C++', category: 'Technical', proficiency: 'Intermediate' },
  { name: 'ERP Systems & Integrations', category: 'Business', proficiency: 'Advanced' },
  { name: 'Project & Program Management', category: 'Leadership', proficiency: 'Advanced' },
  { name: 'Innovation Management', category: 'Leadership', proficiency: 'Advanced' },
  { name: 'Business Strategy', category: 'Business', proficiency: 'Advanced' },
  { name: 'Venture Building', category: 'Business', proficiency: 'Intermediate' },
  { name: 'Team Leadership & Mentoring', category: 'Leadership', proficiency: 'Advanced' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'smart-garage',
    title: 'Smart Garage Africa',
    description: 'Leading digital transformation platform for mini EVs, predictive maintenance, and OBD-integrated mobile services. Built comprehensive technical infrastructure including embedded diagnostics, mobile applications, and data analytics systems that revolutionize automotive service delivery.',
    technologies: ['EV Technology', 'OBD Systems', 'Mobile App Dev', 'Predictive Maintenance', 'Embedded Systems', 'IoT'],
    imageUrl: '/images/projects/smart-garage.jpg', 
    liveLink: 'https://smartgarage.live',
    repoLink: 'https://github.com/Ihame', // Assuming Smart Garage repo might be under personal GitHub, adjust if different
    accentColor: 'emerald',
    metrics: ['500+ vehicles served', '20% reduction in repeat incidents', '25-person cross-functional team', '50% improvement in project efficiency'],
    achievements: ['YouthConnekt ICT Award winner', 'Ministry of ICT recognition', 'Trained 10+ female interns', 'Established predictive maintenance workflows'],
    impact: 'Transforming automotive services through data-driven diagnostics and predictive maintenance, enabling smarter vehicle management across Africa.',
  },
  {
    id: 'healthinspect',
    title: 'HealthInspect.rw - Digital Health Facility Inspection Platform',
    description: 'Government partnership platform with RSSB (Rwanda Social Security Board) for digitizing health facility inspections and compliance reporting. Built comprehensive web platform with structured workflows, dashboard analytics, and streamlined reporting systems that enhance transparency and efficiency in healthcare facility oversight.',
    technologies: ['Web Platform', 'Database Management', 'Dashboard Development', 'Government Integration', 'Compliance Systems'],
    imageUrl: '/images/projects/healthinspect.jpg',
    liveLink: 'https://www.healthinspect.rw',
    accentColor: 'sky',
    metrics: ['Digitized inspection workflows', 'RSSB partnership delivery', 'Improved compliance reporting'],
    achievements: ['Government partnership with RSSB', 'Streamlined inspection processes', 'Enhanced transparency in health facility compliance'],
    impact: 'Improving healthcare system transparency and efficiency through digital transformation of health facility inspection processes.',
  },
  {
    id: 'edu-man-sys',
    title: 'Education Management System',
    description: 'Comprehensive ERP platform for educational institutions featuring integrated workflow automation, role-based security systems, and comprehensive data management. Built scalable architecture supporting admissions, academic calendar management, staff hierarchy, and library systems.',
    technologies: ['System Design', 'Database Management', 'Web Development', 'UI/UX', 'Project Management'],
    imageUrl: '/images/projects/education-system.jpg',
    // liveLink: '#', // Keep as # if no specific live link
    // repoLink: '#', // Keep as # if no specific repo link
    accentColor: 'sky',
    metrics: ['60% reduction in manual workload', '100% improvement in data accuracy', 'Multi-role access control'],
    achievements: ['Integrated workflow automation', 'Comprehensive ERP implementation', 'Role-based security system'],
    impact: 'Streamlining educational administration through automated workflows and centralized data management.',
  },
  {
    id: '250trade',
    title: '250trade.rw E-commerce',
    description: 'Co-founded e-commerce platform that successfully pivoted to specialize in electronic components and hobbyist supplies. Built robust supply network partnerships and developed comprehensive logistics systems supporting Arduino, microcontrollers, sensors, and related components for SMEs and individual developers.',
    technologies: ['E-commerce', 'Platform Development', 'Electronics Supply', 'Business Development', 'Logistics'],
    imageUrl: '/images/projects/250trade.jpg',
    // liveLink: '#', // Keep as # if no specific live link
    // repoLink: '#', // Keep as # if no specific repo link
    accentColor: 'rose',
    metrics: ['1,000+ orders processed', '5-year operation span', 'COVID-19 pivot success'],
    achievements: ['Built supply network for SMEs', 'Supported hobbyist community', 'Successful business pivot'],
    impact: 'Enabling innovation by providing reliable access to electronic components and supporting the maker community.',
  },
  {
    id: 'e-umuganda',
    title: 'E-Umuganda Digital Platform',
    description: 'Civic-tech platform digitizing community service reporting and municipal coordination. Developed mobile-first architecture with real-time data visualization, community participation tracking, and streamlined government reporting workflows.',
    technologies: ['Civic Tech', 'Mobile', 'Web Platform', 'Data Visualization'],
    imageUrl: '/images/projects/e-umuganda.jpg',
    accentColor: 'amber',
    metrics: ['Municipal reporting streamlined', 'Mobile-first design', 'Community participation tracking'],
    achievements: ['Increased transparency', 'Digital civic engagement', 'Government partnership'],
    impact: 'Enhancing civic participation and government transparency through digital community service coordination.',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'LinkedIn', Icon: LinkedinIcon, url: 'https://www.linkedin.com/in/ihamelievin/' }, 
    { name: 'GitHub', Icon: GithubIcon, url: 'https://github.com/Ihame' },
    { name: 'X', Icon: TwitterIcon, url: 'https://x.com/__Lievin__' },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Founder & CEO',
    company: 'Smart Garage Africa',
    duration: 'Jan 2022 – Present',
    location: 'Kigali, Rwanda',
    description: 'Building mini EV platforms, predictive maintenance, and OBD-integrated mobile services; leading product, engineering, and operations.',
    achievements: [
      'Served 500+ vehicles with data-driven diagnostics and service optimization',
      'Implemented predictive maintenance workflows reducing repeat incidents by 20%+',
      'Led cross-functional team across embedded, mobile, and operations',
    ],
  },
  {
    role: 'Innovation Fellow',
    company: 'ThinkPad Innovation Lab',
    duration: '2023',
    location: 'Kigali, Rwanda',
    description: 'Research and prototyping of embedded and AI-powered solutions for local industry challenges.',
    achievements: [
      'Developed proof-of-concepts for smart diagnostics and data collection',
    ],
  },
  {
    role: 'Lead Developer',
    company: 'HealthInspect.rw',
    duration: '2022',
    location: 'Kigali, Rwanda',
    description: 'Led development of health inspection and reporting platform.',
    achievements: [
      'Delivered production web platform with structured workflows and dashboards',
    ],
  },
  {
    role: 'Co-Founder',
    company: '250Trade (250trade.rw)',
    duration: '2016 – 2021',
    location: 'Kigali, Rwanda',
    description: 'Co-founded and operated an e-commerce platform; later specialized in electronics components.',
    achievements: [
      'Processed 1,000+ orders, established local supply partnerships',
    ],
  },
  {
    role: 'Assistant Manager',
    company: 'Korea Cars',
    duration: '2019 – 2020',
    location: 'Kigali, Rwanda',
    description: 'Operations and customer service management in automotive sector.',
    achievements: [
      'Improved workshop scheduling and client satisfaction through process changes',
    ],
  },
];

export const AWARDS_DATA: Award[] = [
  {
    title: 'YouthConnekt ICT Award',
    issuer: 'YouthConnekt',
    year: 2023,
    description: 'Recognized for outstanding innovation and impact in ICT solutions.',
  },
  {
    title: 'Innovation Award',
    issuer: 'UNDP',
    year: 2024,
    description: 'Awarded for impactful technology innovation driving community outcomes.',
  },
  {
    title: 'Industry Recognition',
    issuer: 'Ministry & Ecosystem Partners',
    year: 2023,
    description: 'Recognitions for contributions to digital transformation and entrepreneurship.',
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    name: 'ALX Software Engineering',
    issuer: 'ALX',
    year: 2023,
  },
  {
    name: 'ALX Foundations',
    issuer: 'ALX',
    year: 2022,
  },
  {
    name: 'Entrepreneurship Certificate',
    issuer: 'BPN (Business Professionals Network)',
    year: 2021,
  },
  {
    name: 'BSc Electronics & Telecommunications',
    issuer: 'University of Rwanda',
    year: 2020,
  },
];

export const ACCENT_COLOR_MAP: Record<AccentColor, { text: string; border: string; shadowVar: string }> = {
  emerald: {
    text: 'text-crt-emerald text-shadow-crt-sm',
    border: 'border-crt-emerald',
    shadowVar: '--emerald-rgb' 
  },
  sky: { 
    text: 'text-crt-emerald text-shadow-crt-sm', // Using emerald for sky for CRT theme consistency
    border: 'border-crt-emerald',       
    shadowVar: '--sky-rgb'
  },
  rose: {
    text: 'text-crt-rose text-shadow-crt-sm', 
    border: 'border-crt-rose',
    shadowVar: '--rose-rgb'
  },
  amber: {
    text: 'text-crt-amber text-shadow-crt-sm', 
    border: 'border-crt-amber',
    shadowVar: '--amber-rgb'
  },
};