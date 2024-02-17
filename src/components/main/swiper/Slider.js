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
				570: {
					slidesPerView: 1.2,
				},
				768: {
					slidesPerView: 1.4,
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
								width={'slide-frame'}
								height={'slide-frame'}
								className='slide-frame'
								onClick={project.id}
								allow='fullscreen'
								allowfullscreen
								title='Vimeo Video'
								src={project.videoLink}
							>

								
							</iframe>
							<AnimationSliders />
						</div>
					}
				</SwiperSlide>
			))}

			<SlideButtons />
		</Swiper>
	)
}
