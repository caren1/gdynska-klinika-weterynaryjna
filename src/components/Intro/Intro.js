import React from 'react'
import introStyles from './Intro.module.scss'

import Button from '../UI/Button/Button'

const Intro = () => {
    return (
        <section id="intro" className={introStyles.Intro}>
            <div className={introStyles.Buttons}>
            <Button type="Call"/>
            <Button type="Route"/>
            <Button type="NavCall"/>
            </div>
            
        </section>
    )
}

export default Intro
