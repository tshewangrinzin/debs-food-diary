import React from 'react';
import { Star } from 'lucide-react';
import { NarrativePhase } from '../types';

interface Props {
  onInteract?: () => void;
  phase: NarrativePhase;
}

export const Header: React.FC<Props> = ({ onInteract, phase }) => {
  return (
    <header className="mb-8">
      <div className="bg-white border-4 border-pink-400 rounded-lg p-2 shadow-[8px_8px_0px_0px_rgba(255,182,193,1)] mb-4">
        <div className="flex justify-between items-center bg-pastel-pink p-4 rounded border-2 border-dashed border-white">
          <div className="flex items-center gap-2">
            <Star className="text-yellow-400 fill-yellow-400 animate-spin-slow" size={32} />
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white drop-shadow-[2px_2px_0px_rgba(255,105,180,1)] tracking-tighter">
              Deb's Space
            </h1>
            <Star className="text-yellow-400 fill-yellow-400 animate-pulse" size={24} />
          </div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={onInteract}
              className="bg-sky-200 hover:bg-sky-300 text-sky-700 px-3 py-1 rounded font-mono text-sm border-b-4 border-sky-400 active:border-b-0 active:translate-y-1 transition-all"
            >
              Home
            </button>
            <button 
              onClick={onInteract}
              className="bg-lime-200 hover:bg-lime-300 text-lime-700 px-3 py-1 rounded font-mono text-sm border-b-4 border-lime-400 active:border-b-0 active:translate-y-1 transition-all"
            >
              About
            </button>
            <button 
              onClick={onInteract}
              className="bg-yellow-200 hover:bg-yellow-300 text-yellow-700 px-3 py-1 rounded font-mono text-sm border-b-4 border-yellow-400 active:border-b-0 active:translate-y-1 transition-all"
            >
              Links
            </button>
          </div>
        </div>
      </div>
      
      {/* Marquee */}
      <div className="bg-hot-pink text-white font-mono py-1 border-y-2 border-pink-300 marquee-container">
        <div className="marquee-content flex gap-8">
          <span>🌸 welcome to my personal website!</span>
          <span>🍰 i love sweets and cute things!</span>
          <span>🎀 updated daily!</span>
          <span>📸 check out my new photos!</span>
          <span>👁️ thanks for visiting!</span>
          <span>🌸 welcome to my personal website!</span>
          <span>🍰 i love sweets and cute things!</span>
          <span>🎀 updated daily!</span>
          <span>📸 check out my new photos!</span>
          <span>👁️ thanks for visiting!</span>
        </div>
      </div>
    </header>
  );
};