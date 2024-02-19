import { React } from 'react'
import scrollSmootherConfig from '../../utils/gsap/scrollSmootherConfig'
import BtnScrollToTop from '../btnScrollToTop/BtnScrollToTop'
import MainDescriptionGSAP from './../../utils/gsap/MainDescriptionGSAP'
import MainSwiper from './../main/swiper/Swiper'
import './style.css'


const Main = () => {
	scrollSmootherConfig()
	return (
		<main className='section'>
			<div className='container'>
				<ul className='content-list'>
					<li className='content-list__item' data-speed='0.9'>
						<h2 className='title-2'>Frontend</h2>
						<p className='text' data-speed='0.98'>
							JavaScript, ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI,
							TailwindCSS, StyledComponents
						</p>
					</li>
					<li className='content-list__item' data-speed='0.9'>
						<h2 className='title-2'>Backend</h2>
						<p>NodeJS, MySQL, PHP</p>
					</li>
				</ul>
			</div>
			<MainSwiper />
			<MainDescriptionGSAP />
			<BtnScrollToTop />
		</main>
	)
}

export default Main
