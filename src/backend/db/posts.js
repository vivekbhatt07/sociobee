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
      "Finally completed my e-commerce app using React! It's been an awesome journey with a lot of learning. Check it out and share your feedback!",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/video/upload/v1687361575/socialbee/VivekEcommerce_d4ltez.mp4",
    mediaAlt: "ecommerce.mp4",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vivekbhatt07",
    createdAt: "2023-06-06T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "Mere se review krwate rehna acca project hi bnega 😂😂",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "ab8zWjEeXd",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        commentData: "Looks amazing! 🚀👏",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351662/socialbee/anushka_uxvyys.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "o5gzWjEeX_",
        firstName: "Shraddha",
        lastName: "Vishwakarma",
        username: "Shraddha_228",
        commentData: "Wonderful! UI Share it in the Social Website",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351410/socialbee/shraddha_hldbxa.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "LCrc9f0Zl0",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        commentData:
          "Beautiful UI!! 🤌🔥🔥, Share it in the Linkedin as well, Integration Payment is very awesome.",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350712/socialbee/pranita_mylipt.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "🌟 Big announcement! 🎉I've just finished building my dazzling jewellery website using React! 💍💎It's been an amazing adventure,merging my love for web development and exquisite accessories.Explore the collection, share your thoughts.",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/video/upload/v1687363179/socialbee/AnushkaEcommerce_mnhrmu.mp4",
    mediaAlt: "ecommerce.mp4",
    likes: {
      likeCount: 53,
      likedBy: [],
      dislikedBy: [],
    },
    username: "TheIndianGirl56",
    createdAt: "2023-06-14T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "Great work 🔥🚀",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "t7cZfWIp-q",
        firstName: "Vivek",
        lastName: "Bhatt",
        username: "vivekbhatt07",
        commentData: "Amazing Unique UI 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350921/socialbee/vivek_e4z4pq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      // {
      //   _id: "1T6Be1QpLm",
      //   firstName: "Niharika",
      //   lastName: "Kesarwani",
      //   username: "Niharika_twt",
      //   profileAvatar:
      //     "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351197/socialbee/niharika_gmwh05.jpg",
      //   commentData: "So beautiful! 🥹",
      //   createdAt: formatDate(),
      //   updatedAt: formatDate(),
      // },
    ],
  },
  // {
  //   _id: uuid(),
  //   content:
  //     "I just completed READHAVEN, my first React e-commerce web app dedicated to books! Kindly spread the word & share your love for books! Feedback suggestions are highly appreciated! ",
  //   mediaURL:
  //     "https://res.cloudinary.com/duqsyuriy/video/upload/v1687363887/socialbee/NiharikaEcommerce_v53n6z.mp4",
  //   mediaAlt: "ecommerce.mp4",
  //   likes: {
  //     likeCount: 5,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   username: "Niharika_twt",
  //   createdAt: "2023-06-03T01:06:00+05:30",
  //   updatedAt: formatDate(),
  //   comments: [
  //     {
  //       _id: "79Gksh9otl",
  //       firstName: "Abhishek",
  //       lastName: "Gupta",
  //       username: "Abhishek12703",
  //       commentData: "Looks awesome! Improve design.",
  //       profileAvatar:
  //         "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
  //       createdAt: formatDate(),
  //       updatedAt: formatDate(),
  //     },
  {
    _id: uuid(),
    content:
      "Here it is: @NASAWebb’s one-year anniversary image. Called Rho Ophiuchi, this area shows about 50 young stars in a cocoon of gas and dust. At 390 light-years away, it's the closest star-forming region to Earth",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1689808197/galaxy_lqy0ua.jpg",
    mediaAlt: "space",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vivekkushal",
    createdAt: "2023-06-03T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "My favorite star is Sagittarius",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "o5gzWjEeX_",
        firstName: "Shraddha",
        lastName: "Vishwakarma",
        username: "Shraddha_228",
        commentData: "This is very beautiful.",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351410/socialbee/shraddha_hldbxa.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "LCrc9f0Zl0",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        commentData:
          "The things humanity can accomplish when we put aside our petty differences and work together for the common good is truly remarkable. Hopefully one day war will be nothing but a fleeting memory as we all work together to reach out and explore strange new worlds...together.",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350712/socialbee/pranita_mylipt.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },

  {
    _id: uuid(),
    content:
      "The Quesst for quiet supersonic commercial flight over land moves to the next stage for @NASAaero’s X-59. The aircraft moved to the space between the hanger & the runway which marks the start of a series of ground tests to ensure the X-59 is safe to fly",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1689808982/Jet_yh2mhc.jpg",
    mediaAlt: "space",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vivekkushal",
    createdAt: "2023-06-03T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "Great idea. Stick to this flat plane we are on. :)",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "o5gzWjEeX_",
        firstName: "Shraddha",
        lastName: "Vishwakarma",
        username: "Shraddha_228",
        commentData:
          "Hum, what fuel is it using? You do realise we are within an existential climate crises?",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351410/socialbee/shraddha_hldbxa.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "LCrc9f0Zl0",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        commentData:
          "Brilliant piece of engineering, coming up with a way to break the sound barrier without the noise pollution, could open up fast transcontinental travel for the masses from metropolitan airports, instead of limited to large coastal airports transatlantic, like concord",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350712/socialbee/pranita_mylipt.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Last month has been a rollercoaster ride of emotions for me. I have my first job now. No DSA was asked the entire interview was scheduled around js concepts & functional programming. I'll be joining from Monday",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 45,
      likedBy: [],
      dislikedBy: [],
    },
    username: "clevercoderjoy",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "Keep Going, wish you a happy journey for ahead",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "t7cZfWIp-q",
        firstName: "Vivek",
        lastName: "Bhatt",
        username: "vivekbhatt07",
        commentData: "Give some tips in the next post so that we can get hired",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350921/socialbee/vivek_e4z4pq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Just a small step towards my goals ! got selected for the level - one of @neogcamp",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688727502/abhishek_result.jpg",
    mediaAlt: "result",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Abhishek12703",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        commentData: "Keep going, Abhishek, become a good frontend developer.",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350712/socialbee/pranita_mylipt.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "t7cZfWIp-q",
        firstName: "Vivek",
        lastName: "Bhatt",
        username: "vivekbhatt07",
        commentData: "Give some tips in the next post so that we can get hired",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350921/socialbee/vivek_e4z4pq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Hello friends, I am thrilled to unveil my latest project Funk Feed, a social media platform built with ReactJS!",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1689809749/abhishekProject_ae70vh.png",
    mediaAlt: "funkfeed",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Abhishek12703",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        commentData: "UI is looking amazing bro 👏",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350712/socialbee/pranita_mylipt.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "t7cZfWIp-q",
        firstName: "Vivek",
        lastName: "Bhatt",
        username: "vivekbhatt07",
        commentData: "Amazing UI 🔥, merese review karaoge toh aisa hi hoga 😎",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350921/socialbee/vivek_e4z4pq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Finally, reached last section, learnt and understood much till now. Great course, loving it ✌️",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687362085/socialbee/CssKeven_tiwk8b.png",
    mediaAlt: "css course",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vivekbhatt07",
    createdAt: "2022-12-27T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "In India, everyone is a self taught developer. Fact. Not kidding. The education part of college failed all of us.",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 50,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanaypratap",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "AI will take away many `digital` jobs (but eventually). Neither panic, nor be ignorant. Try to use AI tools in your job to the fullest, leverage it's potential to increase your output. If you do it right, you'll soon figure out if you will be replaced.",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 34,
      likedBy: [],
      dislikedBy: [],
    },
    username: "akshaymarch7",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Just finished building an awesome login form in React! Loving the progress I'm making on my #100DaysOfCode challenge.",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687414263/vikasLogin_vjlqrw.jpg",
    mediaAlt: "login page",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    username: "VikasLodh",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content: "This year, Thought I would start drawing daily..❤️",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687414776/shraddhaDraw_dxby3g.jpg",
    mediaAlt: "cat watching",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Shraddha_228",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Clean code is like poetry. Do not be that coder who writes 10 lines worth of code in a single line. If you need to write code in 100 lines to make it understandable, do it.",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 17,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanaypratap",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Received an awesome surprise on Women's Day from @hashnode Got to be a part of 20 noteworthy women writers from Hashnode. 🥹 Celebrating this small win only because of @tanaypratap Bhaiya and my lovely @neogcamp family! ❤️🙌",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688243169/pranitaBlog_vryan4.jpg",
    mediaAlt: "neog class",
    likes: {
      likeCount: 16,
      likedBy: [],
      dislikedBy: [],
    },
    username: "pranita0709",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  // {
  //   _id: uuid(),
  //   content:
  //     "One of the best all-night coding days with pranita, where almost 7 hours went by in a breeze! 🥹 Felt so rewarding and satisfying at the end!😭🤗",
  //   mediaURL: "",
  //   mediaAlt: "",
  //   likes: {
  //     likeCount: 22,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   username: "Niharika_twt",
  //   createdAt: "2023-05-23T01:06:00+05:30",
  //   updatedAt: formatDate(),
  //   comments: [
  //     {
  //       _id: "79Gksh9otl",
  //       firstName: "Abhishek",
  //       lastName: "Gupta",
  //       username: "Abhishek12703",
  //       commentData: "This is Awesome 🔥",
  //       profileAvatar:
  //         "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
  //       createdAt: formatDate(),
  //       updatedAt: formatDate(),
  //     },
  //   ],
  // },
  {
    _id: uuid(),
    content: "I still believe this 😆",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687416078/anushkaAnt_zl9crv.png",
    mediaAlt: "ant",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "TheIndianGirl56",
    createdAt: "2023-05-18T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content: "Betting on yourself >>> betting on any stock in the market",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 18,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanaypratap",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Just realized that useEffect is like a superhero for React hooks-it swoops in, saves the day by managing state and side effects, and then disappears into the night without leaving a trace. I was badly stuck in a problm ystdy, useEffect rescued me",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: "TheIndianGirl56",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Do you remember when you joined Twitter? I do! #MyTwitterAnniversary",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688243308/pranitaAnniversary_qtbass.jpg",
    mediaAlt: "neog class",
    likes: {
      likeCount: 16,
      likedBy: [],
      dislikedBy: [],
    },
    username: "pranita0709",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Hey folks, I successfully completed my #50daysofcode challenge 😌, and now I'm commuting to extend this challenge to 100 days. Throughout these 50 days I learned a lot new things in programming. Let's see how next 50 days will go...",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Abhishek12703",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content: "Ho gya Shri Ganesh codecraft technologies k saath",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687416700/joyJob_rpsdsh.jpg",
    mediaAlt: "laptop",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "clevercoderjoy",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Checked my twitter circle. Most of them are from my neog family!❤️ Thank you so much everyone for helping me grow little by little, every day❤️🙌",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688243480/circlePranita_dw3ah8.jpg",
    mediaAlt: "neog class",
    likes: {
      likeCount: 16,
      likedBy: [],
      dislikedBy: [],
    },
    username: "pranita0709",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content: "Made this together in collaboration with @Abhishek12703",
    mediaURL:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687362499/socialbee/frontendmentor_mfrbtt.jpg",
    mediaAlt: "scrimba",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vivekbhatt07",
    createdAt: "2023-01-10T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Negotiating Salary is not unprofessional. Ask for what you deserve.",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 14,
      likedBy: [],
      dislikedBy: [],
    },
    username: "akshaymarch7",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        commentData: "This is Awesome 🔥",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  // {
  //   _id: uuid(),
  //   content: "Chills. Literal chills. Thank you for this.",
  //   mediaURL:
  //     "https://res.cloudinary.com/duqsyuriy/image/upload/v1688243960/cssBattleNiharika_nyj9gf.jpg",
  //   mediaAlt: "css Battle",
  //   likes: {
  //     likeCount: 5,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   username: "Niharika_twt",
  //   createdAt: "2023-06-03T01:06:00+05:30",
  //   updatedAt: formatDate(),
  //   comments: [
  //     {
  //       _id: "79Gksh9otl",
  //       firstName: "Abhishek",
  //       lastName: "Gupta",
  //       username: "Abhishek12703",
  //       commentData: "This is Awesome 🔥",
  //       profileAvatar:
  //         "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
  //       createdAt: formatDate(),
  //       updatedAt: formatDate(),
  //     },
  //   ],
  // },
];
