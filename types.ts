import React from 'react';

export type AccentColor = 'emerald' | 'sky' | 'rose' | 'amber';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveLink?: string;
  repoLink?: string;
  accentColor: AccentColor;
  metrics?: string[];
  achievements?: string[];
  impact?: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string; // e.g., "Jan 2022 – Present"
  location: string;
  description?: string;
  achievements: string[];
}

export interface Award {
  title: string;
  issuer: string;
  year: number;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  credentialUrl?: string;
  credentialId?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  links: {
    linkedin?: string;
    portfolio?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Skill {
  name: string;
  category: 'Technical' | 'Leadership' | 'Business';
  proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface SocialLink { 
  name: string; 
  url: string; 
  Icon: React.FC<{ className?: string }>; 
}