import * as React from 'react'
import styles from './ProjectSection.module.scss'

const ProjectSection: React.FC = () => {
    return (
        <section className={`${styles.sectionTitle}`}>
            <div className={`${styles.container}`}>
                <h3 className={`${styles.title}`}>
                    This is the Project Page
                </h3>
            
            <div className={`${styles.projectTitle}`}>
                Featured Projects
            </div>    
            </div>
            


        </section>

    )
}

export default ProjectSection