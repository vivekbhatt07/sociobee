import React, { useState } from "react";
import {
  AvatarActionLink,
  IconActionBtn,
  OutlinedActionBtn,
  ModalProvider,
  TextInput,
  TextInputLabel,
} from "../../../../Components";
import { CalendarMonthOutlined, ExitToApp, Link } from "@mui/icons-material";

const Profile = () => {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isLogOutOpen, setIsLogOutOpen] = useState(false);
  const handleEditProfileOpen = () => setIsEditProfileOpen(true);
  const handleEditProfileClose = () => setIsEditProfileOpen(false);
  const handleLogOutOpen = () => setIsLogOutOpen(true);
  const handleLogOutClose = () => setIsLogOutOpen(false);
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
              <ModalProvider
                isOpen={isEditProfileOpen}
                closeModal={handleEditProfileClose}
                modalTitle="Edit Profile"
                modalBtnVariant={
                  <OutlinedActionBtn
                    type="button"
                    className="px-2 py-1"
                    handleClick={handleEditProfileOpen}
                  >
                    Edit Profile
                  </OutlinedActionBtn>
                }
              >
                <div className="">
                  <div className="edit_banner h-[60px] bg-stone-500"></div>
                  <div className="p-4 flex flex-col gap-3">
                    <div>
                      <AvatarActionLink
                        avatar="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
                        className="w-16 h-16 -mt-12"
                      >
                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-stone-950 opacity-70"></div>
                        <input
                          type="file"
                          accept="image/png, image/jpeg"
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5"
                        />
                      </AvatarActionLink>
                    </div>
                    <form className="flex flex-col gap-3">
                      <TextInputLabel labelText="Name" className="">
                        <TextInput></TextInput>
                      </TextInputLabel>
                      <TextInputLabel labelText="Username" className="">
                        <TextInput></TextInput>
                      </TextInputLabel>
                      <TextInputLabel labelText="Bio" className="">
                        <TextInput></TextInput>
                      </TextInputLabel>
                      <TextInputLabel labelText="Website" className="">
                        <TextInput></TextInput>
                      </TextInputLabel>
                      <div className="flex justify-center">
                        <OutlinedActionBtn outlineBtnType="submit">
                          Save
                        </OutlinedActionBtn>
                      </div>
                    </form>
                  </div>
                </div>
              </ModalProvider>

              <ModalProvider
                isOpen={isLogOutOpen}
                closeModal={handleLogOutClose}
                modalTitle="Log Out"
                modalBtnVariant={
                  <OutlinedActionBtn
                    type="button"
                    className="px-2 py-1"
                    handleClick={handleLogOutOpen}
                  >
                    Log Out
                  </OutlinedActionBtn>
                }
              >
                Do you want to log out?
              </ModalProvider>
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
