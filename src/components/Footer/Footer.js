
import React from 'react'
import footerStyles from './Footer.module.scss'

import Logo from '../Logo/Logo'
import Contact from '../Contact/Contact'

const Footer = () => {
    return (
        <footer id="footer" className={footerStyles.Footer}> 
            <div className={footerStyles.InfoSection}>
                <Logo />
                <Contact />
            </div>
        </footer>
    )
}

export default Footer
