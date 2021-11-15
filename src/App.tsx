import React from 'react'
import './styles/reset.css'
import './styles/global.css'
import styles from './App.module.css'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'

function App() {
	return (
		<div className={styles.container}>
			<Header />
			<main></main>
			<Footer />
		</div>
	)
}

export default App
