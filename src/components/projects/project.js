import { NavLink } from 'react-router-dom'
import './style.css'

const Project = ({ title, videoLink, index }) => {
	return (
		<NavLink to={`/project/${index}`}>
			<li className='project'>
				<iframe
					height={'project__frame'}
					width={'project__frame'}
					src={videoLink}
					alt={title}
					className='project__frame'
				/>
				<h3 className='project__title title__card'>{title}</h3>
			</li>
		</NavLink>
	)
}

export default Project
