import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'
import MainDescription from '../../components/main/MainDescription/MainDescription'
gsap.registerPlugin(ScrollTrigger)

const MainDescriptionGSAP = () => {
	useEffect(() => {
		const elements = document.querySelectorAll(
			'.main-experience__title .experience-container, .svg-container'
		)

		elements.forEach((element, index) => {
			gsap.from(element, {
				opacity: 0,
				x: -550,
				duration: 1,
				scrollTrigger: {
					trigger: element,
					start: 'top 650',
					end: 'bottom 1100',
					scrub: 1,
					// markers: true, // отображение маркеров для отладки
					onEnter: () => {
						gsap.to(element, { opacity: 1, duration: 0.6, delay: index * 0.1 })
					},
				},
			})
		})
	}, [])
	return <MainDescription />
}

export default MainDescriptionGSAP
