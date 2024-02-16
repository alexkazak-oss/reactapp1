import { NavLink } from 'react-router-dom'
import './style.css'


const Project = ( { title, img, index }) => {
	return (
		<NavLink to={`/project/${index}`}>
			<li className='project'>
					<img src={img} alt={title} className='project__img project__card' />
					<h3 className='project__title title__card'>{title}</h3>
			</li>
		</NavLink>
	)
}

export default Project
