import './style.css'

import gitHub from './../../img/icons/gitHub.svg'
import instagram from './../../img/icons/instagram.svg'
import linkedIn from './../../img/icons/linkedIn.svg'
import twitter from './../../img/icons/twitter.svg'
import vk from './../../img/icons/vk.svg'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<ul className='social'>
						<li className='social__item'>
							<a href='https://vk.com/id823395662' target='blank'>
								<img src={vk} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='https://instagram.com/ale.kkz' target='blank'>
								<img src={instagram} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='#!' target='blank'>
								<img src={twitter} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='https://github.com/alexkazak-oss' target='blank'>
								<img src={gitHub} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='#!' target='blank'>
								<img src={linkedIn} alt='Link' />
							</a>
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
