import React from "react";
import Lottie from "lottie-react";
import LottieSignUp from "../Lottie/SignUpLottie.json";

const SignUpLottie = () => (
  <div className="w-52 h-52 mx-auto">
    <Lottie animationData={LottieSignUp} loop={true} />
  </div>
);

export default SignUpLottie;
