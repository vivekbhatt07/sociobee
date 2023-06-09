import React from "react";
import { useNavigate } from "react-router-dom";

import {
  PageWrapper,
  SectionWrapper,
  TextInput,
  TextInputLabel,
  ContainedActionBtn,
  OutlinedActionBtn,
  TextActionLink,
} from "../../Components";

const SignUp = () => {
  const navigate = useNavigate();
  const handleOnChange = () => {};

  return (
    <PageWrapper className="signup_page">
      <SectionWrapper className="signup_section flex">
        <form className="signup_form max-w-xs m-auto">
          {/* FIRST NAME */}
          <TextInputLabel labelText="First Name">
            <TextInput
              inputName="signUpFirstName"
              inputType="text"
              inputValue=""
              inputPlaceholder="First Name"
              inputHandle={handleOnChange}
            />
          </TextInputLabel>
          {/* LAST NAME */}
          <TextInputLabel labelText="Last Name">
            <TextInput
              inputName="signUpLastName"
              inputType="text"
              inputValue=""
              inputPlaceholder="Last Name"
              inputHandle={handleOnChange}
            />
          </TextInputLabel>
          {/* EMAIL */}
          <TextInputLabel labelText="Email">
            <TextInput
              inputName="signUpEmail"
              inputType="email"
              inputValue=""
              inputPlaceholder="Email"
              inputHandle={handleOnChange}
            />
            {/* PASSWORD */}
            <TextInputLabel labelText="Password">
              <TextInput
                inputName="signUpPassword"
                inputType="text"
                inputValue=""
                inputPlaceholder="Password"
                inputHandle={handleOnChange}
              />
            </TextInputLabel>
            {/* CONFIRM PASSWORD */}
            <TextInputLabel labelText="Confirm Password">
              <TextInput
                inputName="signUpConfirm"
                inputType="text"
                inputValue=""
                inputPlaceholder="Confirm Password"
                inputHandle={handleOnChange}
              />
            </TextInputLabel>
          </TextInputLabel>
          <div className="signup_actions flex flex-col">
            <ContainedActionBtn type="submit">Sign up</ContainedActionBtn>
            <OutlinedActionBtn type="button" handleClick={() => navigate("/")}>
              Log in
            </OutlinedActionBtn>
          </div>
        </form>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default SignUp;
