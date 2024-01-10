import './style.css'
import  MainSwiper  from './../main/swiper/Swiper'

const Main = () => {
	return (
		<main className='section'>
			<div className='container'>
				<ul className='content-list'>
					<li className='content-list__item'>
						<h2 className='title-2'>Frontend</h2>
						<p>
							JavaScript, ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI,
							TailwindCSS, StyledComponents
						</p>
					</li>
					<li className='content-list__item'>
						<h2 className='title-2'>Backend</h2>
						<p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
					</li>
				</ul>
			</div>
				<MainSwiper/>
		</main>
	)
}

export default Main
