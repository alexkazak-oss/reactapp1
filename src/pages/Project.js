import { useParams } from 'react-router-dom'

import BtnGitHub from '../components/btnGitHub/btnGitHub'
import { projects } from '../helpers/projectsList'
import { ScrollTrigger } from './../utils/libs/ScrollTrigger.min'
const Project = () => {

	const { id } = useParams()
	const project = projects[id]
	
	useEffect(() => {
		ScrollTrigger.refresh()
	})

	return (
		<main className='section'>
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>{project.title}</h1>
					<iframe
						height={800}
						width={1200}
						frameborder='0'
						id='id'
						allow='autoplay; fullscreen'
						allowfullscreen
						title='Vimeo Video'
						src={project.videoLink}
					></iframe>

					<div className='project-details__desc'>
						<p>{project.skills}</p>
					</div>

					{project.gitHubLink && <BtnGitHub link='https://github.com' />}
				</div>
			</div>
		</main>
	)
}

export default Project
