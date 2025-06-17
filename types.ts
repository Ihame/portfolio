
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveLink?: string;
  repoLink?: string;
  accentColor: string; // e.g., 'emerald', 'sky', 'rose'
}

export interface NavLink {
  name: string;
  href: string;
}
