import React from "react";
import { Link } from 'gatsby'
import singlePersonStyles from "./SinglePerson.module.scss";

const SinglePerson = (props) => {
  let backgroundProperties = {
    backgroundImage: `url("${props.avatar}")`,
    backgroundSize: "cover",
    // backgroundPosition: 'top'
  };

  return (
    <Link to={props.slug} className={singlePersonStyles.SinglePersonWrapper}>
    <div className={singlePersonStyles.SinglePerson}>
      <div
        className={singlePersonStyles.AvatarWrapper}
        style={backgroundProperties}
      ></div>
      <h3>{props.name}</h3>
    </div>
    </Link>
  );
};

export default SinglePerson;
