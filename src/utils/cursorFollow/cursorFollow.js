import { useState, useEffect } from 'react'

const CursorFollow = () => {
	const [tooltipText, setTooltipText] = useState('')
	const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
	const [tooltipVisible, setTooltipVisible] = useState(false)

	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove)
		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	const handleMouseEnter = skills => {
		setTooltipVisible(true)
		setTooltipText(skills)
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
			{tooltipVisible && (
				<div
					className='tooltip'
					style={{
						left: tooltipPosition.x,
						top: tooltipPosition.y,
					}}
				>
					{tooltipText}
				</div>
			)}
		</>
	)
}

export default CursorFollow
