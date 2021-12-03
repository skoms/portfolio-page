import React from 'react'
import styles from './Projects.module.css'
import { Project as ProjectType, PROJECTS } from '../../assets/projects'
import { Project } from '../project/Project'

export const Projects: React.FC = () => {
	return (
		<div className={styles.container}>
			<h1 id='projects' className={styles.title}>
				PROJECTS
			</h1>
			{PROJECTS.map((project: ProjectType) => (
				<Project key={project.title} {...project} />
			))}
		</div>
	)
}
