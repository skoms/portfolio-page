import React from 'react'
import styles from './About.module.css'

export const About: React.FC = () => {
	return (
		<div className={styles.container}>
			<h2>Hello there!</h2>
			<p>
				I am Andreas Myklebust Skomsøy, an aspiring Web Developer from Norway
				<img
					src='/images/norway-flag.png'
					alt='norwegian-flag'
					className={styles.flag}
				/>
			</p>
			<p>
				I love learning new things, hiking in the woods and mountains, and
				exploring.
			</p>
			<p>I love languages (both Human and Computer), history and trivia.</p>
		</div>
	)
}
