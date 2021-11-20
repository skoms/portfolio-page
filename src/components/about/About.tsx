import React from 'react'
import styles from './About.module.css'

export const About: React.FC = () => {
	return (
		<div className={styles.container}>
			<h2>Hello there!</h2>
			<p>
				I am Andreas Myklebust Skomsøy, an aspiring Web Developer from Norway!
			</p>
		</div>
	)
}
