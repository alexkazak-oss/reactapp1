import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'
import './animationText.css'

function AnimationSliders() {
	const textRefs = useRef([])
	const words = ['TICKER ITEM TICKER ITEM TICKER ITEM']
	const tickerWrapper = useRef()

	useLayoutEffect(() => {
		words.forEach((word, wordIndex) => {
			const letters = splitWordIntoLetters(word)
			const duration = 1 // Продолжительность анимации в секундах
			const delay = -1 // Задержка между запуском анимаций букв

			letters.forEach((letter, letterIndex) => {
				gsap.fromTo(
					textRefs.current[wordIndex][letterIndex],
					{
						x: -textRefs.current[wordIndex][letterIndex].clientWidth * 1,
						ease: 'none',
					},
					{
						x: tickerWrapper, // Перемещение до правого края блока
						ease: 'none',
						duration: duration,
						delay: delay * letters.length, // Задержка для каждой буквы
						repeat: -1, // Бесконечное повторение анимации
						repeatDelay: duration + wordIndex * (letters.length == 0), // Задержка перед повторным запуском анимации
					}
				)
			})
		})
	}, [])

	const splitWordIntoLetters = word => {
		return word.split('')
	}

	const handleMouseEnter = (event, i) => {
		event.target.classList.add('letter-hover')
	}

	const handleMouseLeave = event => {
		event.target.classList.remove('letter-hover')
	}

	return (
		<div className='ticker'>
			<div className='ticker-wrapper' id='ticker-wrapper' ref={tickerWrapper}>
				{words.map((word, wordIndex) => (
					<div
						className='ticker-item'
						key={wordIndex}
						id={`ticker-item-${wordIndex}`}
					>
						{splitWordIntoLetters(word).map((letter, letterIndex) => (
							<span
								key={letterIndex}
								className='letter'
								onMouseEnter={event => handleMouseEnter(event, letterIndex)}
								onMouseLeave={handleMouseLeave}
								ref={el => {
									if (!textRefs.current[wordIndex]) {
										textRefs.current[wordIndex] = []
									}
									textRefs.current[wordIndex][letterIndex] = el
								}}
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
