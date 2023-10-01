import React, { useRef } from 'react';
import styles from './About.module.css';
import { useIntersection } from 'react-use';

export const About: React.FC = () => {
	const intersectionRef = useRef(null);
	const intersection: IntersectionObserverEntry | null = useIntersection(
		intersectionRef,
		{
			root: null,
			rootMargin: '-80px 0% 100px 100%',
			threshold: 1,
		}
	);

	return (
		<div
			className={`${styles.container} ${
				intersection && intersection.intersectionRatio < 1 ? 'hide' : 'show'
			}`}
			id='about'
			ref={intersectionRef}
		>
			<h2>👋 Hello there!</h2>
			<p>
				I am Andreas Myklebust Skomsøy, a Norwegian
				<img
					src='/images/norway-flag.png'
					alt='norwegian-flag'
					className={styles.flag}
				/>{' '}
				Frontend Developer working in London
			</p>
			<div className={styles.grid}>
				<div className={styles.hobbies}>
					<h4 className={styles.title}>🧗‍♂️ Hobbies</h4>
					<p>
						I love learning new things, hiking in the woods and mountains, and
						exploring
					</p>
				</div>
				<div className={styles.interests}>
					<h4 className={styles.title}>💡 Interests</h4>
					<p>I love languages (both Human and Computer), history and trivia</p>
				</div>
				<div className={styles.funFacts}>
					<h4 className={styles.title}>✨ Fun facts</h4>
					<ol>
						<li>
							🐉 I spent 4 years in China and speak fluent Mandarin Chinese
						</li>
						<li>
							🌍 I started reading encyclopedias at the age of 6, starting with
							an encyclopedia on the World's countries and cultures
						</li>
						<li>
							👨‍✈️ My childhood dream like many was to become a airplane pilot or
							Zookeeper
						</li>
						<li>
							🖥️ My first introduction to computers was through the game 'Bubble
							Shooter', which I played on an old computer running the then
							recent Windows XP
						</li>
						<li>
							👨‍🍳🌶️ I'm a pretty decent cook and I love spicy food, so I often
							make spicy dishes from India and China (especially Szechuan
							Cuisine 四川菜)
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
};
