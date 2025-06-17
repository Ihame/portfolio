
import React from 'react';
import { SKILLS_LIST } from '../constants';

const SkillsMarquee: React.FC = () => {
  const extendedSkills = [...SKILLS_LIST, ...SKILLS_LIST]; // Duplicate for seamless scroll

  return (
    <section id="skills" className="py-12 md:py-16 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-crt-primary text-shadow-crt">
        My <span className="text-crt-primary">Toolkit</span>
      </h2>
      <div className="w-16 h-0.5 bg-crt-primary mx-auto mb-10"></div>
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee group-hover:animate-paused whitespace-nowrap">
          {extendedSkills.map((skill, index) => (
            <div
              key={`skill-${index}`}
              className="mx-4 px-5 py-2 bg-crt-dark border border-crt-border rounded text-crt-secondary text-md hover:text-crt-primary hover:border-crt-primary hover:bg-black/20 transition-all duration-300 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;