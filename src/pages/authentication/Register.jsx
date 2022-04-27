import {useContext,useState, useRef} from "react";

import {createUser} from "../../logic/firebase/firebaseAuth.js";
import {AuthenticationContext} from "../../logic/hookLogic/context";
import Form from "./Form";

function Signup(props) {
	const {isLogin, setIsLogin, data, setData, handleInputChange} = props.data;
	const {isAuth, setIsAuth} = useContext(AuthenticationContext)
	
	function handleSubmit(event) {
		event.preventDefault();
		createUser(data.email, data.password);
	}

	return (

		<Form data={{handleInputChange, handleSubmit}} page={{setIsLogin, isLogin}} />
	);
	
}
export default Signup;