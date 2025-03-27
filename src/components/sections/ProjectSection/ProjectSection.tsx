import * as React from 'react'
import styles from './ProjectSection.module.scss'
import ProjectCard from '../../Cards/ProjectCard/ProjectCard'

interface IProps {
    title: string
}

const ProjectSection: React.FC<IProps> = ({
    title
    }) => {
    return (
        <section className={`${styles.sectionTitle}`}>
            <div className={`${styles.container}`}>
                <h3 className={`${styles.title}`}>
                    This is the Project Page
                </h3>
            
                <div className={`${styles.projectTitle}`}>
                    Featured Projects
                </div>    
                <div className={`${styles.projectGrid}`}>
                    <ProjectCard title={'Test One'}/>
                    <ProjectCard title={'Test Two'}/>
                    <ProjectCard title={'Test Three'}/>
                </div>
            </div>
            


        </section>

    )
}

export default ProjectSection