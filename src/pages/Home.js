import React, { useLayoutEffect } from 'react'

import Header from '../components/header/Header'
import Main from './../components/main/Main'
import { ScrollTrigger } from './../utils/libs/ScrollTrigger.min'

const Home = () => {
	useLayoutEffect(() => {
		ScrollTrigger.refresh()
	}, [])

	return (
		<>
			<Header />
			<Main />
		</>
	)
}

export default Home
