/** @format */

import React, { useEffect } from "react";
import picProfile from "../img/pic3.jpg";
import { connect, useDispatch } from "react-redux";
import { getMeInfo } from "../../redux/actionCreators.js";
const Home = ({ info }) => {
	const meDispatch = useDispatch();
	useEffect(() => {
		meDispatch(getMeInfo());
	}, [meDispatch]);
	return (
		<section
			className=" bg-stone-900 text-white body-font grid smx2:pt-58  lgx1:mt-10 "
			id="inicio">
			<div className="container mx-auto flex smx2:flex-col lgx1:px-0 smx2:py-28 lgx1:justify-around px-5 gap-x-10 md:flex-row items-center justify-center ">
				<div className=" lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col md:items-start md:text-left mb-16 smx2:my-10  md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold ">
						{info?.name}
					</h1>
					<p className="mb-8 leading-relaxed font-semibold text-stone-200	smx2:px-2">
						{info?.description}
					</p>
					<div className="flex justify-center items-center">
						<a href="#contactame">
							<button className="inline-flex text-white bg-stone-500 border-0 py-2 px-6 focus:outline-none hover:bg-stone-700 rounded text-lg">
								Contact me!
							</button>
						</a>
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

const mapStateToProps = (state) => ({
	info: state.getReducer.info,
});

export default connect(mapStateToProps, {})(Home);
