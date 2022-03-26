/** @format */

import { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

render(
	<StrictMode>
		<BrowserRouter>
			<App className="general"/>
		</BrowserRouter>
		,
	</StrictMode>,
	document.getElementById("root")
);
