/** @format */

import React from "react";
import proyecto1 from "../images/plataforma-de-cursos.png";
import proyecto2 from "../images/404.png";
import def from "../images/default.jpeg";

const Gallery = () => {
	return (
		<section className="text-white bg-gray-900 body-font grid items-center">
			<div className="container px-5 mx-auto">
				<div className="flex flex-col text-center w-full mb-5">
					<h1 className="smx2:text-5xl text-2xl font-medium title-font my-4 text-red-700">
						Portafolio
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						With my knowledge in some web technologies, I've created a platform
						form learning languages to show a little of what I like to do the
						most and how to do it.
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
								<div className=" py-12 relative z-10 w-full border-4 border-gray-800 bg-red-900 opacity-0 hover:opacity-100">
									<h1 className="title-font text-lg font-medium text-white mb-3">
										Online Courses PLatform
									</h1>
									<p className="leading-relaxed">
										This platform allows you to add the languages courses you
										want to your shopping cart, and then buy them.
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
								href="https://thirsty-fermi-be297c.netlify.app"
								target="_blank"
								rel="noreferrer">
								<div className=" py-12 relative z-10 w-full border-4 border-gray-800 bg-red-900 opacity-0 hover:opacity-100">
									<h1 className="title-font text-lg font-medium text-white mb-3">
										Page 404
									</h1>
									<p className="leading-relaxed">
										This static page 404 it was created with Html and Csse 
										from scratch.
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
								<div className="py-12 relative z-10 w-full border-4 border-gray-800 bg-red-900 opacity-0 hover:opacity-100">
									<h1 className="title-font text-lg font-medium text-white mb-3">
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
								<div className="py-12 relative z-10 w-full border-4 border-gray-800 bg-red-900 opacity-0 hover:opacity-100">
									<h1 className="title-font text-lg font-medium text-white mb-3">
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
								<div className="py-12 relative z-10 w-full border-4 border-gray-800 bg-red-900 opacity-0 hover:opacity-100">
									<h1 className="title-font text-lg font-medium text-white mb-3">
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
								<div className="py-12 relative z-10 w-full border-4 border-gray-800 bg-red-900 opacity-0 hover:opacity-100">
									<h1 className="title-font text-lg font-medium text-white mb-3">
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
