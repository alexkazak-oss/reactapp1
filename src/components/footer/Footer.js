import React, { useEffect, useRef } from 'react'

import { Link } from 'react-router-dom'
import gitHub from './../../img/icons/gitHub.svg'
import instagram from './../../img/icons/instagram.svg'
import linkedIn from './../../img/icons/linkedIn.svg'
import twitter from './../../img/icons/twitter.svg'
import vk from './../../img/icons/vk.svg'
import './style.scss'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<ul className='social'>
						<li className='social__item'>
							<Link
								to='https://vk.com/id823395662'
								target='_blank'
								rel='noreferrer'
							>
								<img className='socialLink-icon' src={vk} alt='VK icon' />
							</Link>
						</li>
						<li className='social__item'>
							<Link
								to='https://instagram.com/ale.kkz'
								target='blank'
								rel='noreferrer'
							>
								<img
									className='socialLink-icon'
									src={instagram}
									alt='Instagram Icon'
								/>
							</Link>
						</li>
						<li className='social__item'>
							<Link to='#!' target='blank' rel='noreferrer'>
								<img
									className='socialLink-icon'
									src={twitter}
									alt='Twitter Icon'
								/>
							</Link>
						</li>
						<li className='social__item'>
							<Link
								to='https://github.com/alexkazak-oss'
								target='blank'
								rel='noreferrer'
							>
								<img
									className='socialLink-icon'
									src={gitHub}
									alt='GitHub Icon'
								/>
							</Link>
						</li>
						<li className='social__item'>
							<Link to='#!' target='blank' rel='noreferrer'>
								<img
									className='socialLink-icon'
									src={linkedIn}
									alt='LinkedIn Icon'
								/>
							</Link>
						</li>
					</ul>
					<div className='copyright'>
						<p>© 2024 Alex Kazak</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
