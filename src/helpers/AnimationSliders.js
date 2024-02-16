import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'
import './animationText.css'

const AnimationSliders = () => {
	const textRef = useRef(null)
	const snapRef = useRef(null)
	const words = ['TICKER ITEM']

	useLayoutEffect(() => {
		gsap.fromTo(
			textRef.current,
			{ x: -snapRef.current.clientWidth + 'px' },
			{ x: 100, duration: 10, repeat: -1, ease: 'none' }
		)
	}, [])

	const splitWordIntoLetters = word => {
		return word.split('')
	}

	// При наведении

	const handleMouseEnter = event => {
		event.target.classList.add('letter-hover')
	}
	const handleMouseLeave = event => {
		event.target.classList.remove('letter-hover')
	}

	return (
		<div className='ticker' ref={textRef}>
			<div className='ticker-wrapper' id='ticker-wrapper'>
				{words.map((word, index) => (
					<div className='ticker-item' key={index} id='ticker-item'>
						{splitWordIntoLetters(word).map((letter, index) => (
							<span
								ref={snapRef}
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
