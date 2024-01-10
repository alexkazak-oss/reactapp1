import { EffectCoverflow, Manipulation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import './style.css'

import slideImage1 from './swiperCards/card1.jpg'
import slideImage2 from './swiperCards/card2.jpg'
import slideImage3 from './swiperCards/card3.jpg'
import slideImage4 from './swiperCards/card4.jpg'
import slideImage5 from './swiperCards/card5.jpg'
import slideImage6 from './swiperCards/card6.jpg'

const MainSwiper = () => {
	return (
		<Swiper
			effect={'coverflow'}
			grabCursor={true}
			mousewheel={true}
			centeredSlides={true}
			loop={true}
			slidesPerView={'2.4'}
			spaceBetween={10}
			coverflowEffect={{
				rotate: 10,
				stretch: 10,
				depth: 200,
				modifier: 2.5,
			}}
			modules={[EffectCoverflow, Manipulation]}
			className='swiper_container'
		>
			<SwiperSlide className='swiperSlide'>
				{({ isActive }) => (
					<div>Current slide is {isActive ? 'active' : 'not active'}</div>
				)}
				<img src={slideImage1} className='slideCard ' alt='slide' />
			</SwiperSlide>

			<SwiperSlide className='swiperSlide'>
				<img src={slideImage2} className='slideCard' alt='slide' />
			</SwiperSlide>
			<SwiperSlide className='swiperSlide'>
				<img src={slideImage3} className='slideCard' alt='slide' />
			</SwiperSlide>
			<SwiperSlide className='swiperSlide'>
				<img src={slideImage4} className='slideCard' alt='slide' />
			</SwiperSlide>
			<SwiperSlide className='swiperSlide'>
				<img src={slideImage5} className='slideCard' alt='slide' />
			</SwiperSlide>
			<SwiperSlide className='swiperSlide'>
				<img src={slideImage6} className='slideCard' alt='slide' />
			</SwiperSlide>
		</Swiper>
	)
}

export default MainSwiper
