/** @format */

import React, { useEffect } from "react";
import Gallery from "../Molecules/Gallery";

import def from "../images/default.jpeg";
import proyecto1 from "../images/plataforma-de-cursos.png";
import proyecto2 from "../images/404.png";
import proyecto3 from "../images/MovieApp.png";
import { connect, useDispatch } from "react-redux";
import { getProjects } from "../../redux/actionCreators";
const Projects = ({ projects }) => {
	const gallery = [proyecto1,proyecto2,proyecto3]
	const projectDispatch = useDispatch();
	useEffect(() => {
		projectDispatch(getProjects());
	}, []);
	console.log(projects);
	return (
		<section className="text-stone-400 font-semibold bg-stone-900 body-font  grid items-center ">
			<div
				className="container px-5 mx-auto  mdx1:pt-20 smx2:pt-32 "
				id="proyectos">
				<div className="flex flex-col text-center w-full mb-5">
					<h1 className="smx2:text-4xl text-2xl font-medium title-font my-4 text-stone-200 font-bold">
						Portafolio
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base font-semibold text-stone-300">
						Con mi conocimiento en algunas tecnologías web, he creado este
						portafolio para mostrarte un poco de lo que me gusta hacer y como lo
						se hacer.
					</p>
				</div>
				{projects?.projects.map(({id,content,title,url}) => (
					<Gallery key={id} content={content} title={title} url={url} src={gallery}  />
				))}
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	projects: state.getReducer.projects,
});

export default connect(mapStateToProps, {})(Projects);
