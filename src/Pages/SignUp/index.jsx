import React, { useState, useEffect } from "react";
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
import { useTheme } from "../../Context";
import { useAuth } from "../../Context";
import {
  emailValidation,
  passwordValidation,
  userNameValidation,
} from "../../Utility";

const SignUp = () => {
  const { isDarkTheme } = useTheme();
  const { signUpHandler } = useAuth();
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
          "Atleast 8 characters, 1 uppercase & 1 lowercase letter, 1 number & 1 special character"
        );
      }
    } else {
      handleSignUpError("signUpPassword", "");
    }

    if (!userNameValidation(signUpData.signUpUsername)) {
      if (signUpData.signUpUsername === "") {
        handleSignUpError("signUpUsername", "");
      } else {
        handleSignUpError(
          "signUpUsername",
          "Username should be in correct format"
        );
      }
    } else {
      handleSignUpError("signUpUsername", "");
    }
  }, [signUpData]);

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
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
              />
            </TextInputLabel>
            {signUpErrorData.signUpEmail && (
              <ValidationContainer className="signup_email_validation">
                {signUpErrorData.signUpEmail}
              </ValidationContainer>
            )}
            {/* USERNAME */}
            <TextInputLabel labelText="Username" className="signUpUsername">
              <TextInput
                inputName="signUpUsername"
                inputType="text"
                inputValue={signUpData.signUpUsername}
                inputPlaceholder="vivekbhatt07"
                inputHandle={handleOnChange}
              />
            </TextInputLabel>
            {signUpErrorData.signUpUsername && (
              <ValidationContainer className="signup_email_validation">
                {signUpErrorData.signUpUsername}
              </ValidationContainer>
            )}
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
                />
              </PasswordToggler>
            </TextInputLabel>
            {signUpErrorData.signUpPassword && (
              <ValidationContainer className="signup_password_validation">
                {signUpErrorData.signUpPassword}
              </ValidationContainer>
            )}
            {/* CONFIRM PASSWORD */}
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
                />
              </PasswordToggler>
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
