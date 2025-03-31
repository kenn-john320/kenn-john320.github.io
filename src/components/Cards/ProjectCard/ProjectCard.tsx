import React from 'react'
import styles from './ProjectCard.module.scss'

interface IProps {
    title: string
    action?: {
        text: string
        onClick: () => void
    }
}


const ProjectCard: React.FC<IProps> = ({
    title,
    action
}) => {
    return (
        <div className={`${styles.card}`}>
            <h3 className={`${styles.cardTitle}`}>
                {title}
            </h3>
            <div className={`${styles.description}`}>
                <p>
                    This is where the information will go
                </p>
            </div>
            <div className={`${styles.links}`}>
                Github
            </div>
        </div>
    )
}

export default ProjectCard