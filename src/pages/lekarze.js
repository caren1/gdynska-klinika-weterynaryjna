import React from "react";
import { graphql } from "gatsby";
import doctorsStyles from "./lekarze.module.scss";

import Layout from "../components/Layout/Layout";
import SinglePerson from "../components/Staff/StaffType/SinglePerson/SinglePerson";

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "/lekarze/" } } }
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

const Lekarze = ({ data }) => {
  const { allMarkdownRemark } = data;
  const doctorsMarkdown = allMarkdownRemark.edges.filter((edge) =>
    edge.node.frontmatter.slug.includes("/lekarze")
  );
  // console.log('####################', doctorsMarkdown);

  return (
    <Layout>
      <div className={doctorsStyles.DoctorsPage}>
      <i className={doctorsStyles.BackArrow} onClick={() => window.history.back()}></i>
        <div className={doctorsStyles.DoctorsWrapper}>
          {doctorsMarkdown.map(({ node }) => (
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

export default Lekarze;
