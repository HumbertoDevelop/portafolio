/** @format */

import React from "react";

const Header = () => {
	return (
		<header className={`text-stone-200  font-semibold body-font fixed smx2:pb-2 z-20 top-0 right-0 left-0 bg-gradient-to-r from-sky-500 to-indigo-700`}>
			<div className="container mx-auto flex flex-wrap justify-center flex-col md:flex-row items-center">
				<a
					href="/"
					className="flex title-font font-medium items-center mb-4 md:mb-0">
					<b>
						{" "}
						<span className="ml-3 text-xl text-xl2 before:content-['<'] after:content-['/>']" > Programmer </span>{" "}
					</b>
				</a>
				<nav className=" space-x-4 md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center">
					<a
						href="#inicio"
						className="font-medium px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900">
						Home
					</a>
					<a
						href="#proyectos"
						className="font-medium px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900">
						Projects
					</a>
					<a
						href="#aptitudes"
						className="font-medium px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900">
						Skills
					</a>
					<a
						href="#contactame"
						className="font-medium px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900">
						Contact
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
