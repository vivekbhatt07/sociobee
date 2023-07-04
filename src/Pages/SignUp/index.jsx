import React, { useState, useEffect } from "react";
import { Snackbar, Alert, Fade } from "@mui/material";
import "./SignUp.css";

import {
  PageWrapper,
  SectionWrapper,
  TextInput,
  TextInputLabel,
  ContainedActionBtn,
  OutlinedActionBtn,
  TextActionLink,
  PrimaryContainer,
  ActionContainer,
  PasswordToggler,
  ValidationContainer,
} from "../../Components";

import SocioBeeLightImg from "../../Assets/Logo/SocioBeeLight.svg";
import SocioBeeDarkImg from "../../Assets/Logo/SocioBeeDark.svg";
import { usePost, useTheme } from "../../Context";
import { useAuth } from "../../Context";
import {
  emailValidation,
  passwordValidation,
  userNameValidation,
  ToastHandler,
} from "../../Utility";

const SignUp = () => {
  const { isDarkTheme } = useTheme();
  const { signUpHandler } = useAuth();
  const { state } = usePost();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isConfirmVisible, setIsConfirmVisible] = useState(true);

  const [signUpData, setSignUpData] = useState({
    signUpFirstName: "",
    signUpLastName: "",
    signUpEmail: "",
    signUpUsername: "",
    signUpPassword: "",
    signUpConfirm: "",
  });

  const [signUpErrorData, setSignUpErrorData] = useState({
    signUpFirstName: "",
    signUpLastName: "",
    signUpEmail: "",
    signUpUsername: "",
    signUpPassword: "",
    signUpConfirm: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setSignUpData((prevSignUpData) => {
      return { ...prevSignUpData, [name]: value };
    });
  };

  const handleSignUpError = (warningType, warningText) => {
    setSignUpErrorData((prevSignUpError) => {
      return { ...prevSignUpError, [warningType]: warningText };
    });
  };

  useEffect(() => {
    let isUserNameExist = state.userList.findIndex((currentUser) => {
      return currentUser.username == signUpData.signUpUsername;
    });

    if (!emailValidation(signUpData.signUpEmail)) {
      if (signUpData.signUpEmail === "") {
        handleSignUpError("signUpEmail", "");
      } else {
        handleSignUpError("signUpEmail", "Email should be in correct format");
      }
    } else {
      handleSignUpError("signUpEmail", "");
    }

    if (!passwordValidation(signUpData.signUpPassword)) {
      if (signUpData.signUpPassword === "") {
        handleSignUpError("signUpPassword", "");
      } else {
        handleSignUpError(
          "signUpPassword",
          "Atleast 8 characters, 1 UP & 1 LC letter, 1 number & 1 special character"
        );
      }
    } else {
      handleSignUpError("signUpPassword", "");
    }

    if (
      !userNameValidation(signUpData.signUpUsername) ||
      isUserNameExist !== -1
    ) {
      if (signUpData.signUpUsername === "") {
        handleSignUpError("signUpUsername", "");
      } else {
        if (isUserNameExist !== -1) {
          handleSignUpError("signUpUsername", "Username already exist");
        } else {
          handleSignUpError(
            "signUpUsername",
            "Begin with a letter, atleast 8 characters. Other can be letter, number, or an (_)."
          );
        }
      }
    } else {
      handleSignUpError("signUpUsername", "");
    }

    if (signUpData.signUpPassword !== signUpData.signUpConfirm) {
      if (signUpData.signUpConfirm === "") {
        handleSignUpError("signUpConfirm", "");
      } else {
        handleSignUpError(
          "signUpConfirm",
          "Password and Confirm doesn't match"
        );
      }
    } else {
      handleSignUpError("signUpConfirm", "");
    }
  }, [signUpData]);

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    if (
      signUpErrorData.signUpEmail ||
      signUpErrorData.signUpUsername ||
      signUpErrorData.signUpPassword ||
      signUpData.signUpPassword !== signUpData.signUpConfirm
    ) {
      ToastHandler("warn", "Follow all conditions to sign up.");
    } else {
      ToastHandler(
        "success",
        `Welcome ${signUpData.signUpFirstName} ${signUpData.signUpLastName}`
      );
      signUpHandler(
        signUpData.signUpUsername,
        signUpData.signUpPassword,
        signUpData.signUpEmail,
        signUpData.signUpFirstName,
        signUpData.signUpLastName,
        "Edit your bio",
        "Edit your website",
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687520455/Avatar/AvatarFifteen_wmdlk9.svg",
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687521328/Avatar/signUpCover_ri9f1x.png",
        "June, 2023"
      );
    }
  };

  return (
    <PageWrapper className="signup_page min-h-screen overflow-hidden">
      <div className="hidden absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-stone-900 -translate-x-1/2 -translate-y-1/2 lg:flex justify-center items-center dark:bg-stone-800">
        <div className="w-[400px] h-[400px] bg-stone-700 rounded-full dark:bg-stone-600"></div>
      </div>

      <SectionWrapper className="signup_section flex flex-col pt-14 gap-4">
        <img
          className="mx-auto w-40 object-cover z-10"
          src={isDarkTheme ? SocioBeeDarkImg : SocioBeeLightImg}
          alt="logo"
        />
        <form
          className="signup_form mx-auto mb-4 md:w-[500px] z-10"
          onSubmit={handleSignUpSubmit}
        >
          <PrimaryContainer className="signup_form_container flex-col gap-4 dark:bg-stone-900 bg-stone-50">
            {/* FIRST NAME */}
            <TextInputLabel labelText="First Name" className="signUpFirstName">
              <TextInput
                inputName="signUpFirstName"
                inputType="text"
                inputValue={signUpData.signUpFirstName}
                inputPlaceholder="Vivek"
                inputHandle={handleOnChange}
              />
            </TextInputLabel>
            {/* LAST NAME */}
            <TextInputLabel labelText="Last Name" className="signUpLastName">
              <TextInput
                inputName="signUpLastName"
                inputType="text"
                inputValue={signUpData.signUpLastName}
                inputPlaceholder="Bhatt"
                inputHandle={handleOnChange}
              />
            </TextInputLabel>
            {/* EMAIL */}
            <TextInputLabel labelText="Email" className="signUpEmail">
              <TextInput
                inputName="signUpEmail"
                inputType="email"
                inputValue={signUpData.signUpEmail}
                inputPlaceholder="vivekbhatt618@gmail.com"
                inputHandle={handleOnChange}
                TextInputStyles={{
                  borderColor: signUpErrorData.signUpEmail
                    ? "#FF0800"
                    : signUpData.signUpEmail
                    ? "green"
                    : "#a8a29e",
                  backgroundColor: signUpErrorData.signUpEmail
                    ? "#FFCCCB"
                    : signUpData.signUpEmail
                    ? "#bcf5bc"
                    : "#fff",
                }}
              />

              {signUpErrorData.signUpEmail && (
                // <Fade in={Boolean(signUpErrorData.signUpEmail)}>
                <ValidationContainer>
                  {signUpErrorData.signUpEmail}
                </ValidationContainer>
                // </Fade>
              )}
            </TextInputLabel>
            {/* USERNAME */}
            <TextInputLabel labelText="Username" className="signUpUsername">
              <TextInput
                inputName="signUpUsername"
                inputType="text"
                inputValue={signUpData.signUpUsername}
                inputPlaceholder="vivekbhatt07"
                inputHandle={handleOnChange}
                TextInputStyles={{
                  borderColor: signUpErrorData.signUpUsername
                    ? "#FF0800"
                    : signUpData.signUpUsername
                    ? "green"
                    : "#a8a29e",
                  backgroundColor: signUpErrorData.signUpUsername
                    ? "#FFCCCB"
                    : signUpData.signUpUsername
                    ? "#bcf5bc"
                    : "#fff",
                }}
              />
              {signUpErrorData.signUpUsername && (
                <ValidationContainer>
                  {signUpErrorData.signUpUsername}
                </ValidationContainer>
              )}
            </TextInputLabel>
            {/* PASSWORD */}
            <TextInputLabel labelText="Password" className="signUpPassword">
              <PasswordToggler
                isTypePassword={isPasswordVisible}
                handleVisibility={setIsPasswordVisible}
              >
                <TextInput
                  inputName="signUpPassword"
                  inputType={isPasswordVisible ? "password" : "text"}
                  inputValue={signUpData.signUpPassword}
                  inputPlaceholder="HelloWorld07@"
                  inputHandle={handleOnChange}
                  TextInputStyles={{
                    borderColor: signUpErrorData.signUpPassword
                      ? "#FF0800"
                      : signUpData.signUpPassword
                      ? "green"
                      : "#a8a29e",
                    backgroundColor: signUpErrorData.signUpPassword
                      ? "#FFCCCB"
                      : signUpData.signUpPassword
                      ? "#bcf5bc"
                      : "#fff",
                  }}
                />
              </PasswordToggler>
              {signUpErrorData.signUpPassword && (
                <ValidationContainer>
                  {signUpErrorData.signUpPassword}
                </ValidationContainer>
              )}
            </TextInputLabel>
            <TextInputLabel
              labelText="Confirm Password"
              className="signUpConfirm"
            >
              <PasswordToggler
                isTypePassword={isConfirmVisible}
                handleVisibility={setIsConfirmVisible}
              >
                <TextInput
                  inputName="signUpConfirm"
                  inputType={isConfirmVisible ? "password" : "text"}
                  inputValue={signUpData.signUpConfirm}
                  inputPlaceholder="HelloWorld07@"
                  inputHandle={handleOnChange}
                  TextInputStyles={{
                    borderColor: signUpErrorData.signUpConfirm
                      ? "#FF0800"
                      : signUpData.signUpConfirm
                      ? "green"
                      : "#a8a29e",
                    backgroundColor: signUpErrorData.signUpConfirm
                      ? "#FFCCCB"
                      : signUpData.signUpConfirm
                      ? "#bcf5bc"
                      : "#fff",
                  }}
                />
              </PasswordToggler>
              {signUpErrorData.signUpConfirm && (
                <ValidationContainer>
                  {signUpErrorData.signUpConfirm}
                </ValidationContainer>
              )}
            </TextInputLabel>
            <ContainedActionBtn type="submit" className="signUpButton">
              Sign up
            </ContainedActionBtn>
            <ContainedActionBtn
              className="signUpTestButton"
              type="button"
              handleClick={() => {
                setSignUpData({
                  signUpFirstName: "Hello",
                  signUpLastName: "World",
                  signUpEmail: "helloWorld@gmail.com",
                  signUpUsername: "helloWorld07",
                  signUpPassword: "HelloWorld07@",
                  signUpConfirm: "HelloWorld07@",
                });
              }}
            >
              Test
            </ContainedActionBtn>
          </PrimaryContainer>
        </form>

        <PrimaryContainer className="login items-center gap-2 justify-center max-w-xs m-auto md:w-2/4 dark:bg-stone-900">
          <p>Have an account already?</p>
          <TextActionLink reach="/">Log In</TextActionLink>
        </PrimaryContainer>
      </SectionWrapper>

      <div className="hidden absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-stone-900 translate-x-1/2 translate-y-1/2 lg:flex justify-center items-center dark:bg-stone-800">
        <div className="w-[400px] h-[400px] bg-stone-700 rounded-full dark:bg-stone-600"></div>
      </div>
    </PageWrapper>
  );
};

export default SignUp;
