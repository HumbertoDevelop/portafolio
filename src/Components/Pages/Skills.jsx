/** @format */

import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getSkills } from "../../redux/actionCreators";

const Skills = ({skills}) => {
	const skillDispatch = useDispatch();
	useEffect(() => {
		skillDispatch(getSkills(skills));
	}, [skillDispatch]);
	
	return (
		<section className="text-stone-300 bg-stone-900 body-font grid items-center" id="aptitudes">
			<div className="container px-5  mx-auto mdx1:h-screen grid content-center smx2:pt-28">
				<div className="text-center mb-20 smx2:mb-0 smx2:mt-10 ">
					<h1 className=" text-3xl smx2:text-4xl font-bold text-center title-font mb-4">
						Aptitudes Fuertes
					</h1>
				</div>
				<div className="flex flex-wrap lg:w-4/5 sm:mx-auto smx2:mb-2 mx-2">
					
				{skills?.map((s) => (
			<div className="p-2 sm:w-1/2 w-full" key={s}>
				<div className="bg-stone-900 rounded flex p-4 h-full items-center">
					<svg
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokejoin="round"
						strokeWidth="3"
						className="text-stone-400 w-6 h-6 flex-shrink-0 mr-4"
						viewBox="0 0 24 24">
						<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
						<path d="M22 4L12 14.01l-3-3"></path>
					</svg>
					<span className="title-font font-medium text-white">{s}</span>
				</div>
			</div>
	))}
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = state =>({
	skills: state.getReducer.skills,
})

export default connect(mapStateToProps, {})(Skills);
