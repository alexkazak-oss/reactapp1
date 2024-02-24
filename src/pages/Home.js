import React, { useEffect } from 'react'

import Header from '../components/header/Header'
import Main from './../components/main/Main'
import { ScrollTrigger } from './../utils/libs/ScrollTrigger.min'



const Home = () => {
	useEffect(() => {
		ScrollTrigger.refresh()
	})
	return (
		<>
			<Header />
			<Main />
		</>
	)
}

export default Home
