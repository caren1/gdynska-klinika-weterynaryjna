import React from "react";
// import { Link } from "gatsby";
import singlePersonStyles from "./SinglePerson.module.scss";

import AniLink from "gatsby-plugin-transition-link/AniLink"



const SinglePerson = (props) => {
  let backgroundProperties = {
    backgroundImage: `url("${props.avatar}")`,
    backgroundSize: "cover",
  };

  
  let singlePerson;
  if (!props.separate) {
    singlePerson = (
      <AniLink paintDrip direction="right" duration={1} hex="#005826" to={props.slug} className={singlePersonStyles.SinglePersonWrapper}>
      <div className={singlePersonStyles.SinglePerson}>
        <div
          className={singlePersonStyles.AvatarWrapper}
          style={backgroundProperties}
        ></div>
        <h3>{props.name}</h3>
      </div>
    </AniLink>
    )
  } else {
    singlePerson = (
      <AniLink paintDrip direction="right" duration={1} hex="#005826" to={props.slug} className={singlePersonStyles.SinglePersonWrapper}>
      <div className={singlePersonStyles.SinglePersonSeparate}>
        <div
          className={singlePersonStyles.AvatarWrapperSeparate}
          style={backgroundProperties}
        ></div>
        <h3>{props.name}</h3>
      </div>
    </AniLink>
    )
  }

  return (
    singlePerson
  )
};

export default SinglePerson;
