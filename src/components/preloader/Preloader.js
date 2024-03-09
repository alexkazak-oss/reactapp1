import styles from './style.module.scss'

import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

import { opacity, slideUp } from './anim'

// import './loderStyle.scss'

const words = [
	'Hello',
	'Bonjour',
	'Ciao',
	'Olà',
	'やあ',
	'Hallå',
	'Guten tag',
	'Hallo',
]

const Preloader = () => {
    const [index, setIndex] = useState(0)

		const [dimension, setDimension] = useState({ width: 0, height: 0 })

		useEffect(() => {
			setDimension({ width: window.innerWidth, height: window.innerHeight })
		}, [])

		useEffect(() => {
			if (index == words.length - 1) return

			setTimeout(
				() => {
					setIndex(index + 1)
				},
				index == 0 ? 1000 : 150
			)
		}, [index])

		const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
			dimension.height
		} Q${dimension.width / 2} ${dimension.height + 300} 0 ${
			dimension.height
		}  L0 0`

		const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
			dimension.height
		} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

		const curve = {
			initial: {
				d: initialPath,

				transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
			},

			exit: {
				d: targetPath,

				transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
			},
		}
	return (
		<>
			<motion.div
				variants={slideUp}
				initial='initial'
				exit='exit'
				className={styles.introduction}
			>
				{dimension.width > 0 && (
					<>
						<motion.p variants={opacity} initial='initial' animate='enter'>
							<span></span>
							{words[index]}
						</motion.p>

						<svg>
							<motion.path
								variants={curve}
								initial='initial'
								exit='exit'
							></motion.path>
						</svg>
					</>
				)}
			</motion.div>
			{/* <div className='loader-wrapper'>
				<div className='App__Svg'>
					<svg
						className='svg-loader'
						width='464'
						height='88'
						viewBox='0 0 464 88'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<mask
							id='mask0'
							width='781'
							height='245'
							x='0'
							y='0'
							maskUnits='userSpaceOnUse'
						>
							<path
								d='M0 57V0.359997H2.88V57H0ZM5.76 57V0.359997H14.4V57H5.76ZM17.28 57V0.359997H20.16V57H17.28ZM23.04 57V0.359997H25.92V57H23.04ZM34.56 57V0.359997H43.2V57H34.56ZM16.512 65.352H19.392V65.64C19.264 65.768 19.168 65.928 19.104 66.12C19.104 66.248 19.104 66.536 19.104 66.984V85.512H29.76V87.624H16.512V65.352ZM70.125 57V0.359997H78.765V57H70.125ZM81.645 57V0.359997H84.525V57H81.645ZM87.405 57V0.359997H96.045V57H87.405ZM98.925 57V0.359997H101.805V57H98.925ZM110.445 57V0.359997H113.325V57H110.445ZM93.165 88.008C90.605 88.008 88.653 87.016 87.309 85.032C85.901 83.048 85.197 80.232 85.197 76.584C85.197 73.064 85.901 70.28 87.309 68.232C88.717 66.248 90.669 65.256 93.165 65.256C95.661 65.256 97.613 66.248 99.021 68.232C100.429 70.28 101.133 73.064 101.133 76.584C101.133 80.232 100.429 83.048 99.021 85.032C97.677 87.016 95.725 88.008 93.165 88.008ZM93.165 85.8C94.893 85.8 96.205 85.032 97.101 83.496C98.061 81.896 98.541 79.592 98.541 76.584C98.541 73.768 98.061 71.528 97.101 69.864C96.141 68.264 94.829 67.464 93.165 67.464C91.501 67.464 90.189 68.264 89.229 69.864C88.269 71.528 87.789 73.768 87.789 76.584C87.789 79.592 88.237 81.896 89.133 83.496C90.093 85.032 91.437 85.8 93.165 85.8ZM140.25 57V0.359997H148.89V57H140.25ZM151.77 57V0.359997H154.65V57H151.77ZM157.53 57V0.359997H160.41V57H157.53ZM169.05 57V0.359997H171.93V57H169.05ZM174.81 57V0.359997H183.45V57H174.81ZM166.842 81.096H159.642L157.434 87.624H154.938L163.098 64.968H163.386L171.642 87.624H169.05L166.842 81.096ZM166.17 79.176L163.29 70.728L160.314 79.176H166.17ZM210.375 57V0.359997H213.255V57H210.375ZM216.135 57V0.359997H219.015V57H216.135ZM221.895 57V0.359997H230.535V57H221.895ZM239.175 57V0.359997H242.055V57H239.175ZM244.935 57V0.359997H253.575V57H244.935ZM226.407 65.352H231.591C233.447 65.352 234.887 65.608 235.911 66.12C236.999 66.632 237.927 67.4 238.695 68.424C240.167 70.344 240.903 73.064 240.903 76.584C240.775 80.232 239.943 82.984 238.407 84.84C236.871 86.76 234.471 87.688 231.207 87.624H226.407V65.352ZM231.015 85.704C235.943 85.704 238.407 82.728 238.407 76.776C238.407 73.768 237.863 71.464 236.775 69.864C235.623 68.264 233.831 67.464 231.399 67.464H228.807V85.704H231.015ZM280.5 57V0.359997H283.38V57H280.5ZM286.26 57V0.359997H294.9V57H286.26ZM297.78 57V0.359997H300.66V57H297.78ZM309.3 57V0.359997H317.94V57H309.3ZM320.82 57V0.359997H323.7V57H320.82ZM297.492 85.512H301.908V67.464H297.78V65.352H308.82V67.464H304.404V85.512H309.012V87.624H297.492V85.512ZM350.625 57V0.359997H353.505V57H350.625ZM356.385 57V0.359997H359.265V57H356.385ZM362.145 57V0.359997H370.785V57H362.145ZM373.665 57V0.359997H376.545V57H373.665ZM385.185 57V0.359997H393.825V57H385.185ZM366.561 65.352H368.961L378.273 81.864V65.352H381.057V65.64C380.865 65.768 380.769 65.928 380.769 66.12C380.705 66.248 380.673 66.536 380.673 66.984V87.624H378.753L368.865 70.152V87.624H366.561V65.352ZM420.75 57V0.359997H423.63V57H420.75ZM426.51 57V0.359997H429.39V57H426.51ZM432.27 57V0.359997H435.15V57H432.27ZM443.79 57V0.359997H452.43V57H443.79ZM455.31 57V0.359997H463.95V57H455.31ZM444.75 88.008C442.958 88.008 441.422 87.528 440.142 86.568C438.862 85.672 437.87 84.36 437.166 82.632C436.462 80.968 436.11 79.016 436.11 76.776C436.11 73.832 436.558 71.496 437.454 69.768C438.35 68.04 439.438 66.824 440.718 66.12C441.998 65.48 443.278 65.16 444.558 65.16C445.902 65.16 447.182 65.512 448.398 66.216C449.678 66.856 450.606 67.752 451.182 68.904L449.454 70.248L449.166 70.536L449.07 70.344C449.07 70.152 449.038 69.96 448.974 69.768C448.846 69.64 448.654 69.416 448.398 69.096C447.822 68.456 447.246 68.008 446.67 67.752C446.094 67.496 445.39 67.368 444.558 67.368C442.83 67.368 441.39 68.04 440.238 69.384C439.15 70.792 438.606 73.064 438.606 76.2C438.606 79.272 439.15 81.64 440.238 83.304C441.326 84.968 442.83 85.8 444.75 85.8C445.454 85.8 446.19 85.672 446.958 85.416C447.79 85.224 448.462 84.904 448.974 84.456V79.176H444.942V76.968H451.278V85.704C449.166 87.24 446.99 88.008 444.75 88.008Z'
								fill='white'
							/>
						</mask>
						<g mask='url(#mask0)'>
							<path fill='url(#paint0_linear)' d='M0 0H780.75V144.74H0z'></path>
						</g>
						<defs>
							<linearGradient
								id='paint0_linear'
								x1='17.506'
								x2='404.952'
								y1='17.056'
								y2='448.746'
								gradientUnits='userSpaceOnUse'
							>
								<stop
									className='svg__gradient svg__gradient_1'
									offset='0.036'
									stopColor='#48cce0'
								></stop>
								<stop
									className='svg__gradient svg__gradient_2'
									offset='0.328'
									stopColor='#505add'
								></stop>
								<stop
									className='svg__gradient svg__gradient_3'
									offset='0.641'
									stopColor='#be40c0'
								></stop>
								<stop
									className='svg__gradient svg__gradient_4'
									offset='0.958'
									stopColor='#fba82b'
								></stop>
							</linearGradient>
						</defs>
					</svg>
				</div>
			</div> */}
		</>
	)
}

export default Preloader
