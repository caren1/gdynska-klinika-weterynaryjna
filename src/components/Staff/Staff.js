import React, { useContext } from "react";
import { Link } from "gatsby";
import { StaffContext } from "../../context/staff-context";

import staffStyles from "./Staff.module.scss";

import StaffType from "./StaffType/StaffType";

const Staff = () => {
  const staffContext = useContext(StaffContext);

  const docs = staffContext.doctors;
  const admins = staffContext.administration;
  const technicians = staffContext.technicians;

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

      <div className={staffStyles.MobileStaff}>
        <Link to="/lekarze" className={staffStyles.StaffGroup}>
          <div className={staffStyles.IndividualStaff}>
            <h1>Nasi lekarze</h1>
            <p>więcej</p>
          </div>
        </Link>

        <Link to="/technicy" className={staffStyles.StaffGroup}>
          <div className={staffStyles.IndividualStaff}>
            <h1>Technicy</h1>
            <p>więcej</p>
          </div>
        </Link>

        <Link to="/administracja" className={staffStyles.StaffGroup}>
          <div className={staffStyles.IndividualStaff}>
            <h1>Administracja</h1>
            <p>więcej</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default React.memo(Staff);
