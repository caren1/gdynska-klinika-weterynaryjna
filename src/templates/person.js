import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import SEO from '../components/SEO/Seo'

import personStyles from "./person.module.scss";

const Person = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  let backgroundProperties = {
    backgroundImage: `url("${frontmatter.image}")`,
    backgroundSize: "cover",
  };

  return (
    <Layout detailed={true}>
      <SEO title={frontmatter.title}/>
      <i
        className={personStyles.BackArrow}
        onClick={() => window.history.back()}
      ></i>

      <div className={personStyles.Person}>
        <div className={personStyles.AvatarContainer}>
          <hr />
          <div
            className={personStyles.AvatarWrapper}
            style={backgroundProperties}
          ></div>
          <hr />
        </div>
        {/* <div
          className={personStyles.AvatarWrapper}
          style={backgroundProperties}>
        </div> */}

        <div className={personStyles.PersonInfo}>
          <h1 className={personStyles.PersonHeading}>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>

        <div className={personStyles.CrossHorizontal}></div>
        <div className={personStyles.CrossVertical}></div>
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
