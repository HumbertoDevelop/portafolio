/** @format */

import React from "react";

const Gallery = () => {
	return (
		<section className="text-white bg-gray-900 body-font h-screen grid items-center">
			<div className="container px-5  mx-auto">
				<div className="flex flex-col text-center w-full mb-5">
					<h1 className="sm:text-6xl text-2xl font-medium title-font mb-4 text-red-700">
						Portafolio
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Mi grupo de proyectos creados con mi conocimiento en algunas
						tecnologías web, para mostrar un poco de lo que mas me gusta hacer y
						como lo se hacer
					</p>
				</div>
				<div className="flex flex-wrap m-4">
					<div className="lg:w-1/3 sm:w-1/2 p-4">
						<div className="flex relative">
							<img
								alt="gallery"
								className="absolute inset-0 w-full h-full object-cover object-center"
								src="https://dummyimage.com/600x360"
							/>
							<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-red-900 opacity-0 hover:opacity-100">
								<h1 className="title-font text-lg font-medium text-white mb-3">
									Shooting Stars
								</h1>
								<p className="leading-relaxed">
									Photo booth fam kinfolk cold-pressed sriracha leggings
									jianbing microdosing tousled waistcoat.
								</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 sm:w-1/2 p-4">
						<div className="flex relative">
							<img
								alt="gallery"
								className="absolute inset-0 w-full h-full object-cover object-center"
								src="https://dummyimage.com/601x361"
							/>
							<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-red-900 opacity-0 hover:opacity-100">
								<h1 className="title-font text-lg font-medium text-white mb-3">
									The Catalyzer
								</h1>
								<p className="leading-relaxed">
									Photo booth fam kinfolk cold-pressed sriracha leggings
									jianbing microdosing tousled waistcoat.
								</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 sm:w-1/2 p-4">
						<div className="flex relative">
							<img
								alt="gallery"
								className="absolute inset-0 w-full h-full object-cover object-center"
								src="https://dummyimage.com/603x363"
							/>
							<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-red-900 opacity-0 hover:opacity-100">
								<h1 className="title-font text-lg font-medium text-white mb-3">
									The 400 Blows
								</h1>
								<p className="leading-relaxed">
									Photo booth fam kinfolk cold-pressed sriracha leggings
									jianbing microdosing tousled waistcoat.
								</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 sm:w-1/2 p-4">
						<div className="flex relative">
							<img
								alt="gallery"
								className="absolute inset-0 w-full h-full object-cover object-center"
								src="https://dummyimage.com/602x362"
							/>
							<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-red-900 opacity-0 hover:opacity-100">
								<h1 className="title-font text-lg font-medium text-white mb-3">
									Neptune
								</h1>
								<p className="leading-relaxed">
									Photo booth fam kinfolk cold-pressed sriracha leggings
									jianbing microdosing tousled waistcoat.
								</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 sm:w-1/2 p-4">
						<div className="flex relative">
							<img
								alt="gallery"
								className="absolute inset-0 w-full h-full object-cover object-center"
								src="https://dummyimage.com/605x365"
							/>
							<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-red-900 opacity-0 hover:opacity-100">
								<h1 className="title-font text-lg font-medium text-white mb-3">
									Holden Caulfield
								</h1>
								<p className="leading-relaxed">
									Photo booth fam kinfolk cold-pressed sriracha leggings
									jianbing microdosing tousled waistcoat.
								</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 sm:w-1/2 p-4">
						<div className="flex relative">
							<img
								alt="gallery"
								className="absolute inset-0 w-full h-full object-cover object-center"
								src="https://dummyimage.com/606x366"
							/>
							<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-red-900 opacity-0 hover:opacity-100">
								<h1 className="title-font text-lg font-medium text-white mb-3">
									Alper Kamu
								</h1>
								<p className="leading-relaxed">
									Photo booth fam kinfolk cold-pressed sriracha leggings
									jianbing microdosing tousled waistcoat.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
