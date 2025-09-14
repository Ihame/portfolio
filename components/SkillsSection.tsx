import React from 'react';
import { SKILLS_LIST, Skill } from '../constants';

const SkillsSection: React.FC = () => {
  // Group skills by category
  const technicalSkills = SKILLS_LIST.filter(skill => skill.category === 'Technical');
  const leadershipSkills = SKILLS_LIST.filter(skill => skill.category === 'Leadership');
  const businessSkills = SKILLS_LIST.filter(skill => skill.category === 'Business');

  const getProficiencyDots = (proficiency: string) => {
    const dotCount = proficiency === 'Expert' ? 4 : 
                    proficiency === 'Advanced' ? 3 : 
                    proficiency === 'Intermediate' ? 2 : 1;
    
    return Array.from({ length: 4 }, (_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full ${
          i < dotCount ? 'bg-crt-accent-emerald' : 'bg-crt-border'
        }`}
      />
    ));
  };

  const getAccentColor = (index: number) => {
    const colors = ['emerald', 'sky', 'rose', 'amber'];
    return colors[index % colors.length];
  };

  const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
    const accentColor = getAccentColor(index);
    
    return (
      <div className={`bg-crt-dark border border-crt-border rounded-lg p-4 hover:shadow-crt-glow transition-all duration-300 hover:border-crt-accent-${accentColor}`}>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-crt-primary font-medium">{skill.name}</h4>
          <span className={`text-crt-accent-${accentColor} text-sm font-medium`}>
            {skill.proficiency}
          </span>
        </div>
        <div className="flex space-x-1">
          {getProficiencyDots(skill.proficiency)}
        </div>
      </div>
    );
  };

  const CategorySection: React.FC<{ 
    title: string; 
    skills: Skill[]; 
    accentColor: string;
  }> = ({ title, skills, accentColor }) => (
    <div className="mb-8">
      <h3 className={`text-crt-accent-${accentColor} text-xl font-semibold mb-4 flex items-center`}>
        {title}
        <div className={`ml-3 h-px bg-crt-accent-${accentColor} flex-1`} />
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 md:py-24 my-16">
      <div className="bg-crt-dark border border-crt-border shadow-crt-glow rounded-lg">
        <div className="p-6 md:p-8">
        <div className="text-center mb-8">
          <h2 className="text-crt-primary text-3xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="h-px bg-crt-border mx-auto max-w-md" />
        </div>

        <CategorySection 
          title="Technical Skills" 
          skills={technicalSkills} 
          accentColor="emerald" 
        />
        
        <CategorySection 
          title="Leadership Skills" 
          skills={leadershipSkills} 
          accentColor="sky" 
        />
        
        <CategorySection 
          title="Business Skills" 
          skills={businessSkills} 
          accentColor="rose" 
        />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
