import axios from "axios";
import { GET_INFO, GET_SKILLS, GET_PROJECTS } from "./action";

const API_URL = "https://portafolio-api-v2.herokuapp.com";
// const API_URL = "http://localhost:8000";

export const getMeInfo = () => (dispatch) => {
    axios
		.get(`${API_URL}/info`)
		.then((res) => {
			return dispatch({type: GET_INFO, info: res.data})
		})
		.catch((e) => {
			console.error(e);
		});
}
export const getSkills = () => (dispatch) => {
    axios
		.get(`${API_URL}/skills`)
		.then((res) => {
			return dispatch({type: GET_SKILLS, skills: res.data})
		})
		.catch((e) => {
			console.error(e);
		});
}
export const getProjects = () => (dispatch) => {
    axios
		.get(`${API_URL}/gallery`)
		.then((res) => {
			return dispatch({type: GET_PROJECTS, projects: res.data})
		})
		.catch((e) => {
			console.error(e);
		});
}