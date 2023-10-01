import React, { useRef } from 'react';
import styles from './ProfileHead.module.css';
import { useIntersection } from 'react-use';

export const ProfileHead: React.FC = () => {
	const intersectionRef = useRef(null);
	const intersection: IntersectionObserverEntry | null = useIntersection(
		intersectionRef,
		{
			root: null,
			rootMargin: '-10% 0% 0% 100%',
			threshold: 1,
		}
	);

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
					Frontend Developer, Life-long Learner & Optimist
				</h3>
				<div className={styles.stack}>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.mongodb.com/'
						className={styles.iconDiv}
					>
						<h2 className={styles.letter}>M</h2>
						<i
							className={`devicon-mongodb-plain ${styles.icon}`}
							title='MongoDB'
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
						href='https://angular.io/'
						className={styles.iconDiv}
					>
						<h2 className={styles.letter}>A</h2>
						<i
							className={`devicon-angularjs-plain ${styles.icon}`}
							title='Angular'
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
				</nav>
			</div>
		</div>
	);
};
