/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Molecules/Header";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route index path="/Projects" element={<Projects />} />
			</Routes>
		</div>
	);
}

export default App;
