import React, { useRef } from 'react'
import styles from './About.module.css'
import { useIntersection } from 'react-use'

export const About: React.FC = () => {
	const intersectionRef = useRef(null)
	const intersection: IntersectionObserverEntry | null = useIntersection(
		intersectionRef,
		{
			root: null,
			rootMargin: '-8% 0% 0% 100%',
			threshold: 1,
		}
	)

	return (
		<div
			className={`${styles.container} ${
				intersection && intersection.intersectionRatio < 1 ? 'hide' : 'show'
			}`}
			id='about'
			ref={intersectionRef}
		>
			<h2>π Hello there!</h2>
			<p>
				I am Andreas Myklebust SkomsΓΈy, an aspiring Web Developer from Norway
				<img
					src='/images/norway-flag.png'
					alt='norwegian-flag'
					className={styles.flag}
				/>
			</p>
			<div className={styles.grid}>
				<div className={styles.hobbies}>
					<h4 className={styles.title}>π§ββοΈ Hobbies</h4>
					<p>
						I love learning new things, hiking in the woods and mountains, and
						exploring
					</p>
				</div>
				<div className={styles.interests}>
					<h4 className={styles.title}>π‘ Interests</h4>
					<p>I love languages (both Human and Computer), history and trivia</p>
				</div>
				<div className={styles.funFacts}>
					<h4 className={styles.title}>β¨ Fun facts</h4>
					<ol>
						<li>
							π I have lived 4 years in China and speak fluent Mandarin Chinese
						</li>
						<li>
							π I started reading encyclopedias at the age of 6, with an
							encyclopedia of the World's countries and cultures
						</li>
						<li>
							π¨ββοΈ My childhood dream like many was to become a airplane pilot
							and/or Zookeeper
						</li>
						<li>
							π₯οΈ My first introduction to computers was through the game 'Bubble
							Shooter', which I played on an old computer running the then
							recent Windows XP
						</li>
						<li>
							π¨βπ³πΆοΈ I'm a pretty decent cook and I love spicy food, so I often
							make spicy dishes from India and China( especially Szechuan
							Cuisine εε·θ)
						</li>
					</ol>
				</div>
			</div>
		</div>
	)
}
