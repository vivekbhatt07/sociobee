import React from "react";
import Lottie from "lottie-react";
import LogIn from "../../Assets/Lottie/LogIn.json";

const LogInLottie = () => (
  <div className="w-28 h-28 mx-auto -mb-10">
    <Lottie animationData={LogIn} loop={true} />
  </div>
);

export default LogInLottie;
