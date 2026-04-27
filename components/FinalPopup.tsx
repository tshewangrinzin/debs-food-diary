import React from 'react';
import { X } from 'lucide-react';

interface Props {
  message: string;
  onClose: () => void;
}

export const FinalPopup: React.FC<Props> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div className="w-full max-w-sm bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black shadow-2xl font-sans select-none animate-in fade-in zoom-in duration-300">
        {/* Title Bar */}
        <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center text-sm font-bold">
          <div className="flex items-center gap-1">
            <span className="text-xs">🌸</span> System Message
          </div>
          <button 
            onClick={onClose}
            className="bg-[#c0c0c0] text-black w-5 h-5 flex items-center justify-center border border-t-white border-l-white border-b-black border-r-black hover:bg-gray-300"
          >
            <X size={12} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col items-center gap-6 text-center">
          <div className="flex gap-4 items-center">
             <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full border border-blue-400">
                <span className="text-2xl">ℹ️</span>
             </div>
             <p className="text-black font-medium leading-tight">
               {message}
             </p>
          </div>
          
          <div className="flex gap-3 w-full justify-center">
            <a 
              href="https://tshewangrinzin.itch.io/deps-space" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-1 bg-[#c0c0c0] text-black border-2 border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white font-bold text-sm min-w-[80px]"
            >
              I Agree
            </a>
            <button 
              onClick={onClose}
              className="px-6 py-1 bg-[#c0c0c0] text-black border-2 border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-sm min-w-[80px]"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
