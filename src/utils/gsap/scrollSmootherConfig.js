gsap.registerPlugin(ScrollSmoother)
import gsap from 'gsap'
import ScrollSmoother from './../gsap/libs/ScrollSmoother.min.js'

const scrollSmootherConfig = () => {
	return ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true,
	})
}

export default { scrollSmootherConfig }
