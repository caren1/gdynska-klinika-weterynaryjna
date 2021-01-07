import React from "react";
import doctorsStyles from "./lekarze.module.scss";

import Layout from "../components/Layout/Layout";
import SinglePerson from '../components/Staff/StaffType/SinglePerson/SinglePerson'

const lekarze = (props) => {
  return (
    <Layout>
      <div className={doctorsStyles.DoctorsPage}>
        {props.staff.map(({ node }) => (
          <SinglePerson
            key={node.frontmatter.title}
            name={node.frontmatter.title}
            slug={node.frontmatter.slug}
            avatar={node.frontmatter.image}
          />
        ))}
      </div>
    </Layout>
  );
};

export default lekarze;
