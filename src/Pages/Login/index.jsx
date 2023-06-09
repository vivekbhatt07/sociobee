import React, { useState } from "react";

import "./Login.css";

import {
  PageWrapper,
  SectionWrapper,
  TextInput,
  TextInputLabel,
  ContainedActionBtn,
  OutlinedActionBtn,
  TextActionLink,
} from "../../Components";

import SocioBeeImg from "../../Assets/Logo/SocioBeeLight.svg";

const Login = () => {
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
      <SectionWrapper className="login_media_section bg-stone-400 hidden lg:block lg:basis-6/12"></SectionWrapper>
      <SectionWrapper className="login_form_section bg-stone-500 lg:basis-6/12 flex flex-col gap-8">
        <div className="login_form_wrap border px-4 py-4 rounded max-w-xs w-full mx-auto flex flex-col">
          <h1 className="login_form_head cursor-pointer" role="button">
            <img className="mx-auto" src={SocioBeeImg} alt="logo" />
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
              <TextInput
                inputName="logInPassword"
                inputType="text"
                inputValue={logInData.logInPassword}
                inputPlaceholder="Enter password"
                inputHandle={handleOnChange}
              />
            </TextInputLabel>
            <div className="login_form_actions flex flex-col gap-2">
              <ContainedActionBtn className="login_user_action">
                Log in
              </ContainedActionBtn>
              <OutlinedActionBtn className="login_guest_action">
                Log in as guest
              </OutlinedActionBtn>
            </div>
          </form>
        </div>
        <div className="login border px-4 py-4 rounded max-w-xs w-full mx-auto flex gap-2 justify-center">
          <p>Don't have an account?</p>
          <TextActionLink>Sign Up</TextActionLink>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Login;
