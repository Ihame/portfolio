import React from 'react';
import { NAV_LINKS, PERSONA_NAME } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-crt-darker/80 backdrop-blur-sm border-b border-crt-border">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold tracking-tight text-crt-primary text-shadow-crt-sm hover:text-shadow-crt transition-all">
            {PERSONA_NAME.split(' ').join('_').toLowerCase()}$ <span className="text-crt-secondary">~</span><span className="cursor-blink" aria-hidden="true"></span>
          </a>
          <nav className="hidden md:flex space-x-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-crt-secondary hover:text-crt-primary hover:text-shadow-crt-sm transition-all duration-200 px-3 py-2 text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/* Mobile menu button could be added here, styled for CRT theme */}
        </div>
      </div>
    </header>
  );
};

export default Header;