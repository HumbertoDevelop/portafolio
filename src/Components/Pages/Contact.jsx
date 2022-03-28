/** @format */

import React from "react";

const Contact = () => {
	return (
		<section
			className="text-stone-800 body-font relative h-screen grid items-center"
			id="contactame">
			<div className="absolute inset-0 bg-white ">
				<iframe
					title="map"
					width="100%"
					height="100%"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
					scrolling="no"
					src="https://maps.google.com/maps?q=El%20valle%20del%20espiritu%20santo&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
			</div>
			<div className="container px-5 py-24 mx-auto flex">
				<div className="lg:w-1/3 md:w-1/2 bg-stone-100 shadow-md rounded-lg p-8 flex flex-col smx2:flex-wrap md:ml-auto w-full mt-10 md:mt-0 relative z-10">
					<h2 className=" text-lg mb-1 font-medium title-font">
						Información de contacto:
					</h2>
					<div className="relative mb-4">
						<h3>
							<b>
								{" "}
								<address> Celular: </address>
							</b>
						</h3>
						<h4>(+58) 412-093-9794</h4>
						<h3>
							<b>
								{" "}
								<address> Correo: </address>{" "}
							</b>
						</h3>
						<h4>humbertodev14@gmail.com</h4>
						<h3>
							<b>
								{" "}
								<address> Dirección: </address>{" "}
							</b>
						</h3>
						<h4>Venezuela | Porlamar | El Valle Del Espritu Santo</h4>
					</div>
					<a
						href="
					https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
						target="_blank"
						rel="noreferrer">
						<button className="text-white bg-stone-900 border-0 py-2 px-6 focus:outline-none hover:bg-stone-800 rounded text-lg">
							Escribeme al Correo
						</button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
