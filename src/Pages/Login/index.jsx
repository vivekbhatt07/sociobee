import React, { useState } from "react";

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
} from "../../Components";

import SocioBeeImg from "../../Assets/Logo/SocioBeeLight.svg";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

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

  const handleLogInFormSubmit = (event) => {
    return event.preventDefault();
  };

  return (
    <PageWrapper className="login_page flex-row">
      <SectionWrapper className="login_media_section hidden lg:block lg:basis-6/12">
        <PrimaryCarousel />
      </SectionWrapper>
      <SectionWrapper className="login_form_section flex lg:basis-6/12">
        <div className="login_form_content max-w-xs m-auto flex flex-col gap-8 md:max-w-sm lg:max-w-lg xl:max-w-xl">
          <PrimaryContainer className="login_form_wrap w-full flex-col">
            <h1 className="login_form_head cursor-pointer" role="button">
              <img
                className="mx-auto w-40 object-cover"
                src={SocioBeeImg}
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
                  inputPlaceholder="Enter username"
                  inputHandle={handleOnChange}
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
                    inputPlaceholder="Enter password"
                    inputHandle={handleOnChange}
                  />
                </PasswordToggler>
              </TextInputLabel>
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