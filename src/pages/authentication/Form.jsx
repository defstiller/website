import {useNavigate, useLocation} from "react-router-dom";

function Form(props) {
	const {handleInputChange, handleSubmit, email, password} = props.props;
	const navigate = useNavigate();
	const location = useLocation();
	let changePageButtonText = "";
	let signUpOrLogin = "";

	/* Checking if the user is on the register page or the login page. If the user is on the register
	page, the button text will be "Already registered?" and the submit button will be
	"register". If the user is on the login page, the button text will be "Register" and the
	submit button will be "login". */
	if(location.pathname === "/register") {
		changePageButtonText = "Already registered?";
		signUpOrLogin = "register";
	} else {
		changePageButtonText = "Create new account";
		signUpOrLogin = "login";
	}
	
	return (
		<div>
			<form onChange={(event => handleInputChange(event))} onSubmit={event => handleSubmit(event)}>

				<input placeholder="email" ref={email} />

				<input placeholder="password" ref={password} type="password"/>

				<button type="submit">{signUpOrLogin}</button>

			</form>

			<button onClick={() => { /* A button that navigates to the login page if the user is on the register page and vice versa. */
				if(location.pathname === "/register") {
					navigate("/login");
				} else {
					navigate("/register");
				}}}>
				{changePageButtonText}
			</button>
		</div>
	);
}
export default Form;