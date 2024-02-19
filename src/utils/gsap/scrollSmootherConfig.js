gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
import gsap from './libs/gsap.min'
import ScrollTrigger from './libs/ScrollTrigger.min'
import ScrollSmoother from './../gsap/libs/ScrollSmoother.min.js'


const scrollSmootherConfig = () => {
	return ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true,
	})
}

export default  scrollSmootherConfig 
