import React from 'react';
import { PERSONA_NAME, SOCIAL_LINKS, CONTACT_INFO } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-crt-primary text-shadow-crt">
        Let's <span className="text-crt-primary">Connect</span>
      </h2>
      <div className="w-20 h-0.5 bg-crt-primary mx-auto mb-10"></div>
      <p className="text-crt-secondary max-w-xl mx-auto mb-10 text-lg">
        Have a project in mind, a question, or just want to say hi? I'd love to hear from you!
        Feel free to reach out via email or connect with me on social media.
      </p>
      
      <a
        href={`mailto:${CONTACT_INFO.email}`}
        className="button-crt text-lg py-3 px-8 transition-all duration-300 mb-10 inline-block"
      >
        {CONTACT_INFO.email}
      </a>

      <div className="flex justify-center space-x-8">
        {SOCIAL_LINKS.map(({ name, Icon, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="text-crt-secondary hover:text-crt-primary transition-colors duration-300 transform hover:scale-125 hover:text-shadow-crt-sm"
          >
            <Icon className="w-10 h-10" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;