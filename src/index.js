import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import "./index.css";

import App from "./App";
import NavBar from "./components/mainComponents/navbar/NavBar";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route exact path="/" element={
					<>
						<App/> 
						<NavBar />
					</>
				} />
			</Routes>
		</Router>
	</React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
