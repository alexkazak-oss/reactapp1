import React, { useState } from 'react'
import './mainComments.scss'

const MainComments = () => {
	const [tooltipText, setTooltipText] = useState('')
	const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
	const [tooltipVisible, setTooltipVisible] = useState(false)

	const handleMouseEnter = title => {
		setTooltipVisible(true)
		setTooltipText(title)
	}

	const handleMouseMove = event => {
		setTooltipPosition({ x: event.clientX, y: event.clientY })
	}

	const handleMouseLeave = () => {
		setTooltipVisible(false)
	}

	return (
		<section
			className='main-comments-section'
			onMouseEnter={() => handleMouseEnter()}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<div className='container'>
				<h1>COMMENTS</h1>
				<div></div>
			</div>

			{tooltipVisible && (
				<div
					data-speed='0'
					data-lag='0'
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
		</section>
	)
}
export default MainComments
