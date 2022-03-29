/** @format */

import React from "react";

const Gallery = ({ id, content, title, url, src }) => {
	return (
		<div className="flex flex-wrap m-4">
			<div className="lg:w-1/3 sm:w-1/2 p-2 ">
				<div className="flex relative h-full">
					<img
						alt="gallery"
						className="absolute inset-0 w-full h-full object-cover object-center"
						src={src}
					/>
					<a href={url} target="_blank" rel="noreferrer">
						<div className=" py-12 relative z-10 w-full border-4 border-stone-500 px-2 bg-stone-900 opacity-0 hover:opacity-100 text-white">
							<h1 className="title-font text-lg font-medium  mb-3">{title}</h1>
							<p className="leading-relaxed">{content}</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
