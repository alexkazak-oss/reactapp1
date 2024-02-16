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

	const handleInputChange = event => {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
		if (name === 'email') {
			setIsEmailValid(isValidEmail(value))
		}
	}

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
		<div
			className='header__form-content'
			ref={formRef}
			onFocus={handleFocus}
			onBlur={handleBlur}
		>
			<button className='form-btn btn' onClick={toggleFormVisibility}>
				Contact Me
			</button>

			<div className={`form-container ${isVisible ? 'visible' : ''}`}>
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
