/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import picProfile from "../img/pic3.jpg";

const Home = () => {
	return (
		<section className=" bg-gray-900 body-font grid">
			<div className="container mx-auto flex smx2:flex-col lgx1:px-0 lgx1:justify-around px-5 gap-x-10 smx2:gap-x-0 md:flex-row items-center justify-center">
				<div className=" lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col md:items-start md:text-left mb-16 smx2:my-10  md:mb-0 items-center text-center">
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
					<div className="flex justify-center items-center">
						<NavLink to="/contact">
							<button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg">
								Contact me!
							</button>
						</NavLink>
						{/* <a href="./HUMBERTO_CV.pdf" download="CV_Humberto.pdf" className="di"> */}
							<button className="inline-flex text-white bg-red-600 border-0 ml-6 py-2 px-6 focus:outline-none hover:bg-red-800  rounded text-lg grayscale line-through">
								Download CV
							</button>
							<p className="text-white">Coming soon...</p>
						{/* </a> */}
					</div>
				</div>
				<div className="lg:max-w-sm lg:w-full lg:h-3/4 lgx1:w-1/4 w-6/12 flex justify-center smx2:my-10">
					<img
						className="object-cover object-center rounded "
						alt="hero"
						src={picProfile}
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
