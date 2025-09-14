import React from 'react';
import { Project } from '../types';
import { GithubIcon, ExternalLinkIcon, ACCENT_COLOR_MAP } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const accentDetails = ACCENT_COLOR_MAP[project.accentColor] || ACCENT_COLOR_MAP.emerald;

  return (
    <div 
      className={`bg-crt-dark rounded-lg overflow-hidden flex flex-col transition-all duration-300 border ${accentDetails.border} shadow-crt-glow hover:-translate-y-1 group`}
      style={{ '--shadow-color': `rgba(var(${accentDetails.shadowVar}), 0.6)` } as React.CSSProperties}
    >
        {project.imageUrl && (
            <div className={`aspect-video w-full overflow-hidden border-b ${accentDetails.border} opacity-75 group-hover:opacity-100 transition-opacity duration-300`}>
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                />
            </div>
        )}
      <div className={`p-6 flex flex-col flex-grow`}>
        <h3 className={`text-2xl font-semibold mb-3 ${accentDetails.text}`}>{project.title}</h3>
        
        {/* Metrics Section */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs text-crt-secondary uppercase font-semibold mb-2">Key Metrics:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              {project.metrics.map((metric, index) => (
                <div key={index} className={`px-3 py-2 bg-crt-darker border ${accentDetails.border} border-opacity-50 text-xs rounded group-hover:border-opacity-100 transition-all duration-300`}>
                  <span className={`${accentDetails.text} font-medium`}>{metric}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="text-crt-secondary text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

        {/* Achievements Section */}
        {project.achievements && project.achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs text-crt-secondary uppercase font-semibold mb-2">Notable Achievements:</h4>
            <ul className="space-y-1">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start text-xs text-crt-secondary">
                  <span className={`${accentDetails.text} mr-2 mt-0.5`}>✓</span>
                  <span className="group-hover:text-crt-primary transition-colors">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Impact Statement */}
        {project.impact && (
          <div className="mb-4 p-3 bg-crt-darker border border-crt-border border-opacity-50 rounded group-hover:border-opacity-100 transition-all duration-300">
            <h4 className="text-xs text-crt-secondary uppercase font-semibold mb-1">Business Impact:</h4>
            <p className="text-xs text-crt-secondary group-hover:text-crt-primary transition-colors">{project.impact}</p>
          </div>
        )}
        
        <div className="mb-4">
          <h4 className="text-xs text-crt-secondary uppercase font-semibold mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className={`px-3 py-1 bg-crt-darker border border-crt-border text-xs rounded text-crt-secondary group-hover:text-crt-primary group-hover:border-crt-primary transition-colors`}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={`mt-auto flex items-center justify-start space-x-4 pt-4 border-t ${accentDetails.border} border-opacity-50`}>
          {project.liveLink && project.liveLink !== '#' && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center text-sm font-medium ${accentDetails.text} hover:underline`}
            >
              Live Demo <ExternalLinkIcon className={`w-4 h-4 ml-1 ${accentDetails.text}`} />
            </a>
          )}
          {project.repoLink && project.repoLink !== '#' && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-crt-secondary hover:text-crt-primary transition-colors"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;