/** @format */

import { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App className="general" />
			</BrowserRouter>
		</Provider>
		,
	</StrictMode>,
	document.getElementById("root")
);
