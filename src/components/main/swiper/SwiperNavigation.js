import { React } from 'react'
import { useSwiper } from 'swiper/react'
import arrowCircle from './../../../img/icons/arrow-circle.svg'

import './style.css'

export const SlideButtons = () => {
	const swiper = useSwiper()

	return (
		<div className='slide-buttons'>
			<button
				onClick={() => swiper.slidePrev()}
				className='btn-swiper btn-prev'
			>
				<img src={arrowCircle} alt='prev' className='btn-img prev' />
			</button>

			<button
				onClick={() => swiper.slideNext()}
				className='btn-swiper btn-next'
			>
				<img src={arrowCircle} alt='prev' className='btn-img next' />
			</button>
		</div>
	)
}
