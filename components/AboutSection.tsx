
import React from 'react';
import { PERSONA_BIO, PERSONA_NAME } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-crt-dark rounded-md my-16 border border-crt-border shadow-crt-glow">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-crt-primary text-shadow-crt">
          About <span className="text-crt-primary">{PERSONA_NAME.split(' ')[0]}</span>
        </h2>
        <div className="w-20 h-0.5 bg-crt-primary mx-auto mb-12"></div>
        <div className="max-w-3xl mx-auto text-lg text-crt-secondary leading-relaxed space-y-6">
          <p>{PERSONA_BIO}</p>
          <p>
            I believe in continuous learning and collaboration to deliver outstanding results.
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee (or tea, if it's a late night debugging session).
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;