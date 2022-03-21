/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
	return (
		<section className=" bg-gray-900 body-font h-screen grid ">
			<div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
				<div className=" lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-red-700">
						Humberto García
					</h1>
					<p className="mb-8 text-white leading-relaxed font-semibold">
						Soy un disarrolador web que se encuenta iniciando su propio camino en el mundo profesional. Mi pasión es programar. Cuando se trata de estar frente del ordenador creando paginas web o analizando problemas de maquetación, es todo un gusto para mi, dejame ayudarte con mi experiencía y conociemiento. Siempre busco retos que me hagan crecer!!.
					</p>
					<div className="flex justify-center">
						<NavLink to="/contact-me">
							<button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg">
								Contactame
							</button>
						</NavLink>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded"
						alt="hero"
						src="https://dummyimage.com/720x600"
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
