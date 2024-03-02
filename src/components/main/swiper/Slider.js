import { A11y, EffectCoverflow, Manipulation, Navigation } from 'swiper/modules'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import AnimationSliders from './animation/AnimationSliders'
import './style.css'

import { projects } from './../../../helpers/projectsList'
import { SlideButtons } from './SwiperNavigation'

export const Slider = () => {
	return (
		<Swiper
			modules={[EffectCoverflow, Manipulation, Navigation, A11y]}
			coverflowEffect={{
				rotate: 1,
				stretch: 2,
				depth: 100,
				modifier: 2,
			}}
			lazyPreloadPrevNext={true}
			speed={550}
			initialSlide={3}
			effect={'coverflow'}
			grabCursor={true}
			centeredSlides={true}
			loop={false}
			slidesPerView={2}
			spaceBetween={150}
			slideToClickedSlide={true}
			className='swiper-container'
			breakpoints={{
				270: {
					slidesPerView: 1.4,
					spaceBetween: 46,
					navigation: true,
				},
				768: {
					slidesPerView: 1.4,
					spaceBetween: 76,
				},
				1024: {
					slidesPerView: 1.8,
				},
			}}
		>
			{projects.map(project => (
				<SwiperSlide
					key={project.imgBig}
					link={project.gitHubLink}
					className='swiperSlide'
				>
					{
						<div className='slide-container'>
							<iframe
								width={'480'}
								height={500}
								className='slide-frame'
								onClick={project.id}
								allowfullscreen
								allow='fullscreen'
								title='Vimeo Video'
								src={project.videoLink}
							></iframe>
							<AnimationSliders />
						</div>
					}
				</SwiperSlide>
			))}

			<SlideButtons />
		</Swiper>
	)
}
