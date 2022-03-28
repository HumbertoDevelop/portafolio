/** @format */

import React from "react";
import proyecto1 from "../images/plataforma-de-cursos.png";
import proyecto2 from "../images/404.png";
import proyecto3 from "../images/MovieApp.png";
import def from "../images/default.jpeg";

const Gallery = () => {
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
				<div className="flex flex-wrap m-4">
					<div className="lg:w-1/3 sm:w-1/2 p-2 ">
						<div className="flex relative h-full">
							<img
								alt="gallery"
								className="absolute inset-0 w-full h-full object-cover object-center"
								src={proyecto1}
							/>
							<a
								href="https://thirsty-fermi-be297c.netlify.app"
								target="_blank"
								rel="noreferrer">
								<div className=" py-12 relative z-10 w-full border-4 border-stone-500 px-2 bg-stone-900 opacity-0 hover:opacity-100 text-white">
									<h1 className="title-font text-lg font-medium  mb-3">
										Plataforma online de cursos de idiomas
									</h1>
									<p className="leading-relaxed">
										Esta plataforma te permite agregar el curso de un idioma que
										desees en tu carrito de compra y luego comprarlo
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="lg:w-1/3 sm:w-1/2 p-2 ">
						<div className="flex relative h-full">
							<img
								alt="gallery"
								className="absolute inset-0 w-full h-full object-cover object-center"
								src={proyecto2}
							/>
							<a
								href="https://gentle-praline-4a13cc.netlify.app/"
								target="_blank"
								rel="noreferrer">
								<div className=" py-12 relative z-10 w-full border-4 border-stone-500 px-2 bg-stone-900 opacity-0 hover:opacity-100 text-white">
									<h1 className="title-font text-lg font-medium  mb-3">
										Pagina 404
									</h1>
									<p className="leading-relaxed">
										Esta pagina estatica de error 404 fue creada con html5 y
										css3 desde el inicio.
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="lg:w-1/3 sm:w-1/2 p-2">
						<div className="flex relative h-full">
							<img
								alt="gallery"
								className="absolute inset-0 w-full h-full object-cover object-center"
								src={proyecto3}
							/>
							<a
								href="https://humbertodevelop.github.io/MovieApp-Js/"
								target="_blank"
								rel="noreferrer">
								<div className="py-12 relative z-10 w-full border-4 border-stone-500 px-2 bg-stone-900 opacity-0 hover:opacity-100 text-white">
									<h1 className="title-font text-lg font-medium  mb-3">
										App de peliculas
									</h1>
									<p className="leading-relaxed">
										App de peliculas creada desde el inicio con solo js y solo
										algunas etiquetas de html5 ademas contiene estilos css3 y
										una peticion http get a la Api TMDB de peliculas.
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="lg:w-1/3 sm:w-1/2 p-2">
						<div className="flex relative h-full">
							<img
								alt="gallery"
								className="absolute inset-0 w-full h-full object-cover object-center"
								src={def}
							/>
							<a href="/" target="_blank" rel="noreferrer">
								<div className="py-12 relative z-10 w-full border-4 border-stone-500 px-2 bg-stone-900 opacity-0 hover:opacity-100 text-white">
									<h1 className="title-font text-lg font-medium  mb-3">
										The Catalyzer
									</h1>
									<p className="leading-relaxed">
										Photo booth fam kinfolk cold-pressed sriracha leggings
										jianbing microdosing tousled waistcoat.
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="lg:w-1/3 sm:w-1/2 p-2">
						<div className="flex relative h-full">
							<img
								alt="gallery"
								className="absolute inset-0 w-full h-full object-cover object-center"
								src={def}
							/>
							<a href="/" target="_blank" rel="noreferrer">
								<div className="py-12 relative z-10 w-full border-4 border-stone-500 px-2 bg-stone-900 opacity-0 hover:opacity-100 text-white">
									<h1 className="title-font text-lg font-medium  mb-3">
										The Catalyzer
									</h1>
									<p className="leading-relaxed">
										Photo booth fam kinfolk cold-pressed sriracha leggings
										jianbing microdosing tousled waistcoat.
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="lg:w-1/3 sm:w-1/2 p-2">
						<div className="flex relative h-full">
							<img
								alt="gallery"
								className="absolute inset-0 w-full h-full object-cover object-center"
								src={def}
							/>
							<a href="/" target="_blank" rel="noreferrer">
								<div className="py-12 relative z-10 w-full border-4 border-stone-500 px-2 bg-stone-900 opacity-0 hover:opacity-100 text-white">
									<h1 className="title-font text-lg font-medium  mb-3">
										The Catalyzer
									</h1>
									<p className="leading-relaxed">
										Photo booth fam kinfolk cold-pressed sriracha leggings
										jianbing microdosing tousled waistcoat.
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
