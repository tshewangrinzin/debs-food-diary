import React from 'react';
import { CharacterId } from '../types';

interface Props {
  character: CharacterId;
  className?: string;
  alt?: string;
}

// Pixel art embedded as SVG data URIs
const CHARACTERS: Record<CharacterId, string> = {
  // Deb: Pink hair in pigtails, cute smile
  Deb: `/assets/Deb.png`,
  
  // Tatiana: Blonde long hair, distinct red glasses
  Tatiana: `/assets/Tatiana.png`,
  
  // Emma: Blue bob hair, book
  Emma: `/assets/Emma.png`,
  
  // Deb_Final: Glitchy dark entity
  Deb_Final: `/assets/mimiafter.png`
};

export const Avatar: React.FC<Props> = ({ character, className = "w-10 h-10", alt }) => {
  return (
    <div 
      className={`${className} bg-pink-100 rounded-md shrink-0 relative overflow-hidden`}
      role="img"
      aria-label={alt || character}
    >
        <img
            src={CHARACTERS[character]}
            alt={alt || character}
            className="absolute inset-0 w-full h-full object-contain"
        />
    </div>
  );
};