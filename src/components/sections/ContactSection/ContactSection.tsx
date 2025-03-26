import * as React from 'react'
import styles from "./ContactSection.module.scss"

const ContactSection: React.FC = () => {
    return (
        <div>
            <div className='contact-title'>
                This is the Contact Page.
            </div>
            <div className='contact-container'>
            To contact me, please look at these cool links!
            </div>
        </div>
    )
}

export default ContactSection