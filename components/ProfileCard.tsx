import React from 'react';
import { NarrativePhase } from '../types';
import { Heart, Skull } from 'lucide-react';
import { Avatar } from './Avatar';

interface Props {
  phase: NarrativePhase;
}

export const ProfileCard: React.FC<Props> = ({ phase }) => {
  
  const getBio = () => {
    switch(phase) {
      case NarrativePhase.STAGE_1: 
        return "Likes: Geology, Manga, Red Accessories. Dislikes: Rainy days.";
      case NarrativePhase.STAGE_2:
        return "Likes: Jewelry, Collecting cute things, Soft textures. Dislikes: Loud noises.";
      case NarrativePhase.FINAL:
        return "Likes: Sweets, Baking, Hanging out with friends. Dislikes: Rotten food.";
      default:
        return "Likes: Geology, Manga, JJBA, Kamen Rider, Sugar Sugar Rune. Dislikes: Veggies.";
    }
  };

  const isFinal = phase === NarrativePhase.FINAL;

  return (
    <div className={`bg-cream border-2 ${isFinal ? 'border-pink-300 text-pink-900' : 'border-lime-400'} rounded-lg p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] transition-colors duration-500`}>
      <div className="flex flex-col items-center mb-4">
        <div className={`p-1 border-2 rounded-lg mb-2 ${isFinal ? 'border-pink-300 bg-white' : 'border-pink-300 bg-white'}`}>
             <Avatar 
                character={'Deb'} 
                className="w-24 h-24"
             />
        </div>
      </div>

      <div className="space-y-2 font-mono text-sm">
        <h3 className="text-xl font-display font-bold border-b-2 border-dashed border-gray-300 pb-1 mb-2 flex items-center gap-2">
          {isFinal ? <Heart size={18} className="text-hot-pink fill-hot-pink" /> : <Heart size={18} className="text-hot-pink fill-hot-pink" />}
          Name: Deb
        </h3>
        <p>Age: 21</p>
        <p>Sign: Leo</p>
        <div className={`p-2 rounded ${isFinal ? 'bg-white border border-pink-100' : 'bg-white border border-gray-200'}`}>
          <p>{getBio()}</p>
        </div>
      </div>
      
      {!isFinal && (
        <div className="mt-4 flex gap-1 flex-wrap">
            <span className="bg-pink-200 text-pink-800 text-xs px-2 py-0.5 rounded-full">#girly</span>
            <span className="bg-blue-200 text-blue-800 text-xs px-2 py-0.5 rounded-full">#blog</span>
            <span className="bg-purple-200 text-purple-800 text-xs px-2 py-0.5 rounded-full">#foodie</span>
        </div>
      )}
    </div>
  );
};