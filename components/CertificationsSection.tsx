import React from 'react';
import { CERTIFICATIONS_DATA, Certification } from '../constants';

const CertificationsSection: React.FC = () => {
  const getAccentColor = (index: number) => {
    const colors = ['emerald', 'sky', 'rose', 'amber'];
    return colors[index % colors.length];
  };

  const getCertificationIcon = (certification: Certification) => {
    if (certification.name.includes('University') || certification.name.includes('Degree')) {
      return '🎓';
    } else if (certification.name.includes('ALX')) {
      return '💻';
    } else if (certification.name.includes('BPN')) {
      return '📋';
    }
    return '📜';
  };

  const CertificationCard: React.FC<{ certification: Certification; index: number }> = ({ 
    certification, 
    index 
  }) => {
    const accentColor = getAccentColor(index);
    const icon = getCertificationIcon(certification);
    
    return (
      <div className={`bg-crt-dark border border-crt-border rounded-lg p-6 hover:shadow-crt-glow transition-all duration-300 hover:border-crt-accent-${accentColor} group`}>
        <div className="flex items-start justify-between mb-4">
          <div className="text-2xl">{icon}</div>
          <div className={`text-crt-accent-${accentColor} font-bold text-lg`}>
            {certification.year}
          </div>
        </div>
        
        <h3 className="text-crt-primary text-lg font-semibold mb-2 group-hover:text-crt-accent-emerald transition-colors">
          {certification.name}
        </h3>
        
        <p className="text-crt-secondary text-sm mb-3">
          {certification.issuer}
        </p>
        
        {certification.credentialUrl && (
          <a 
            href={certification.credentialUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-crt-accent-${accentColor} text-sm hover:underline`}
          >
            View Credential →
          </a>
        )}
      </div>
    );
  };

  return (
    <section id="certifications" className="py-16 md:py-24 my-16">
      <div className="bg-crt-dark border border-crt-border shadow-crt-glow rounded-lg">
        <div className="p-6 md:p-8">
        <div className="text-center mb-8">
          <h2 className="text-crt-primary text-3xl font-bold mb-4">
            Education & Certifications
          </h2>
          <div className="h-px bg-crt-border mx-auto max-w-md" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((certification, index) => (
            <CertificationCard 
              key={`${certification.name}-${certification.year}`} 
              certification={certification} 
              index={index} 
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
