import React, { useState } from "react";

import "./Login.css";

import {
  PageWrapper,
  SectionWrapper,
  TextInput,
  TextInputLabel,
} from "../../Components";

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

  return (
    <PageWrapper className="login_page flex-row">
      <SectionWrapper className="login_media_section basis-6/12"></SectionWrapper>
      <SectionWrapper className="login_form_section basis-6/12">
        <div>
          <h1>SOCIOBEE</h1>
          <form className="login_form flex flex-col">
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
            <button>Log in</button>
            <button>Log in as guest</button>
          </form>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Login;
