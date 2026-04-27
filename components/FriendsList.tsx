import React from 'react';
import { Friend, NarrativePhase } from '../types';
import { HelpCircle } from 'lucide-react';
import { Avatar } from './Avatar';

interface Props {
  initialFriends: Friend[];
  phase: NarrativePhase;
  onInteract?: () => void;
}

export const FriendsList: React.FC<Props> = ({ initialFriends, phase, onInteract }) => {
  // Logic to determine friend status (Transitions removed as per user request)
  const getFriendsStatus = () => {
    return initialFriends.map(friend => {
      return { ...friend };
    });
  };

  const friends = getFriendsStatus();

  return (
    <div className="bg-sky-100 border-2 border-sky-400 rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="bg-sky-200 p-2 border-b-2 border-sky-400 font-display font-bold text-sky-800 flex justify-between items-center">
        <span>👥 Besties</span>
        <span className="bg-white px-2 rounded-full text-xs">{friends.filter(f => f.status !== 'DELETED').length}</span>
      </div>
      <div className="p-2 space-y-2">
        {friends.map(friend => (
          <div key={friend.id} className="bg-white p-2 rounded border border-sky-200 flex items-center gap-3 transition-all hover:bg-sky-50">
            <div className="relative">
              <Avatar 
                character={friend.character} 
                className={`w-10 h-10 ${friend.status === 'DELETED' ? 'grayscale opacity-50' : ''}`}
              />
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white
                ${friend.status === 'ONLINE' ? 'bg-green-400' : 
                  friend.status === 'MISSING' ? 'bg-red-500 animate-ping' : 
                  friend.status === 'DELETED' ? 'bg-gray-400' : 'bg-yellow-400'}`} 
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <p className={`font-bold text-sm truncate ${friend.status === 'DELETED' ? 'line-through text-gray-400' : 'text-sky-900'}`}>
                  {friend.name}
                </p>
                {friend.status === 'MISSING' && <HelpCircle size={12} className="text-red-500" />}
              </div>
              <p className="text-xs text-gray-500 truncate font-mono">{friend.statusMessage}</p>
            </div>
          </div>
        ))}
      </div>
      <div 
        onClick={onInteract}
        className="bg-sky-50 p-2 text-center text-xs text-sky-400 font-bold border-t border-sky-200 cursor-pointer hover:bg-sky-100"
      >
        View All Friends
      </div>
    </div>
  );
};