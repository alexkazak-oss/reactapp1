import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import './btnScrollToTop.css'

import gsap from './../../utils/libs/gsap.min'

const BtnScrollToTop = () => {
	const [isBtnVisible, setIsBtnVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop
			setIsBtnVisible(scrollTop > 260)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		gsap.to('.btn-scroll__container', {
			opacity: isBtnVisible ? 1 : 0,
			duration: 1,
		})
	}, [isBtnVisible])

	const scrollToTop = () => {
		scroll.scrollToTop({
			duration: 1000,
			smooth: true,
		})
	}

	return (
		<div
			className={`btn-scroll__container ${
				isBtnVisible ? 'visible ' : ''
			}`}
		>
			<button className='btn-scroll' onClick={scrollToTop}></button>
		</div>
	)
}

export default BtnScrollToTop
