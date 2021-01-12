import React from "react";
import { graphql } from "gatsby";
import personStyles from "./person.module.scss";

import Layout from "../components/Layout/Layout";
import SinglePerson from "../components/Staff/StaffType/SinglePerson/SinglePerson";

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "/technicy/" } } }
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
`;

const Technicy = ({ data }) => {
  const { allMarkdownRemark } = data;
  const techMarkdown = allMarkdownRemark.edges.filter((edge) =>
    edge.node.frontmatter.slug.includes("/technicy")
  );

  return (
    <Layout>
      <div className={personStyles.DoctorsPage}>
      <i className={personStyles.BackArrow} onClick={() => window.history.back()}></i>
        <div className={personStyles.DoctorsWrapper}>
          {techMarkdown.map(({ node }) => (
            <SinglePerson
              separate={true}
              key={node.frontmatter.title}
              name={node.frontmatter.title}
              slug={node.frontmatter.slug}
              avatar={node.frontmatter.image}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default React.memo(Technicy);