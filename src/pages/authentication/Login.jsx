import { useState, useRef, useEffect} from "react";
import {Navigate} from "react-router-dom";
import { getAuth } from "firebase/auth";

import {loginUser} from "../../logic/firebase/firebaseAuth.js";
import Form from "./Form";
function Login(props) {
	const {isLogin, setIsLogin, data, setData, handleInputChange} = props.data;
	const user = getAuth()
	
	function handleSubmit(event) {
		event.preventDefault();
		loginUser(data.email, data.password);
	}
	return (
		
		<Form data={{handleInputChange, handleSubmit}} page={{setIsLogin, isLogin}} />
	);
}

export default Login;