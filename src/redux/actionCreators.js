import axios from "axios";
import { GET_INFO, GET_SKILLS, GET_PROJECTS } from "./action";

const API_URL = process.env.REACT_APP_URL_API;

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
		.get(`${process.env.REACT_APP_URL_API}/skills`)
		.then((res) => {
			return dispatch({type: GET_SKILLS, skills: res.data})
		})
		.catch((e) => {
			console.error(e);
		});
}
export const getProjects = () => (dispatch) => {
    axios
		.get(`${process.env.REACT_APP_URL_API}/gallery`)
		.then((res) => {
			return dispatch({type: GET_PROJECTS, projects: res.data})
		})
		.catch((e) => {
			console.error(e);
		});
}