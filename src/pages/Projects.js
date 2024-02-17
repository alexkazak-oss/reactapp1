import Project from '../components/projects/project'

import BtnScrollToTop from '../components/btnScrollToTop/BtnScrollToTop'
import { projects } from '../helpers/projectsList'

import './pagesStyle.css'

const Projects = () => {
	return (
		<>
			<main className='section'>
				<div className='container'>
					<h2 className='title-1'>Projects</h2>
					<ul className='projects'>
						{projects.map((project, id) => {
							return (
								<Project
									key={id}
									title={project.title}
									videoLink={project.videoLink}
									link={project.gitHubLink}
									index={id}
								/>
							)
						})}
					</ul>
				</div>
			</main>
			<BtnScrollToTop />
		</>
	)
}

export default Projects
