import './navbarMobile.scss'

const NavbarMobile = () => {
	return (
		<>
			<nav className='mobile-menu'>
				<input
					type='checkbox'
					href='#'
					className='menu-open'
					name='menu-open'
					id='menu-open'
				/>

				<label className='menu-open-button' for='menu-open'>
					<span className='hamburger hamburger-1'></span>
					<span className='hamburger hamburger-2'></span>
					<span className='hamburger hamburger-3'></span>
				</label>

				<a href='/' className='menu-item'>
					<svg aria-hidden='true' fill='none' viewBox='0 0 24 24'>
						<path
							stroke='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='0.6'
							d='m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5'
						/>
					</svg>
				</a>
				<a href='Projects' className='menu-item'>
					<svg aria-hidden='true' fill='none' viewBox='0 0 24 24'>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='0.6'
							d='m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14'
						/>
					</svg>
				</a>
				<a href='Contacts' className='menu-item'>
					<svg
						class='w-[24px] h-[24px] text-gray-800 dark:text-white'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
					>
						<path
							stroke='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='0.6'
							d='m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z'
						/>
					</svg>
				</a>
			</nav>

			<defs>
				<filter id='shadowed-goo'>
					<feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='10' />
					<feColorMatrix
						in='blur'
						mode='matrix'
						values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
						result='goo'
					/>
					<feGaussianBlur in='goo' stdDeviation='3' result='shadow' />
					<feColorMatrix
						in='shadow'
						mode='matrix'
						values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2'
						result='shadow'
					/>
					<feOffset in='shadow' dx='1' dy='1' result='shadow' />
					<feComposite in2='shadow' in='goo' result='goo' />
					<feComposite in2='goo' in='SourceGraphic' result='mix' />
				</filter>
				<filter id='goo'>
					<feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='10' />
					<feColorMatrix
						in='blur'
						mode='matrix'
						values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
						result='goo'
					/>
					<feComposite in2='goo' in='SourceGraphic' result='mix' />
				</filter>
			</defs>
		</>
	)
}

export default NavbarMobile
