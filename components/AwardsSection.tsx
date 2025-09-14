import React from 'react';
import { Award, AccentColor } from '../types';
import { AWARDS_DATA, ACCENT_COLOR_MAP } from '../constants';

const AwardsSection: React.FC = () => {
  // Cycle through accent colors for visual variety
  const accentColors: AccentColor[] = ['emerald', 'sky', 'rose', 'amber'];
  
  return (
    <section id="awards" className="py-16 md:py-24 bg-crt-dark rounded-md my-16 border border-crt-border shadow-crt-glow">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-crt-primary text-shadow-crt">
          Awards & Recognition
        </h2>
        <div className="w-20 h-0.5 bg-crt-primary mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {AWARDS_DATA.map((award: Award, index: number) => {
            const accentColor = accentColors[index % accentColors.length];
            const accentDetails = ACCENT_COLOR_MAP[accentColor];
            
            return (
              <div
                key={`${award.title}-${award.year}`}
                className={`bg-crt-dark rounded-lg p-6 border ${accentDetails.border} shadow-crt-glow hover:-translate-y-1 transition-all duration-300 group`}
                style={{ '--shadow-color': `rgba(var(${accentDetails.shadowVar}), 0.6)` } as React.CSSProperties}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 bg-crt-darker border ${accentDetails.border} text-xs rounded text-crt-secondary group-hover:text-crt-primary group-hover:border-crt-primary transition-colors`}>
                      {award.year}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-semibold mb-2 ${accentDetails.text}`}>
                    {award.title}
                  </h3>
                  
                  <p className="text-crt-secondary text-sm mb-3 group-hover:text-crt-primary transition-colors">
                    {award.issuer}
                  </p>
                  
                  {award.description && (
                    <p className="text-crt-secondary text-sm leading-relaxed mt-auto">
                      {award.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
