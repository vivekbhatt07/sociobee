import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
} from "../../Components";

import SocialBeeImg from "../../Assets/Logo/SocioBeeLight.svg";

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isConfirmVisible, setIsConfirmVisible] = useState(true);

  const [signUpData, setSignUpData] = useState({
    signUpFirstName: "",
    signUpLastName: "",
    signUpEmail: "",
    signUpPassword: "",
    signUpConfirm: "",
  });

  const navigate = useNavigate();
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setSignUpData((prevSignUpData) => {
      return { ...prevSignUpData, [name]: value };
    });
  };

  return (
    <PageWrapper className="signup_page">
      <SectionWrapper className="signup_section flex flex-col">
        <img
          src={SocialBeeImg}
          alt="logo"
          className="mx-auto w-40 object-cover"
        />
        <h3 className="signup_head mx-auto mb-4 font-bold bg-stone-700 text-stone-50 py-2 px-4">
          SIGN UP FORM
        </h3>
        <form className="signup_form max-w-xs mx-auto mb-4 md:w-2/4">
          <PrimaryContainer className="signup_form_container flex-col gap-4">
            {/* FIRST NAME */}
            <TextInputLabel labelText="First Name">
              <TextInput
                inputName="signUpFirstName"
                inputType="text"
                inputValue={signUpData.signUpFirstName}
                inputPlaceholder="First Name"
                inputHandle={handleOnChange}
              />
            </TextInputLabel>
            {/* LAST NAME */}
            <TextInputLabel labelText="Last Name">
              <TextInput
                inputName="signUpLastName"
                inputType="text"
                inputValue={signUpData.signUpLastName}
                inputPlaceholder="Last Name"
                inputHandle={handleOnChange}
              />
            </TextInputLabel>
            {/* EMAIL */}
            <TextInputLabel labelText="Email">
              <TextInput
                inputName="signUpEmail"
                inputType="email"
                inputValue={signUpData.signUpEmail}
                inputPlaceholder="Email"
                inputHandle={handleOnChange}
              />
              {/* PASSWORD */}
              <TextInputLabel labelText="Password">
                <PasswordToggler
                  isTypePassword={isPasswordVisible}
                  handleVisibility={setIsPasswordVisible}
                >
                  <TextInput
                    inputName="signUpPassword"
                    inputType={isPasswordVisible ? "password" : "text"}
                    inputValue={signUpData.signUpPassword}
                    inputPlaceholder="Password"
                    inputHandle={handleOnChange}
                  />
                </PasswordToggler>
              </TextInputLabel>
              {/* CONFIRM PASSWORD */}
              <TextInputLabel labelText="Confirm Password">
                <PasswordToggler
                  isTypePassword={isConfirmVisible}
                  handleVisibility={setIsConfirmVisible}
                >
                  <TextInput
                    inputName="signUpConfirm"
                    inputType={isConfirmVisible ? "password" : "text"}
                    inputValue={signUpData.signUpConfirm}
                    inputPlaceholder="Confirm Password"
                    inputHandle={handleOnChange}
                  />
                </PasswordToggler>
              </TextInputLabel>
            </TextInputLabel>
            <ContainedActionBtn type="submit">Sign up</ContainedActionBtn>
          </PrimaryContainer>
        </form>
        <PrimaryContainer className="login items-center gap-2 justify-center max-w-xs m-auto md:w-2/4">
          <p>Have an account already?</p>
          <TextActionLink reach="/">Log In</TextActionLink>
        </PrimaryContainer>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default SignUp;
