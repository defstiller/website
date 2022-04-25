import {useContext,useState, useRef} from "react";

import {createUser} from "../../logic/firebase/firebaseAuth.js";
import {AuthenticationContext} from "../../logic/hookLogic/context";
import Form from "./Form";

function Signup() {
	const email = useRef();
	const password = useRef();
	const {isAuth, setIsAuth} = useContext(AuthenticationContext)
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	/**
 * If the target is the email input, then set the login property of the data object to the target
 * value, otherwise set the password property of the data object to the target value.
 */
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
		createUser(data.email, data.password);
	}

	return (

		<Form props={{handleInputChange, handleSubmit, email, password}}/>
	);
	
}
export default Signup;