import React, { useLayoutEffect, useState } from 'react'
import { projects } from './../../../helpers/projectsList'
import { ScrollTrigger } from './../../../utils/libs/ScrollTrigger.min'
import gsap from './../../../utils/libs/gsap.min'
import './mainDescriptionStyle.css'

const MainDescription = () => {
	const [tooltipText, setTooltipText] = useState('')
	const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
	const [tooltipVisible, setTooltipVisible] = useState()

	useLayoutEffect(() => {
		const mainExperienceWrapper = document.querySelector(
			'.main-experienceWrapper'
		)
		if (!mainExperienceWrapper) return

		const animateSections = () => {
			const sections = gsap.utils.toArray('.experience-container')
			const mainExperienceWrapperWidth = mainExperienceWrapper.offsetWidth

			gsap.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: 'none',
				scrollTrigger: {
					markers: true,
					speed: 100,
					trigger: mainExperienceWrapper,
					pin: true,
					scrub: 1,
					snap: 1 / (sections.length - 1),
					fastScrollEnd: true,
					start: 'top 0',
					end: `+=${mainExperienceWrapperWidth}`,
					invalidateOnRefresh: true,
				},
			})
		}

		animateSections()
		window.addEventListener('resize', animateSections)

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
			window.removeEventListener('resize', animateSections)
		}
	}, [])

	const handleMouseEnter = title => {
		setTooltipVisible(true)
		setTooltipText(title)
	}

	const handleMouseMove = event => {
		const cursorOffset = 100
		const x = event.pageX - cursorOffset + 50
		const y = event.pageY - cursorOffset + 50
		setTooltipPosition({ x, y })
	}

	const handleMouseLeave = () => {
		setTooltipVisible(false)
	}

	return (
		<>
			<section id='main-experience' className='main-experience'>
				<div className='main-experienceWrapper'>
					{projects.map((project, index) => (
						<div
							key={index}
							className='experience-container'
							style={{
								backgroundSize: '100%',
								backgroundRepeat: 'no-repeat',
							}}
							onMouseEnter={() => handleMouseEnter(project.skills)}
							onMouseMove={handleMouseMove}
							onMouseLeave={handleMouseLeave}
						>
							<span className='experience-text'>{project.skills}</span>
						</div>
					))}
				</div>
			</section>
			{tooltipVisible && (
				<div
					className='tooltip'
					style={{
						left: tooltipPosition.x,
						top: tooltipPosition.y,
						overflow: 'hidden',
					}}
				>
					{tooltipText}
				</div>
			)}
		</>
	)
}

export default MainDescription
