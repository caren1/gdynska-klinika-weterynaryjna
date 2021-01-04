import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Staff = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              slug: { regex: "/lekarze/|/technicy/|/administracja/" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                image
                slug
              }
            }
          }
        }
      }
    `
  );

  return <div></div>;
};

export default Staff;
