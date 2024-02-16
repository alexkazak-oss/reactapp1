import { useParams } from 'react-router-dom'

import BtnGitHub from '../components/btnGitHub/btnGitHub'
import { projects } from '../helpers/projectsList'

const Project = () => {
	const { id } = useParams()
	const project = projects[id]

	return (
		<main className='section'>
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>{project.title}</h1>

					{/* <img
						src={project.imgBig}
						alt={project.title}
						className='project-details__cover'
					/> */}
					<video controls>
						<source
							src={project.videoLink}
							type='video/mp4'
							height={500}
							width={500}
							frameborder='0'
							id='id'
							allow='autoplay; fullscreen'
							allowfullscreen
							title='Vimeo Video'
						/>
					</video>
					<iframe
						height={500}
						width={500}
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
