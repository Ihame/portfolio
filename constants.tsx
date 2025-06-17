import React from 'react';
import { Project, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'co/about', href: '#about' },
  { name: 'co/projects', href: '#projects' },
  { name: 'co/aispark', href: '#aispark' },
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
export const PERSONA_TAGLINE = "Founder @ Smart Garage | Embedded Systems & Software Engineer | Innovating at the Intersection of Hardware & Code";
export const PERSONA_BIO = `I’m the Founder of Smart Garage, a forward-thinking company specializing in mini electric vehicles (EVs), predictive maintenance, and on-board diagnostics (OBD) systems seamlessly integrated with mobile platforms. With a background in Electronics and Telecommunications Engineering, training from ALX, and over ${new Date().getFullYear() - 2016} years of experience in tech-driven solutions, I focus on building sustainable innovations that solve real-world challenges in car diagnostics and repair. My mission is to make smart vehicle technology and EV adoption more accessible, efficient, and impactful, especially across African markets. I’m driven by the vision of a greener, smarter future. By leveraging innovation, strategic partnerships, and scalable engineering, I aim to play a key role in Africa’s technological and environmental transformation.`;

export const SKILLS_LIST: string[] = [
  'Embedded Systems', 'Software Engineering', 'Electronics', 'Telecommunications Engineering', 
  'Predictive Maintenance', 'OBD Systems', 'Mobile Platforms', 'EV Technology', 'Virtual Assistance', 
  'Venture Capital', 'Project Management', 'Problem Solving', 'Full-Stack Development', 
  'Arduino', 'Microcontrollers', 'IoT', 'Automotive Technology', 'Business Strategy', 
  'Innovation Management', 'React', 'Node.js', 'Python', 'C/C++', 'RTOS'
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'smart-garage',
    title: 'Smart Garage Africa',
    description: 'Founder and lead for an innovative automotive service company specializing in mini EVs, predictive maintenance, and OBD systems integrated with mobile platforms. Focused on making smart vehicle tech accessible in African markets.',
    technologies: ['EV Technology', 'OBD Systems', 'Mobile App Dev', 'Predictive Maintenance', 'Embedded Systems', 'IoT'],
    imageUrl: 'https://picsum.photos/seed/smartgarage_crt/600/400?grayscale&blur=1', 
    liveLink: 'https://smartgarage.live',
    repoLink: 'https://github.com/Ihame', // Assuming Smart Garage repo might be under personal GitHub, adjust if different
    accentColor: 'emerald',
  },
  {
    id: 'edu-man-sys',
    title: 'Education Management System',
    description: 'Comprehensive system for educational institutions featuring modules for admissions, fee management, student attendance, teacher hierarchy, academic calendar, and library management.',
    technologies: ['System Design', 'Database Management', 'Web Development', 'UI/UX', 'Project Management'],
    imageUrl: 'https://picsum.photos/seed/edusys_crt/600/400?grayscale&blur=1',
    // liveLink: '#', // Keep as # if no specific live link
    // repoLink: '#', // Keep as # if no specific repo link
    accentColor: 'sky', 
  },
  {
    id: '250trade',
    title: '250trade.rw E-commerce',
    description: 'Co-founded an e-commerce platform initially for various products, later pivoted to specialize in high-quality electronic components like Arduino, microcontrollers, and sensors for hobbyists and professionals.',
    technologies: ['E-commerce', 'Platform Development', 'Electronics Supply', 'Business Development', 'Logistics'],
    imageUrl: 'https://picsum.photos/seed/250trade_crt/600/400?grayscale&blur=1',
    // liveLink: '#', // Keep as # if no specific live link
    // repoLink: '#', // Keep as # if no specific repo link
    accentColor: 'rose', 
  },
];

export const SOCIAL_LINKS = [
    { name: 'LinkedIn', Icon: LinkedinIcon, url: 'https://www.linkedin.com/in/ihamelievin/' }, 
    { name: 'GitHub', Icon: GithubIcon, url: 'https://github.com/Ihame' },
    { name: 'X', Icon: TwitterIcon, url: 'https://x.com/__Lievin__' },
];

export const ACCENT_COLOR_MAP: { [key: string]: { text: string, border: string, shadowVar: string } } = {
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