import React from 'react'
import HeaderForm from './FormButton/Form'
import './hederStyle.scss'

const Header = () => {
	return (
		<>
			<header className='header'>
				<div className='header__wrapper'>
					<h1 className='header__title'>
						<strong>
							Hi, my name is <em>Alex</em>
						</strong>
						<br />a frontend developer
					</h1>
					<div className='header__text'>
						<p>with passion for learning and creating.</p>
					</div>
					<HeaderForm></HeaderForm>
				</div>
			</header>
		</>
	)
}

export default Header
