import React, { useEffect } from 'react'
import { projects } from './../../../helpers/projectsList'
import { ScrollTrigger } from './../../../utils/libs/ScrollTrigger.min'
import gsap from './../../../utils/libs/gsap.min'
import './mainDescriptionStyle.css'

const MainDescription = () => {
	useEffect(() => {
		const animateSections = () => {
			let sections = gsap.utils.toArray('.experience-container')

			gsap.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: 'none',
				scrollTrigger: {
					speed: 100,
					trigger: '.main-experienceWrapper',
					pin: true,
					scrub: 1,
					snap: 2 / (sections.length - 1),
					fastScrollEnd: true,
					end:
						'+=' +
						document.querySelector('.main-experienceWrapper').offsetWidth,
				},
			})
		}

		animateSections()
		return () => {
			// Очистка анимаций при размонтировании компонента
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
		}
	}, [])

	return (
		<div id='main-experience' className='main-experience'>
			<div className='main-experienceWrapper'>
				{projects.map((project, index) => (
					<section
						key={index}
						className={`experience-container`}
						style={{
							backgroundSize: '100%',
							backgroundRepeat: 'no-repeat',
						}}
					>
						<span className='experience-text'>{project.skills}</span>
					</section>
				))}
			</div>
		</div>
	)
}

export default MainDescription
