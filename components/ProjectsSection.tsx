
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-crt-primary text-shadow-crt">
        RECENT <span className="text-crt-primary">PROJECTS/WORK</span>
      </h2>
      <div className="w-20 h-0.5 bg-crt-primary mx-auto mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;