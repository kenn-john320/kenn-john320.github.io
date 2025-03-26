import * as React from 'react'
import styles from './TitleSection.module.scss'

const TitleSection: React.FC = () => {

    return (
        <section className={`${styles.titleSection}`}>
            <div className={`${styles.titleContainer}`}>
                <div className={`${styles.titleContent}`}>
                    <div>
                        <h1 className='intro-title'>
                            Hello! 
                            My name is Kennedy Johnson
                        </h1>
                        <h3 className='subtitle'>
                            Software Engineer
                        </h3>
                        <p>
                            Just a full stack developer in the making
                        </p>
                    </div>
                </div>
            </div>


        </section>
    )
}
    

export default TitleSection