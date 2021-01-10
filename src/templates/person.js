import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";

import personStyles from "./person.module.scss";

const Person = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  let backgroundProperties = {
    backgroundImage: `url("${frontmatter.image}")`,
    backgroundSize: "cover",
  };
  console.log(markdownRemark);

  return (
    <Layout detailed={true}>
      
      <div className={personStyles.Person}>
        <div
          className={personStyles.AvatarWrapper}
          style={backgroundProperties}
        ></div>
        <div className={personStyles.PersonInfo}>
          <h1 className={personStyles.PersonHeading}>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        <div className={personStyles.CrossHorizontal}></div>
      </div>
    </Layout>
  );
};

export default Person;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
        slug
      }
    }
  }
`;
