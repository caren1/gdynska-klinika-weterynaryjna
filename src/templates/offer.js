import React from "react";
import { graphql } from "gatsby";

// console.log('############ DZIAŁA');

const Offer = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <img
        src={frontmatter.icon}
        alt={frontmatter.title}
      />
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
};

export default Offer;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        icon
        slug
      }
    }
  }
`;
