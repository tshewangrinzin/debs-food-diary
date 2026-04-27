import React from 'react';
import { Post, NarrativePhase, CharacterId } from '../types';
import { MessageSquare, Heart, Share2 } from 'lucide-react';
import { Avatar } from './Avatar';

interface Props {
  post: Post;
  onInteract?: () => void;
}

export const BlogPost: React.FC<Props> = ({ post, onInteract }) => {
  const isHorror = post.phase === NarrativePhase.FINAL || post.phase === NarrativePhase.STAGE_2;
  const isGlitch = post.phase === NarrativePhase.FINAL;
  
  // Check if image is a sprite reference
  const isSprite = post.imageUrl.startsWith('SPRITE:');
  const spriteChar = isSprite ? post.imageUrl.split(':')[1] as CharacterId : 'Deb';

  return (
    <div className={`
      bg-white rounded-lg overflow-hidden border-2 
      ${isHorror ? 'border-red-400 shadow-[4px_4px_0px_0px_rgba(200,0,0,0.3)]' : 'border-pink-300 shadow-[4px_4px_0px_0px_rgba(255,182,193,0.8)]'}
      transition-all duration-500
    `}>
      {/* Post Header */}
      <div className={`
        p-3 border-b-2 border-dashed flex justify-between items-center
        ${isHorror ? 'bg-pink-50 border-pink-200 text-pink-900' : 'bg-pink-50 border-pink-200'}
      `}>
        <div>
          <h3 className="font-display font-bold text-lg leading-tight">{post.title}</h3>
          <p className="text-xs font-mono opacity-70">{post.date}</p>
        </div>
        <div className="text-right text-xs font-mono hidden sm:block">
          <p>Mood: {post.mood}</p>
        </div>
      </div>

      {/* Post Image/Video */}
      <div className="border-y-2 border-pink-100 overflow-hidden bg-pink-50/30">
          {post.videoUrl ? (
              <video 
                src={post.videoUrl} 
                className="w-full h-auto block" 
                controls 
                autoPlay 
                muted 
                loop 
              />
          ) : isSprite ? (
              <div className="w-full h-80 flex items-center justify-center">
                  <Avatar character={spriteChar} className="w-64 h-64 scale-75" />
              </div>
          ) : (
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-auto block"
                loading="lazy"
              />
          )}
      </div>

      {/* Post Content */}
      <div className={`p-4 ${isHorror ? 'text-gray-800' : 'text-gray-600'} text-sm leading-relaxed font-sans`}>
        <p className={isGlitch ? 'font-mono text-pink-900 tracking-wide' : ''}>
            {post.content}
        </p>
        
        {/* Tags */}
        <div className="mt-4 flex gap-2 flex-wrap">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs text-pink-500 bg-pink-100 px-2 py-1 rounded">#{tag}</span>
          ))}
        </div>
      </div>

      {/* Footer/Actions */}
      <div className="bg-gray-50 p-3 border-t border-gray-100 flex justify-between text-xs font-bold text-gray-500">
        <div className="flex gap-4">
          <button onClick={onInteract} className="flex items-center gap-1 hover:text-pink-500 transition-colors">
            <Heart size={14} /> {post.phase === NarrativePhase.FINAL ? '0' : '24'} Likes
          </button>
          <button onClick={onInteract} className="flex items-center gap-1 hover:text-blue-500 transition-colors">
            <MessageSquare size={14} /> {post.comments.length} Comments
          </button>
        </div>
        <button onClick={onInteract} className="flex items-center gap-1 hover:text-green-500 transition-colors">
          <Share2 size={14} /> Share
        </button>
      </div>

      {/* Comments Section */}
      {post.comments.length > 0 && (
        <div className="bg-pink-50/30 p-4 border-t border-pink-100 space-y-3">
          {post.comments.map(comment => (
            <div key={comment.id} className="flex gap-2 text-xs">
               <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shadow-sm
                 ${comment.author === 'Tatiana' ? 'bg-yellow-400' : 
                   comment.author === 'Emma' ? 'bg-blue-400' : 
                   comment.author === 'Deb' ? 'bg-pink-400' : 'bg-gray-400'}`}>
                 {comment.author[0]}
               </div>
               <div className="bg-white p-2 rounded-r-lg rounded-bl-lg border border-gray-100 shadow-sm flex-1">
                 <div className="flex justify-between mb-1">
                   <span className="font-bold text-gray-700">{comment.author}</span>
                   <span className="text-gray-400 font-mono text-[10px]">{comment.date}</span>
                 </div>
                 <p className="text-gray-600">{comment.content}</p>
               </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};