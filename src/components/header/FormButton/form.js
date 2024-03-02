import emailjs from 'emailjs-com'
import React, { useEffect, useRef, useState } from 'react'
import CustomSelect from './CustomSelect'
import './form.css'

const HeaderForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [isEmailValid, setIsEmailValid] = useState(true)
	const [isVisible, setIsVisible] = useState(false)
	const [activeField, setActiveField] = useState(true)
	const [startX, setStartX] = useState(null)

	const formRef = useRef(null)
	useEffect(() => {
		const handleOutsideClick = event => {
			if (
				formRef.current &&
				!formRef.current.contains(event.target) &&
				isVisible
			) {
				setIsVisible(false)
			}
		}
		document.addEventListener('click', handleOutsideClick)
		return () => {
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [isVisible])

	const sendEmail = () => {
		// идентификаторы сервиса и шаблона
		const serviceId = 'service_70xxj2k' //service id
		const templateId = 'template_4jrz69e' //template id

		// Данные формы для отправки
		const data = {
			name: formData.name,
			email: formData.email,
			message: formData.message,
		}

		// Отправка данных формы с помощью emailjs  //user id
		emailjs
			.send(serviceId, templateId, data, 'WCvXfl8qNVhrJVau0')
			.then(response => {
				console.log('!!!!Email успешно отправлен!!!!', response)
			})
			.catch(error => {
				console.error('Ошибка отправки email:', error)
			})
	}

	const toggleFormVisibility = () => {
		setIsVisible(!isVisible)
	}

	// Тач
	const handleTouchStart = event => {
		// Получить координаты касания
		const startX = event.touches[0].clientX
		// начальные координаты касания в состояние или переменную
		setStartX(startX)
	}
	const handleTouchMove = event => {
		// касание внутри блока формы
		if (formRef.current && formRef.current.contains(event.target)) {
			// текущие координаты касания
			const currentX = event.touches[0].clientX
			// определить направление свайпа
			handleSwipe(startX, currentX)
		}
	}
	const handleTouchEnd = () => {
		// Сбросить начальные координаты касания
		setStartX(null)
	}
	const handleSwipe = (startX, currentX) => {
		//  длина свайпа по горизонтали
		const deltaX = currentX - startX
		// Пороговое значение для определения свайпа
		const threshold = 100
		if (deltaX < -threshold) {
			// Свайп влево, скрыть форму
			toggleFormVisibility()
		}
	}

	const handleInputChange = event => {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
		if (name === 'email') {
			setIsEmailValid(isValidEmail(value))
		}
	}

	//Проверка на @
	const isValidEmail = email => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	}

	const handleSubmit = async event => {
		event.preventDefault()
		// логика обработки отправки данных формы
		console.log('Данные формы:', formData)
		// Отправка данных формы по электронной почте
		sendEmail()
	}

	// Переключение с помощью Tab
	const handleKeyDown = event => {
		if (event.key === 'Tab') {
			const focusableElements = formRef.current.querySelectorAll(
				'input, textarea, button, .select-button, .options-container, input'
			)
			const firstElement = focusableElements[0]
			const lastElement = focusableElements[focusableElements.length - 1]

			if (!event.shiftKey && document.activeElement === lastElement) {
				event.preventDefault()
				firstElement.focus()
			} else if (event.shiftKey && document.activeElement === firstElement) {
				event.preventDefault()
				lastElement.focus()
			}
		}
	}

	// состояние при фокусе
	const handleFocus = event => {
		setActiveField(event.target.name)
	}
	const handleBlur = () => {
		setActiveField(null)
	}

	return (
		<div className='header__form-content' ref={formRef}>
			<button className='cta' onClick={toggleFormVisibility}>
				<svg
					className='first-svg'
					width='66px'
					height='43px'
					viewBox='0 0 66 43'
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g
						id='arrow'
						stroke='none'
						stroke-width='1'
						fill='none'
						fill-rule='evenodd'
					>
						<path
							class='one'
							d='M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z'
							fill='#FFFFFF'
						></path>
						<path
							class='two'
							d='M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z'
							fill='#FFFFFF'
						></path>
						<path
							class='three'
							d='M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z'
							fill='#FFFFFF'
						></path>
					</g>
				</svg>
				<svg class='inbox' aria-hidden='false' fill='none' viewBox='0 0 24 24'>
					<path
						stroke='currentColor'
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='0.6'
						d='M11 16v-5.5C11 8.5 9.4 7 7.5 7m3.5 9H4v-5.5C4 8.5 5.6 7 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1'
					/>
				</svg>
				<svg
					width='66px'
					height='43px'
					viewBox='0 0 66 43'
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g
						id='arrow'
						stroke='none'
						stroke-width='1'
						fill='none'
						fill-rule='evenodd'
					>
						<path
							class='one'
							d='M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z'
							fill='#FFFFFF'
						></path>
						<path
							class='two'
							d='M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z'
							fill='#FFFFFF'
						></path>
						<path
							class='three'
							d='M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z'
							fill='#FFFFFF'
						></path>
					</g>
				</svg>
			</button>

			<div
				className={`form-container ${
					isVisible ? 'form-container-visible' : ''
				}`}
				ref={formRef}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
				<form className='form' onSubmit={handleSubmit}>
					<div className='form__inputs'>
						<input
							name='name'
							value={formData.name}
							onChange={handleInputChange}
							type='text'
							className={`form-text name ${
								activeField === 'name' ? 'form-active' : ''
							}`}
							placeholder='Name'
						/>
						<input
							name='email'
							value={formData.email}
							onChange={handleInputChange}
							type='email'
							className={`form-text email ${
								activeField === 'email' ? 'form-active' : ''
							}`}
							placeholder='E-mail'
						/>
						<textarea
							id='message'
							name='message'
							type='message'
							value={formData.message}
							onChange={handleInputChange}
							className={`form-text text ${
								activeField === 'message' ? 'form-active' : ''
							}`}
							placeholder='Message'
						/>
					</div>
					<button
						name='submit'
						type='submit'
						className={`form-submit vertical-button ${
							activeField === 'submit' ? 'form-active' : ''
						}`}
						// value={formData.email}
						onClick={handleSubmit}
					>
						<span>S</span>
						<span>E</span>
						<span>N</span>
						<span>T</span>
					</button>
					<CustomSelect />
				</form>
			</div>
		</div>
	)
}

export default HeaderForm
