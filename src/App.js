import React, { useEffect, useRef } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import BtnScrollToTop from './components/btnScrollToTop/BtnScrollToTop'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
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

function AppWrapper() {
	const wrapperRef = useRef(null)
	const contentRef = useRef(null)

	useEffect(() => {
		ScrollSmoother.create({
			wrapper: wrapperRef.current,
			content: contentRef.current,
			speed: 800,
			smooth: 1.2,
			effects: true,
		})
	}, [])

	initializeGSAP()

	return (
		<>
			<div className='wrapper' id='wrapper' ref={wrapperRef}>
				<div className='content' id='' ref={contentRef}>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/project/:id' element={<Project />} />
						<Route path='/contacts' element={<Contacts />} />
					</Routes>
					<Footer />
				</div>
			</div>
			<BtnScrollToTop />
		</>
	)
}

function App() {
	return <AppWrapper />
}

function AppWithRouter() {
	useEffect(() => {
		ScrollTrigger.refresh()
	})
	return (
		<Router>
			<App />
		</Router>
	)
}

export default AppWithRouter
