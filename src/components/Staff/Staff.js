import React from "react";
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby";

import staffStyles from "./Staff.module.scss";

import StaffType from "./StaffType/StaffType";

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

  const docs = allMarkdownRemark.edges.filter((edge) =>
    edge.node.frontmatter.slug.includes("/lekarze")
  );

  const admins = allMarkdownRemark.edges.filter((edge) =>
    edge.node.frontmatter.slug.includes("/administracja")
  );

  const technicians = allMarkdownRemark.edges.filter((edge) =>
    edge.node.frontmatter.slug.includes("/technicy")
  );

  console.log(allMarkdownRemark);

  return (
    <section id="kadra" className={staffStyles.Staff}>
      <div className={staffStyles.CrossVertical}></div>
      <div className={staffStyles.HorizontalWrapper}>
        <div className={staffStyles.CrossHorizontal}>
          <StaffType title="Nasi lekarze" staff={docs} />
        </div>
        <div className={staffStyles.CrossHorizontal}>
          <StaffType title="Technicy" staff={technicians} />
        </div>
        <div className={staffStyles.CrossHorizontal}>
          <StaffType title="Administracja" staff={admins} />
        </div>
      </div>

      <div class={staffStyles.MobileStaff}>
        <Link to="/lekarze" className={staffStyles.StaffGroup}>
          <div>
            <h1>Nasi lekarze</h1>
            <p>więcej</p>
          </div>
        </Link>

        <Link to="/technicy" className={staffStyles.StaffGroup}>
          <div class="IndividualStaff">
            <h1>Technicy</h1>
            <p>więcej</p>
          </div>
        </Link>

        <Link to="/administracja" className={staffStyles.StaffGroup}>
          <div class="IndividualStaff">
            <h1>Administracja</h1>
            <p>więcej</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default React.memo(Staff);
