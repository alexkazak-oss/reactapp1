import { projects } from './../../../helpers/projectsList'
import './style.css'

const Skill = () => {
	return projects.map(mySkill => {
		return mySkill.skills
	})
}

export const mySkill = el => {}
