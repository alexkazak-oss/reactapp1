import React, { useCallback, useState } from 'react'
import './customSelect.scss'

const CustomSelect = ({selectedOptionsProp, selectedFilesProp}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOptions, setSelectedOptions] = useState([])
	const [selectedFiles, setSelectedFiles] = useState([])
	const [prevInView, setPrevInView] = useState(false)
	const [activeField, setActiveField] = useState(false)

	const options = [
		'Front-end',
		'Recoding',
		'Consulting',
		'Design',
		'Back-end',
		'Review',
	]

	const handleOptionClick = useCallback(option => {
		setSelectedOptions(prevOptions => {
			if (prevOptions.includes(option)) {
				return prevOptions.filter(item => item !== option)
			} else {
				return [...prevOptions, option]
			}
		})
	}, [])

	// On Focus
	const handleFocus = event => {
		setActiveField(event.target.name)
	}
	const handleBlur = () => {
		setActiveField(null)
	}

	const handleFileChange = useCallback(event => {
		const files = Array.from(event.target.files)
		setSelectedFiles(prevFiles => [...prevFiles, ...files])
	}, [])

	const removeFile = useCallback(index => {
		setSelectedFiles(prevFiles => prevFiles.filter((file, i) => i !== index))
	}, [])

	const toggleOptions = () => {
		setIsOpen(!isOpen)
		if (prevInView) {
			setPrevInView(false)
		}
	}

	const toggleImg = useCallback(() => {
		setPrevInView(prevState => !prevState)
	}, [])

	return (
		<div className='custom-select-wrapper'>
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
						{/*								 Select Images								 */}

						<div className='custom-file-input'>
							<span id='file-chosen' onClick={toggleImg}>
								{selectedFiles.length > 0 && (
									<>
										<span id='file-counter'>{selectedFiles.length}</span>
										<svg fill='none' viewBox='0 1 24 24' id='preview-icon'>
											<path
												className={`preview-icon-disable ${
													prevInView ? 'preview-icon-active' : ''
												}`}
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='1.3'
												d='m3 16 5-8 6.6 7.5m6.5 2.5L16 13l-4.3 6m2.3-9h0M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z'
											/>
										</svg>
									</>
								)}
							</span>
							<input
								className='upload-input'
								type='file'
								name='file'
								id='fileInput'
								onChange={handleFileChange}
								accept='image/*'
								hidden
							/>
							<label className='upload-label' htmlFor='fileInput'>
								Select File
							</label>
						</div>

						{/*								 Inputs 								 */}
						<div className='check-box-container'>
							{options.map(option => (
								<label className='select-option-label' key={option}>
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
			</div>
			{/* 									Image Preview									 */}

			{selectedFiles.length > 0 && (
				<div
					id='file-preview '
					className={`file-preview ${
						prevInView ? 'file-preview-visible' : ''
					} `}
				>
					{selectedFiles.map((file, index) => (
						<div
							key={index}
							className='file-preview__item'
							id='file-preview__item'
						>
							<img
								id='preview-img'
								src={URL.createObjectURL(file)}
								alt={`Preview ${index}`}
							/>
							<button className='remove-img' onClick={() => removeFile(index)}>
								<svg
									fill='white'
									version='1.1'
									id='remove-iconSvg'
									width='20px'
									height='20px'
									viewBox='0 0 96 96'
								>
									<path
										d='M62.819,47.97l32.533-32.534c0.781-0.781,0.781-2.047,0-2.828L83.333,0.586C82.958,0.211,82.448,0,81.919,0
		c-0.53,0-1.039,0.211-1.414,0.586L47.97,33.121L15.435,0.586c-0.75-0.75-2.078-0.75-2.828,0L0.587,12.608
		c-0.781,0.781-0.781,2.047,0,2.828L33.121,47.97L0.587,80.504c-0.781,0.781-0.781,2.047,0,2.828l12.02,12.021
		c0.375,0.375,0.884,0.586,1.414,0.586c0.53,0,1.039-0.211,1.414-0.586L47.97,62.818l32.535,32.535
		c0.375,0.375,0.884,0.586,1.414,0.586c0.529,0,1.039-0.211,1.414-0.586l12.02-12.021c0.781-0.781,0.781-2.048,0-2.828L62.819,47.97
		z'
									/>
								</svg>
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default CustomSelect
