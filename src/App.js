import './styles/main.css'
import './styles/media.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import Project from './pages/Project'
import Projects from './pages/Projects'

import ScrollToTop from './utils/scrollToTop'

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/project/:id' element={<Project />} />
				<Route path='/contacts' element={<Contacts />} />
			</Routes>

			<Footer />
		</Router>
	)
}

export default App
