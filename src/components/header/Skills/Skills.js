import React, { useEffect, useState } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

const SkillComponent = ({ items, onSlideChange }) => {
	const [setActiveIndex] = useState(0)
	
	useEffect(() => {
		const mySwiper = new Swiper('.swiper-container', {
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			on: {
				slideChange: function () {
					const currentIndex = this.activeIndex
					setActiveIndex(currentIndex)
					onSlideChange(currentIndex)
				},
			},
		})

		return () => {
			mySwiper.destroy()
		}
	})
	return (
		<div className='swiper-container'>
			<div className='swiper-wrapper'>
				{items.map(item => (
					<div key={item.id} className='swiper-slide'>
						<p>{item.title}</p>
					</div>
				))}
			</div>
			<div className='swiper-pagination'></div>
			<img />
		</div>
	)
}

export default SkillComponent
