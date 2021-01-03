import React from "react";
import logoStyles from "./Logo.module.scss";
import logo from "../../assets/logos/GKW-main-vertical-logo.svg";

const Logo = (props) => {
  return (
    <div className={logoStyles.Logo}>
      <img src={logo} alt="GKW - Gdyńska Klinika weterynarii" />
    </div>
  );
};

export default Logo;
