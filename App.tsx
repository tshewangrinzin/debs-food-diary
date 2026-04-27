import React, { useState, useEffect, useRef } from 'react';
import { Post, Friend, NarrativePhase } from './types';
import { INITIAL_FRIENDS, BLOG_POSTS } from './constants';
import { ProfileCard } from './components/ProfileCard';
import { FriendsList } from './components/FriendsList';
import { BlogPost } from './components/BlogPost';
import { Header } from './components/Header';
import { Shoutbox } from './components/Shoutbox';
import { StickerWidget } from './components/StickerWidget';
import { FinalPopup } from './components/FinalPopup';

const POPUP_MESSAGES = [
  "The cake is ready! ✨",
  "Thanks for reading till the end! 🌸",
  "You've unlocked a secret achievement! 🎀",
  "Something special is waiting for you... 🍰",
  "Want to see more exclusive content? 📸",
  "Click to join the VIP members list! 🌸",
  "You are visitor #1,000,000! 🍰"
];

const App: React.FC = () => {
  // We track the scroll position to determine which post is active
  const [visiblePostId, setVisiblePostId] = useState<number>(1);
  const [showFinalPopup, setShowFinalPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const currentPhase = NarrativePhase.NORMAL;
  // Track if the user arrived via a direct hash link (skip popup in that case)
  const arrivedViaHash = useRef(false);

  // Create refs for posts to track visibility
  const postRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // Handle hash-based navigation — scroll target to center of viewport
  // Uses instant scrolls during stabilisation so layout shifts can't interrupt,
  // then one final smooth scroll once the position is locked in.
  useEffect(() => {
    const scrollToHash = (hash: string) => {
      if (!hash) return;
      arrivedViaHash.current = true;

      let lastTop = -1;
      let stableCount = 0;
      const maxAttempts = 80; // 80 × 100ms = 8s max (hard reload can be slow)
      let attempts = 0;
      let settled = false;

      const scrollToCenter = (el: HTMLElement, smooth: boolean) => {
        const rect = el.getBoundingClientRect();
        const targetY = rect.top + window.scrollY - (window.innerHeight / 2) + (rect.height / 2);
        window.scrollTo({ top: targetY, behavior: smooth ? 'smooth' : 'instant' });
      };

      const poll = () => {
        if (settled) return;
        attempts++;
        const el = document.getElementById(hash);
        if (!el) {
          if (attempts < maxAttempts) setTimeout(poll, 100);
          return;
        }

        const currentTop = el.getBoundingClientRect().top + window.scrollY;

        if (Math.abs(currentTop - lastTop) < 2) {
          stableCount++;
        } else {
          stableCount = 0;
        }
        lastTop = currentTop;

        // Snap instantly during stabilisation — can't be interrupted by layout shifts
        scrollToCenter(el, false);

        if (stableCount >= 3) {
          // Position locked — do one final smooth scroll for polish
          settled = true;
          setTimeout(() => scrollToCenter(el, true), 50);
        } else if (attempts < maxAttempts) {
          setTimeout(poll, 100);
        }
      };

      // Also react to images/videos loading which cause layout shifts
      const onLoad = () => {
        if (!settled) {
          stableCount = 0; // reset — layout just shifted
        }
      };
      window.addEventListener('load', onLoad);
      document.addEventListener('load', onLoad, true); // capture phase for img/video load events

      // Start after first paint
      requestAnimationFrame(() => setTimeout(poll, 0));

      // Cleanup on next call
      return () => {
        settled = true;
        window.removeEventListener('load', onLoad);
        document.removeEventListener('load', onLoad, true);
      };
    };

    // Handle initial page load
    const cleanup = scrollToHash(window.location.hash.slice(1));

    // Handle in-page hash changes (SPA navigation)
    const onHashChange = () => scrollToHash(window.location.hash.slice(1));
    window.addEventListener('hashchange', onHashChange);
    return () => {
      cleanup?.();
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Visibility tracking
      let activePostId = 1;
      let minDistance = Infinity;

      postRefs.current.forEach((element, id) => {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
        if (distance < minDistance) {
          minDistance = distance;
          activePostId = id;
        }
      });

      setVisiblePostId(activePostId);

      // Popup trigger right before the Bonus Reel card (id 12) becomes visible
      // Skip if user arrived via direct hash link
      if (!arrivedViaHash.current) {
        const bonusCard = postRefs.current.get(12);
        if (bonusCard && !showFinalPopup) {
          const rect = bonusCard.getBoundingClientRect();
          // Trigger when the card is about to enter the viewport (200px before it's visible)
          if (rect.top < window.innerHeight + 200 && rect.bottom > 0) {
            setPopupMessage(POPUP_MESSAGES[Math.floor(Math.random() * POPUP_MESSAGES.length)]);
            setShowFinalPopup(true);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showFinalPopup]);

  const handleInteraction = () => {
    // Standard UI interaction handler
  };

  return (
    <div className="min-h-screen text-pink-900 font-sans selection:bg-pink-300 selection:text-white pb-20 relative bg-pink-50/20">
      
      {showFinalPopup && (
        <FinalPopup 
          message={popupMessage} 
          onClose={() => setShowFinalPopup(false)} 
        />
      )}

      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        <Header onInteract={handleInteraction} phase={currentPhase} />

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6">
          
          {/* Left Sidebar - Sticky Profile */}
          <div className="md:col-span-3 hidden md:block relative h-full">
            <div className="sticky top-4 space-y-4 max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-hide">
              <ProfileCard phase={currentPhase} />
              <StickerWidget phase={currentPhase} />
            </div>
          </div>

          {/* Center - Blog Content */}
          <main className="md:col-span-6 space-y-4">
            <div className="bg-white/80 backdrop-blur-sm border-4 border-pink-300 border-double p-3 rounded-xl text-center shadow-sm">
              <h2 className="text-lg font-display font-bold text-pink-500 mb-1">✨ Recent Entries ✨</h2>
              <p className="text-xs text-pink-400 font-mono">Viewing entry {visiblePostId} of {BLOG_POSTS.length}</p>
            </div>

            {BLOG_POSTS.map((post) => {
              const slug = post.id === 12 
                ? 'bonus-reel' 
                : post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return (
                <div 
                  key={post.id}
                  id={slug}
                  ref={(el) => {
                    if (el) postRefs.current.set(post.id, el);
                    else postRefs.current.delete(post.id);
                  }}
                >
                  <BlogPost post={post} onInteract={handleInteraction} />
                </div>
              );
            })}

            {/* Load More Button */}
            <div className="flex justify-center mt-8">
                <button 
                  onClick={handleInteraction}
                  className="px-6 py-3 rounded-full font-bold shadow-md transition-all transform hover:scale-105 active:scale-95 bg-white text-pink-500 border-2 border-pink-300 hover:bg-pink-50"
                >
                  🌸 Load More Entries...
                </button>
            </div>

            <div className="p-8 text-center font-mono text-gray-400 text-xs">
              © 2024 Deb's Blog. All rights reserved. <br/>
              Don't steal my layout or I'll bite! ^_~
            </div>
          </main>

          {/* Right Sidebar */}
          <div className="md:col-span-3 hidden md:block relative h-full">
            <div className="sticky top-4 space-y-4 max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-hide">
              <FriendsList phase={currentPhase} initialFriends={INITIAL_FRIENDS} onInteract={handleInteraction} />
              <Shoutbox phase={currentPhase} onInteract={handleInteraction} />
              <div className="bg-lime-50 border-2 border-dashed border-lime-400 p-2 rounded-lg text-xs text-center font-mono text-lime-700">
                <p>Visitor Count:</p>
                <div className="bg-white text-pink-500 font-bold tracking-widest text-lg inline-block px-2 mt-1 border-2 border-lime-200 shadow-sm">
                  01234
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Fallback */}
          <div className="md:hidden space-y-6">
             <ProfileCard phase={currentPhase} />
             <StickerWidget phase={currentPhase} />
             <FriendsList phase={currentPhase} initialFriends={INITIAL_FRIENDS} onInteract={handleInteraction} />
             <Shoutbox phase={currentPhase} onInteract={handleInteraction} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;