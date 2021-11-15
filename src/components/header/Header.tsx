import React from 'react'
import styles from './Header.module.css'

export const Header: React.FC = () => {
	return (
		<header className={styles.container}>
			<div className={styles.ellipse}></div>
			<h4 className={styles.name}>Andreas Skomsøy</h4>
			<a href='/'>
				<img src='/images/logo.png' className={styles.logo} alt='logo' />
			</a>
			<div className={styles.navSection}>
				<a href='/'>About Me</a>
				<a href='/'>Projects</a>
				<a href='/'>Contact Me</a>
			</div>
		</header>
	)
}
