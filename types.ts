export enum NarrativePhase {
  NORMAL = 'NORMAL',       // Everything is cute
  STAGE_1 = 'STAGE_1',     // Friend 1 gone, Mimi has accessory 1
  STAGE_2 = 'STAGE_2',     // Friend 2 gone, Mimi has accessory 2
  FINAL = 'FINAL'          // Identity takeover / Beastly
}

export type CharacterId = 'Deb' | 'Deb_Final' | 'Tatiana' | 'Emma';

export interface Friend {
  id: number;
  name: string;
  character: CharacterId;
  status: 'ONLINE' | 'OFFLINE' | 'MISSING' | 'DELETED';
  statusMessage: string;
  blogUrl: string;
}

export interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
  isFriend?: boolean; // If true, author is one of the friends
}

export interface Post {
  id: number;
  date: string;
  title: string;
  content: string;
  mood: string;
  music: string;
  imageUrl: string; // Placeholder or specific
  videoUrl?: string; // Optional video path
  tags: string[];
  comments: Comment[];
  phase: NarrativePhase; // Which narrative phase this post belongs to
}