import React from "react";
import { useTheme } from "../../../Context";
import SocialBeeDarkLogo from "../../../Assets/Logo/SocioBeeDark.svg";
import SocialBeeLightLogo from "../../../Assets/Logo/SocioBeeLight.svg";
import "./Header.css";
import { AvatarActionLink } from "../../../Components";

const Header = (props) => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const { className } = props;
  const classes = className + " flex p-2";

  return (
    <header className={classes}>
      <img
        src={isDarkTheme ? SocialBeeDarkLogo : SocialBeeLightLogo}
        className="w-32"
      />

      <button
        className={`mode ${props.headerMode}-mode`}
        variant="contained"
        onClick={() => toggleTheme(!isDarkTheme)}
      >
        <span class={`circle ${isDarkTheme ? "dark" : "light"}-circle`}></span>
      </button>
      <AvatarActionLink avatar="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp" />
    </header>
  );
};

export default Header;
