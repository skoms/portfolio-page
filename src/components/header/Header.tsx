import React from 'react'
import styles from './Header.module.css'

export const Header: React.FC = () => {
	return (
		<header className={styles.container}>
			<div className={styles.ellipse}></div>
			<h4 className={styles.name}>Andreas Skomsøy</h4>
			<a href='#top'>
				<img src='/images/logo.png' className={styles.logo} alt='logo' />
			</a>
			<div className={styles.navSection}>
				<a href='#about'>
					<img
						src='https://img.icons8.com/material-sharp/30/FFFFFF/guest-male.png'
						alt='profile icon'
					/>
					<p>About</p>
				</a>
				<a href='/projects'>
					<img
						src='https://img.icons8.com/ios-glyphs/30/FFFFFF/project.png'
						alt='project icon'
					/>
					<p>Projects</p>
				</a>
				<a href='#contact'>
					<img
						src='https://img.icons8.com/ios-glyphs/30/FFFFFF/phone--v1.png'
						alt='phone icon'
					/>
					<p>Contact</p>
				</a>
			</div>
		</header>
	)
}
