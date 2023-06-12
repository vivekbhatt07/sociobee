import React from "react";
import SocialBeeDarkLogo from "../../../Assets/Logo/SocioBeeDark.svg";
import SocialBeeLightLogo from "../../../Assets/Logo/SocioBeeLight.svg";
import { useTheme } from "@emotion/react";

const Header = () => {
  const { isDarkTheme } = useTheme();
  return (
    <header>
      <img src={isDarkTheme ? SocialBeeDarkLogo : SocialBeeLightLogo} />
    </header>
  );
};

export default Header;
