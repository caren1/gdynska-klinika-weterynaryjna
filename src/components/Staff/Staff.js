import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import staffStyles from './Staff.module.scss'

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

  return (
    <section id="kadra" className={staffStyles.Staff}>
            <div className={staffStyles.CrossVertical}>

            </div>
    </section>
    );
};

export default Staff;
