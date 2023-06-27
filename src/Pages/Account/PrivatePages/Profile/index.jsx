import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  AvatarActionLink,
  OutlinedActionBtn,
  ModalProvider,
  TextInput,
  TextInputLabel,
  Tab,
  Header,
  PostCard,
  SuggestionSidebar,
  ContainedActionBtn,
} from "../../../../Components";

import { useAuth, usePost, useUser } from "../../../../Context";

import {
  CalendarMonthOutlined,
  Link,
  CameraAlt,
  AccountCircle,
  CheckCircle,
} from "@mui/icons-material";

import { editUserService } from "../../../../Utility";

const Profile = () => {
  const { handleFollowUser, handleUnfollowUser } = useUser();
  const navigate = useNavigate();
  const { userId } = useParams();
  const { state, dispatch } = usePost();
  const { token, logOutHandler, activeUser } = useAuth();
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isLogOutOpen, setIsLogOutOpen] = useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const [activeAvatar, setActiveAvatar] = useState("");
  const [userEditData, setUserEditData] = useState({
    userEditAvatar: "",
    userEditBio: "",
    userEditWeb: "",
  });

  // EDIT PROFILE MODAL HANDLE:
  const handleEditProfileOpen = () => setIsEditProfileOpen(true);
  const handleEditProfileClose = () => setIsEditProfileOpen(false);

  // LOGOUT MODAL HANDLE:
  const handleLogOutOpen = () => setIsLogOutOpen(true);
  const handleLogOutClose = () => setIsLogOutOpen(false);

  // AVATAR MODAL HANDLE:
  const handleAvatarOpen = () => setIsAvatarOpen(true);
  const handleAvatarClose = () => setIsAvatarOpen(false);

  // USER EDIT DATA HANDLE:
  const handleUserEditData = (event) => {
    const { name, value, files, type } = event.target;
    setUserEditData((prevUserEditData) => {
      return {
        ...prevUserEditData,
        [name]: type == "file" ? URL.createObjectURL(files[0]) : value,
      };
    });
  };

  // SUBMIT USER EDIT DATA:
  const submitUserEditData = (event) => {
    event.preventDefault();
    handleEditUserService(token, activeUser);
    setUserEditData({
      userEditAvatar: "",
      userEditBio: "",
      userEditWeb: "",
    });
    handleEditProfileClose();
  };

  // GET CURRENT USER POST DATA:
  const activeUserPosts = state.postList.filter((currentPost) => {
    // return currentPost.username == activeUser.username;
    if (userId == activeUser.username) {
      return currentPost.username == activeUser.username;
    }
    if (userId) {
      return currentPost.username == userId;
    }

    return currentPost.username == activeUser.username;
  });

  // EDIT USER SERVICE:
  const handleEditUserService = async (token, activeUser) => {
    const userEditResponse = await editUserService(token, {
      ...activeUser,
      website: userEditData.userEditWeb,
      profileAvatar: userEditData.userEditAvatar,
      bio: userEditData.userEditBio,
    });
    if (userEditResponse.status == 201) {
      dispatch({ type: "EDIT_USER", payload: userEditResponse.data.user });
    }
  };

  // GET CURRENT USER OBJECT:
  const activeUserProfile = state.userList.find((currentUser) => {
    if (userId == activeUser.username) {
      return currentUser._id == activeUser._id;
    }
    if (userId) {
      return currentUser.username == userId;
    }

    return currentUser._id == activeUser._id;
  });

  // BUTTON:

  const currentUser = state.userList.find((current) => {
    return current._id == activeUser._id;
  });

  const followingList = currentUser?.following.map((current) => {
    return current.username;
  });
  const isFollowing = followingList?.includes(userId);

  console.log(followingList);

  return (
    <div className="tab min-h-screen">
      <Header className="tab_header" />
      <Tab />
      <div className="tab_outlet border-l bg-[#fff] dark:bg-stone-950">
        <div className="overflow-y-scroll h-[70dvh] md:h-[80dvh] lg:h-[90vh] scroll-smooth">
          <div className="w-full h-56 bg-stone-950 dark:bg-stone-900">
            <img
              src={activeUserProfile?.backgroundImage}
              alt="profile_cover"
              className="w-full h-full object-cover"
            />
          </div>
          <article className="userprofile_card flex flex-col mx-auto gap-6 -mt-14 px-6 border-b pb-6">
            <AvatarActionLink
              className="userprofile_avatar w-24 h-24"
              avatar={activeUserProfile?.profileAvatar}
            />
            <div className="userprofile_content flex flex-col gap-2">
              <div className="userprofile_head flex flex-col gap-4 sm:flex-row sm:gap-12 sm:justify-between sm:items-start">
                <div className="userprofile_title flex flex-col gap-1">
                  <p className="userprofile_name flex gap-1 font-semibold text-2xl">
                    <span>{activeUserProfile?.firstName}</span>
                    <span>{activeUserProfile?.lastName}</span>
                  </p>
                  <span className="userprofile_username text-sm rounded-xl text-stone-500">
                    {activeUserProfile?.username}
                  </span>
                </div>
                {userId ? (
                  <div className="userprofile_actions">
                    {isFollowing ? (
                      <ContainedActionBtn
                        containBtnType="button"
                        handleClick={() => {
                          handleUnfollowUser(activeUserProfile?._id, token);
                        }}
                      >
                        Unfollow
                      </ContainedActionBtn>
                    ) : (
                      <ContainedActionBtn
                        containBtnType="button"
                        handleClick={() => {
                          handleFollowUser(activeUserProfile?._id, token);
                        }}
                      >
                        Follow
                      </ContainedActionBtn>
                    )}
                  </div>
                ) : (
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
                            src={activeUserProfile?.backgroundImage}
                            alt="profile_cover"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <form
                          onSubmit={submitUserEditData}
                          className="p-4 flex flex-col gap-3"
                        >
                          <div className="mb-2 flex gap-4">
                            <AvatarActionLink
                              isLink={false}
                              avatar={activeUserProfile?.profileAvatar}
                              className="w-16 h-16 -mt-12"
                            >
                              <span className="absolute top-0 right-0 bottom-0 left-0 bg-stone-950 opacity-70">
                                <label className="flex w-full h-full cursor-pointer">
                                  <input
                                    type="file"
                                    accept="image/*"
                                    id="profile-image-picker"
                                    className="hidden"
                                    name="userEditAvatar"
                                    onChange={handleUserEditData}
                                  />
                                  <CameraAlt className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-stone-50" />
                                </label>
                              </span>
                            </AvatarActionLink>
                            <ModalProvider
                              isOpen={isAvatarOpen}
                              closeModal={handleAvatarClose}
                              modalTitle="Select Avatar"
                              modalBtnVariant={
                                <AvatarActionLink
                                  isLink={false}
                                  avatar="https://res.cloudinary.com/duqsyuriy/image/upload/v1687449306/Avatar/AvatarFive_ynsdwl.svg"
                                  className="w-16 h-16 -mt-12"
                                  onClick={handleAvatarOpen}
                                >
                                  <span className="absolute top-0 right-0 bottom-0 left-0 bg-stone-950 opacity-70">
                                    <AccountCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-stone-50" />
                                  </span>
                                </AvatarActionLink>
                              }
                            >
                              <div className="p-4 flex flex-col gap-6">
                                <div className="grid grid-cols-4 gap-y-4">
                                  {[
                                    {
                                      id: "0",
                                      avatarLogo:
                                        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449309/Avatar/AvatarTwelve_lbkpxs.svg",
                                      avatarAlt: "avatarOne",
                                    },

                                    {
                                      id: "1",
                                      avatarLogo:
                                        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449309/Avatar/AvatarEleven_frqxrs.svg",
                                      avatarAlt: "avatarTwo",
                                    },
                                    {
                                      id: "2",
                                      avatarLogo:
                                        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449309/Avatar/AvatarThree_mg1cgs.svg",
                                      avatarAlt: "avatarThree",
                                    },
                                    {
                                      id: "3",
                                      avatarLogo:
                                        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449308/Avatar/AvatarFourteen_oiwipf.svg",
                                      avatarAlt: "avatarFour",
                                    },
                                    {
                                      id: "4",
                                      avatarLogo:
                                        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449308/Avatar/AvatarThirteen_gjgk9b.svg",
                                      avatarAlt: "avatarFive",
                                    },
                                    {
                                      id: "5",
                                      avatarLogo:
                                        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449307/Avatar/AvatarOne_gma0e0.svg",
                                      avatarAlt: "avatarSix",
                                    },
                                    {
                                      id: "6",
                                      avatarLogo:
                                        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449307/Avatar/AvatarFour_e8avmg.svg",
                                      avatarAlt: "avatarSix",
                                    },
                                    {
                                      id: "7",
                                      avatarLogo:
                                        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449307/Avatar/AvatarTwo_svgrsc.svg",
                                      avatarAlt: "avatarSix",
                                    },
                                  ].map((currentAvatar) => {
                                    return (
                                      <label
                                        key={currentAvatar.id}
                                        className="relative w-16 h-16 flex justify-center items-center justify-self-center"
                                      >
                                        <input
                                          className="hidden"
                                          type="radio"
                                          name="userEditAvatar"
                                          onChange={(event) =>
                                            setActiveAvatar(event.target.value)
                                          }
                                          value={currentAvatar.avatarLogo}
                                          checked={
                                            activeAvatar ==
                                            currentAvatar.avatarLogo
                                          }
                                        />
                                        <div className="w-16 h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                          <img
                                            src={currentAvatar.avatarLogo}
                                            alt=""
                                          />
                                        </div>
                                        {activeAvatar ==
                                          currentAvatar.avatarLogo && (
                                          <div className="w-16 h-16 bg-stone-950 opacity-50 rounded-full"></div>
                                        )}

                                        {activeAvatar ==
                                          currentAvatar.avatarLogo && (
                                          <div
                                            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-full flex justify-center items-center"
                                            style={{ background: "#000" }}
                                          >
                                            <CheckCircle
                                              className=""
                                              style={{ color: "green" }}
                                            />
                                          </div>
                                        )}
                                      </label>
                                    );
                                  })}
                                </div>
                                <div className="flex justify-center gap-2">
                                  <ContainedActionBtn
                                    isDisabled={activeAvatar}
                                    btnStyle={{
                                      cursor: activeAvatar
                                        ? "pointer"
                                        : "not-allowed",
                                      opacity: activeAvatar ? "1" : "0.5",
                                    }}
                                    handleClick={() => {
                                      setUserEditData((prevUserEditData) => {
                                        return {
                                          ...prevUserEditData,
                                          userEditAvatar: activeAvatar,
                                        };
                                      });
                                      setActiveAvatar("");
                                      handleAvatarClose();
                                    }}
                                  >
                                    Select
                                  </ContainedActionBtn>
                                  <OutlinedActionBtn
                                    handleClick={() => {
                                      setActiveAvatar("");
                                      handleAvatarClose();
                                    }}
                                  >
                                    Discard
                                  </OutlinedActionBtn>
                                </div>
                              </div>
                            </ModalProvider>
                          </div>
                          <div className="flex flex-col gap-3">
                            <TextInputLabel labelText="Bio">
                              <TextInput
                                inputName="userEditBio"
                                inputType="text"
                                inputValue={userEditData.userEditBio}
                                inputPlaceholder="Front-end master"
                                inputHandle={handleUserEditData}
                              />
                            </TextInputLabel>
                            <TextInputLabel labelText="Website">
                              <TextInput
                                inputName="userEditWeb"
                                inputType="text"
                                inputValue={userEditData.userEditWeb}
                                inputPlaceholder="www.vivekbhatt.netlify.app"
                                inputHandle={handleUserEditData}
                              />
                            </TextInputLabel>
                            <div className="flex justify-start gap-2 mt-4">
                              <ContainedActionBtn containBtnType="submit">
                                Save
                              </ContainedActionBtn>
                              <OutlinedActionBtn
                                outlineBtnType="button"
                                handleClick={handleEditProfileClose}
                              >
                                Cancel
                              </OutlinedActionBtn>
                            </div>
                          </div>
                        </form>
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
                          <ContainedActionBtn
                            handleClick={() => logOutHandler()}
                          >
                            Log out
                          </ContainedActionBtn>
                          <OutlinedActionBtn handleClick={handleLogOutClose}>
                            Cancel
                          </OutlinedActionBtn>
                        </div>
                      </div>
                    </ModalProvider>
                  </div>
                )}
              </div>
              <div className="userprofile_quote">{activeUserProfile?.bio}</div>
              <div className="userprofile_meta flex flex-col gap-2">
                <div className="flex text-stone-500 gap-1 hover:underline transition-all duration-500 hover:text-stone-600">
                  <Link />
                  <a href={activeUserProfile?.website} target="_blank">
                    {activeUserProfile?.website}
                  </a>
                </div>
                <p className="flex items-center gap-2 text-sm text-stone-500">
                  <CalendarMonthOutlined />
                  <div className="flex gap-1">
                    <span>Joined</span>
                    <span>{activeUserProfile?.join}</span>
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
                    {activeUserProfile?.followers.length}
                  </span>
                  <span className="font-light">Followers</span>
                </p>
                <p className="flex gap-1 text-sm">
                  <span className="text-stone-950 font-semibold dark:text-stone-50">
                    {activeUserProfile?.following.length}
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
        <div className="p-3">
          <SuggestionSidebar />
        </div>
      </div>
    </div>
  );
};

export default Profile;
