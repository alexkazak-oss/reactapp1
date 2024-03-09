// Клиентский JavaScript
const form = document.getElementById('myForm')

form.addEventListener('submit', async e => {
	e.preventDefault()

	const formData = new FormData(form)

	try {
		const response = await fetch('/submit-form', {
			method: 'POST',
			body: formData,
		})

		if (response.ok) {
			alert('Данные успешно отправлены!')
			form.reset()
		} else {
			throw new Error('Произошла ошибка при отправке данных.')
		}
	} catch (error) {
		console.error(error.message)
		alert('Произошла ошибка при отправке данных.')
	}
})

// Серверный JavaScript (Node.js с использованием Express и nodemailer)
const express = require('express')
const multer = require('multer')
const nodemailer = require('nodemailer')
const app = express()
const port = 3000

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/')
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname)
	},
})

const upload = multer({ storage: storage })

app.post('/submit-form', upload.array('images'), (req, res) => {
	const { name, email, message } = req.body
	const images = req.files

	// Отправка данных на почту
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'your-email@gmail.com',
			pass: 'your-password',
		},
	})

	const mailOptions = {
		from: 'your-email@gmail.com',
		to: 'recipient@example.com',
		subject: 'Новое сообщение с сайта',
		text: `От: ${name}\nEmail: ${email}\nСообщение: ${message}`,
		attachments: images.map(image => ({ path: image.path })),
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error(error)
			res.status(500).send('Произошла ошибка при отправке почты.')
		} else {
			console.log('Email sent: ' + info.response)
			res.sendStatus(200)
		}
	})
})

app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`)
})
