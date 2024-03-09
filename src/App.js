import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import BtnScrollToTop from './components/btnScrollToTop/BtnScrollToTop'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Preloader from './components/preloader/Preloader' // Добавлен импорт компонента Preloader
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import Project from './pages/Project'
import Projects from './pages/Projects'
import './styles/main.css'
import './styles/media.css'
import { ScrollSmoother } from './utils/libs/ScrollSmoother.min'
import { ScrollTrigger } from './utils/libs/ScrollTrigger.min'
import gsap from './utils/libs/gsap.min'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function initializeGSAP() {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}

function AppWrapper({ isLoading }) {
	const wrapperRef = useRef(null)
	const contentRef = useRef(null)

	useEffect(() => {
		if (ScrollTrigger.isTouch !== 1) {
			ScrollSmoother.create({
				wrapper: wrapperRef.current,
				content: contentRef.current,
				speed: 800,
				smooth: 1.2,
				effects: true,
			})
			initializeGSAP()
		}
	}, [])

	return (
		<div className='wrapper' id='wrapper' ref={wrapperRef}>
			<div className='content' id='' ref={contentRef}>
				<AnimatePresence mode='wait'>
					{isLoading && <Preloader />}
				</AnimatePresence>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/project/:id' element={<Project />} />
					<Route path='/contacts' element={<Contacts />} />
				</Routes>
				<Footer />
			</div>
			<BtnScrollToTop />
		</div>
	)
}

function App() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
			document.body.style.cursor = 'default'
			window.scrollTo(0, 0)
		}, 2000)
	}, [])

	return (
		<>
			<AppWrapper isLoading={loading} />{' '}
		</>
	)
}

function AppWithRouter() {
	useEffect(() => {
		ScrollTrigger.refresh()
	}, [])

	return (
		<Router>
			<App />
		</Router>
	)
}

export default AppWithRouter
