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
            <h3>
                {title}
            </h3>
            <div>
                <p>
                    This is where the information will go
                </p>
            </div>
        </div>
    )
}

export default ProjectCard