import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

import {
  PageWrapper,
  SectionWrapper,
  TextInput,
  TextInputLabel,
  ContainedActionBtn,
  OutlinedActionBtn,
  TextActionLink,
  PrimaryCarousel,
  PrimaryContainer,
  ActionContainer,
  PasswordToggler,
  ValidationContainer,
  ModalProvider,
  AvatarActionLink,
  LogInLottie,
} from "../../Components";

import SocioBeeLightImg from "../../Assets/Logo/SocioBeeLight.svg";
import SocioBeeDarkImg from "../../Assets/Logo/SocioBeeDark.svg";
import { useTheme, useAuth, usePost } from "../../Context";
import { ToastHandler } from "../../Utility";

const Login = () => {
  const { isDarkTheme } = useTheme();
  const { logInHandler } = useAuth();
  const { state } = usePost();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isLoginGuestOpen, setIsLoginGuestOpen] = useState(false);

  const openLoginGuestHandler = () => setIsLoginGuestOpen(true);
  const closeLoginGuestHandler = () => setIsLoginGuestOpen(false);

  const [logInData, setLogInData] = useState({
    logInName: "",
    logInPassword: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setLogInData((prevLogInData) => {
      return { ...prevLogInData, [name]: value };
    });
  };

  const isLoginCredentials = state.userList.find((currentUser) => {
    return (
      currentUser.username == logInData.logInName &&
      currentUser.password == logInData.logInPassword
    );
  });

  const handleLogInFormSubmit = (event) => {
    event.preventDefault();
    if (isLoginCredentials) {
      logInHandler(logInData.logInName, logInData.logInPassword);
      ToastHandler(
        "success",
        `Welcome! ${isLoginCredentials.firstName} ${isLoginCredentials.lastName}`
      );
    } else {
      ToastHandler("warn", "Incorrect Login Credentials");
    }
  };

  return (
    <PageWrapper className="login_page flex-row min-h-screen">
      <SectionWrapper className="login_media_section hidden lg:block lg:basis-6/12">
        <PrimaryCarousel />
      </SectionWrapper>
      <SectionWrapper className="login_form_section flex lg:basis-6/12">
        <div className="login_form_content max-w-xs m-auto flex flex-col gap-8 md:max-w-sm lg:w-[24rem]">
          <LogInLottie />
          <PrimaryContainer className="login_form_wrap w-full flex-col dark:bg-stone-900">
            <h1 className="login_form_head cursor-pointer" role="button">
              <img
                className="mx-auto w-40 object-cover"
                src={isDarkTheme ? SocioBeeDarkImg : SocioBeeLightImg}
                alt="logo"
              />
            </h1>
            <form
              className="login_form_body flex flex-col gap-4"
              onSubmit={handleLogInFormSubmit}
            >
              <TextInputLabel
                className="login_form_username"
                labelText="Username"
              >
                <TextInput
                  inputName="logInName"
                  inputType="text"
                  inputValue={logInData.logInName}
                  inputPlaceholder="vivekbhatt07"
                  inputHandle={(event) => {
                    handleOnChange(event);
                  }}
                />
              </TextInputLabel>

              <TextInputLabel
                className="login_form_password"
                labelText="Password"
              >
                <PasswordToggler
                  isTypePassword={isPasswordVisible}
                  handleVisibility={setIsPasswordVisible}
                >
                  <TextInput
                    inputName="logInPassword"
                    inputType={isPasswordVisible ? "password" : "text"}
                    inputValue={logInData.logInPassword}
                    inputPlaceholder="HelloWorld07@"
                    inputHandle={handleOnChange}
                  />
                </PasswordToggler>
              </TextInputLabel>

              <ActionContainer className="login_form_actions flex-col">
                <ContainedActionBtn
                  className="login_user_action"
                  containBtnType="submit"
                >
                  Log in
                </ContainedActionBtn>

                <ModalProvider
                  isOpen={isLoginGuestOpen}
                  closeModal={closeLoginGuestHandler}
                  modalTitle="Log In As"
                  modalBtnVariant={
                    <OutlinedActionBtn
                      className="login_guest_action w-full"
                      outlineBtnType="button"
                      handleClick={() => {
                        openLoginGuestHandler();
                      }}
                    >
                      Log in as guest
                    </OutlinedActionBtn>
                  }
                >
                  <div className="h-[400px] overflow-y-scroll">
                    {state.userList.map((current) => {
                      return (
                        <article
                          key={current._id}
                          onClick={() => {
                            ToastHandler(
                              "success",
                              `Welcome! ${current.firstName} ${current.lastName}`
                            );
                            logInHandler(current.username, current.password);
                          }}
                          className="flex cursor-pointer transition-all duration-200 rounded-md p-2 lg:flex-col lg:items-start lg:gap-2 xl:flex-row xl:justify-between xl:items-center hover:bg-stone-300 dark:hover:bg-stone-700"
                        >
                          <div className="flex gap-3 lg:justify-start lg:w-full xl:justify-start xl:gap-3">
                            <AvatarActionLink avatar={current.profileAvatar} />
                            <div className="flex flex-col">
                              <span className="font-medium">
                                {current.firstName} {current.lastName}
                              </span>
                              <span className="text-xs">
                                {current.username}
                              </span>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </ModalProvider>
              </ActionContainer>
            </form>
          </PrimaryContainer>
          <PrimaryContainer className="login w-full items-center gap-2 justify-center dark:bg-stone-900">
            <p>Don't have an account?</p>
            <TextActionLink reach="/signup">Sign Up</TextActionLink>
          </PrimaryContainer>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Login;
