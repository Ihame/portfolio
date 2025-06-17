import React, { useState, useEffect } from 'react';
import { PERSONA_NAME } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000); // Update time every minute
    return () => clearInterval(timer);
  }, []);

  const month = String(currentTime.getMonth() + 1).padStart(2, '0');
  const day = String(currentTime.getDate()).padStart(2, '0');
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  
  const kernelVersion = `${String(currentYear).slice(-2)}.${month}.${day}`;
  const formattedTime = `${hours}:${minutes}`;

  return (
    <footer className="py-8 border-t border-crt-border text-center relative z-10">
      <p className="text-crt-secondary text-sm">
        &copy; {currentYear} {PERSONA_NAME}. All rights reserved.
      </p>
      <p className="text-xs text-crt-border mt-2">
        [SYSTEM ONLINE // KERNEL v{kernelVersion} // UPTIME: {formattedTime} UTC]
      </p>
      <p className="text-xs text-crt-border mt-1 opacity-75">
        Awaiting new directives...
      </p>
    </footer>
  );
};

export default Footer;