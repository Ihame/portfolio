import React, { useState, useEffect } from 'react';
import { PERSONA_NAME, PERSONA_TAGLINE, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const [typedTagline, setTypedTagline] = useState('');
  const fullTagline = PERSONA_TAGLINE;

  useEffect(() => {
    if (typedTagline.length < fullTagline.length) {
      const timeoutId = setTimeout(() => {
        setTypedTagline(fullTagline.substring(0, typedTagline.length + 1));
      }, 50); // Adjust typing speed (milliseconds)
      return () => clearTimeout(timeoutId);
    }
  }, [typedTagline, fullTagline]);

  return (
    <section id="hero" className="py-20 md:py-32 text-center">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-shadow-crt-md">
        <span className="block text-crt-primary">Hi, I'm </span>
        <span className="block text-crt-primary">{PERSONA_NAME}.</span>
      </h1>
      <p 
        className="max-w-3xl mx-auto text-xl md:text-2xl text-crt-secondary mb-10 text-shadow-crt-sm"
        style={{ minHeight: '3.6em' }} // Approx 2 lines for text-xl, adjust if PERSONA_TAGLINE is longer
                                      // text-xl leading-normal is ~1.5, text-2xl is ~1.75. Using a general value.
      >
        {typedTagline}
        {typedTagline.length < fullTagline.length && <span className="cursor-blink opacity-75" aria-hidden="true"></span>}
      </p>
      <div className="flex justify-center space-x-6 mb-12">
        {SOCIAL_LINKS.map(({ name, Icon, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="text-crt-secondary hover:text-crt-primary transition-colors duration-300 transform hover:scale-110 hover:text-shadow-crt-sm"
          >
            <Icon className="w-8 h-8" />
          </a>
        ))}
      </div>
      <a
        href="#projects"
        className="button-crt text-lg py-3 px-8 transition-all duration-300"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;