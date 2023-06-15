import React from "react";
import {
  AvatarActionLink,
  IconActionBtn,
  OutlinedActionBtn,
} from "../../../../Components";
import { CalendarMonthOutlined, ExitToApp, Link } from "@mui/icons-material";

const Profile = () => {
  return (
    <div className="overflow-y-scroll h-[70dvh] md:h-[80dvh] lg:h-[90vh] scroll-smooth">
      <div className="w-full h-28 bg-stone-950 dark:bg-stone-900"></div>
      <article className="userprofile_card flex flex-col mx-auto gap-6 -mt-14 px-6">
        <AvatarActionLink
          className="userprofile_avatar w-24 h-24"
          avatar="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
        />
        <div className="userprofile_content flex flex-col gap-2">
          <div className="userprofile_head flex flex-col gap-4 sm:flex-row sm:gap-12 sm:justify-between sm:items-start">
            <div className="userprofile_title flex flex-col gap-1">
              <p className="userprofile_name flex gap-1 font-semibold text-2xl">
                <span>Vivek</span>
                <span>Bhatt</span>
              </p>
              <span className="userprofile_username text-sm rounded-xl text-stone-500">
                @vivekbhatt07
              </span>
            </div>
            <div className="userprofile_actions flex items-center gap-4">
              <OutlinedActionBtn type="button" className="px-2 py-1">
                Edit Profile
              </OutlinedActionBtn>
              <OutlinedActionBtn type="button" className="px-2 py-1">
                Log Out
              </OutlinedActionBtn>
            </div>
          </div>
          <div className="userprofile_quote">
            This is my account, tweets will appear here
          </div>
          <div className="userprofile_meta flex flex-col gap-2">
            <div className="flex text-stone-500 gap-1 hover:underline transition-all duration-500 hover:text-stone-600">
              <Link />
              <a href="https://vivekbhatt.netlify.app/" target="_blank">
                vivekbhatt.netlify.app
              </a>
            </div>
            <p className="flex items-center gap-2 text-sm text-stone-500">
              <CalendarMonthOutlined />
              <div className="flex gap-1">
                <span>Joined</span>
                <span>Jan 02 2022</span>
              </div>
            </p>
          </div>
          <div className="userprofile_footer flex gap-4 items-center">
            <p className="flex gap-1 text-sm">
              <span className="text-stone-950 font-semibold dark:text-stone-50">
                5
              </span>
              <span className="font-light">Posts</span>
            </p>
            <p className="flex gap-1 text-sm">
              <span className="text-stone-950 font-semibold dark:text-stone-50">
                5
              </span>
              <span className="font-light">Followers</span>
            </p>
            <p className="flex gap-1 text-sm">
              <span className="text-stone-950 font-semibold dark:text-stone-50">
                5
              </span>
              <span className="font-light">Following</span>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Profile;
