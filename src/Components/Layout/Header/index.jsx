import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../Context";
import SocialBeeDarkLogo from "../../../Assets/Logo/SocioBeeDark.svg";
import SocialBeeLightLogo from "../../../Assets/Logo/SocioBeeLight.svg";
import "./Header.css";
import { AvatarActionLink, TextInput } from "../../../Components";

const Header = (props) => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const { className } = props;
  const classes =
    className +
    " flex py-2 px-6 justify-between items-center bg-stone-50 border-b dark:bg-stone-950 gap-4";

  return (
    <header className={classes}>
      <Link to="/home">
        <img
          src={isDarkTheme ? SocialBeeDarkLogo : SocialBeeLightLogo}
          className="w-32"
        />
      </Link>
      <TextInput
        inputType="search"
        className="w-52"
        inputPlaceholder="Search User..."
      />
      <div className="flex items-center gap-4">
        <button
          className={`mode ${props.headerMode}-mode`}
          variant="contained"
          onClick={() => toggleTheme(!isDarkTheme)}
        >
          <span
            class={`circle ${isDarkTheme ? "dark" : "light"}-circle`}
          ></span>
        </button>
        <AvatarActionLink
          avatar="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
          className="hidden md:block"
          reach="/profile"
        />
      </div>
    </header>
  );
};

export default Header;
