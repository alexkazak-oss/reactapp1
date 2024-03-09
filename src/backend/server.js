const express = require('express')
const cookieParser = require('cookie-parser')
const https = require('https')
const fs = require('fs')

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())

// Установите SameSite=None; Secure для куки
app.use((req, res, next) => {
	res.setHeader('Set-Cookie', 'HttpOnly;Secure;SameSite=None')
	next()
})

app.get('/', (req, res) => {
	res.send('Привет, мир!')
})

const port = 3000

https
	.createServer(
		{
			key: fs.readFileSync('ключ.key'),
			cert: fs.readFileSync('сертификат.crt'),
		},
		app
	)
	.listen(port, () => {
		console.log(`Сервер запущен на порту ${port}`)
	})
