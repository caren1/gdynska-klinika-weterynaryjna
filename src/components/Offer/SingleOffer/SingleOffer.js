import React from "react";
import singleOfferStyles from "./SingleOffer.module.scss";
// import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"


const SingleOffer = ({ title, icon, slug }) => {
  return (
    <AniLink cover direction="right" duration={1} bg="#005826" to={slug} className={singleOfferStyles.Link}>
      <div className={singleOfferStyles.SingleOffer}>
        <div className={singleOfferStyles.IconWrapper}>
          <img className={singleOfferStyles.Icon} src={icon} alt={title} />
        </div>
        <div className={singleOfferStyles.TextWrapper}>
          <p className={singleOfferStyles.Title}>{title}</p>
        </div>
      </div>
    </AniLink>
  );
};

export default React.memo(SingleOffer);
