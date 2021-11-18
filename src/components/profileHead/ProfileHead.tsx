import React from 'react'
import styles from './ProfileHead.module.css'
import Helmet from 'react-helmet'

export const ProfileHead: React.FC = () => {
	return (
		<div className={styles.container}>
			<Helmet>
				<link
					rel='stylesheet'
					href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css'
				/>
			</Helmet>
			<img className={styles.profilePic} src='/images/me.jpg' alt='HeadShot' />
			<h1 className={styles.name}>Andreas Skomsoy</h1>
			<h3 className={styles.intro}>Developer, Life-long Learner & Optimist</h3>
			<div className={styles.stack}>
				<div className={styles.iconDiv}>
					<h2 className={styles.letter}>P</h2>
					<i
						className={`devicon-postgresql-plain ${styles.icon}`}
						title='PostgreSQL'
					/>
				</div>
				<div className={styles.iconDiv}>
					<h2 className={styles.letter}>E</h2>
					<i
						className={`devicon-express-original ${styles.icon}`}
						title='Express.js'
					/>
				</div>
				<div className={styles.iconDiv}>
					<h2 className={styles.letter}>R</h2>
					<i
						className={`devicon-react-original ${styles.icon}`}
						title='React.js'
					/>
				</div>
				<div className={styles.iconDiv}>
					<h2 className={styles.letter}>N</h2>
					<i
						className={`devicon-nodejs-plain ${styles.icon}`}
						title='Node.js'
					/>
				</div>
			</div>
			<nav className={styles.links}>
				<a href='https://github.com/skoms'>
					<i
						className={`devicon-github-original ${styles.icon}`}
						title='GitHub'
					/>
				</a>
				<a href='https://www.linkedin.com/in/andreas-skoms%C3%B8y-01a027188/'>
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
	)
}