/** @format */

import React from "react";

const Header = () => {
	return (
		<header className="text-stone-400 font-semibold bg-stone-900 body-font fixed smx2:pb-2 z-20 top-0 right-0 left-0">
			<div className="container mx-auto flex flex-wrap justify-center flex-col md:flex-row items-center">
				<a
					href="/"
					className="flex title-font font-medium items-center mb-4 md:mb-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="w-10 h-10 text-white p-2 bg-stone-700 rounded-full"
						viewBox="0 0 24 24">
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span className="ml-3 text-xl">Portfolio</span>
				</a>
				<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center gap-6 ">
					<a href="#inicio"> Home</a>
					<a href="#proyectos"> Projects</a>
					<a href="#aptitudes"> Skills</a>
					<a href="#contactame"> Contact</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
