import * as React from 'react'
import styles from './TitleSection.module.scss'
import { lazy } from 'react';


const TitleSection: React.FC = () => {

    return (
        <section className={`${styles.section}`}>
            <div className={`${styles.container}`}>
                <div className={`${styles.content}`}>
                    <div>
                        <h1 className={`${styles.title}`}>
                            Hello! 
                            My name is Kennedy Johnson
                        </h1>
                        <h3 className={`${styles.subtitle}`}>
                            Software Engineer
                        </h3>
                        <p className={`${styles.description}`}>
                            Just a full stack developer in the making
                        </p>
                        <div className={`${styles.socialMedia}`}>
                            <a 
                                href='example.com'>
                                Linkedin
                            </a>
                            <a
                                href='example.com'>
                                Github
                            </a>
                            <a
                                href='example.com'>
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
    

export default TitleSection