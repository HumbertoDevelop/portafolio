/** @format */

import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getMeInfo } from "../../redux/actionCreators";
import FormContact from "../Molecules/FormContact";

const Contact = ({ info }) => {
	const meInfo = useDispatch();
	useEffect(() => {
		meInfo(getMeInfo());
	}, [meInfo]);
	return (
		<section
			className="text-stone-800 body-font relative grid items-center"
			id="contactame">
			<div className="absolute inset-0 bg-white ">
				<iframe
					title="map"
					width="100%"
					height="100%"
					frameBorder="0"
					marginHeight="0"
					marginWidth="0"
					scrolling="no"
					src="https://maps.google.com/maps?q=El%20valle%20del%20espiritu%20santo&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
			</div>
			<div className="container px-5 py-24 mx-auto flex">
				<div className="lg:w-1/3 md:w-1/2 bg-stone-100 shadow-md rounded-lg p-8 flex flex-col smx2:flex-wrap md:ml-auto w-full mt-10 md:mt-0 relative z-10">
					<h2 className=" text-lg mb-1 font-medium title-font">
						Contact Information:
					</h2>
					{info && (
						<FormContact
							phone={info.address.phone}
							email={info.address.email}
							street={info.address.street}
						/>
					)}
					<a
						href="
					https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
						target="_blank"
						rel="noreferrer">
						<button className="text-white bg-stone-900 border-0 py-2 px-6 focus:outline-none hover:bg-stone-800 rounded text-lg">
							Send a email
						</button>
					</a>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	info: state.getReducer.info,
});

export default connect(mapStateToProps)(Contact);
