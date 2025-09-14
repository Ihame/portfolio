import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { NAV_LINKS, ENABLE_NEW_SECTIONS } from '../constants';

function extractIdFromHash(href: string): string | null {
  if (!href.startsWith('#')) return null;
  return href.slice(1);
}

describe('NAV_LINKS anchor targets', () => {
  it('ensures enabled nav links point to existing section ids', () => {
    render(<App />);

    for (const link of NAV_LINKS) {
      const id = extractIdFromHash(link.href);
      if (!id) continue; // external links or non-hash

      // If feature flag is off, links for future sections should not exist in NAV_LINKS
      if (!ENABLE_NEW_SECTIONS && ['experience', 'awards', 'certifications'].includes(id)) {
        // In case of accidental presence, allow missing element
        const el = document.getElementById(id);
        expect(el).toBeNull();
        continue;
      }

      const el = document.getElementById(id);
      expect(el).not.toBeNull();
    }
  });
});


