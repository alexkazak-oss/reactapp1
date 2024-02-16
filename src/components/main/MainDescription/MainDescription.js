import React from 'react'
import starSvg from './../../../img/icons/star.svg'
import './mainDescriptionStyle.css'

const MainDescription = () => {
	return (
		<div>
			<div className='main-experience'>
				<div className='main-experience__title'>
					<div className='experience-container'>
						<div className='svg-container'>
							<img src={starSvg} alt='star' className='star-svg' />
						</div>
						<p>
							I take a responsible approach to each order and client, striving
							to create unique and functional solutions that meet your needs. I
							always follow the latest technology trends and updates to provide
							you with the best tools and features.
						</p>
					</div>
					<div className='experience-container'>
						<div className='svg-container'>
							<img src={starSvg} alt='star' className='star-svg' />
						</div>
						<p>
							My goal is not just to create a website, but to offer you a modern
							and innovative solution that will effectively solve your problems.
						</p>
					</div>
					<div className='experience-container'>
						<div className='svg-container'>
							<img src={starSvg} alt='star' className='star-svg' />
						</div>
						<p>
							Striving for an ideal result, I am ready to satisfy all your
							requests and wishes. Together we will create a web project that
							will differ not only in functionality, but also in quality of
							execution.
						</p>
					</div>
				</div>
			</div>
			<></>
		</div>
	)
}

export default MainDescription
