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
						I'm a web developer who's beginning to built it's own way into the
						professional world. My passion is to code. it's a pleasure for me to
						work in front of my computer building professional websites,
						analyzing responsive web design issues or fixing bugs. I'll help you
						to build your own web site with my experience and my knowledge. I'm
						always looking for new goals
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
