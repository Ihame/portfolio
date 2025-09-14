import React from 'react';
import { Experience, AccentColor } from '../types';
import { EXPERIENCE_DATA, ACCENT_COLOR_MAP } from '../constants';

const ExperienceSection: React.FC = () => {
  const accentColors: AccentColor[] = ['emerald','sky','rose','amber'];

  // Sort experience data chronologically (most recent first)
  const sortedExperience = [...EXPERIENCE_DATA].sort((a, b) => {
    // Parse duration strings to extract start dates
    const parseDate = (duration: string): number => {
      // Handle "Present" case
      if (duration.includes('Present')) {
        return new Date().getFullYear();
      }
      // Extract year from duration string (e.g., "Jan 2022 – Present" -> 2022)
      const yearMatch = duration.match(/\b(20\d{2})\b/);
      return yearMatch ? parseInt(yearMatch[1]) : 0;
    };
    
    return parseDate(b.duration) - parseDate(a.duration);
  });

  return (
    <section id="experience" className="py-16 md:py-24 bg-crt-dark rounded-md my-16 border border-crt-border shadow-crt-glow">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-crt-primary text-shadow-crt">
          Professional Experience
        </h2>
        <div className="w-20 h-0.5 bg-crt-primary mx-auto mb-12"></div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-crt-border hidden md:block"></div>
          
          <div className="space-y-8">
            {sortedExperience.map((experience, index) => {
              const accentColor = accentColors[index % accentColors.length];
              const accentDetails = ACCENT_COLOR_MAP[accentColor];
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={`${experience.company}-${experience.role}-${experience.duration}`}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-crt-primary border-2 border-crt-dark z-10 hidden md:block`}></div>
                  
                  {/* Experience card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div
                      className={`bg-crt-dark rounded-lg p-6 border ${accentDetails.border} shadow-crt-glow hover:-translate-y-1 transition-all duration-300 group`}
                      style={{ '--shadow-color': `rgba(var(${accentDetails.shadowVar}), 0.6)` } as React.CSSProperties}
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className={`text-xl font-semibold mb-1 ${accentDetails.text}`}>
                          {experience.role}
                        </h3>
                        <h4 className="text-lg text-crt-primary font-medium mb-2">
                          {experience.company}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-crt-secondary">
                          <span className="mb-1 sm:mb-0">{experience.duration}</span>
                          <span>{experience.location}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      {experience.description && (
                        <p className="text-crt-secondary text-sm leading-relaxed mb-4">
                          {experience.description}
                        </p>
                      )}
                      
                      {/* Achievements */}
                      {experience.achievements.length > 0 && (
                        <div>
                          <h5 className="text-xs text-crt-secondary uppercase font-semibold mb-2">
                            Key Achievements:
                          </h5>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="text-sm text-crt-secondary flex items-start"
                              >
                                <span className={`text-xs mt-1 mr-2 ${accentDetails.text}`}>▸</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
