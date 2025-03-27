import * as React from 'react'
import styles from './TitleSection.module.scss'

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
                    </div>
                </div>
            </div>


        </section>
    )
}
    

export default TitleSection