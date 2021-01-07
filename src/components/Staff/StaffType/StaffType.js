import React from 'react'
import staffTypeStyles from './StaffType.module.scss'
import SinglePerson from './SinglePerson/SinglePerson'

const StaffType = (props) => {

    console.log('kiekie', props.staff);

    return (
        <div className={staffTypeStyles.StaffType}>
            <h2>{props.title}</h2>
            <div className={staffTypeStyles.AllStaff}>
                {props.staff.map(({node}) => (
                    <SinglePerson key={node.frontmatter.title} name={node.frontmatter.title} slug={node.frontmatter.slug} avatar={node.frontmatter.image}/>
                ))}
            </div>
        </div>
    )
}

export default StaffType
