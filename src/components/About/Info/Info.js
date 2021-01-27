import React from "react";
import infoStyles from "./Info.module.scss";

const Info = ({ image, alt, title, paragraph }) => {
  return (
    <div className={infoStyles.Info} >
            <div className={infoStyles.CrossVertical}></div>

            <div className={infoStyles.CrossHorizontal}></div>

      <div className={infoStyles.ImageContainer}>
        <img src={image} alt={alt} />
      </div>
      <div className={infoStyles.InfoContainer}>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Info;
