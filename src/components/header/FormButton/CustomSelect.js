import React, { useState } from 'react'
import './customSelect.css'

const CustomSelect = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOptions, setSelectedOptions] = useState([])

	const options = ['Front-end', 'Recoding', 'Consulting', 'Design', 'Back-end']

	const toggleOptions = () => {
		setIsOpen(!isOpen)
	}

	const handleOptionClick = option => {
		if (selectedOptions.includes(option)) {
			setSelectedOptions(selectedOptions.filter(item => item !== option))
		} else {
			setSelectedOptions([...selectedOptions, option])
		}
	}

	// On Focus
	const [activeField, setActiveField] = useState(true)
	const handleFocus = event => {
		setActiveField(event.target.name)
	}
	const handleBlur = () => {
		setActiveField(null)
	}

	return (
		<div className='custom-select' onFocus={handleFocus} onBlur={handleBlur}>
			<button
				name='select-button'
				className={`select-button ${
					activeField === 'select-button' && isOpen ? 'form-active' : ''
				}`}
				onClick={toggleOptions}
			>
				<span>S</span>
				<span>E</span>
				<span>L</span>
				<span>E</span>
				<span>C</span>
				<span>T</span>
			</button>

			<div className='options-wrapper'>
				<div className={`options-container ${isOpen ? 'open' : ''}`}>
					{options.map(option => (
						<label key={option}>
							<input
								className='check-box'
								name='checkbox'
								type='checkbox'
								value={option}
								checked={selectedOptions.includes(option)}
								onChange={() => handleOptionClick(option)}
							/>
							<span className='check-box__text'>{option}</span>
						</label>
					))}
				</div>
			</div>
		</div>
	)
}

export default CustomSelect
