import React, { useState } from 'react';
import { NarrativePhase } from '../types';

export const StickerWidget: React.FC<{ phase: NarrativePhase }> = ({ phase }) => {
  // Configuration for different phases
  const getPhaseConfig = () => {
    switch (phase) {
      case NarrativePhase.FINAL:
        return {
          containerClass: "bg-white/50 border-pink-300",
          todoList: [
            { text: "Bake more cakes", checked: true },
            { text: "Call everyone", checked: true },
            { text: "Party time", checked: true }
          ],
          sticker1: "🍰",
          sticker2: "🎀",
          floater: "✨",
          wiggler: "💖",
          sticker1Class: "opacity-80 scale-110",
          sticker2Class: "opacity-80 scale-110",
          floaterClass: "opacity-70 animate-float",
          wigglerClass: "animate-wiggle",
          noteTitle: "DONE"
        };
      default: // NORMAL, STAGE_1, STAGE_2 (All unified to cute theme)
        return {
          containerClass: "bg-white/50 border-pink-300",
          todoList: [
            { text: "Buy Milk", checked: true },
            { text: "Call Tatiana", checked: false },
            { text: "Practice smiling", checked: false }
          ],
          sticker1: "🍓",
          sticker2: "🎀",
          floater: "☁️",
          wiggler: "💖",
          sticker1Class: "opacity-80 group-hover:scale-110",
          sticker2Class: "opacity-80",
          floaterClass: "opacity-70 animate-float",
          wigglerClass: "animate-wiggle",
          noteTitle: "NOTES"
        };
    }
  };

  const config = getPhaseConfig();
  const isFinal = phase === NarrativePhase.FINAL;

  return (
    <div className={`
      relative h-48 rounded-lg p-4 overflow-hidden group transition-all duration-1000
      ${config.containerClass}
    `}>
        {/* Note Pin */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full shadow-sm z-20 bg-pink-300"></div>

        {/* To-Do List Note */}
        <div className={`
            absolute top-6 left-6 right-6 bottom-4 bg-white shadow-md p-3 transform rotate-1 transition-all duration-700
            ${isFinal ? 'bg-pink-50 border border-pink-100' : ''}
        `}>
             <div className={`font-mono text-center text-xs mb-2 border-b pb-1 font-bold ${isFinal ? 'text-pink-800 tracking-widest' : 'text-gray-400'}`}>
                {config.noteTitle}
             </div>
             <ul className="space-y-1">
                {config.todoList.map((item, idx) => (
                    <li key={idx} className={`text-[10px] font-mono flex items-center gap-2 ${isFinal ? 'text-pink-900 font-bold' : 'text-gray-600'}`}>
                        <span className={`w-3 h-3 border border-gray-300 flex items-center justify-center text-[8px] ${item.checked ? 'bg-gray-100' : 'bg-white'}`}>
                            {item.checked && 'x'}
                        </span>
                        <span className={item.checked && !isFinal ? 'line-through opacity-50' : ''}>{item.text}</span>
                    </li>
                ))}
             </ul>
        </div>
        
        {/* Don't Forget Sticker */}
        <div className={`
            absolute top-2 -left-2 transform -rotate-12 px-2 py-1 text-xs font-bold shadow z-30 transition-all duration-1000
            ${phase === NarrativePhase.NORMAL ? 'bg-yellow-200 text-yellow-800' : ''}
            ${phase === NarrativePhase.STAGE_1 ? 'bg-yellow-100 text-yellow-800/70 rotate-[-15deg]' : ''}
            ${phase === NarrativePhase.STAGE_2 ? 'bg-gray-300 text-gray-600 rotate-[-20deg] line-through' : ''}
            ${isFinal ? 'bg-pink-100 text-pink-800 border border-pink-200 rotate-[-12deg]' : ''}
        `}>
            {isFinal ? "Blog Anniversary!" : "Don't forget!"}
        </div>

        {/* Sticker 1 (Strawberry -> Meat -> Bone) */}
        <div className={`absolute bottom-2 right-2 text-4xl transform rotate-12 transition-all duration-1000 z-30 ${config.sticker1Class}`}>
            {config.sticker1}
        </div>

        {/* Sticker 2 (Bow -> Scissors -> Blood) */}
        <div className={`absolute top-8 right-1 text-2xl transform -rotate-6 z-30 transition-all duration-1000 ${config.sticker2Class}`}>
            {config.sticker2}
        </div>
        
        {/* Animated Sticker 1 (Cloud -> Smog -> Eye) */}
        <div className={`absolute top-4 left-1 text-3xl pointer-events-none z-10 transition-all duration-1000 ${config.floaterClass}`}>
            {config.floater}
        </div>

        {/* Animated Sticker 2 (Heart -> Broken -> Black -> Blood) */}
        <div className={`absolute bottom-2 left-2 text-2xl z-30 transition-all duration-1000 ${config.wigglerClass}`}>
            {config.wiggler}
        </div>
    </div>
  );
};