import React from 'react';
import { NarrativePhase } from '../types';

interface Props {
  phase: NarrativePhase;
  onInteract?: () => void;
}

export const Shoutbox: React.FC<Props> = ({ phase, onInteract }) => {
  return (
    <div className="bg-white border-2 border-purple-300 rounded-lg overflow-hidden">
      <div className="bg-purple-200 p-2 font-display font-bold text-purple-800 text-sm">
        💬 Cbox
      </div>
      <div className="h-40 overflow-y-auto p-2 space-y-2 text-xs font-mono bg-purple-50">
        <div className="border-b border-purple-100 pb-1">
          <span className="font-bold text-blue-600">Guest123:</span> nice layout!
        </div>
        <div className="border-b border-purple-100 pb-1">
          <span className="font-bold text-green-600">KawaiiCoder:</span> So cute!!
        </div>
        <div className="border-b border-purple-100 pb-1">
          <span className="font-bold text-orange-600">TeaLover:</span> Loving the new pics!
        </div>
      </div>
      <div className="p-2 border-t border-purple-200">
         <input 
            type="text" 
            placeholder="Say hi!" 
            className="w-full text-xs p-1 border border-gray-300 rounded focus:border-purple-500 outline-none" 
            onClick={onInteract}
         />
      </div>
    </div>
  );
};