import React, { useState } from "react";
import {
  AvatarActionLink,
  IconActionBtn,
  OutlinedActionBtn,
  ModalProvider,
  TextInput,
  TextInputLabel,
  ContainedActionBtn,
  SuggestionCard,
  Tab,
  Header,
  PostCard,
} from "../../../../Components";

import { useAuth, usePost } from "../../../../Context";

import {
  Whatshot,
  SwapVert,
  CalendarMonthOutlined,
  ExitToApp,
  Link,
  CameraAlt,
} from "@mui/icons-material";

const Profile = () => {
  const { state } = usePost();
  const { logOutHandler, activeUser } = useAuth();
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isLogOutOpen, setIsLogOutOpen] = useState(false);
  const handleEditProfileOpen = () => setIsEditProfileOpen(true);
  const handleEditProfileClose = () => setIsEditProfileOpen(false);
  const handleLogOutOpen = () => setIsLogOutOpen(true);
  const handleLogOutClose = () => setIsLogOutOpen(false);

  const activeUserPosts = state.postList.filter((currentPost) => {
    return currentPost.username == activeUser.username;
  });

  return (
    <div className="tab min-h-screen">
      <Header className="tab_header" />
      <Tab />
      <div className="tab_outlet border-l bg-[#fff] dark:bg-stone-950">
        <div className="overflow-y-scroll h-[70dvh] md:h-[80dvh] lg:h-[90vh] scroll-smooth">
          <div className="w-full h-56 bg-stone-950 dark:bg-stone-900">
            <img
              src={activeUser?.backgroundImage}
              alt="profile_cover"
              className="w-full h-full object-cover"
            />
          </div>
          <article className="userprofile_card flex flex-col mx-auto gap-6 -mt-14 px-6 border-b pb-6">
            <AvatarActionLink
              className="userprofile_avatar w-24 h-24"
              avatar={activeUser.profileAvatar}
            />
            <div className="userprofile_content flex flex-col gap-2">
              <div className="userprofile_head flex flex-col gap-4 sm:flex-row sm:gap-12 sm:justify-between sm:items-start">
                <div className="userprofile_title flex flex-col gap-1">
                  <p className="userprofile_name flex gap-1 font-semibold text-2xl">
                    <span>{activeUser.firstName}</span>
                    <span>{activeUser.lastName}</span>
                  </p>
                  <span className="userprofile_username text-sm rounded-xl text-stone-500">
                    {activeUser?.username}
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
                      <div className="edit_banner h-[100px] bg-stone-500">
                        <img
                          src={activeUser?.backgroundImage}
                          alt="profile_cover"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 flex flex-col gap-3">
                        <div>
                          <AvatarActionLink
                            isLink={false}
                            avatar="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
                            className="w-16 h-16 -mt-12"
                          >
                            <span className="absolute top-0 right-0 bottom-0 left-0 bg-stone-950 opacity-70">
                              <label className="flex w-full h-full">
                                <input
                                  type="file"
                                  accept="image/*"
                                  id="profile-image-picker"
                                  className="justify-center items-center w-5 h-5 z-50"
                                />
                                <CameraAlt className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-stone-50 cursor-pointer" />
                              </label>
                            </span>
                          </AvatarActionLink>
                        </div>
                        <form className="flex flex-col gap-3">
                          <TextInputLabel labelText="Bio">
                            <TextInput />
                          </TextInputLabel>
                          <TextInputLabel labelText="Website">
                            <TextInput />
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
                    <div className="p-4 flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <div className="text-center text-2xl font-semibold">
                          Log out of SocialBee?
                        </div>
                        <p className="text-center">
                          You can always log back in at any time.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <ContainedActionBtn handleClick={() => logOutHandler()}>
                          Log out
                        </ContainedActionBtn>
                        <OutlinedActionBtn handleClick={handleLogOutClose}>
                          Cancel
                        </OutlinedActionBtn>
                      </div>
                    </div>
                  </ModalProvider>
                </div>
              </div>
              <div className="userprofile_quote">{activeUser.bio}</div>
              <div className="userprofile_meta flex flex-col gap-2">
                <div className="flex text-stone-500 gap-1 hover:underline transition-all duration-500 hover:text-stone-600">
                  <Link />
                  <a href={activeUser.website} target="_blank">
                    {activeUser.website}
                  </a>
                </div>
                <p className="flex items-center gap-2 text-sm text-stone-500">
                  <CalendarMonthOutlined />
                  <div className="flex gap-1">
                    <span>Joined</span>
                    <span>{activeUser.join}</span>
                  </div>
                </p>
              </div>
              <div className="userprofile_footer flex gap-4 items-center">
                <p className="flex gap-1 text-sm">
                  <span className="text-stone-950 font-semibold dark:text-stone-50">
                    {activeUserPosts.length}
                  </span>
                  <span className="font-light">Posts</span>
                </p>
                <p className="flex gap-1 text-sm">
                  <span className="text-stone-950 font-semibold dark:text-stone-50">
                    {activeUser.followers.length}
                  </span>
                  <span className="font-light">Followers</span>
                </p>
                <p className="flex gap-1 text-sm">
                  <span className="text-stone-950 font-semibold dark:text-stone-50">
                    {activeUser.following.length}
                  </span>
                  <span className="font-light">Following</span>
                </p>
              </div>
            </div>
          </article>
          <section className="my-6 flex flex-col">
            {activeUserPosts.map((currentPost) => {
              return <PostCard {...currentPost} key={currentPost._id} />;
            })}
          </section>
        </div>
      </div>
      <div className="tab_sidebar bg-[#fff] dark:bg-stone-950 lg:overflow-y-scroll scroll-smooth">
        <div className="flex flex-col gap-2 p-3">
          <div className="flex w-full gap-2">
            <OutlinedActionBtn
              outlineBtnType="button"
              className="basis-3/6 flex items-center justify-center"
            >
              <Whatshot /> <span>Trending</span>
            </OutlinedActionBtn>
            <OutlinedActionBtn
              outlineBtnType="button"
              className="basis-3/6 flex items-center justify-center"
            >
              <SwapVert />
              <span>Latest</span>
            </OutlinedActionBtn>
          </div>
          <div className="hidden flex-col gap-2 lg:block">
            <span className="text-lg">Suggestions for you</span>
            <div className="flex flex-col gap-2">
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
