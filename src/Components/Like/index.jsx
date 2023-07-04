import React from "react";
import Lottie from "lottie-react";
import LikeLottie from "../../Assets/Lottie/Like.json";

const Loader = () => (
  <div className="w-20 h-20 mx-auto">
    <Lottie animationData={LikeLottie} loop={true} />
  </div>
);

export default Loader;
