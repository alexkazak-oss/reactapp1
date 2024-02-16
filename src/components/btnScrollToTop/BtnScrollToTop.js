import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import './btnScrollToTop.css'

const BtnScrollToTop = () => {
	const [isBtnVisible, setIsBtnVisible] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleScroll = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop
		setIsBtnVisible(scrollTop > window.innerHeight)
	}

	const scrollToTop = () => {
		scroll.scrollToTop({
			duration: 1000,
			smooth: true,
		})
	}
	return (
		<div
			className={`btn-scroll__container ${
				isBtnVisible ? 'btn-scroll__visible' : ''
			}`}
		>
			<button className='btn-scroll' onClick={scrollToTop}></button>
		</div>
	)
}

export default BtnScrollToTop
