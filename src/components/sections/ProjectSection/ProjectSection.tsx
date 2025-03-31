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
        <section className={`${styles.projectSection}`}>
            <div className={`${styles.container}`}>
                <h2 className={`${styles.sectionTitle}`}>
                    Featured Projects
                </h2>  
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