import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'
import './animationText.css'

function AnimationSliders() {
	const textRef = useRef(null)
	const snapRef = useRef(null)
	const words = ['TICKER ITEM TICKER ITEM TICKER ITEM']

	useLayoutEffect(() => {
		gsap.fromTo(
			snapRef.current,
			{ x: -snapRef.current.clientWidth, ease: 'none' },
			{
				x: +snapRef.current.clientWidth - 'px',
				duration: 7,
				ease: 'none',
				repeat: -1,
			}
		)
	}, [])

	const splitWordIntoLetters = word => {
		return word.split('')
	}

	// При наведении

	const handleMouseEnter = (event, i) => {
		event.target.classList.add('letter-hover'), i++
	}
	const handleMouseLeave = event => {
		event.target.classList.remove('letter-hover')
	}

	return (
		<div className='ticker' ref={snapRef}>
			<div className='ticker-wrapper' id='ticker-wrapper' ref={snapRef}>
				{words.map((word, index) => (
					<div
						className='ticker-item'
						key={index}
						id='ticker-item'
						ref={textRef}
					>
						{splitWordIntoLetters(word).map((letter, index) => (
							<span
								ref={textRef}
								id='letter'
								key={index}
								className='letter'
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
								{letter}
							</span>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default AnimationSliders
