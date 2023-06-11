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
} from "../../Components";

const SignUp = () => {
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
      <SectionWrapper className="signup_section flex">
        <form className="signup_form max-w-xs m-auto">
          <PrimaryContainer className="signup_form_container flex-col">
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
                <TextInput
                  inputName="signUpPassword"
                  inputType="text"
                  inputValue={signUpData.signUpPassword}
                  inputPlaceholder="Password"
                  inputHandle={handleOnChange}
                />
              </TextInputLabel>
              {/* CONFIRM PASSWORD */}
              <TextInputLabel labelText="Confirm Password">
                <TextInput
                  inputName="signUpConfirm"
                  inputType="text"
                  inputValue={signUpData.signUpConfirm}
                  inputPlaceholder="Confirm Password"
                  inputHandle={handleOnChange}
                />
              </TextInputLabel>
            </TextInputLabel>
            <ActionContainer className="signup_actions flex-col">
              <ContainedActionBtn type="submit">Sign up</ContainedActionBtn>
              <OutlinedActionBtn
                type="button"
                handleClick={() => navigate("/")}
              >
                Log in
              </OutlinedActionBtn>
            </ActionContainer>
          </PrimaryContainer>
        </form>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default SignUp;
