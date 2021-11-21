import React, { useRef } from 'react'
import styles from './ProfileHead.module.css'
import { useIntersection } from 'react-use'

export const ProfileHead: React.FC = () => {
	const intersectionRef = useRef(null)
	const intersection: IntersectionObserverEntry | null = useIntersection(
		intersectionRef,
		{
			root: null,
			rootMargin: '-20% 0% 0% 100%',
			threshold: 1,
		}
	)

	return (
		<div className={styles.container} id='top'>
			<div
				className={`${styles.content} ${
					intersection && intersection.intersectionRatio < 1 ? 'hide' : 'show'
				}`}
				ref={intersectionRef}
			>
				<img
					className={styles.profilePic}
					src='/images/me.jpg'
					alt='HeadShot'
				/>
				<h1 className={styles.name}>Andreas Skomsøy</h1>
				<h3 className={styles.intro}>
					Developer, Life-long Learner & Optimist
				</h3>
				<div className={styles.stack}>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.postgresql.org/'
						className={styles.iconDiv}
					>
						<h2 className={styles.letter}>P</h2>
						<i
							className={`devicon-postgresql-plain ${styles.icon}`}
							title='PostgreSQL'
						/>
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href='http://expressjs.com/'
						className={styles.iconDiv}
					>
						<h2 className={styles.letter}>E</h2>
						<i
							className={`devicon-express-original ${styles.icon}`}
							title='Express.js'
						/>
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://reactjs.org/'
						className={styles.iconDiv}
					>
						<h2 className={styles.letter}>R</h2>
						<i
							className={`devicon-react-original ${styles.icon}`}
							title='React.js'
						/>
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://nodejs.org/'
						className={styles.iconDiv}
					>
						<h2 className={styles.letter}>N</h2>
						<i
							className={`devicon-nodejs-plain ${styles.icon}`}
							title='Node.js'
						/>
					</a>
				</div>
				<nav className={styles.links}>
					<a target='_blank' rel='noreferrer' href='https://github.com/skoms'>
						<i
							className={`devicon-github-original ${styles.icon}`}
							title='GitHub'
						/>
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.linkedin.com/in/andreas-skoms%C3%B8y-01a027188/'
					>
						<i
							className={`devicon-linkedin-plain ${styles.icon}`}
							title='LinkedIn'
						/>
					</a>
					<a href='mailto:andrew.m.s.97@hotmail.com'>
						<img
							src='https://img.icons8.com/material-outlined/32/FFFFFF/mail.png'
							alt='mail icon'
							title='Mail'
							className={styles.mailIcon}
						/>
					</a>
				</nav>
			</div>
		</div>
	)
}
