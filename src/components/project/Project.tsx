import React, { useRef } from 'react';
import styles from './Project.module.css';
import { Project as ProjectProps, Tech } from '../../assets/projects';
import { useIntersection } from 'react-use';

export const Project: React.FC<ProjectProps> = ({
	title,
	description,
	picture,
	links,
	technologies,
}: ProjectProps) => {
	const intersectionRef = useRef(null);
	const intersection: IntersectionObserverEntry | null = useIntersection(
		intersectionRef,
		{
			root: null,
			rootMargin: '-10% 0% 0% 100%',
			threshold: 0.8,
		}
	);

	return (
		<div
			className={`${styles.container} ${
				intersection && intersection.intersectionRatio < 0.8 ? 'hide' : 'show'
			}`}
			ref={intersectionRef}
			id={title}
		>
			<div
				className={styles.backgroundImageContainer}
				style={{
					backgroundImage: `url(${picture})`,
				}}
			>
				<nav className={styles.links}>
					<a href={links.repo} rel='noreferrer' target='_blank'>
						⚙️ Repository
					</a>
					{links.backendRepo && (
						<a href={links.backendRepo} rel='noreferrer' target='_blank'>
							⚙️ Backend Repository
						</a>
					)}
					{links.demo && (
						<a href={links.demo} rel='noreferrer' target='_blank'>
							✅ Live Demo
						</a>
					)}
				</nav>
			</div>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.desc}>{description}</p>
			<div className={styles.technologies}>
				{technologies.map((tech: Tech) => (
					<img
						key={tech.name + title}
						className={styles.techIcon}
						src={tech.iconLink}
						alt={tech.name}
						title={tech.name}
					/>
				))}
			</div>
		</div>
	);
};
