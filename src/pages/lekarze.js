import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import doctorsStyles from "./lekarze.module.scss";

import Layout from "../components/Layout/Layout";
import SinglePerson from '../components/Staff/StaffType/SinglePerson/SinglePerson'

const lekarze = () => {


  return (
    <Layout>
      <div className={doctorsStyles.DoctorsPage}>
        {/* {docs.map(({ node }) => (
          <SinglePerson
            key={node.frontmatter.title}
            name={node.frontmatter.title}
            slug={node.frontmatter.slug}
            avatar={node.frontmatter.image}
          />
        ))} */}
      </div>
    </Layout>
  );
};

export default lekarze;
