import React, { useEffect } from 'react'
import { ScrollTrigger } from './../utils/libs/ScrollTrigger.min'

const Contacts = () => {
	useEffect(() => {
		ScrollTrigger.refresh()
	})
	return (
		<>
			<main className='section contacts-section'>
				<div className='container'>
					<h1 className='title-1'>Contacts</h1>

					<ul className='content-list'>
						<li className='content-list__item'>
							<h2 className='title-2'>Location</h2>
							<p>Minsk, Belarus</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Telegram / WhatsApp</h2>
							<p>
								<a href='link'>+37 (33) 123-45-67</a>
							</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Email</h2>
							<p>
								<a href='mailto:alexandr.kazak.v@gmail.com'>
									alexandr.kazak.v@gmail.com
								</a>
							</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}

export default Contacts
