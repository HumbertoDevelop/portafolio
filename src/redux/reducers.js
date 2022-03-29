/** @format */

import { GET_INFO, GET_SKILLS, GET_PROJECTS } from "./action";

const getReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_INFO:
			return {
				...state,
				info: action.info,
			};
		case GET_SKILLS:
			return {
				...state,
				skills: action.skills,
			};
		case GET_PROJECTS:
			return {
				...state,
				projects: action.projects,
			};

		default:
			return state;
	}
};

export { getReducer };
