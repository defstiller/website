import {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";

function Form(props) {
	const {handleInputChange, handleSubmit, email, password} = props.data;
	const {setIsLogin, isLogin} = props.page;
	const [authPage, setAuthPage] = useState(props.page);
	const navigate = useNavigate();
	const location = useLocation();
	let changePageButtonText = "";
	let signUpOrLogin = "";

	/* Checking if the user is on the register page or the login page. If the user is on the register
	page, the button text will be "Already registered?" and the submit button will be
	"register". If the user is on the login page, the button text will be "Register" and the
	submit button will be "login". */
	if(isLogin) {
		changePageButtonText = "Create new account";
		signUpOrLogin = "login";
	} else {
		changePageButtonText = "Already registered?";
		signUpOrLogin = "register";
	}

	
	return (
		<div>
			<form autoComplete="true" onChange={(event => handleInputChange(event))} onSubmit={event => handleSubmit(event)}>

				<input autoComplete="current-login" placeholder="email" ref={email} name="email"/>

				<input autoComplete="current-password" placeholder="password" ref={password} type="password" name="password"/>

				<button type="submit">{signUpOrLogin}</button>

			</form>

			<button onClick={() => { /* A button that navigates to the login page if the user is on the register page and vice versa. */
				setIsLogin(!isLogin); }}
			>
				{changePageButtonText}
			</button>
		</div>
	);
}
export default Form;