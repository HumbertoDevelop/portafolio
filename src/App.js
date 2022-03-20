/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Molecules/Footer";
import Header from "./Components/Molecules/Header";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import Skills from "./Components/Pages/Skills";

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route index path="/" element={<Home />} />
				<Route index path="/projects" element={<Projects />} />
				<Route index path="/skills" element={<Skills />} />
				<Route index path="/contact-me" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
