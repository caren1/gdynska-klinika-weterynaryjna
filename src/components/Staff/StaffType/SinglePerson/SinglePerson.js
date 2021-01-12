import React from "react";
import { Link } from "gatsby";
import singlePersonStyles from "./SinglePerson.module.scss";

const SinglePerson = (props) => {
  let backgroundProperties = {
    backgroundImage: `url("${props.avatar}")`,
    backgroundSize: "cover",
  };

  
  let singlePerson;
  if (!props.separate) {
    singlePerson = (
      <Link to={props.slug} className={singlePersonStyles.SinglePersonWrapper}>
      <div className={singlePersonStyles.SinglePerson}>
        <div
          className={singlePersonStyles.AvatarWrapper}
          style={backgroundProperties}
        ></div>
        <h3>{props.name}</h3>
      </div>
    </Link>
    )
  } else {
    singlePerson = (
      <Link to={props.slug} className={singlePersonStyles.SinglePersonWrapper}>
      <div className={singlePersonStyles.SinglePersonSeparate}>
        <div
          className={singlePersonStyles.AvatarWrapperSeparate}
          style={backgroundProperties}
        ></div>
        <h3>{props.name}</h3>
      </div>
    </Link>
    )
  }

  return (
    singlePerson
  )
};

export default SinglePerson;
