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
    content: "meet-cute in my room",
    imageUrl: "/assets/p7.jpeg",
    tags: ["foodie", "cafe", "friends", "strawberry"],
    likes: 8,
    phase: NarrativePhase.NORMAL,
    comments: [
      { id: 24, author: "ladygoogooggaagaa", date: "45 mins ago", content: "omg you guys are stunning" },
      { id: 25, author: "miss.bananini214", date: "1 hour ago", content: "the outfits?? hello????" },
      { id: 26, author: "Sasha.1999", date: "2 hours ago", content: "the aesthetic is everything" },
      { id: 27, author: "daisyletters", date: "3 hours ago", content: "such a diverse group with a diverse vibe" }
    ]
  },
  {
    id: 2,
    date: "July 28th, 2026",
    title: "Lip and Tea...",
    mood: "Bored (￣^￣)",
    music: "Lo-fi Beats",
    content: "Dressed up not for the club but a premium home theatre sleepover🎟💁♀️",
    imageUrl: "/assets/p6.jpeg",
    tags: ["waiting", "parfait"],
    likes: 21,
    phase: NarrativePhase.NORMAL,
    comments: [
      { id: 35, author: "ladygoogooggaagaa", date: "45 mins ago", content: "YASSS GIRLS NIGHT🤩🤩" },
      { id: 36, author: "miss.bananini214", date: "30 mins ago", content: "Ugh wish my friends could also plan for a sleepover major fomo😩" },
      { id: 37, author: "Sasha.1999", date: "20 mins ago", content: "So true not everything requires alcohol 😝 love some maturity in my girlies" },
      { id: 38, author: "daisyletters", date: "15 mins ago", content: "Oooo is that the substance??" },
      { id: 39, author: "lilacdreaming", date: "5 mins ago", content: "OMG you guys are so prettyyyy" }
    ]
  },
  {
    id: 3,
    date: "August 1st, 2026",
    title: "Sponsorship❤",
    mood: "Mysterious (o_O)",
    music: "Static Noise",
    content: "Reliving precious childhood memories with the collection of story books and puzzles I just discovered last week in my attic!!",
    imageUrl: "/assets/p5.jpeg",
    tags: ["ootd", "homecooking", "red"],
    likes: 47,
    phase: NarrativePhase.STAGE_1,
    comments: [
      { id: 44, author: "ladygoogooggaagaa", date: "45 mins ago", content: "Ugh cutest friend group ever!!" },
      { id: 45, author: "miss.bananini214", date: "1 hour ago", content: "Digital detox done right😻😻" },
      { id: 46, author: "Sasha.1999", date: "2 hours ago", content: "Perfect way to reminisce over story books lemme go find some of mine too!!" },
      { id: 47, author: "daisyletters", date: "3 hours ago", content: "AAAHH!! BSS goals" }
    ]
  },
  {
    id: 4,
    date: "August 7th, 2026",
    title: "Watching the lilies!",
    mood: "Happy 🤤",
    music: "Nature Sounds",
    content: "Brainstorming sessions for recipes xoxo <<< thanks to my bsf for her goated inspos🤫😘",
    imageUrl: "/assets/p4.jpeg",
    tags: ["dinner", "cooking"],
    likes: 83,
    phase: NarrativePhase.STAGE_1,
    comments: [
      { id: 49, author: "ladygoogooggaagaa", date: "1 hour ago", content: "Omgg the laptop cover is soo chic link please 🤩" },
      { id: 50, author: "miss.bananini214", date: "50 mins ago", content: "Your friend's entire outfit is elevated with that scarf –! Its giving confessions of a shopaholic power of the scarf 🫠🫠🫠 > I need one so bad" },
      { id: 51, author: "Sasha.1999", date: "35 mins ago", content: "Never in my life would I look this elegant doing research work 🤣🤣" },
      { id: 52, author: "daisyletters", date: "20 mins ago", content: "Oooo so excited" },
      { id: 77, author: "lilacdreaming", date: "10 mins ago", content: "UGGHHH your friend has got that outfit spot on! Pink and Pretty" }
    ]
  },
  {
    id: 5,
    date: "August 15th, 2026",
    title: "Full ⭐️",
    mood: "Satisfied ✨",
    music: "Calm Piano",
    content: "Spring time snack spread in my room 🍊❤️",
    imageUrl: "/assets/p3.jpeg",
    videoUrl: "/assets/v1.mp4",
    tags: ["jewelry", "collection", "full"],
    likes: 114,
    phase: NarrativePhase.STAGE_2,
    comments: [
      { id: 53, author: "ladygoogooggaagaa", date: "50 mins ago", content: "OMG sooo cuteeee" },
      { id: 54, author: "miss.bananini214", date: "40 mins ago", content: "Girl, Everything looks so neat and organised, not a single mess in sight" },
      { id: 55, author: "Sasha.1999", date: "30 mins ago", content: "Yesss ikr, hate those overdramatic messy eaters" },
      { id: 78, author: "daisyletters", date: "15 mins ago", content: "Ugh we need more of you queen, post often" },
      { id: 79, author: "lilacdreaming", date: "5 mins ago", content: "Mwah mwah tots checking out those links today" }
    ]
  },
  {
    id: 6,
    date: "August 16th, 2026",
    title: "Tea Time Snap 📸",
    mood: "Content (◕‿◕)",
    music: "Afternoon Jazz",
    content: "Best mua in town 🤗🤗 Booked and busy only for yours truly",
    imageUrl: "/assets/p3.jpeg",
    tags: ["tea", "aesthetic", "snap"],
    likes: 152,
    phase: NarrativePhase.STAGE_2,
    comments: [
      { id: 28, author: "ladygoogooggaagaa", date: "30 mins ago", content: "wowow celeb in town" },
      { id: 56, author: "miss.bananini214", date: "25 mins ago", content: "2 BADDIES AND A CANVAS" },
      { id: 57, author: "Sasha.1999", date: "20 mins ago", content: "Need ur products haul asap queen" },
      { id: 80, author: "daisyletters", date: "15 mins ago", content: "Yesss honey you're looking so good lately" },
      { id: 81, author: "lilacdreaming", date: "5 mins ago", content: "Need friends like that! So cute!!" }
    ]
  },
  {
    id: 7,
    date: "August 18th, 2026",
    title: "Bookshop Date",
    mood: "Happy (*^▽^*)",
    music: "Lo-fi Beats",
    content: "Retail therapy ++ bestie who has same taste as u xoxo",
    imageUrl: "/assets/p2.jpeg",
    tags: ["reading", "deb", "date"],
    likes: 189,
    phase: NarrativePhase.FINAL,
    comments: [
      { id: 58, author: "ladygoogooggaagaa", date: "1 hour ago", content: "AHHHH SO CUTE" },
      { id: 59, author: "miss.bananini214", date: "50 mins ago", content: "Deb and esther eating up in every brand they buy 🤩🤩😍 cant wait for a HAULL" },
      { id: 60, author: "Sasha.1999", date: "30 mins ago", content: "Omg was just looking for inspo for a jewelry stack yayy" },
      { id: 82, author: "daisyletters", date: "15 mins ago", content: "Omg ur friends dress is the perfect spring fit" }
    ]
  },
  {
    id: 8,
    date: "August 19th, 2026",
    title: "Evening Vibes 🌙",
    mood: "Relaxed (✿◠‿◠)",
    music: "City Pop",
    content: "ALL ORGANIC AESTHETIC BREAKFAST MUKBANG 🐇🥞🥛🧺",
    imageUrl: "/assets/p3.jpeg",
    videoUrl: "/assets/v-2.mp4",
    tags: ["night", "aesthetic", "vlog"],
    likes: 221,
    phase: NarrativePhase.NORMAL,
    comments: [
      { id: 61, author: "ladygoogooggaagaa", date: "1 hour ago", content: "WOah, you ate all that?? And no mess" },
      { id: 62, author: "miss.bananini214", date: "45 mins ago", content: "Can't tell why watching you is sooo satisfying" },
      { id: 63, author: "Sasha.1999", date: "30 mins ago", content: "OHHH that outfit" },
      { id: 64, author: "daisyletters", date: "15 mins ago", content: "When will your next Q&A be?" },
      { id: 65, author: "lilacdreaming", date: "5 mins ago", content: "Looks sooo yum, did you make it? Always good to have healthier options" }
    ]
  },
  {
    id: 9,
    date: "August 20th, 2026",
    title: "Delicious Cake ✨",
    mood: "Happy (*^▽^*)",
    music: "Upbeat Pop",
    content: "Listening to chirmis fav punk rock band — pre concert scenes 🎸🎧",
    imageUrl: "/assets/p1.jpeg",
    tags: ["cake", "sweet", "yum"],
    likes: 258,
    phase: NarrativePhase.FINAL,
    comments: [
      { id: 66, author: "ladygoogooggaagaa", date: "3 hours ago", content: "OMG WHICH BAND" },
      { id: 67, author: "miss.bananini214", date: "2 hours ago", content: "Omgggg is it (bands name) I WAS THERE !!!" },
      { id: 68, author: "Sasha.1999", date: "1 hour ago", content: "Wish I could rock piercings like Chirmi 😩😩" }
    ]
  },
  {
    id: 10,
    date: "August 21st, 2026",
    title: "Weekend Moments 🎬",
    mood: "Cheerful (⌒▽⌒)",
    music: "Indie Pop",
    content: "Happy birthday to me ☺",
    imageUrl: "/assets/p3.jpeg",
    videoUrl: "/assets/v3.mp4",
    tags: ["weekend", "vlog", "moments"],
    likes: 276,
    phase: NarrativePhase.FINAL,
    comments: [
      { id: 71, author: "ladygoogooggaagaa", date: "1 hour ago", content: "Uhh…." },
      { id: 72, author: "miss.bananini214", date: "50 mins ago", content: "Woah who was that?" },
      { id: 73, author: "Sasha.1999", date: "35 mins ago", content: "Wtf are you okay?" },
      { id: 74, author: "daisyletters", date: "20 mins ago", content: "Gurl are you insane? Why were you eating with your hands????" },
      { id: 75, author: "lilacdreaming", date: "10 mins ago", content: "Omg it's making me want to puke" },
      { id: 76, author: "Christinabakes", date: "2 mins ago", content: "Um… anyways?" }
    ]
  },
  {
    id: 11,
    date: "August 22nd, 2026",
    title: "Golden Hour ☀️",
    mood: "Dreamy (✧ω✧)",
    music: "Soft Acoustic",
    content: "Caught the most beautiful golden hour light today. Sometimes you just have to stop and appreciate the little things 🌅",
    imageUrl: "/assets/p8.jpeg",
    tags: ["golden", "sunset", "peaceful"],
    likes: 294,
    phase: NarrativePhase.FINAL,
    comments: [
      { id: 33, author: "moonbeamxx", date: "1 hour ago", content: "Golden hour hits different 🌸" },
      { id: 34, author: "bookworm_bea", date: "2 hours ago", content: "This is giving main character energy!" }
    ]
  },
  {
    id: 12,
    date: "August 25th, 2026",
    title: "Bonus Reel 🎬✨",
    mood: "Excited (ﾉ◕ヮ◕)ﾉ*:・゚✧",
    music: "Upbeat K-Pop",
    content: "no script just vibes",
    imageUrl: "/assets/p3.jpeg",
    videoUrl: "/assets/v4.mp4",
    tags: ["bonus", "reel", "moments", "special"],
    likes: 312,
    phase: NarrativePhase.FINAL,
    comments: [
      { id: 42, author: "ladygoogooggaagaa", date: "3 mins ago", content: "THIS IS SO GOOD???" },
      { id: 43, author: "miss.bananini214", date: "2 mins ago", content: "you're SOO gorgeous" },
      { id: 44, author: "Sasha.1999", date: "1 min ago", content: "omg i LOVE this blog!" }
    ]
  }
];