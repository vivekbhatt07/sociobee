import React, { useState, useEffect } from "react";

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
} from "../../Components";

import { passwordValidation, userNameValidation } from "../../Utility";

import SocioBeeLightImg from "../../Assets/Logo/SocioBeeLight.svg";
import SocioBeeDarkImg from "../../Assets/Logo/SocioBeeDark.svg";
import { useTheme } from "../../Context";
import { useAuth } from "../../Context";

const Login = () => {
  const { isDarkTheme } = useTheme();
  const { logInHandler } = useAuth();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const [logInData, setLogInData] = useState({
    logInName: "",
    logInPassword: "",
  });

  const [logInError, setLogInError] = useState({
    logInName: "",
    logInPassword: "",
  });

  const handleLogInError = (warningType, warningText) => {
    setLogInError((prevLogInError) => {
      return { ...prevLogInError, [warningType]: warningText };
    });
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setLogInData((prevLogInData) => {
      return { ...prevLogInData, [name]: value };
    });
  };

  const handleLogInFormSubmit = (event) => {
    event.preventDefault();
    logInHandler(logInData.logInName, logInData.logInPassword);
    console.log("logIn");
  };

  useEffect(() => {
    if (!userNameValidation(logInData.logInName)) {
      if (logInData.logInName === "") {
        handleLogInError("logInName", "");
      } else {
        handleLogInError("logInName", "UserName should be in correct format");
      }
    } else {
      handleLogInError("logInName", "");
    }

    if (!passwordValidation(logInData.logInPassword)) {
      if (logInData.logInPassword === "") {
        handleLogInError("logInPassword", "");
      } else {
        handleLogInError(
          "logInPassword",
          "Atleast 8 characters, 1 uppercase & 1 lowercase letter, 1 number & 1 special character"
        );
      }
    } else {
      handleLogInError("logInPassword", "");
    }
  }, [logInData]);

  return (
    <PageWrapper className="login_page flex-row">
      <SectionWrapper className="login_media_section hidden lg:block lg:basis-6/12">
        <PrimaryCarousel />
      </SectionWrapper>
      <SectionWrapper className="login_form_section flex lg:basis-6/12">
        <div className="login_form_content max-w-xs m-auto flex flex-col gap-8 md:max-w-sm lg:w-[24rem]">
          <PrimaryContainer className="login_form_wrap w-full flex-col">
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
              {logInError.logInName && (
                <ValidationContainer className="login_email_validation">
                  {logInError.logInName}
                </ValidationContainer>
              )}
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
                    inputPlaceholder="Enter password"
                    inputHandle={handleOnChange}
                  />
                </PasswordToggler>
              </TextInputLabel>
              {logInError.logInPassword && (
                <ValidationContainer className="login_password_validation">
                  {logInError.logInPassword}
                </ValidationContainer>
              )}
              <ActionContainer className="login_form_actions flex-col ">
                <ContainedActionBtn
                  className="login_user_action"
                  containBtnType="submit"
                >
                  Log in
                </ContainedActionBtn>
                <OutlinedActionBtn
                  className="login_guest_action"
                  outlineBtnType="submit"
                >
                  Log in as guest
                </OutlinedActionBtn>
              </ActionContainer>
            </form>
          </PrimaryContainer>
          <PrimaryContainer className="login w-full items-center gap-2 justify-center">
            <p>Don't have an account?</p>
            <TextActionLink reach="/signup">Sign Up</TextActionLink>
          </PrimaryContainer>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Login;
