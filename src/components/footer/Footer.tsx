import React from 'react'
import styles from './Footer.module.css'

export const Footer: React.FC = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.ellipse} />
			<div className={styles.contactInfo}>
				<h3>Contact Info</h3>
				<p>*icon*Email</p>
				<p>*icon*GitHub</p>
				<p>*icon*LinkedIn</p>
			</div>
			<div className={styles.pageContent}>
				<h3>Page Content</h3>
				<a href='/'>About Me</a>
				<a href='/'>Projects</a>
				<a href='/'>Page Source Code</a>
			</div>
			<div className={styles.tradeMark}>
				<p>*TM LOGO* 2021 Andreas Myklebust Skomsøy</p>
			</div>
		</footer>
	)
}
