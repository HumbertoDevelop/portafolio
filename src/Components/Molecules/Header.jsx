/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="text-white bg-red-900 body-font">
			<div className="container mx-auto flex flex-wrap py-3 pl-4 flex-col md:flex-row items-center">
				<a
					href="/"
					className="flex title-font font-medium items-center  mb-4 md:mb-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="w-10 h-10 text-white p-2 bg-red-700 rounded-full"
						viewBox="0 0 24 24">
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span className="ml-3 text-xl">Portfolio</span>
				</a>
				<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center gap-6 ">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/proyectos">Projects</NavLink>
					<NavLink to="/aptitudes">Skills</NavLink>
					<NavLink to="/contactame">Contact me</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Header;
