import { React } from 'react'
import MainDescriptionGSAP from './../../utils/gsap/MainDescriptionGSAP'
import MainSwiper from './../main/swiper/Swiper'
import './style.css'
import BtnScrollToTop from '../btnScrollToTop/BtnScrollToTop'


const Main = () => {
	return (
		<main className='section'>
			<div className='container'>
				<ul data-speed='0.4' className='content-list'>
					<li className='content-list__item'>
						<h2 className='title-2'>Frontend</h2>
						<p className='text'>
							JavaScript, ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI,
							TailwindCSS, StyledComponents
						</p>
					</li>
					<li className='content-list__item'>
						<h2 className='title-2'>Backend</h2>
						<p>NodeJS, MySQL, PHP</p>
					</li>
				</ul>
			</div>
			<MainSwiper />
			<MainDescriptionGSAP />
			<BtnScrollToTop/>
		</main>
	)
}

export default Main
