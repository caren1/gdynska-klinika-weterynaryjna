import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

export const StaffContext = React.createContext({
  doctors: [],
  technicians: [],
  administration: [],
});

const StaffContextProvider = (props) => {
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

  const doctorsMarkdown = allMarkdownRemark.edges.filter((edge) =>
    edge.node.frontmatter.slug.includes("/lekarze")
  );

  // setDoctors(doctorsMarkdown);

  const adminsMarkdown = allMarkdownRemark.edges.filter((edge) =>
    edge.node.frontmatter.slug.includes("/administracja")
  );
  // setAdministration(adminsMarkdown);

  const techniciansMarkdown = allMarkdownRemark.edges.filter((edge) =>
    edge.node.frontmatter.slug.includes("/technicy")
  );

  // setTechnicians(techniciansMarkdown);

  const doctors = doctorsMarkdown;
  const technicians  = adminsMarkdown;
  const administration = techniciansMarkdown;

  return (
    <StaffContext.Provider
      value={{
        doctors,
        technicians,
        administration,
      }}
    >
      {props.children}
    </StaffContext.Provider>
  );
};

export default StaffContextProvider;
