import React, { useEffect, useRef, useState } from 'react'
import starSvg from './../../../img/icons/star.svg'
import './mainDescriptionStyle.css'

const MainDescription = () => {
	const [scrollPosition, setScrollPosition] = useState(window.scrollY)
	const paragraphsRef = useRef([])

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		const handleAnimation = () => {
			paragraphsRef.current.forEach(ref => {
				if (ref) {
					const rect = ref.getBoundingClientRect()
					const centerY = window.innerHeight / 2
					const distanceFromCenter = Math.abs(
						centerY - (rect.top + rect.height / 2)
					)

					if (distanceFromCenter < centerY && distanceFromCenter * 1.2) {
						ref.classList.add('animated-scale-up')
					}
					if (distanceFromCenter < centerY / 1.2) {
						ref.classList.remove('animated-scale-down')
					} else {
						ref.classList.remove('animated-scale-up')
						ref.classList.add('animated-scale-down')
					}
				}
			})
		}

		window.addEventListener('scroll', handleAnimation)
		return () => {
			window.removeEventListener('scroll', handleAnimation)
		}
	}, [scrollPosition])

	return (
		<div className='main-experience'>
			<div className='main-experience__title'>
				<div
					data-speed='0.9'
					className='experience-container animated-scale-up animated-scale-down'
					ref={ref => (paragraphsRef.current[0] = ref)}
				>
					<div className='svg-container'>
						<img src={starSvg} alt='star' className='star-svg' />
					</div>
					<p>
						I take a responsible approach to each order and client, striving to
						create unique and functional solutions that meet your needs. I
						always follow the latest technology trends and updates to provide
						you with the best tools and features.
					</p>
				</div>

				<div
					className='experience-container animated-scale-up animated-scale-down'
					ref={ref => (paragraphsRef.current[1] = ref)}
				>
					<div className='svg-container'>
						<img src={starSvg} alt='star' className='star-svg' />
					</div>
					<p>
						My goal is not just to create a website, but to offer you a modern
						and innovative solution that will effectively solve your problems.
					</p>
				</div>

				<div
					className='experience-container animated-scale-up animated-scale-down'
					ref={ref => (paragraphsRef.current[2] = ref)}
				>
					<div className='svg-container'>
						<img src={starSvg} alt='star' className='star-svg' />
					</div>
					<p>
						Striving for an ideal result, I am ready to satisfy all your
						requests and wishes. Together we will create a web project that will
						differ not only in functionality, but also in quality of execution.
					</p>
				</div>
			</div>
		</div>
	)
}

export default MainDescription
