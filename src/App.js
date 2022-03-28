/** @format */

import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Molecules/Footer";
import Header from "./Components/Molecules/Header";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import Skills from "./Components/Pages/Skills";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
