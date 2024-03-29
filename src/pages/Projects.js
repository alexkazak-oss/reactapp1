import React, { useEffect } from 'react'
import Project from '../components/projects/project'
import { projects } from '../helpers/projectsList'

import './pagesStyle.css'

const Projects = () => {
	useEffect(() => {
		ScrollTrigger.refresh()
	}, [])

	return (
		<div className='projects-section'>
			<main className='section'>
				<div className='container'>
					<h2 className='title-1'>Projects</h2>
					<ul className='projects'>
						{projects.map((project, id) => (
							<Project
								key={id}
								title={project.title}
								videoLink={project.videoLink}
								link={project.gitHubLink}
								index={id}
							/>
						))}
					</ul>
				</div>
			</main>
		</div>
	)
}

export default Projects
