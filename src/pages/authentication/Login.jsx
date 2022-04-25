import { useState, useRef, useEffect} from "react";
import {Navigate} from "react-router-dom";
import { getAuth } from "firebase/auth";

import {loginUser} from "../../logic/firebase/firebaseAuth.js";
import Form from "./Form";
function Login() {
	const user = getAuth()
	const email = useRef();
	const password = useRef();
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	useEffect(() => {
		if(user) {
			<Navigate to="/"/>
		}
	}, [])
	function handleInputChange(event) {
		const target = event.target;
		const targetValue = target.value;
		if(target === email.current) {
			setData({...data, email:targetValue });
		} else {
			setData({...data, password:targetValue });
		}
	}
	

	function handleSubmit(event) {
		event.preventDefault();
		loginUser(data.email, data.password);
	}
	return (
		
		<Form props={{handleInputChange, handleSubmit, email, password}}/>
	);
}

export default Login;