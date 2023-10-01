import React from 'react';
import styles from './Footer.module.css';
import { Helmet } from 'react-helmet';

export const Footer: React.FC = () => {
	const scrollTo = (id: string) => {
		if (id !== 'header') {
			const element = document.getElementById(id);
			element?.scrollIntoView({
				block: 'center',
				behavior: 'smooth',
			});
		} else {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		}
	};

	return (
		<footer className={styles.container} id='footer'>
			<Helmet>
				<link
					rel='stylesheet'
					href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css'
				/>
			</Helmet>
			<div className={styles.ellipse} />
			<div className={styles.contactInfo}>
				<h4>Contact & Media</h4>
				<a href='https://github.com/askomsoey'>
					<i
						className={`devicon-github-original ${styles.icon}`}
						title='Work GitHub'
					/>
					<p>Work GitHub</p>
				</a>
				<a href='https://github.com/skoms'>
					<i
						className={`devicon-github-original ${styles.icon}`}
						title='GitHub'
					/>
					<p>GitHub (Inactive)</p>
				</a>
				<a href='https://www.linkedin.com/in/andreas-skoms%C3%B8y-01a027188/'>
					<i
						className={`devicon-linkedin-plain ${styles.icon}`}
						title='LinkedIn'
					/>
					<p>LinkedIn</p>
				</a>
			</div>
			<div className={styles.pageContent}>
				<h4>Content</h4>
				<button onClick={() => scrollTo('about')}>
					<img
						src='https://img.icons8.com/material-sharp/30/FFFFFF/guest-male.png'
						alt='profile icon'
					/>
					<p>About Me</p>
				</button>
				<button onClick={() => scrollTo("Researcher's Refuge")}>
					<img
						src='https://img.icons8.com/ios-glyphs/30/FFFFFF/project.png'
						alt='project icon'
					/>
					<p>Projects</p>
				</button>
				<a href='https://github.com/skoms/portfolio-page'>
					<img
						src='https://img.icons8.com/ios-glyphs/30/FFFFFF/code.png'
						alt='code icon'
					/>
					<p>Page Source Code</p>
				</a>
			</div>
			<div className={styles.tradeMark}>
				<p>©2021 - Present | Andreas Myklebust Skomsøy</p>
			</div>
		</footer>
	);
};
