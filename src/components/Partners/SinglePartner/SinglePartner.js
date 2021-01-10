import React from "react";
import singlePartnerStyles from "./SinglePartner.module.scss";

const SinglePartner = ({ image, title, paragraph, alt, link, linktext }) => {
  return (
    <div className={singlePartnerStyles.SinglePartner}>
      <div className={singlePartnerStyles.ImageContainer}>
        <img src={image} alt={alt} />
      </div>
      <div className={singlePartnerStyles.InfoContainer}>
        <div className={singlePartnerStyles.HeadingContainer}>
        <h1>{title}</h1>
        <hr />
        </div>
        <p>{paragraph}</p>
        <a href={link} target="_blank" rel="noreferrer">
          {linktext}
        </a>
      </div>
    </div>
  );
};

export default SinglePartner;
