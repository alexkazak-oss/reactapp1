import React, { useLayoutEffect, useState } from 'react'
import { projects } from '../../../helpers/projectsList'
import { ScrollTrigger } from '../../../utils/libs/ScrollTrigger.min'
import gsap from '../../../utils/libs/gsap.min'
import './mainDescriptionStyle.css'

const MainDescription = () => {
	const [tooltipText, setTooltipText] = useState('')
	const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
	const [tooltipVisible, setTooltipVisible] = useState()

	useLayoutEffect(() => {
		const mainExperienceContainer = document.querySelector(
			'.main-experience__section'
		)
		if (!mainExperienceContainer) return null

		const animateSections = () => {
			const sections = gsap.utils.toArray('.experience-container')
			const mainExperienceContainerWidth = mainExperienceContainer.offsetWidth

			gsap.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: 'none',
				scrollTrigger: {
					markers: true,
					speed: 100,
					trigger: mainExperienceContainer,
					pin: true,
					scrub: 1,
					snap: 1 / (sections.length - 1),
					fastScrollEnd: false,
					start: 'top 0',
					end: `+=${mainExperienceContainerWidth} top 0`,
					invalidateOnRefresh: true,
					mobile: {
						breakpoint: 0,
						smoothMobile: true,
						getDirection: true,
					},
				},
			})
		}

		animateSections()
		window.addEventListener('.experience-container', animateSections)

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
			window.removeEventListener('.experience-container', animateSections)
		}
	}, [])

	const handleMouseEnter = title => {
		setTooltipVisible(true)
		setTooltipText(title)
	}

	const handleMouseMove = event => {
		const cursorOffset = 0
		const x = event.pageX - cursorOffset
		const y = event.pageY - cursorOffset
		setTooltipPosition({ x, y })
	}

	const handleMouseLeave = () => {
		setTooltipVisible(false)
	}

	return (
		<>
			<section className='main-experience__section'>
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
			</section>
			{tooltipVisible && (
				<div
					data-speed='-100'
					data-lag='-110'
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
