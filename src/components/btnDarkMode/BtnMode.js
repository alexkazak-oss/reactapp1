import { useEffect } from 'react'
import detectDarkMode from '../../utils/detectDarkMode'
import { useLocalStorage } from './../../utils/localStorageHook'

import { ReactComponent as Moon } from './moon.svg'
import './style.css'
import { ReactComponent as Sun } from './sun.svg'

const BtnMode = () => {
	// const [darkMode, setDarkMode] = useState('light') Использую хук для сохранения темы

	const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

	useEffect(() => {
		if (darkMode === 'dark') {
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
		}
	}, [darkMode])

	const toggleDarkMode = () => {
		setDarkMode(currentValue => {
			return currentValue === 'light' ? 'dark' : 'light'
		})
	}

	const btnNormal = 'dark-mode-btn'
	const btnActive = 'dark-mode-btn dark-mode-btn--active'

	return (
		<button
			className={darkMode === 'dark' ? btnActive : btnNormal}
			onClick={toggleDarkMode}
		>
			<Sun alt='Light mode' className='dark-mode-btn__icon sun' />
			<Moon alt='Dark mode' className='dark-mode-btn__icon moon' />
		</button>
	)
}

export default BtnMode
