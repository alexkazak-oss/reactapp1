'use client'
import React, { useLayoutEffect, useEffect } from 'react'

import Header from '../components/header/Header'
import Main from './../components/main/Main'
import { ScrollTrigger } from './../utils/libs/ScrollTrigger.min'
// import { AnimatePresence } from 'framer-motion'

const Home = () => {
	useLayoutEffect(() => {
		ScrollTrigger.refresh()
	}, [])

	// useEffect(() => {
	// 	;(async () => {
	// 		const LocomotiveScroll = (await import('locomotive-scroll')).default

	// 		const locomotiveScroll = new LocomotiveScroll()
	// 	})()
	// }, [])

	return (
		<>
			{/* <AnimatePresence mode='wait'>
				{isLoading && <Preloader />}
			</AnimatePresence> */}
			<Header />
			<Main />
		</>
	)
}

export default Home
