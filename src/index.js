import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { getAuth } from "firebase/auth";

import reportWebVitals from "./reportWebVitals";
import "./index.css";

import NavBar from "./components/mainComponents/navbar/NavBar";
import Authentication from "./pages/authentication/Authentication";
import {AuthenticationContext, AuthenticationContextProvider} from "./logic/hookLogic/context";
import Home from "./pages/Home"
import Login from "./pages/authentication/Login"
import Register from "./pages/authentication/Register"
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);


const user = getAuth()

root.render(
	<React.StrictMode>
		<Router>
			<AuthenticationContextProvider >
				<Routes>
				
					<Route exact path="/" element={
						<>
							<NavBar />
							<Home /> 
						</>
					
					} />
					<Route exact path="/login" element={
						<Login />	
					} />
					<Route exact path="/register" element={
						<Register />	
					} />
				</Routes>
			</AuthenticationContextProvider>
		</Router>
	</React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
