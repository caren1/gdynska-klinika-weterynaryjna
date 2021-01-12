import React, { useEffect, useState, useContext } from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { StaffContext } from "../../context/staff-context";

import staffStyles from "./Staff.module.scss";

import StaffType from "./StaffType/StaffType";

const Staff = () => {
  // const { allMarkdownRemark } = useStaticQuery(
  //   graphql`
  //     query {
  //       allMarkdownRemark(
  //         filter: {
  //           frontmatter: {
  //             slug: { regex: "/lekarze/|/technicy/|/administracja/" }
  //           }
  //         }
  //       ) {
  //         edges {
  //           node {
  //             frontmatter {
  //               title
  //               image
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // );
  const staffContext = useContext(StaffContext);

  const docs = staffContext.doctors;
  const admins = staffContext.administration;
  const technicians = staffContext.technicians;


  // useEffect(() => {
  //   const docs = allMarkdownRemark.edges.filter((edge) =>
  //     edge.node.frontmatter.slug.includes("/lekarze")
  //   );
  //   setDocs(docs);
  //   staffContext.setDocs(docs);
  //   console.log(staffContext.doctors);


  //   const admins = allMarkdownRemark.edges.filter((edge) =>
  //     edge.node.frontmatter.slug.includes("/administracja")
  //   );
  //   setAdmins(admins);
  //   staffContext.setAdmin(admins);
  //   console.log(staffContext.technicians);

  //   const technicians = allMarkdownRemark.edges.filter((edge) =>
  //     edge.node.frontmatter.slug.includes("/technicy")
  //   );
  //   setTechnicians(technicians);
  //   staffContext.setTechs(technicians);
  //   console.log(staffContext.technicians)
  // }, []);

  // const docs = allMarkdownRemark.edges.filter((edge) =>
  //   edge.node.frontmatter.slug.includes("/lekarze")
  // );

  // const admins = allMarkdownRemark.edges.filter((edge) =>
  //   edge.node.frontmatter.slug.includes("/administracja")
  // );

  // const technicians = allMarkdownRemark.edges.filter((edge) =>
  //   edge.node.frontmatter.slug.includes("/technicy")
  // );

  return (
    <section className={staffStyles.Staff}>
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

      <div className={staffStyles.MobileStaff}>
        <Link to="/lekarze" className={staffStyles.StaffGroup}>
          <div>
            <h1>Nasi lekarze</h1>
            <p>więcej</p>
          </div>
        </Link>

        <Link to="/technicy" className={staffStyles.StaffGroup}>
          <div className="IndividualStaff">
            <h1>Technicy</h1>
            <p>więcej</p>
          </div>
        </Link>

        <Link to="/administracja" className={staffStyles.StaffGroup}>
          <div className="IndividualStaff">
            <h1>Administracja</h1>
            <p>więcej</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default React.memo(Staff);
