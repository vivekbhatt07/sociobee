import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Now onto the best parts of this episode. Tanjiro’s hesitation as he couldn’t decide, his expression of hopelessness and the voice acting were perfect in this scene. It hits so hard even as a manga reader. The anime portrayed better tanjiro’s hopelessness and stress.",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687335885/socialbee/FzFM85HXsAQlnUA_kqvfbf.jpg",
    mediaAlt: "anime manga",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Gojo",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Bears are really one of the coolest animals",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/video/upload/v1687336330/socialbee/Bear_ympbt2.mp4",
    mediaAlt: "Concert Video",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    // username: "adityaj",
    username: "Panda",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "This weekend is going to be amazing, watch extraction 2. This is a good action movie. Movie is worth to watch. Instead of watching it in OTT platforms, watch it in theatres to enjoy it fully.",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687336965/socialbee/extraction_axzjzz.jpg",
    mediaAlt: "movie",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    // username: "emilysmith",
    username: "Movie",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Want to generate random colors with JavaScript? Let me show you how you can do it 🎨",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687337743/socialbee/generateColors_fwpmft.jpg",
    mediaAlt: "Fashion Store Image",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "JSTech",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Meet the new featured pup, Lady Whistledown (aka LadyW)! She's been at the shelter for 443 days! 💔 Please help her find a home!",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687338218/socialbee/Dog_abqfwo.jpg",
    mediaAlt: "",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Panda",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Thank you for 20 amazing years, Naruto!! 💕 What are some of your favorite memories of the series?",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687338822/socialbee/naruto_bwxv6n.jpg",
    mediaAlt: "naruto",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Gojo",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "The TOM CRUISE countdown begins. The star of last year’s beloved Top Gun: Maverick back on the big screen again on July 12 in his new stunt-filled and action-packed Mission Impossible - Dead Reckoning Part One. AMC tickets go on sale starting tomorrow at 9 am East, 6 am Pacific.",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687340050/socialbee/tomcruise_obaiw0.jpg",
    mediaAlt: "tom cruise",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Movie",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Just finished my new piece! My Solitude, RM 118, ink on paper, 11.2cm x 23.9cm, 2022. If you interested kindly DM me here thank you.",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687340669/socialbee/sketch_sklc9o.jpg",
    mediaAlt: "lanscape sketch",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Sketcher",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Crispy Air Fryer Potato Wedges. Make your sunday morning tasty by eating this delicious and quick-ready dish.",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687345511/socialbee/potatoChips_ousqiq.jpg",
    mediaAlt: "potato dish",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Foody",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Cute animals with tech is arguably better than humans with tech - got any fluffs hanging out in your home? we'd love to see!",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687347551/socialbee/catwatch_j6v54t.jpg",
    mediaAlt: "cat watching",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Panda",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Adventure awaits as I set my sights on the mesmerizing city-state of Singapore! From vibrant streets to stunning skylines, I'm ready to explore the cultural tapestry, indulge in delectable cuisine, and uncover hidden gems. Join me on this exhilarating journey as I embark on an unforgettable travel escapade in the Lion City!",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686384788/socialMedia/singapore_p4bvfo.jpg",
    mediaAlt: "Singapore",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jacobmitch",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      " Hackathon success unlocked! Proud and thrilled to have secured the second prize in an exhilarating coding showdown. 💪💻 It was an incredible experience collaborating, coding, and pushing boundaries to build innovative solutions. Grateful for the supportive team and the opportunity to showcase my skills. Onwards and upwards, the journey of a web developer continues! 🚀✨",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "emilysmith",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "💜 The rhythm that transcends borders, the melodies that touch hearts. BTS, a powerhouse of talent and inspiration, continues to captivate the world with their music and message. From their electrifying performances to their genuine connection with ARMY, they redefine the meaning of artistry. Grateful to be a part of this incredible fandom. Together, we soar with BTS! ✨🚀 #BTS #ARMY #MusicMagic",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686385359/socialMedia/bts_qkwp0a.jpg",
    mediaAlt: "BTS",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "wilsarah",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Exploring the world, one destination at a time, and creating lifelong connections along the way! 🤝🗺️ Thrilled to embark on thrilling adventures, immerse in diverse cultures, and embrace the beauty of humanity. Let's meet, share stories, and build lasting friendships on this incredible journey called life. Travel and friendship are the greatest treasures that enrich our souls! 🌐💙 ",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jacobmitch",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "This Israeli Salad is tasty, healthy and quick to make... this is a bowl of wholesomeness!",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687346146/socialbee/salad_zkkjbp.jpg",
    mediaAlt: "salad",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Foody",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Excited to strum the strings of my new musical companion! 🎶🎉 Just bought a new Guitar! This beautiful guitar is now an extension of my soul, ready to accompany me on melodies and lyrics yet to be discovered. From heartfelt ballads to energetic riffs, we're about to create magic together. Get ready for some soul-stirring tunes coming your way!",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adityaj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "🍽️📸 Embarking on a mouthwatering journey as I dive into the world of food blogging! 🌟✨ From savoring delectable dishes to capturing culinary delights, I'm thrilled to share my gastronomic adventures with fellow food enthusiasts. Join me as we explore flavors, unravel hidden gems, and celebrate the joy of good food together. Let the foodie adventures begin! ",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rohaaan",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Hange is his right eye, Levi is her left eye",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687346948/socialbee/aot_biqg02.jpg",
    mediaAlt: "aot",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Gojo",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "This Vegetarian Lasagna Is Bursting With Spring Vegetables",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687345873/socialbee/lasgna_m0mwr0.jpg",
    mediaAlt: "Foody",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aryan987",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Who is your biggest reference in the #JavaScript community? Tag his/her @ in the comments.",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687346570/socialbee/JavascriptThumb_uv5dmp.jpg",
    mediaAlt: "javascriptThumb",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: "JSTech",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "I really want to get better at drawing and painting cinematic grand landscapes for my worldbuilding. Points that I find especially hard is scale, depth, perspective and CLOUDS. All things that you need when trying to do this...",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687341028/socialbee/topsketch_qzwhek.jpg",
    mediaAlt: "hill sketch",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Sketcher",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
];
