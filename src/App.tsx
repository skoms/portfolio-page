import React from 'react'
import './styles/reset.css'
import './styles/global.css'
import styles from './App.module.css'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { ProfileHead } from './components/profileHead/ProfileHead'
import { About } from './components/about/About'
import { Projects } from './components/projects/Projects'

function App() {
	return (
		<div className={styles.container}>
			<Header />
			<main>
				<ProfileHead />
				<About />
				<Projects />
			</main>
			<Footer />
		</div>
	)
}

export default App
