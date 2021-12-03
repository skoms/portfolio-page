import React from 'react'
import styles from './Header.module.css'

export const Header: React.FC = () => {
	const scrollTo = (id: string) => {
		if (id !== 'header') {
			const element = document.getElementById(id)
			element?.scrollIntoView({
				block: 'center',
				behavior: 'smooth',
			})
		} else {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
		}
	}

	return (
		<header className={styles.container}>
			<div className={styles.ellipse}></div>
			<h4 className={styles.name}>Andreas Skomsøy</h4>
			<button onClick={() => scrollTo('header')} className={styles.homeLink}>
				<img src='/images/logo.png' className={styles.logo} alt='logo' />
			</button>
			<div className={styles.navSection}>
				<button onClick={() => scrollTo('about')}>
					<img
						src='https://img.icons8.com/material-sharp/30/FFFFFF/guest-male.png'
						alt='profile icon'
					/>
					<p>About</p>
				</button>
				<button onClick={() => scrollTo("Researcher's Refuge")}>
					<img
						src='https://img.icons8.com/ios-glyphs/30/FFFFFF/project.png'
						alt='project icon'
					/>
					<p>Projects</p>
				</button>
				<button onClick={() => scrollTo('footer')}>
					<img
						src='https://img.icons8.com/ios-glyphs/30/FFFFFF/phone--v1.png'
						alt='phone icon'
					/>
					<p>Contact</p>
				</button>
			</div>
		</header>
	)
}
