import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "t7cZfWIp-q",
    firstName: "Vivek",
    lastName: "Bhatt",
    password: "HelloWorld07@",
    username: "vivekbhatt07",
    bio: "Aspiring Frontend Developer",
    website: "https://vivekbhatt.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350921/socialbee/vivek_e4z4pq.jpg",
    backgroundImage:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350988/socialbee/vivekBg_k4wkaq.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    join: "October, 2021",
    following: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350712/socialbee/pranita_mylipt.jpg",
      },
      // {
      //   _id: "1T6Be1QpLm",
      //   firstName: "Niharika",
      //   lastName: "Kesarwani",
      //   username: "Niharika_twt",
      //   profileAvatar:
      //     "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351197/socialbee/niharika_gmwh05.jpg",
      // },
      {
        _id: "o5gzWjEeX_",
        firstName: "Shraddha",
        lastName: "Vishwakarma",
        username: "Shraddha_228",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351410/socialbee/shraddha_hldbxa.jpg",
      },
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
      },
      {
        _id: "79Gksh9otl",
        firstName: "Vivek",
        lastName: "Kushal",
        username: "vivekkushal",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1688955653/vivekK_dtekd1.jpg",
      },
    ],
    followers: [
      {
        _id: "ab8zWjEeXd",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351662/socialbee/anushka_uxvyys.jpg",
      },
      {
        _id: "qq8zWjEeXd",
        firstName: "Vikas",
        lastName: "Lodh",
        username: "VikasLodh",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351819/socialbee/vikas_qa4vdp.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "79Gksh9otl",
    firstName: "Abhishek",
    lastName: "Gupta",
    password: "HelloWorld07@",
    username: "Abhishek12703",
    bio: "Be Yourself!",
    website: "https://supersole.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
    backgroundImage:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687352030/socialbee/abhishekBg_uhima1.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    join: "September, 2021",
    following: [
      {
        _id: "qq8zWjEeXd",
        firstName: "Vikas",
        lastName: "Lodh",
        username: "VikasLodh",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351819/socialbee/vikas_qa4vdp.jpg",
      },
      {
        _id: "t7cZfWIp-q",
        firstName: "Vivek",
        lastName: "Bhatt",
        username: "vivekbhatt07",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350921/socialbee/vivek_e4z4pq.jpg",
      },
    ],
    followers: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350712/socialbee/pranita_mylipt.jpg",
      },
      // {
      //   _id: "1T6Be1QpLm",
      //   firstName: "Niharika",
      //   lastName: "Kesarwani",
      //   username: "Niharika_twt",
      //   profileAvatar:
      //     "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351197/socialbee/niharika_gmwh05.jpg",
      // },
    ],
    bookmarks: [],
  },
  // {
  //   _id: "1T6Be1QpLm",
  //   firstName: "Niharika",
  //   lastName: "Kesarwani",
  //   password: "HelloWorld07@",
  //   username: "Niharika_twt",
  //   bio: "Web Developer | @neogcamp'23 | @girlscriptsoc'23 | #100DaysofCode | Ex-@oyorooms | CSE @MIT_Manipal'22",
  //   website: "https://niharikakesarwani.netlify.app/",
  //   profileAvatar:
  //     "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351197/socialbee/niharika_gmwh05.jpg",
  //   backgroundImage:
  //     "https://res.cloudinary.com/duqsyuriy/image/upload/v1687352338/socialbee/niharikaBg_awatx2.jpg",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  //   join: "March, 2020",
  //   following: [
  //     {
  //       _id: "LCrc9f0Zl0",
  //       firstName: "Pranita",
  //       lastName: "Fulsundar",
  //       username: "pranita0709",
  //       profileAvatar:
  //         "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350712/socialbee/pranita_mylipt.jpg",
  //     },
  //     {
  //       _id: "o5gzWjEeX_",
  //       firstName: "Shraddha",
  //       lastName: "Vishwakarma",
  //       username: "Shraddha_228",
  //       profileAvatar:
  //         "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351410/socialbee/shraddha_hldbxa.jpg",
  //     },
  //     {
  //       _id: "t7cZfWIp-q",
  //       firstName: "Vivek",
  //       lastName: "Bhatt",
  //       username: "vivekbhatt07",
  //       profileAvatar:
  //         "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350921/socialbee/vivek_e4z4pq.jpg",
  //     },
  //   ],
  //   followers: [
  //     {
  //       _id: "qq8zWjEeXd",
  //       firstName: "Vikas",
  //       lastName: "Lodh",
  //       username: "VikasLodh",
  //       profileAvatar:
  //         "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351819/socialbee/vikas_qa4vdp.jpg",
  //     },
  //     {
  //       _id: "79Gksh9otl",
  //       firstName: "Abhishek",
  //       lastName: "Gupta",
  //       username: "Abhishek12703",
  //       profileAvatar:
  //         "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
  //     },
  //   ],
  //   bookmarks: [],
  // },
  {
    _id: "LCrc9f0Zl0",
    firstName: "Pranita",
    lastName: "Fulsundar",
    password: "HelloWorld07@",
    username: "pranita0709",
    bio: "Web Developer 👩‍💻 || Budding Writer ✍️",
    website: "https://pranita-fulsundar.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350712/socialbee/pranita_mylipt.jpg",
    backgroundImage:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687352617/socialbee/pranitaBg_vlcmyz.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    join: "April, 2018",
    following: [
      {
        _id: "ab8zWjEeXd",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351662/socialbee/anushka_uxvyys.jpg",
      },
      // {
      //   _id: "1T6Be1QpLm",
      //   firstName: "Niharika",
      //   lastName: "Kesarwani",
      //   username: "Niharika_twt",
      //   profileAvatar:
      //     "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351197/socialbee/niharika_gmwh05.jpg",
      // },
    ],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Vivek",
        lastName: "Bhatt",
        username: "vivekbhatt07",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350921/socialbee/vivek_e4z4pq.jpg",
      },
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "o5gzWjEeX_",
    firstName: "Shraddha",
    lastName: "Vishwakarma",
    password: "HelloWorld07@",
    username: "Shraddha_228",
    bio: "Exploring one delicious bite at a time!",
    website: "https://shraddha-v.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351410/socialbee/shraddha_hldbxa.jpg",
    backgroundImage:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687352891/socialbee/shraddhaBg_rvpdau.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    join: "January, 2022",
    following: [
      // {
      //   _id: "1T6Be1QpLm",
      //   firstName: "Niharika",
      //   lastName: "Kesarwani",
      //   username: "Niharika_twt",
      //   profileAvatar:
      //     "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351197/socialbee/niharika_gmwh05.jpg",
      // },
      {
        _id: "LCrc9f0Zl0",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350712/socialbee/pranita_mylipt.jpg",
      },
    ],
    followers: [
      {
        _id: "ab8zWjEeXd",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351662/socialbee/anushka_uxvyys.jpg",
      },
      {
        _id: "t7cZfWIp-q",
        firstName: "Vivek",
        lastName: "Bhatt",
        username: "vivekbhatt07",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350921/socialbee/vivek_e4z4pq.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "M1NR81Bzlz",
    firstName: "Clever",
    lastName: "Coder",
    password: "HelloWorld07@",
    username: "clevercoderjoy",
    bio: "Storyteller Extraordinaire",
    website: "https://clevercoderjoy.bio.link/",
    profileAvatar:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687353279/socialbee/joy_e1ll7r.jpg",
    backgroundImage:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687353286/socialbee/joyBg_hcbbmi.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    join: "November, 2020",
    following: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350712/socialbee/pranita_mylipt.jpg",
      },
      // {
      //   _id: "1T6Be1QpLm",
      //   firstName: "Niharika",
      //   lastName: "Kesarwani",
      //   username: "Niharika_twt",
      //   profileAvatar:
      //     "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351197/socialbee/niharika_gmwh05.jpg",
      // },
    ],
    followers: [
      {
        _id: "ab8zWjEeXd",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351662/socialbee/anushka_uxvyys.jpg",
      },
      {
        _id: "qq8zWjEeXd",
        firstName: "Vikas",
        lastName: "Lodh",
        username: "VikasLodh",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351819/socialbee/vikas_qa4vdp.jpg",
      },
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "qq8zWjEeXd",
    firstName: "Vikas",
    lastName: "Lodh",
    password: "HelloWorld07@",
    username: "VikasLodh",
    bio: "A Creative Doodlebug",
    website: "https://buildspace.so/@wigzen",
    profileAvatar:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351819/socialbee/vikas_qa4vdp.jpg",
    backgroundImage:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687353520/socialbee/vikasBg_hmkw4v.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    join: "January, 2022",
    following: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Vivek",
        lastName: "Bhatt",
        username: "vivekbhatt07",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350921/socialbee/vivek_e4z4pq.jpg",
      },
      {
        _id: "ab8zWjEeXd",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351662/socialbee/anushka_uxvyys.jpg",
      },
    ],
    followers: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350712/socialbee/pranita_mylipt.jpg",
      },
      // {
      //   _id: "1T6Be1QpLm",
      //   firstName: "Niharika",
      //   lastName: "Kesarwani",
      //   username: "Niharika_twt",
      //   profileAvatar:
      //     "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351197/socialbee/niharika_gmwh05.jpg",
      // },
    ],
    bookmarks: [],
  },
  {
    _id: "ab8zWjEeXd",
    firstName: "Anushka",
    lastName: "Jaiswal",
    password: "HelloWorld07@",
    username: "TheIndianGirl56",
    bio: "Fashion aficionado",
    website: "https://ajaisportfolio.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351662/socialbee/anushka_uxvyys.jpg",
    backgroundImage:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687353720/socialbee/anushkaBg_lj4vgd.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    join: "July, 2022",
    following: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350712/socialbee/pranita_mylipt.jpg",
      },
      // {
      //   _id: "1T6Be1QpLm",
      //   firstName: "Niharika",
      //   lastName: "Kesarwani",
      //   username: "Niharika_twt",
      //   profileAvatar:
      //     "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351197/socialbee/niharika_gmwh05.jpg",
      // },
      {
        _id: "o5gzWjEeX_",
        firstName: "Shraddha",
        lastName: "Vishwakarma",
        username: "Shraddha_228",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351410/socialbee/shraddha_hldbxa.jpg",
      },
    ],
    followers: [
      {
        _id: "qq8zWjEeXd",
        firstName: "Vikas",
        lastName: "Lodh",
        username: "VikasLodh",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351819/socialbee/vikas_qa4vdp.jpg",
      },
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "M1NR81Bert",
    firstName: "Tanay",
    lastName: "Pratap",
    password: "HelloWorld07@",
    username: "tanaypratap",
    bio: "Haute Couture Maven",
    website: "https://tanaypratap.com/",
    profileAvatar:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687354111/socialbee/tanay_xazci1.jpg",
    backgroundImage:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687354111/socialbee/tanayBg_u5d0v9.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    join: "June, 2009",
    following: [],
    followers: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687350712/socialbee/pranita_mylipt.jpg",
      },
      // {
      //   _id: "1T6Be1QpLm",
      //   firstName: "Niharika",
      //   lastName: "Kesarwani",
      //   username: "Niharika_twt",
      //   profileAvatar:
      //     "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351197/socialbee/niharika_gmwh05.jpg",
      // },
      {
        _id: "o5gzWjEeX_",
        firstName: "Shraddha",
        lastName: "Vishwakarma",
        username: "Shraddha_228",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351410/socialbee/shraddha_hldbxa.jpg",
      },
      {
        _id: "79Gksh9otl",
        firstName: "Abhishek",
        lastName: "Gupta",
        username: "Abhishek12703",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351501/socialbee/abhishek_bpp5dq.jpg",
      },
      {
        _id: "ab8zWjEeXd",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351662/socialbee/anushka_uxvyys.jpg",
      },
      {
        _id: "qq8zWjEeXd",
        firstName: "Vikas",
        lastName: "Lodh",
        username: "VikasLodh",
        profileAvatar:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1687351819/socialbee/vikas_qa4vdp.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "1NR81Bzmuh",
    firstName: "Akshay",
    lastName: "Saini",
    password: "HelloWorld07@",
    username: "akshaymarch7",
    bio: "An Ambitious Trailblazer",
    website: "https://namastedev.com/namaste-react/",
    profileAvatar:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687354111/socialbee/akshay_zunvir.jpg",
    backgroundImage:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687354111/socialbee/akshayBg_lycit6.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    join: "March, 2011",
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "1NF81CZmua",
    firstName: "Sweta",
    lastName: "Agarwalla",
    password: "HelloWorld07@",
    username: "AgarwallaSweta",
    bio: "Physics graduate || Aspiring web developer || @neogCamp'23",
    website: "https://swetaagarwalla.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688955112/swetaBg_igqfng.jpg",
    backgroundImage:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688955185/swetaBack_ogrml8.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    join: "June, 2022",
    following: [],
    followers: [],
    bookmarks: [],
  },

  {
    _id: "1N283C4m5a",
    firstName: "Vivek",
    lastName: "Kushal",
    password: "HelloWorld07@",
    username: "vivekkushal",
    bio: "Web Development @neogcamp’23 | Scientific Analysis | Technology | Defence Enthusiast | Math-head",
    website: "https://sociobee.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688955653/vivekK_dtekd1.jpg",
    backgroundImage:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688955652/vivekKBg_ykmcva.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    join: "July, 2011",
    following: [],
    followers: [],
    bookmarks: [],
  },

  {
    _id: "1N202C3m4a",
    firstName: "Sudipta",
    lastName: "Chakraborty",
    password: "HelloWorld07@",
    username: "Sudipta41158180",
    bio: "Web Developer | @neogcamp'23",
    website: "https://sudiptachakraborty.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688956027/sudipta_njvena.jpg",
    backgroundImage:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688956027/sudiptaBg_miemug.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    join: "January, 2022",
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "ANB0CCDm4a",
    firstName: "Yuvraj",
    lastName: "Kumar",
    password: "HelloWorld07@",
    username: "yuvrajt1905",
    bio: "Javascript, React",
    website: "https://personal-portfolio-neogcamp.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688956331/yuvraj_eh7wiu.jpg",
    backgroundImage:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688956331/yuvrajBg_ncpzb0.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    join: "May, 2022",
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "pNB0lCDmca",
    firstName: "Jagrut",
    lastName: "Sharma",
    password: "HelloWorld07@",
    username: "Jagrut_Sharma",
    bio: "Javascript, React",
    website: "https://jagrut-sharma.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688956601/jagrut_yi6enk.jpg",
    backgroundImage:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688956601/jagrutBg_t5g90c.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    join: "April, 2021",
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "1Inf1n1mua",
    firstName: "Niyati",
    lastName: "Nehal",
    password: "HelloWorld07@",
    username: "niyatinehal58",
    bio: "Javascript, React",
    website: "https://sociobee.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688959684/niyati_dufyqg.jpg",
    backgroundImage:
      "https://res.cloudinary.com/duqsyuriy/image/upload/v1688959684/niyatiBg_kbz1fp.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    join: "October, 2015",
    following: [],
    followers: [],
    bookmarks: [],
  },
];
