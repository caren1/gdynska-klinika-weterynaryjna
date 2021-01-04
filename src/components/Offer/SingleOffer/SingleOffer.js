import React from "react";
import singleOfferStyles from "./SingleOffer.module.scss";
import { Link } from "gatsby";

const SingleOffer = ({ title, icon, slug }) => {
  return (
    <Link to={slug} className={singleOfferStyles.Link}>
      <div className={singleOfferStyles.SingleOffer}>
        <div className={singleOfferStyles.IconWrapper}>
          <img className={singleOfferStyles.Icon} src={icon} alt={title} />
        </div>
        <div className={singleOfferStyles.TextWrapper}>
        <p className={singleOfferStyles.Title}>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleOffer;
