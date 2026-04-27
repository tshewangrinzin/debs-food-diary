import { Friend, Post, NarrativePhase } from './types';

export const INITIAL_FRIENDS: Friend[] = [
  {
    id: 1,
    name: "Tatiana",
    character: 'Tatiana',
    status: 'ONLINE',
    statusMessage: "Cafe hopping! 🍰",
    blogUrl: "#"
  },
  {
    id: 2,
    name: "Emma",
    character: 'Emma',
    status: 'ONLINE',
    statusMessage: "Studying... T_T",
    blogUrl: "#"
  }
];

export const BLOG_POSTS: Post[] = [
  {
    id: 1,
    date: "July 25th, 2026",
    title: "Sweet 21!! 🍓",
    mood: "Happy (*^▽^*)",
    music: "Kyary Pamyu Pamyu - PONPONPON",
    content: "Turning 21! Five hearts for the five of us <3 been going strong for eleven years now ><",
    imageUrl: "./assets/p7.jpeg",
    tags: ["foodie", "cafe", "friends", "strawberry"],
    phase: NarrativePhase.NORMAL,
    comments: [
      { id: 1, author: "Tatiana", date: "10 mins ago", content: "This is so cutee!", isFriend: true },
      { id: 2, author: "Emma", date: "15 mins ago", content: "congoo", isFriend: true }
    ]
  },
  {
    id: 2,
    date: "July 28th, 2026",
    title: "Lip and Tea...",
    mood: "Bored (￣^￣)",
    music: "Lo-fi Beats",
    content: "What am I without my lip combo? Anyways I loved the tea! A little bitter and leaves sort of a metallic aftertaste",
    imageUrl: "./assets/p6.jpeg",
    tags: ["waiting", "parfait"],
    phase: NarrativePhase.NORMAL,
    comments: [
      { id: 3, author: "Emma", date: "1 hour ago", content: "Drop the shades girl!!", isFriend: true },
      { id: 10, author: "Tatiana", date: "1 hour ago", content: "That shit must slap so goodddd!", isFriend: true }
    ]
  },
  {
    id: 3,
    date: "August 1st, 2026",
    title: "Sponsorship❤",
    mood: "Mysterious (o_O)",
    music: "Static Noise",
    content: "#Ad You can't enter the streets without glam! @flowerknows make up truly is the best 🤍🤍 If you don't want those dark spots and pimple marks to obscure your true beauty, definitely go for their concealer, I'll post a makeup tutorial sooon! Thank you @flowerknows.",
    imageUrl: "./assets/p5.jpeg",
    tags: ["ootd", "homecooking", "red"],
    phase: NarrativePhase.STAGE_1,
    comments: [
      { id: 4, author: "Emma", date: "2 hours ago", content: "Is that how you maintain your flawless skin?", isFriend: true },
      { id: 5, author: "Deb", date: "1 min ago", content: "Girl can't even hide her dark circles wdym??" }
    ]
  },
  {
    id: 4,
    date: "August 7th, 2026",
    title: "Watching the lilies!",
    mood: "Happy 🤤",
    music: "Nature Sounds",
    content: "Just as the starglazer lily, I gaze longingly at the stars, at the beauty of nature. The color is so vibrant!",
    imageUrl: "./assets/p4.jpeg",
    tags: ["dinner", "cooking"],
    phase: NarrativePhase.STAGE_1,
    comments: [
      {id: 11, author: "fan69", date: "15 min ago", content: "🩷🩷"},
      {id: 12, author: "misfitlover48", date: "25 min ago", content: "My favourite flowers"}
    ]
  },
  {
    id: 5,
    date: "August 15th, 2026",
    title: "Full ⭐️",
    mood: "Satisfied ✨",
    music: "Calm Piano",
    content: "Two cakes for the four of us! A wonderful afternoon tea session with everyone.",
    imageUrl: "./assets/p3.jpeg",
    videoUrl: "./assets/v1.mp4",
    tags: ["jewelry", "collection", "full"],
    phase: NarrativePhase.STAGE_2,
    comments: [
      { id: 13, author: "Anonymous13", date: "2 day ago", content: "Yayy" },
      { id: 14, author: "Anonymous32", date: "1 day ago", content: "I love your blog!" },
      { id: 15, author: "Anonymous12", date: "23 hours ago", content: "The best place to find tea recommendations." },
      { id: 16, author: "Anonymous53", date: "15 hours ago", content: "You girls have the best friendship!" },
      { id: 17, author: "Anonymous145", date: "10 hours ago", content: "Keep posting! ❤️" },
      { id: 18, author: "Anonymous182", date: "2 hours ago", content: "Such a vibe!" }
    ]
  },
  {
    id: 6,
    date: "August 18th, 2026",
    title: "Bookshop Date",
    mood: "Happy (*^▽^*)",
    music: "Lo-fi Beats",
    content: "Book shop date with Tatiana! I found a beautiful edition of 'The Picture of Dorian Gray'.",
    imageUrl: "./assets/p2.jpeg",
    tags: ["reading", "deb", "date"],
    phase: NarrativePhase.FINAL,
    comments: [
      { id: 19, author: "Anonymous13", date: "1 day ago", content: "Best friends forever! lol" },
      { id: 20, author: "Anonymous13", date: "2 day ago", content: "You guys are goals 😢" }
    ]
  },
  {
    id: 7,
    date: "August 20th, 2026",
    title: "Delicious Cake ✨",
    mood: "Happy (*^▽^*)",
    music: "Upbeat Pop",
    content: "This cake was absolutely amazing! The strawberry cream was so light and the sponge was perfectly fluffy. I could eat this every day!",
    imageUrl: "./assets/p1.jpeg", 
    tags: ["cake", "sweet", "yum"],
    phase: NarrativePhase.FINAL,
    comments: [
      { id: 7, author: "Fan123", date: "5 mins ago", content: "You look so pretty!" },
      { id: 8, author: "CuteLover", date: "2 mins ago", content: "Your hair looks so shiny today." },
      { id: 9, author: "Anon", date: "Just now", content: "I love your content!" }
    ]
  },
  {
    id: 8,
    date: "August 22nd, 2026",
    title: "Evening Vibes 🌙",
    mood: "Relaxed (✿◠‿◠)",
    music: "City Pop",
    content: "Just a quick video of the evening lights. Everything feels so peaceful tonight. I hope you're all having a great weekend!",
    imageUrl: "./assets/p3.jpeg",
    videoUrl: "./assets/v-2.mp4",
    tags: ["night", "aesthetic", "vlog"],
    phase: NarrativePhase.NORMAL,
    comments: [
      { id: 21, author: "Tatiana", date: "1 hour ago", content: "Looking good!", isFriend: true },
      { id: 22, author: "Emma", date: "2 hours ago", content: "Pretttty!", isFriend: true }
    ]
  }
];